import type { GodotArray, GodotDictionary, RefCounted, Signal, float, int } from "../index.d.ts";
/**
 * One-shot timer.
 * 
 * A one-shot timer managed by the scene tree, which emits `timeout` on completion. See also `SceneTree.create_timer`.
 * As opposed to `Timer`, it does not require the instantiation of a node. Commonly used to create a one-shot delay timer as in the following example:
 * 
 * 		```gdscript
 * 
 * 		func some_function():
 * 		    print("Timer started.")
 * 		    await get_tree().create_timer(1.0).timeout
 * 		    print("Timer ended.")
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		public async Task SomeFunction()
 * 		{
 * 		    GD.Print("Timer started.");
 * 		    await ToSignal(GetTree().CreateTimer(1.0f), SceneTreeTimer.SignalName.Timeout);
 * 		    GD.Print("Timer ended.");
 * 		}
 * 		
 * 
 * ```
 * 
 * The timer will be dereferenced after its time elapses. To preserve the timer, you can keep a reference to it. See `RefCounted`.
 * 
 * **Note:** The timer is processed after all of the nodes in the current frame, i.e. node's `Node._process` method would be called before the timer (or `Node._physics_process` if `process_in_physics` in `SceneTree.create_timer` has been set to `true`).
 */
export class SceneTreeTimer extends RefCounted {
/**
 * The time remaining (in seconds).
 */
  timeLeft: float;
/**
 * Emitted when the timer reaches 0.
 */
  timeout: Signal<[]>;
}
