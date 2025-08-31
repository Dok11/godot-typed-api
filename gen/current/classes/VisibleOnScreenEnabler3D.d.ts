import type { GodotArray, GodotDictionary, NodePath, VisibleOnScreenNotifier3D, float, int } from "../index.d.ts";
/**
 * A box-shaped region of 3D space that, when visible on screen, enables a target node.
 * 
 * `VisibleOnScreenEnabler3D` contains a box-shaped region of 3D space and a target node. The target node will be automatically enabled (via its `Node.process_mode` property) when any part of this region becomes visible on the screen, and automatically disabled otherwise. This can for example be used to activate enemies only when the player approaches them.
 * See `VisibleOnScreenNotifier3D` if you only want to be notified when the region is visible on screen.
 * 
 * **Note:** `VisibleOnScreenEnabler3D` uses an approximate heuristic that doesn't take walls and other occlusion into account, unless occlusion culling is used. It also won't function unless `Node3D.visible` is set to `true`.
 */
export class VisibleOnScreenEnabler3D extends VisibleOnScreenNotifier3D {
/**
 * Determines how the target node is enabled. Corresponds to `Node.ProcessMode`. When the node is disabled, it always uses `Node.PROCESS_MODE_DISABLED`.
 */
  enableMode: int;
/**
 * The path to the target node, relative to the `VisibleOnScreenEnabler3D`. The target node is cached; it's only assigned when setting this property (if the `VisibleOnScreenEnabler3D` is inside the scene tree) and every time the `VisibleOnScreenEnabler3D` enters the scene tree. If the path is empty, no node will be affected. If the path is invalid, an error is also generated.
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
