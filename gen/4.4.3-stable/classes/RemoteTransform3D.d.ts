import type { GodotArray, GodotDictionary, Node3D, NodePath, float, int } from "../index.d.ts";
/**
 * RemoteTransform3D pushes its own `Transform3D` to another `Node3D` derived Node in the scene.
 * 
 * RemoteTransform3D pushes its own `Transform3D` to another `Node3D` derived Node (called the remote node) in the scene.
 * It can be set to update another Node's position, rotation and/or scale. It can use either global or local coordinates.
 */
export class RemoteTransform3D extends Node3D {
/**
 * The `NodePath` to the remote node, relative to the RemoteTransform3D's position in the scene.
 */
  remotePath: NodePath;
/**
 * If `true`, the remote node's position is updated.
 */
  updatePosition: boolean;
/**
 * If `true`, the remote node's rotation is updated.
 */
  updateRotation: boolean;
/**
 * If `true`, the remote node's scale is updated.
 */
  updateScale: boolean;
/**
 * If `true`, global coordinates are used. If `false`, local coordinates are used.
 */
  useGlobalCoordinates: boolean;
/**
 * `RemoteTransform3D` caches the remote node. It may not notice if the remote node disappears; `force_update_cache` forces it to update the cache again.
 */
  forceUpdateCache(): void;
}
