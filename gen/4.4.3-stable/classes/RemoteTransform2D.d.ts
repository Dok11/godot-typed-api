import type { GodotArray, GodotDictionary, Node2D, NodePath, float, int } from "../index.d.ts";
/**
 * RemoteTransform2D pushes its own `Transform2D` to another `Node2D` derived node in the scene.
 * 
 * RemoteTransform2D pushes its own `Transform2D` to another `Node2D` derived node (called the remote node) in the scene.
 * It can be set to update another node's position, rotation and/or scale. It can use either global or local coordinates.
 */
export class RemoteTransform2D extends Node2D {
/**
 * The `NodePath` to the remote node, relative to the RemoteTransform2D's position in the scene.
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
 * `RemoteTransform2D` caches the remote node. It may not notice if the remote node disappears; `force_update_cache` forces it to update the cache again.
 */
  forceUpdateCache(): void;
}
