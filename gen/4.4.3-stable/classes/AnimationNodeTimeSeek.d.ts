import type { AnimationNode, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A time-seeking animation node used in `AnimationTree`.
 * 
 * This animation node can be used to cause a seek command to happen to any sub-children of the animation graph. Use to play an `Animation` from the start or a certain playback position inside the `AnimationNodeBlendTree`.
 * After setting the time and changing the animation playback, the time seek node automatically goes into sleep mode on the next process frame by setting its `seek_request` value to `-1.0`.
 * 
 * 		```gdscript
 * 
 * 		# Play child animation from the start.
 * 		animation_tree.set("parameters/TimeSeek/seek_request", 0.0)
 * 		# Alternative syntax (same result as above).
 * 		animation_tree["parameters/TimeSeek/seek_request"] = 0.0
 * 
 * 		# Play child animation from 12 second timestamp.
 * 		animation_tree.set("parameters/TimeSeek/seek_request", 12.0)
 * 		# Alternative syntax (same result as above).
 * 		animation_tree["parameters/TimeSeek/seek_request"] = 12.0
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		// Play child animation from the start.
 * 		animationTree.Set("parameters/TimeSeek/seek_request", 0.0);
 * 
 * 		// Play child animation from 12 second timestamp.
 * 		animationTree.Set("parameters/TimeSeek/seek_request", 12.0);
 * 		
 * 
 * ```
 * 
 */
export class AnimationNodeTimeSeek extends AnimationNode {
/**
 * If `true`, some processes are executed to handle keys between seeks, such as calculating root motion and finding the nearest discrete key.
 */
  explicitElapse: boolean;
}
