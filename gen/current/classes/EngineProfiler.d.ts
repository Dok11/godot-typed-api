import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Base class for creating custom profilers.
 * 
 * This class can be used to implement custom profilers that are able to interact with the engine and editor debugger.
 * See `EngineDebugger` and `EditorDebuggerPlugin` for more information.
 */
export class EngineProfiler extends RefCounted {
/**
 * Called when data is added to profiler using `EngineDebugger.profiler_add_frame_data`.
 * @param data GodotArray<any>
 */
  private addFrame(data: GodotArray<any>): void;
/**
 * Called once every engine iteration when the profiler is active with information about the current frame. All time values are in seconds. Lower values represent faster processing times and are therefore considered better.
 * @param frameTime float
 * @param processTime float
 * @param physicsTime float
 * @param physicsFrameTime float
 */
  private tick(frameTime: float, processTime: float, physicsTime: float, physicsFrameTime: float): void;
/**
 * Called when the profiler is enabled/disabled, along with a set of `options`.
 * @param enable boolean
 * @param options GodotArray<any>
 */
  private toggle(enable: boolean, options: GodotArray<any>): void;
}
