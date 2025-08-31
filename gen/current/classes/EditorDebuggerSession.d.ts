import type { Control, GodotArray, GodotDictionary, RefCounted, Signal, float, int } from "../index.d.ts";
/**
 * A class to interact with the editor debugger.
 * 
 * This class cannot be directly instantiated and must be retrieved via a `EditorDebuggerPlugin`.
 * You can add tabs to the session UI via `add_session_tab`, send messages via `send_message`, and toggle `EngineProfiler`s via `toggle_profiler`.
 */
export class EditorDebuggerSession extends RefCounted {
/**
 * Adds the given `control` to the debug session UI in the debugger bottom panel. The `control`'s node name will be used as the tab title.
 * @param control Control
 */
  addSessionTab(control: Control): void;
/**
 * Returns `true` if the debug session is currently attached to a remote instance.
 * @returns boolean
 */
  isActive(): boolean;
/**
 * Returns `true` if the attached remote instance is currently in the debug loop.
 * @returns boolean
 */
  isBreaked(): boolean;
/**
 * Returns `true` if the attached remote instance can be debugged.
 * @returns boolean
 */
  isDebuggable(): boolean;
/**
 * Removes the given `control` from the debug session UI in the debugger bottom panel.
 * @param control Control
 */
  removeSessionTab(control: Control): void;
/**
 * Sends the given `message` to the attached remote instance, optionally passing additionally `data`. See `EngineDebugger` for how to retrieve those messages.
 * @param message string
 * @param data GodotArray<any> (optional, default: [])
 */
  sendMessage(message: string, data?: GodotArray<any>): void;
/**
 * Enables or disables a specific breakpoint based on `enabled`, updating the Editor Breakpoint Panel accordingly.
 * @param path string
 * @param line int
 * @param enabled boolean
 */
  setBreakpoint(path: string, line: int, enabled: boolean): void;
/**
 * Toggle the given `profiler` on the attached remote instance, optionally passing additionally `data`. See `EngineProfiler` for more details.
 * @param profiler string
 * @param enable boolean
 * @param data GodotArray<any> (optional, default: [])
 */
  toggleProfiler(profiler: string, enable: boolean, data?: GodotArray<any>): void;
/**
 * Emitted when the attached remote instance enters a break state. If `can_debug` is `true`, the remote instance will enter the debug loop.
 */
  breaked: Signal<[canDebug: boolean]>;
/**
 * Emitted when the attached remote instance exits a break state.
 */
  continued: Signal<[]>;
/**
 * Emitted when a remote instance is attached to this session (i.e. the session becomes active).
 */
  started: Signal<[]>;
/**
 * Emitted when a remote instance is detached from this session (i.e. the session becomes inactive).
 */
  stopped: Signal<[]>;
}
