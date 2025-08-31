import type { Color, GodotArray, GodotDictionary, NodePath, VisualInstance3D, float, int } from "../index.d.ts";
/**
 * Editor-only helper for setting up root motion in `AnimationMixer`.
 * 
 * *Root motion* refers to an animation technique where a mesh's skeleton is used to give impulse to a character. When working with 3D animations, a popular technique is for animators to use the root skeleton bone to give motion to the rest of the skeleton. This allows animating characters in a way where steps actually match the floor below. It also allows precise interaction with objects during cinematics. See also `AnimationMixer`.
 * 
 * **Note:** `RootMotionView` is only visible in the editor. It will be hidden automatically in the running project.
 */
export class RootMotionView extends VisualInstance3D {
/**
 * Path to an `AnimationMixer` node to use as a basis for root motion.
 */
  animationPath: NodePath;
/**
 * The grid's cell size in 3D units.
 */
  cellSize: float;
/**
 * The grid's color.
 */
  color: Color;
/**
 * The grid's radius in 3D units. The grid's opacity will fade gradually as the distance from the origin increases until this `radius` is reached.
 */
  radius: float;
/**
 * If `true`, the grid's points will all be on the same Y coordinate (*local* Y = 0). If `false`, the points' original Y coordinate is preserved.
 */
  zeroY: boolean;
}
