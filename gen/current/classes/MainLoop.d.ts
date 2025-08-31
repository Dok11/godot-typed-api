import type { GodotArray, GodotDictionary, Object, Signal, float, int } from "../index.d.ts";
/**
 * Abstract base class for the game's main loop.
 * 
 * `MainLoop` is the abstract base class for a Godot project's game loop. It is inherited by `SceneTree`, which is the default game loop implementation used in Godot projects, though it is also possible to write and use one's own `MainLoop` subclass instead of the scene tree.
 * Upon the application start, a `MainLoop` implementation must be provided to the OS; otherwise, the application will exit. This happens automatically (and a `SceneTree` is created) unless a `MainLoop` `Script` is provided from the command line (with e.g. `godot -s my_loop.gd`) or the `ProjectSettings.application/run/main_loop_type` project setting is overwritten.
 * Here is an example script implementing a simple `MainLoop`:
 * 
 * 		```gdscript
 * 
 * 		class_name CustomMainLoop
 * 		extends MainLoop
 * 
 * 		var time_elapsed = 0
 * 
 * 		func _initialize():
 * 		    print("Initialized:")
 * 		    print("  Starting time: %s" % str(time_elapsed))
 * 
 * 		func _process(delta):
 * 		    time_elapsed += delta
 * 		    # Return true to end the main loop.
 * 		    return Input.get_mouse_button_mask() != 0 || Input.is_key_pressed(KEY_ESCAPE)
 * 
 * 		func _finalize():
 * 		    print("Finalized:")
 * 		    print("  End time: %s" % str(time_elapsed))
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		using Godot;
 * 
 * 		`GlobalClass`
 * 		public partial class CustomMainLoop : MainLoop
 * 		{
 * 		    private double _timeElapsed = 0;
 * 
 * 		    public override void _Initialize()
 * 		    {
 * 		        GD.Print("Initialized:");
 * 		        GD.Print($"  Starting Time: {_timeElapsed}");
 * 		    }
 * 
 * 		    public override bool _Process(double delta)
 * 		    {
 * 		        _timeElapsed += delta;
 * 		        // Return true to end the main loop.
 * 		        return Input.GetMouseButtonMask() != 0 || Input.IsKeyPressed(Key.Escape);
 * 		    }
 * 
 * 		    private void _Finalize()
 * 		    {
 * 		        GD.Print("Finalized:");
 * 		        GD.Print($"  End Time: {_timeElapsed}");
 * 		    }
 * 		}
 * 		
 * 
 * ```
 * 
 */
export class MainLoop extends Object {
/**
 * Called before the program exits.
 */
  private finalize(): void;
/**
 * Called once during initialization.
 */
  private initialize(): void;
/**
 * Called each physics frame with the time since the last physics frame as argument (`delta`, in seconds). Equivalent to `Node._physics_process`.
 * If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next frame.
 * 
 * **Note:** `delta` will be larger than expected if running at a framerate lower than `Engine.physics_ticks_per_second` / `Engine.max_physics_steps_per_frame` FPS. This is done to avoid "spiral of death" scenarios where performance would plummet due to an ever-increasing number of physics steps per frame. This behavior affects both `_process` and `_physics_process`. As a result, avoid using `delta` for time measurements in real-world seconds. Use the `Time` singleton's methods for this purpose instead, such as `Time.get_ticks_usec`.
 * @param delta float
 * @returns boolean
 */
  _physics_process(delta: float): boolean;
/**
 * Called each process (idle) frame with the time since the last process frame as argument (in seconds). Equivalent to `Node._process`.
 * If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next frame.
 * 
 * **Note:** `delta` will be larger than expected if running at a framerate lower than `Engine.physics_ticks_per_second` / `Engine.max_physics_steps_per_frame` FPS. This is done to avoid "spiral of death" scenarios where performance would plummet due to an ever-increasing number of physics steps per frame. This behavior affects both `_process` and `_physics_process`. As a result, avoid using `delta` for time measurements in real-world seconds. Use the `Time` singleton's methods for this purpose instead, such as `Time.get_ticks_usec`.
 * @param delta float
 * @returns boolean
 */
  _process(delta: float): boolean;
/**
 * Emitted when a user responds to a permission request.
 */
  onRequestPermissionsResult: Signal<[permission: string, granted: boolean]>;
/**
 * Notification received from the OS when the application is exceeding its allocated memory.
 * Specific to the iOS platform.
 */
  static readonly NOTIFICATION_OS_MEMORY_WARNING: int;
/**
 * Notification received when translations may have changed. Can be triggered by the user changing the locale. Can be used to respond to language changes, for example to change the UI strings on the fly. Useful when working with the built-in translation support, like `Object.tr`.
 */
  static readonly NOTIFICATION_TRANSLATION_CHANGED: int;
/**
 * Notification received from the OS when a request for "About" information is sent.
 * Specific to the macOS platform.
 */
  static readonly NOTIFICATION_WM_ABOUT: int;
/**
 * Notification received from Godot's crash handler when the engine is about to crash.
 * Implemented on desktop platforms if the crash handler is enabled.
 */
  static readonly NOTIFICATION_CRASH: int;
/**
 * Notification received from the OS when an update of the Input Method Engine occurs (e.g. change of IME cursor position or composition string).
 * Specific to the macOS platform.
 */
  static readonly NOTIFICATION_OS_IME_UPDATE: int;
/**
 * Notification received from the OS when the application is resumed.
 * Specific to the Android and iOS platforms.
 */
  static readonly NOTIFICATION_APPLICATION_RESUMED: int;
/**
 * Notification received from the OS when the application is paused.
 * Specific to the Android and iOS platforms.
 * 
 * **Note:** On iOS, you only have approximately 5 seconds to finish a task started by this signal. If you go over this allotment, iOS will kill the app instead of pausing it.
 */
  static readonly NOTIFICATION_APPLICATION_PAUSED: int;
/**
 * Notification received from the OS when the application is focused, i.e. when changing the focus from the OS desktop or a thirdparty application to any open window of the Godot instance.
 * Implemented on desktop and mobile platforms.
 */
  static readonly NOTIFICATION_APPLICATION_FOCUS_IN: int;
/**
 * Notification received from the OS when the application is defocused, i.e. when changing the focus from any open window of the Godot instance to the OS desktop or a thirdparty application.
 * Implemented on desktop and mobile platforms.
 */
  static readonly NOTIFICATION_APPLICATION_FOCUS_OUT: int;
/**
 * Notification received when text server is changed.
 */
  static readonly NOTIFICATION_TEXT_SERVER_CHANGED: int;
}
