import type { GodotArray, GodotDictionary, NodePath, VisibleOnScreenNotifier2D, float, int } from "../index.d.ts";
/**
 * A rectangular region of 2D space that, when visible on screen, enables a target node.
 * 
 * `VisibleOnScreenEnabler2D` contains a rectangular region of 2D space and a target node. The target node will be automatically enabled (via its `Node.process_mode` property) when any part of this region becomes visible on the screen, and automatically disabled otherwise. This can for example be used to activate enemies only when the player approaches them.
 * See `VisibleOnScreenNotifier2D` if you only want to be notified when the region is visible on screen.
 * 
 * **Note:** `VisibleOnScreenEnabler2D` uses the render culling code to determine whether it's visible on screen, so it won't function unless `CanvasItem.visible` is set to `true`.
 */
export class VisibleOnScreenEnabler2D extends VisibleOnScreenNotifier2D {
/**
 * Determines how the target node is enabled. Corresponds to `Node.ProcessMode`. When the node is disabled, it always uses `Node.PROCESS_MODE_DISABLED`.
 */
  enableMode: int;
/**
 * The path to the target node, relative to the `VisibleOnScreenEnabler2D`. The target node is cached; it's only assigned when setting this property (if the `VisibleOnScreenEnabler2D` is inside the scene tree) and every time the `VisibleOnScreenEnabler2D` enters the scene tree. If the path is empty, no node will be affected. If the path is invalid, an error is also generated.
 */
  enableNodePath: NodePath;
/**
 * Corresponds to `Node.PROCESS_MODE_INHERIT`.
 */
  static readonly ENABLE_MODE_INHERIT: int;
/**
 * Corresponds to `Node.PROCESS_MODE_ALWAYS`.
 */
  static readonly ENABLE_MODE_ALWAYS: int;
/**
 * Corresponds to `Node.PROCESS_MODE_WHEN_PAUSED`.
 */
  static readonly ENABLE_MODE_WHEN_PAUSED: int;
}
