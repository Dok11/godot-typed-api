import type { CanvasItem, GodotArray, GodotDictionary, Node, Transform2D, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D game object, inherited by all 2D-related nodes. Has a position, rotation, scale, and skew.
 * 
 * A 2D game object, with a transform (position, rotation, and scale). All 2D nodes, including physics objects and sprites, inherit from Node2D. Use Node2D as a parent node to move, scale and rotate children in a 2D project. Also gives control of the node's render order.
 * 
 * **Note:** Since both `Node2D` and `Control` inherit from `CanvasItem`, they share several concepts from the class such as the `CanvasItem.z_index` and `CanvasItem.visible` properties.
 */
export class Node2D extends CanvasItem {
/**
 * Global position. See also `position`.
 */
  globalPosition: Vector2;
/**
 * Global rotation in radians. See also `rotation`.
 */
  globalRotation: float;
/**
 * Helper property to access `global_rotation` in degrees instead of radians. See also `rotation_degrees`.
 */
  globalRotationDegrees: float;
/**
 * Global scale. See also `scale`.
 */
  globalScale: Vector2;
/**
 * Global skew in radians. See also `skew`.
 */
  globalSkew: float;
/**
 * Global `Transform2D`. See also `transform`.
 */
  globalTransform: Transform2D;
/**
 * Position, relative to the node's parent. See also `global_position`.
 */
  position: Vector2;
/**
 * Rotation in radians, relative to the node's parent. See also `global_rotation`.
 * 
 * **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use `rotation_degrees`.
 */
  rotation: float;
/**
 * Helper property to access `rotation` in degrees instead of radians. See also `global_rotation_degrees`.
 */
  rotationDegrees: float;
/**
 * The node's scale, relative to the node's parent. Unscaled value: `(1, 1)`. See also `global_scale`.
 * 
 * **Note:** Negative X scales in 2D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, negative scales on the X axis will be changed to negative scales on the Y axis and a rotation of 180 degrees when decomposed.
 */
  scale: Vector2;
/**
 * If set to a non-zero value, slants the node in one direction or another. This can be used for pseudo-3D effects. See also `global_skew`.
 * 
 * **Note:** Skew is performed on the X axis only, and *between* rotation and scaling.
 * 
 * **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use `skew = deg_to_rad(value_in_degrees)`.
 */
  skew: float;
/**
 * The node's `Transform2D`, relative to the node's parent. See also `global_transform`.
 */
  transform: Transform2D;
/**
 * Multiplies the current scale by the `ratio` vector.
 * @param ratio Vector2
 */
  applyScale(ratio: Vector2): void;
/**
 * Returns the angle between the node and the `point` in radians.
 * Illustration of the returned angle. (https://raw.githubusercontent.com/godotengine/godot-docs/master/img/node2d_get_angle_to.png)
 * @param point Vector2
 * @returns float
 */
  getAngleTo(point: Vector2): float;
/**
 * Returns the `Transform2D` relative to this node's parent.
 * @param parent Node
 * @returns Transform2D
 */
  getRelativeTransformToParent(parent: Node): Transform2D;
/**
 * Adds the `offset` vector to the node's global position.
 * @param offset Vector2
 */
  globalTranslate(offset: Vector2): void;
/**
 * Rotates the node so that its local +X axis points towards the `point`, which is expected to use global coordinates.
 * `point` should not be the same as the node's position, otherwise the node always looks to the right.
 * @param point Vector2
 */
  lookAt(point: Vector2): void;
/**
 * Applies a local translation on the node's X axis based on the `Node._process`'s `delta`. If `scaled` is `false`, normalizes the movement.
 * @param delta float
 * @param scaled boolean (optional, default: false)
 */
  moveLocalX(delta: float, scaled?: boolean): void;
/**
 * Applies a local translation on the node's Y axis based on the `Node._process`'s `delta`. If `scaled` is `false`, normalizes the movement.
 * @param delta float
 * @param scaled boolean (optional, default: false)
 */
  moveLocalY(delta: float, scaled?: boolean): void;
/**
 * Applies a rotation to the node, in radians, starting from its current rotation.
 * @param radians float
 */
  rotate(radians: float): void;
/**
 * Transforms the provided local position into a position in global coordinate space. The input is expected to be local relative to the `Node2D` it is called on. e.g. Applying this method to the positions of child nodes will correctly transform their positions into the global coordinate space, but applying it to a node's own position will give an incorrect result, as it will incorporate the node's own transformation into its global position.
 * @param localPoint Vector2
 * @returns Vector2
 */
  toGlobal(localPoint: Vector2): Vector2;
/**
 * Transforms the provided global position into a position in local coordinate space. The output will be local relative to the `Node2D` it is called on. e.g. It is appropriate for determining the positions of child nodes, but it is not appropriate for determining its own position relative to its parent.
 * @param globalPoint Vector2
 * @returns Vector2
 */
  toLocal(globalPoint: Vector2): Vector2;
/**
 * Translates the node by the given `offset` in local coordinates.
 * @param offset Vector2
 */
  translate(offset: Vector2): void;
}
