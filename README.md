# godot-typed-api — TypeScript types for Godot

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
npm install godot-typed-api
```

## Quick Start

```ts
import type { Node, Vector3, int, float, Signal } from "godot-typed-api";

declare const node: Node;
declare const onPressed: Signal<[]>;

const i: int = 42 as unknown as int;
const f: float = 3.14 as unknown as float;

// Methods/properties are camelCase
// Godot “magic” callbacks keep original names (e.g. _ready)
```

- Package entry point: `index.d.ts` → `./gen/current/index.d.ts`.
- API map for tools: `gen/current/api-map.json` (stable path and shape).

## Public Package Contract

- Exports/types:

  ```json
  { "exports": { ".": { "types": "./index.d.ts" } }, "types": "./index.d.ts" }
  ```

- Consumer import:

  ```ts
  import type { Node, Vector3, int, float, Signal } from "godot-typed-api";
  ```

## Generation Invariants (summary)

- Names: `snake_case → camelCase` by default; keep engine callbacks verbatim: `_ready`, `_process`, `_physics_process`, `_input`, `_init`, `_enter_tree`, `_exit_tree`, `_get_configuration_warnings`, `_shortcut_input`, `_unhandled_input`, `_unhandled_key_input`.
- Numbers: `int`/`float` are brands; never degrade to `number`.
- Collections: Godot `Array<T>` → `GodotArray<T>`, `Dictionary` → `GodotDictionary<V>`.
- Privacy: truly private doc members lose leading `_` and become `private`.
- JSDoc: descriptions/params/returns/deprecations carried over; BBCode/links → Markdown.
- Determinism: stable sorting, 2-space indent, LF, no timestamps.

## Repository Layout

```
/scripts/           # generator and utilities (ESM, TS)
/src-template/      # base types: int/float, Signal, collections
/gen/<tag>/         # auto-generated for a specific Godot tag
/gen/current/       # active version (copy of one gen/<tag>/)
/index.d.ts         # single entry point (re-exports gen/current/index.d.ts)
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

## CI and Releases

- PR CI:
  - `npm ci`
  - `npm run build`
  - `npm test`
  - Determinism check: run generation twice → diff must be empty
- Release CI (input `GODOT_TAG`): fetch → generate → set current → validate → publish.

## Attribution

- Godot documentation is owned by the Godot Docs authors and licensed under CC-BY 3.0. Generated files include attribution and a source link in the version header.

## Security and Configuration

- Do not store tokens; in CI use `NPM_TOKEN` and, if needed, `GH_TOKEN` from secrets.
- Tooling versions are pinned in `package.json` and lockfile; use `npm ci` in CI.
- No git submodules — safer for external PRs.
