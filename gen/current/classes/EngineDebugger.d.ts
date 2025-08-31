import type { Callable, EngineProfiler, GodotArray, GodotDictionary, Object, ScriptLanguage, StringName, float, int } from "../index.d.ts";
/**
 * Exposes the internal debugger.
 * 
 * `EngineDebugger` handles the communication between the editor and the running game. It is active in the running game. Messages can be sent/received through it. It also manages the profilers.
 */
export class EngineDebugger extends Object {
/**
 * Clears all breakpoints.
 */
  clearBreakpoints(): void;
/**
 * Starts a debug break in script execution, optionally specifying whether the program can continue based on `can_continue` and whether the break was due to a breakpoint.
 * @param canContinue boolean (optional, default: true)
 * @param isErrorBreakpoint boolean (optional, default: false)
 */
  debug(canContinue?: boolean, isErrorBreakpoint?: boolean): void;
/**
 * Returns the current debug depth.
 * @returns int
 */
  getDepth(): int;
/**
 * Returns the number of lines that remain.
 * @returns int
 */
  getLinesLeft(): int;
/**
 * Returns `true` if a capture with the given name is present otherwise `false`.
 * @param name StringName
 * @returns boolean
 */
  hasCapture(name: StringName): boolean;
/**
 * Returns `true` if a profiler with the given name is present otherwise `false`.
 * @param name StringName
 * @returns boolean
 */
  hasProfiler(name: StringName): boolean;
/**
 * Inserts a new breakpoint with the given `source` and `line`.
 * @param line int
 * @param source StringName
 */
  insertBreakpoint(line: int, source: StringName): void;
/**
 * Returns `true` if the debugger is active otherwise `false`.
 * @returns boolean
 */
  isActive(): boolean;
/**
 * Returns `true` if the given `source` and `line` represent an existing breakpoint.
 * @param line int
 * @param source StringName
 * @returns boolean
 */
  isBreakpoint(line: int, source: StringName): boolean;
/**
 * Returns `true` if a profiler with the given name is present and active otherwise `false`.
 * @param name StringName
 * @returns boolean
 */
  isProfiling(name: StringName): boolean;
/**
 * Returns `true` if the debugger is skipping breakpoints otherwise `false`.
 * @returns boolean
 */
  isSkippingBreakpoints(): boolean;
/**
 * Forces a processing loop of debugger events. The purpose of this method is just processing events every now and then when the script might get too busy, so that bugs like infinite loops can be caught.
 */
  linePoll(): void;
/**
 * Calls the `add` callable of the profiler with given `name` and `data`.
 * @param name StringName
 * @param data GodotArray<any>
 */
  profilerAddFrameData(name: StringName, data: GodotArray<any>): void;
/**
 * Calls the `toggle` callable of the profiler with given `name` and `arguments`. Enables/Disables the same profiler depending on `enable` argument.
 * @param name StringName
 * @param enable boolean
 * @param arguments GodotArray<any> (optional, default: [])
 */
  profilerEnable(name: StringName, enable: boolean, arguments?: GodotArray<any>): void;
/**
 * Registers a message capture with given `name`. If `name` is "my_message" then messages starting with "my_message:" will be called with the given callable.
 * The callable must accept a message string and a data array as argument. The callable should return `true` if the message is recognized.
 * 
 * **Note:** The callable will receive the message with the prefix stripped, unlike `EditorDebuggerPlugin._capture`. See the `EditorDebuggerPlugin` description for an example.
 * @param name StringName
 * @param callable Callable
 */
  registerMessageCapture(name: StringName, callable: Callable): void;
/**
 * Registers a profiler with the given `name`. See `EngineProfiler` for more information.
 * @param name StringName
 * @param profiler EngineProfiler
 */
  registerProfiler(name: StringName, profiler: EngineProfiler): void;
/**
 * Removes a breakpoint with the given `source` and `line`.
 * @param line int
 * @param source StringName
 */
  removeBreakpoint(line: int, source: StringName): void;
/**
 * Starts a debug break in script execution, optionally specifying whether the program can continue based on `can_continue` and whether the break was due to a breakpoint.
 * @param language ScriptLanguage
 * @param canContinue boolean (optional, default: true)
 * @param isErrorBreakpoint boolean (optional, default: false)
 */
  scriptDebug(language: ScriptLanguage, canContinue?: boolean, isErrorBreakpoint?: boolean): void;
/**
 * Sends a message with given `message` and `data` array.
 * @param message string
 * @param data GodotArray<any>
 */
  sendMessage(message: string, data: GodotArray<any>): void;
/**
 * Sets the current debugging depth.
 * @param depth int
 */
  setDepth(depth: int): void;
/**
 * Sets the current debugging lines that remain.
 * @param lines int
 */
  setLinesLeft(lines: int): void;
/**
 * Unregisters the message capture with given `name`.
 * @param name StringName
 */
  unregisterMessageCapture(name: StringName): void;
/**
 * Unregisters a profiler with given `name`.
 * @param name StringName
 */
  unregisterProfiler(name: StringName): void;
}
