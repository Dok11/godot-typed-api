# dok-ts2gd — TypeScript types for Godot

Strictly modular TypeScript types for the Godot API, with no ambient globals. The package normalizes API names to camelCase, carries over JSDoc from the official docs, preserves branded numeric types `int` and `float`, and ships a stable API map artifact for tools. The active version is exposed via `gen/current/` and a single entry point `index.d.ts`.

## Features

- Modular types: no `declare global`, import everything explicitly.
- Branded numbers: `int` and `float` never collapse to `number`.
- Name normalization: `snake_case → camelCase` (engine “magic” callbacks are kept verbatim).
- Signals as properties: e.g. `pressed: Signal<[]>`.
- Godot collections: `GodotArray<T>` and `GodotDictionary<V>` as brands over `T[]` and `Record<string, V>`.
- Embedded JSDoc from Godot Docs (BBCode/links converted to Markdown where possible).
- Stable API map artifact: `gen/current/api-map.json` (camel↔snake mapping) for tools.

## Install

```bash
npm install dok-ts2gd
```

## Quick Start

```ts
import type { Node, Vector3, int, float, Signal } from "dok-ts2gd";

declare const node: Node;
declare const onPressed: Signal<[]>;

const i: int = 42 as unknown as int;
const f: float = 3.14 as unknown as float;

// Methods/properties are camelCase
// Godot “magic” callbacks keep original names (e.g. _ready)
```

- Package entry point: `index.d.ts` → `./gen/current/index.d.ts`.
- API map for tools: `gen/current/api-map.json` (stable path and shape).

## Generation Invariants

- Names
  - Default: `snake_case → camelCase` for methods/properties/signals.
  - Exceptions (names and public visibility preserved):
    `_ready`, `_process`, `_physics_process`, `_input`, `_init`, `_enter_tree`, `_exit_tree`, `_get_configuration_warnings`, `_shortcut_input`, `_unhandled_input`, `_unhandled_key_input`.
- Numbers
  - `int` and `float` are branded types; never replaced with `number`.
- Collections
  - Godot `Array<T>` → `GodotArray<T>`, Godot `Dictionary` → `GodotDictionary<V>`.
- Privacy
  - Truly private members from docs: leading `_` is stripped and marked `private`.
  - Public items with leading `_`: allowed only via explicit whitelist.
- JSDoc
  - Copy descriptions/params/returns/deprecations; convert BBCode/links to Markdown.
- Determinism
  - Stable sorting, 2‑space indent, LF newlines, no timestamps.

## Repository Layout

```
/scripts/           # generator and utilities (ESM, TS)
/src-template/      # base types: int/float, Signal, collections
/gen/<tag>/         # auto‑generated for a specific Godot tag
/gen/current/       # active version (copy of one gen/<tag>/)
/index.d.ts         # single types entry point (points to gen/current/index.d.ts)
/tests/             # unit tests for the generator/utils
```

## API Map for Tools

- File: `gen/current/api-map.json`.
- Purpose: bidirectional camelCase↔snake_case mapping and related metadata for ts→gd tooling.
- Path and JSON shape are stable.

## Local Generation

Input: `GODOT_TAG` environment variable (e.g., `4.4.3-stable`).

```bash
npm ci
npm run build            # compile TS generator and utils
GODOT_TAG=4.4.3-stable node dist/scripts/fetch-godot.js
GODOT_TAG=4.4.3-stable node dist/scripts/generate.js
node dist/scripts/build.js   # gen/current -> gen/<tag>
npm test
```

PowerShell:

```powershell
npm ci
npm run build
$env:GODOT_TAG = "4.4.3-stable"; node dist/scripts/fetch-godot.js
$env:GODOT_TAG = "4.4.3-stable"; node dist/scripts/generate.js
node dist/scripts/build.js
npm test
```

Pipeline overview:
1) fetch: shallow clone/download `godotengine/godot` at the tag (no submodules)
2) parse → normalize → emit: read `doc/classes/*.xml`, apply naming/type/privacy/JSDoc rules, emit per‑class `d.ts` + `index.d.ts` and `api-map.json`
3) current switch: update `gen/current/` to a copy of the chosen version

## CI and Releases

- PR CI:
  - `npm ci`
  - `npm run build`
  - `npm test`
  - determinism check: run generation twice → diff must be empty
- Release CI (input `GODOT_TAG`):
  1. fetch: Godot tag
  2. generate: fill `gen/<tag>/...`
  3. set current: replace `gen/current/`
  4. validate: build/tests/optional `tsc --noEmit`
  5. publish: commit `gen/<tag>` and `gen/current`; package version = `<GODOT_TAG>` (or `<GODOT_TAG>-N` if generator changed); `npm publish --access public`

## Public Package Contract

- Modular export only (no globals):

  ```json
  { "exports": { ".": { "types": "./index.d.ts" } }, "types": "./index.d.ts" }
  ```

- Consumer import:

  ```ts
  import type { Node, Vector3, int, float, Signal } from "dok-ts2gd";
  ```

## Contributing

- Use Conventional Commits.
- Accompany generator changes with tests in `tests/**`.
- Upstream types update in a separate commit: `chore(gen): update from Godot X.Y`.
- Ensure stable sorting and no output drift.
- No raw BBCode/HTML left in JSDoc (converted during emit).

## Don’t Forget

- Package is strictly modular: no `declare global`.
- Single entry point: `index.d.ts` → `gen/current/index.d.ts`.
- `api-map.json` is a stable interface for tools.
- `int`/`float` brands are mandatory — do not degrade to `number`.
- Engine magic callbacks are not modified in name/public visibility.

## Attribution

- Godot documentation is owned by the Godot Docs authors and licensed under CC‑BY 3.0. Generated files include attribution and a source link in the version header.

## Security and Configuration

- Do not store tokens; in CI use `NPM_TOKEN` and, if needed, `GH_TOKEN` from secrets.
- Tooling versions are pinned in `package.json` and lockfile; use `npm ci` in CI.
- No git submodules — safer for external PRs.
