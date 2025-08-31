# AGENTS.md — guidelines for humans and CI bots of the `godot-typed-api` repository

This file is a concise operational guide for humans and CI agents. It documents package invariants, the generation pipeline, and PR/release checklists.

---

## 1) Repository Purpose

- Provide modular TypeScript types for the Godot API (no ambient globals) → no conflicts with the DOM.
- Export branded numeric types `int` and `float` (do not collapse to `number`).
- Normalize API names to camelCase (methods/properties/signals) while keeping engine “magic” callbacks exactly as-is.
- Treat leading-underscore members that are truly private in docs as private in TS and drop the leading `_` in their identifiers.
- Embed JSDoc from the original Godot documentation.
- Expose a “current version switch” via a single folder: `gen/current/` and the root `index.d.ts`.

---

## 2) Layout

```
/scripts/           # generator and utilities (ESM, TS)
/src-template/      # hand-written base types: int/float, Signal, collections
/gen/<tag>/         # auto-generated for a specific Godot tag (index.d.ts + class tree)
/gen/current/       # copy of the active version
/index.d.ts         # single types entry point → ./gen/current/index.d.ts
/tests/             # unit tests for the generator/utils
```

---

## 3) Public Package Contract

- Modular export only (no globals):

  ```ts
  // package.json
  { "exports": { ".": { "types": "./index.d.ts" } }, "types": "./index.d.ts" }
  ```
- Consumer import:

  ```ts
  import type { Node, Vector3, int, float, Signal } from "godot-typed-api";
  ```
- Additional artifact for tools (e.g., ts→gd compiler): `gen/current/api-map.json` (camel↔snake mapping). Path and shape are stable.

---

## 4) Generation Invariants

1. Names

   - Default: `snake_case → camelCase`.
   - Exceptions (keep name and public visibility):
     `_ready`, `_process`, `_physics_process`, `_input`, `_init`, `_enter_tree`, `_exit_tree`, `_get_configuration_warnings`, `_shortcut_input`, `_unhandled_input`, `_unhandled_key_input`.
   - Signals in TS are properties in camelCase: `pressed: Signal<[]>`.

2. Numbers

   - `int` stays `int` (brand), `float` stays `float` (brand). Do not replace with `number`.
   - Declared in `src-template/core.d.ts`:

     ```ts
     export type int = number & { readonly __gd_int: unique symbol };
     export type float = number & { readonly __gd_float: unique symbol };
     export const asInt: (n: number) => int;
     export const asFloat: (n: number) => float;
     ```

3. Collections

   - Godot `Array<T>` → `GodotArray<T>` (brand over `T[]`).
   - Godot `Dictionary` → `GodotDictionary<V>` (brand over `Record<string, V>`).

4. Privacy

   - Truly private members from docs: strip the leading `_` and mark as `private`.
   - Public API items with a leading `_` (if any) must be whitelisted explicitly.

5. JSDoc

   - Carry over description/params/returns/deprecations; convert BBCode/links to Markdown where possible.
   - Version header includes Godot Docs attribution (CC‑BY 3.0) and a source link.

6. Determinism

   - Stable sorting of output `d.ts`, consistent indentation (2 spaces), LF newlines, no timestamps.

---

## 5) Tag Update Pipeline (release CI)

Input: `GODOT_TAG` (e.g., `4.4.3-stable`).

Steps:

1. Fetch: shallow clone `godotengine/godot` at the tag (or download tarball). No submodules.
2. Generate: parse `doc/classes/*.xml` (current upstream format) → emit `gen/<tag>/…`:
   - `gen/<tag>/index.d.ts` (aggregator + imports from `/src-template`),
   - `gen/<tag>/**/<Class>.d.ts`,
   - `gen/<tag>/api-map.json`.
3. Set current: replace `gen/current/` with a copy of `gen/<tag>/`.
4. Validate:
   - `npm run build` (compile generator to `dist/`),
   - `npm test` (unit)
   - optional: `tsc --noEmit` against `gen/current/index.d.ts`.
5. Publish:
   - Commit changes in `gen/<tag>` and `gen/current`.
   - Package version = `<GODOT_TAG>` (or `<GODOT_TAG>-N` if generator changed).
   - `npm publish --access public`.

---

## 6) PR Check Pipeline (PR CI)

- `npm ci`
- `npm run build`
- `npm test`
- Determinism check: run generation twice → diff must be empty.

Note: partial/subset generation is not currently implemented; tests focus on utils and type mapping.

---

## 7) Author Checklist

- [ ] Conventional Commits in titles.
- [ ] Generator changes include tests (`tests/**`).
- [ ] Upstream types update in a separate commit: `chore(gen): update from Godot X.Y`.
- [ ] No unsorted/unstable output sections.
- [ ] JSDoc contains no raw BBCode/HTML (converted during emit).

---

## 8) Local Commands

```bash
npm ci
npm run build            # compile TS generator and utils
GODOT_TAG=4.4.3-stable node dist/scripts/fetch-godot.js
GODOT_TAG=4.4.3-stable node dist/scripts/generate.js
node dist/scripts/build.js   # gen/current -> gen/<tag>
npm test
```

Windows PowerShell:

```powershell
npm ci
npm run build
$env:GODOT_TAG = "4.4.3-stable"; node dist/scripts/fetch-godot.js
$env:GODOT_TAG = "4.4.3-stable"; node dist/scripts/generate.js
node dist/scripts/build.js
npm test
```

---

## 9) Generator Architecture (brief)

- fetch: shallow clone/download by tag into `build/godot`.
- parse: read XML docs and build an internal model.
- normalize: apply naming, type, privacy, and JSDoc rules.
- emit: write one `d.ts` per class + `index.d.ts`; write `api-map.json`.
- current switch: update `gen/current/` (copy, not symlink — cross‑platform).

---

## 10) Breakages and Workarounds

- Public API items with leading underscores: add to `patches/underscore-public-whitelist.json` (array of strings).
- Name collisions after camelCase: extend normalization rules and add a test.
- Temporary GitHub/network issues: fall back to tarball download instead of `git clone`.
- Other upstream doc mismatches: open an issue and consider targeted generator fixes alongside tests.

---

## 11) Security and Configuration

- Do not store tokens; in CI use `NPM_TOKEN` and, if needed, `GH_TOKEN` from secrets.
- Tooling versions are pinned in `package.json` and the lockfile; use `npm ci` in CI.
- No git submodules — safer for external PRs.

---

## 12) Don’t Forget

- Package is strictly modular: no `declare global`.
- `index.d.ts` is the single entry point (points to `gen/current/index.d.ts`).
- `api-map.json` is a stable interface for tools (e.g., ts→gd compiler).
- Brands `int`/`float` are mandatory — do not degrade to `number`.
- Engine magic callbacks are not modified (names and public visibility preserved).
