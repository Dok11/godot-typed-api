import type { Basis, GodotArray, GodotDictionary, Node, Node3DGizmo, NodePath, Quaternion, Signal, Transform3D, Vector3, World3D, float, int } from "../index.d.ts";
/**
 * Most basic 3D game object, parent of all 3D-related nodes.
 * 
 * Most basic 3D game object, with a `Transform3D` and visibility settings. All other 3D game objects inherit from `Node3D`. Use `Node3D` as a parent node to move, scale, rotate and show/hide children in a 3D project.
 * Affine operations (rotate, scale, translate) happen in parent's local coordinate system, unless the `Node3D` object is set as top-level. Affine operations in this coordinate system correspond to direct affine operations on the `Node3D`'s transform. The word local below refers to this coordinate system. The coordinate system that is attached to the `Node3D` object itself is referred to as object-local coordinate system.
 * 
 * **Note:** Unless otherwise specified, all methods that have angle parameters must have angles specified as *radians*. To convert degrees to radians, use `@GlobalScope.deg_to_rad`.
 * 
 * **Note:** Be aware that "Spatial" nodes are now called "Node3D" starting with Godot 4. Any Godot 3.x references to "Spatial" nodes refer to "Node3D" in Godot 4.
 */
export class Node3D extends Node {
/**
 * Basis of the `transform` property. Represents the rotation, scale, and shear of this node.
 */
  basis: Basis;
/**
 * Global basis of this node. This is equivalent to `global_transform.basis`.
 */
  globalBasis: Basis;
/**
 * Global position of this node. This is equivalent to `global_transform.origin`.
 */
  globalPosition: Vector3;
/**
 * Rotation part of the global transformation in radians, specified in terms of YXZ-Euler angles in the format (X angle, Y angle, Z angle).
 * 
 * **Note:** In the mathematical sense, rotation is a matrix and not a vector. The three Euler angles, which are the three independent parameters of the Euler-angle parametrization of the rotation matrix, are stored in a `Vector3` data structure not because the rotation is a vector, but only because `Vector3` exists as a convenient data-structure to store 3 floating-point numbers. Therefore, applying affine operations on the rotation "vector" is not meaningful.
 */
  globalRotation: Vector3;
/**
 * Helper property to access `global_rotation` in degrees instead of radians.
 */
  globalRotationDegrees: Vector3;
/**
 * World3D space (global) `Transform3D` of this node.
 */
  globalTransform: Transform3D;
/**
 * Local position or translation of this node relative to the parent. This is equivalent to `transform.origin`.
 */
  position: Vector3;
/**
 * Access to the node rotation as a `Quaternion`. This property is ideal for tweening complex rotations.
 */
  quaternion: Quaternion;
/**
 * Rotation part of the local transformation in radians, specified in terms of Euler angles. The angles construct a rotation in the order specified by the `rotation_order` property.
 * 
 * **Note:** In the mathematical sense, rotation is a matrix and not a vector. The three Euler angles, which are the three independent parameters of the Euler-angle parametrization of the rotation matrix, are stored in a `Vector3` data structure not because the rotation is a vector, but only because `Vector3` exists as a convenient data-structure to store 3 floating-point numbers. Therefore, applying affine operations on the rotation "vector" is not meaningful.
 * 
 * **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use `rotation_degrees`.
 */
  rotation: Vector3;
/**
 * Helper property to access `rotation` in degrees instead of radians.
 */
  rotationDegrees: Vector3;
/**
 * Specify how rotation (and scale) will be presented in the editor.
 */
  rotationEditMode: int;
/**
 * Specify the axis rotation order of the `rotation` property. The final orientation is constructed by rotating the Euler angles in the order specified by this property.
 */
  rotationOrder: int;
/**
 * Scale part of the local transformation.
 * 
 * **Note:** Mixed negative scales in 3D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, the scale values will either be all positive or all negative.
 * 
 * **Note:** Not all nodes are visually scaled by the `scale` property. For example, `Light3D`s are not visually affected by `scale`.
 */
  scale: Vector3;
/**
 * If `true`, the node will not inherit its transformations from its parent. Node transformations are only in global space.
 */
  topLevel: boolean;
/**
 * Local space `Transform3D` of this node, with respect to the parent node.
 */
  transform: Transform3D;
/**
 * Defines the visibility range parent for this node and its subtree. The visibility parent must be a GeometryInstance3D. Any visual instance will only be visible if the visibility parent (and all of its visibility ancestors) is hidden by being closer to the camera than its own `GeometryInstance3D.visibility_range_begin`. Nodes hidden via the `Node3D.visible` property are essentially removed from the visibility dependency tree, so dependent instances will not take the hidden node or its ancestors into account.
 */
  visibilityParent: NodePath;
/**
 * If `true`, this node is drawn. The node is only visible if all of its ancestors are visible as well (in other words, `is_visible_in_tree` must return `true`).
 */
  visible: boolean;
/**
 * Attach an editor gizmo to this `Node3D`.
 * 
 * **Note:** The gizmo object would typically be an instance of `EditorNode3DGizmo`, but the argument type is kept generic to avoid creating a dependency on editor classes in `Node3D`.
 * @param gizmo Node3DGizmo
 */
  addGizmo(gizmo: Node3DGizmo): void;
/**
 * Clear all gizmos attached to this `Node3D`.
 */
  clearGizmos(): void;
/**
 * Clears subgizmo selection for this node in the editor. Useful when subgizmo IDs become invalid after a property change.
 */
  clearSubgizmoSelection(): void;
/**
 * Forces the transform to update. Transform changes in physics are not instant for performance reasons. Transforms are accumulated and then set. Use this if you need an up-to-date transform when doing physics operations.
 */
  forceUpdateTransform(): void;
/**
 * Returns all the gizmos attached to this `Node3D`.
 * @returns Node3DGizmo[]
 */
  getGizmos(): Node3DGizmo[];
/**
 * When using physics interpolation, there will be circumstances in which you want to know the interpolated (displayed) transform of a node rather than the standard transform (which may only be accurate to the most recent physics tick).
 * This is particularly important for frame-based operations that take place in `Node._process`, rather than `Node._physics_process`. Examples include `Camera3D`s focusing on a node, or finding where to fire lasers from on a frame rather than physics tick.
 * 
 * **Note:** This function creates an interpolation pump on the `Node3D` the first time it is called, which can respond to physics interpolation resets. If you get problems with "streaking" when initially following a `Node3D`, be sure to call `get_global_transform_interpolated` at least once *before* resetting the `Node3D` physics interpolation.
 * @returns Transform3D
 */
  getGlobalTransformInterpolated(): Transform3D;
/**
 * Returns the parent `Node3D`, or `null` if no parent exists, the parent is not of type `Node3D`, or `top_level` is `true`.
 * 
 * **Note:** Calling this method is not equivalent to `get_parent() as Node3D`, which does not take `top_level` into account.
 * @returns Node3D
 */
  getParentNode3d(): Node3D;
/**
 * Returns the current `World3D` resource this `Node3D` node is registered to.
 * @returns World3D
 */
  getWorld3d(): World3D;
/**
 * Rotates the global (world) transformation around axis, a unit `Vector3`, by specified angle in radians. The rotation axis is in global coordinate system.
 * @param axis Vector3
 * @param angle float
 */
  globalRotate(axis: Vector3, angle: float): void;
/**
 * Scales the global (world) transformation by the given `Vector3` scale factors.
 * @param scale Vector3
 */
  globalScale(scale: Vector3): void;
/**
 * Moves the global (world) transformation by `Vector3` offset. The offset is in global coordinate system.
 * @param offset Vector3
 */
  globalTranslate(offset: Vector3): void;
/**
 * Disables rendering of this node. Changes `visible` to `false`.
 */
  hide(): void;
/**
 * Returns whether node notifies about its local transformation changes. `Node3D` will not propagate this by default.
 * @returns boolean
 */
  isLocalTransformNotificationEnabled(): boolean;
/**
 * Returns whether this node uses a scale of `(1, 1, 1)` or its local transformation scale.
 * @returns boolean
 */
  isScaleDisabled(): boolean;
/**
 * Returns whether the node notifies about its global and local transformation changes. `Node3D` will not propagate this by default.
 * @returns boolean
 */
  isTransformNotificationEnabled(): boolean;
/**
 * Returns `true` if the node is present in the `SceneTree`, its `visible` property is `true` and all its ancestors are also visible. If any ancestor is hidden, this node will not be visible in the scene tree.
 * Visibility is checked only in parent nodes that inherit from `Node3D`. If the parent is of any other type (such as `Node`, `AnimationPlayer`, or `Node2D`), it is assumed to be visible.
 * 
 * **Note:** This method does not take `VisualInstance3D.layers` into account, so even if this method returns `true`, the node might end up not being rendered.
 * @returns boolean
 */
  isVisibleInTree(): boolean;
/**
 * Rotates the node so that the local forward axis (-Z, `Vector3.FORWARD`) points toward the `target` position.
 * The local up axis (+Y) points as close to the `up` vector as possible while staying perpendicular to the local forward axis. The resulting transform is orthogonal, and the scale is preserved. Non-uniform scaling may not work correctly.
 * The `target` position cannot be the same as the node's position, the `up` vector cannot be zero.
 * The `target` and the `up` cannot be `Vector3.ZERO`, and shouldn't be colinear to avoid unintended rotation around local Z axis.
 * Operations take place in global space, which means that the node must be in the scene tree.
 * If `use_model_front` is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the `target` position. By default, the -Z axis (camera forward) is treated as forward (implies +X is right).
 * @param target Vector3
 * @param up Vector3 (optional, default: Vector3(0, 1, 0))
 * @param useModelFront boolean (optional, default: false)
 */
  lookAt(target: Vector3, up?: Vector3, useModelFront?: boolean): void;
/**
 * Moves the node to the specified `position`, and then rotates the node to point toward the `target` as per `look_at`. Operations take place in global space.
 * @param position Vector3
 * @param target Vector3
 * @param up Vector3 (optional, default: Vector3(0, 1, 0))
 * @param useModelFront boolean (optional, default: false)
 */
  lookAtFromPosition(position: Vector3, target: Vector3, up?: Vector3, useModelFront?: boolean): void;
/**
 * Resets this node's transformations (like scale, skew and taper) preserving its rotation and translation by performing Gram-Schmidt orthonormalization on this node's `Transform3D`.
 */
  orthonormalize(): void;
/**
 * Rotates the local transformation around axis, a unit `Vector3`, by specified angle in radians.
 * @param axis Vector3
 * @param angle float
 */
  rotate(axis: Vector3, angle: float): void;
/**
 * Rotates the local transformation around axis, a unit `Vector3`, by specified angle in radians. The rotation axis is in object-local coordinate system.
 * @param axis Vector3
 * @param angle float
 */
  rotateObjectLocal(axis: Vector3, angle: float): void;
/**
 * Rotates the local transformation around the X axis by angle in radians.
 * @param angle float
 */
  rotateX(angle: float): void;
/**
 * Rotates the local transformation around the Y axis by angle in radians.
 * @param angle float
 */
  rotateY(angle: float): void;
/**
 * Rotates the local transformation around the Z axis by angle in radians.
 * @param angle float
 */
  rotateZ(angle: float): void;
/**
 * Scales the local transformation by given 3D scale factors in object-local coordinate system.
 * @param scale Vector3
 */
  scaleObjectLocal(scale: Vector3): void;
/**
 * Sets whether the node uses a scale of `(1, 1, 1)` or its local transformation scale. Changes to the local transformation scale are preserved.
 * @param disable boolean
 */
  setDisableScale(disable: boolean): void;
/**
 * Reset all transformations for this node (sets its `Transform3D` to the identity matrix).
 */
  setIdentity(): void;
/**
 * Sets whether the node ignores notification that its transformation (global or local) changed.
 * @param enabled boolean
 */
  setIgnoreTransformNotification(enabled: boolean): void;
/**
 * Sets whether the node notifies about its local transformation changes. `Node3D` will not propagate this by default.
 * @param enable boolean
 */
  setNotifyLocalTransform(enable: boolean): void;
/**
 * Sets whether the node notifies about its global and local transformation changes. `Node3D` will not propagate this by default, unless it is in the editor context and it has a valid gizmo.
 * @param enable boolean
 */
  setNotifyTransform(enable: boolean): void;
/**
 * Set subgizmo selection for this node in the editor.
 * 
 * **Note:** The gizmo object would typically be an instance of `EditorNode3DGizmo`, but the argument type is kept generic to avoid creating a dependency on editor classes in `Node3D`.
 * @param gizmo Node3DGizmo
 * @param id int
 * @param transform Transform3D
 */
  setSubgizmoSelection(gizmo: Node3DGizmo, id: int, transform: Transform3D): void;
/**
 * Enables rendering of this node. Changes `visible` to `true`.
 */
  show(): void;
/**
 * Transforms `local_point` from this node's local space to world space.
 * @param localPoint Vector3
 * @returns Vector3
 */
  toGlobal(localPoint: Vector3): Vector3;
/**
 * Transforms `global_point` from world space to this node's local space.
 * @param globalPoint Vector3
 * @returns Vector3
 */
  toLocal(globalPoint: Vector3): Vector3;
/**
 * Changes the node's position by the given offset `Vector3`.
 * Note that the translation `offset` is affected by the node's scale, so if scaled by e.g. `(10, 1, 1)`, a translation by an offset of `(2, 0, 0)` would actually add 20 (`2 * 10`) to the X coordinate.
 * @param offset Vector3
 */
  translate(offset: Vector3): void;
/**
 * Changes the node's position by the given offset `Vector3` in local space.
 * @param offset Vector3
 */
  translateObjectLocal(offset: Vector3): void;
/**
 * Updates all the `Node3D` gizmos attached to this node.
 */
  updateGizmos(): void;
/**
 * Emitted when node visibility changes.
 */
  visibilityChanged: Signal<[]>;
/**
 * `Node3D` nodes receive this notification when their global transform changes. This means that either the current or a parent node changed its transform.
 * In order for `NOTIFICATION_TRANSFORM_CHANGED` to work, users first need to ask for it, with `set_notify_transform`. The notification is also sent if the node is in the editor context and it has at least one valid gizmo.
 */
  static readonly NOTIFICATION_TRANSFORM_CHANGED: int;
/**
 * `Node3D` nodes receive this notification when they are registered to new `World3D` resource.
 */
  static readonly NOTIFICATION_ENTER_WORLD: int;
/**
 * `Node3D` nodes receive this notification when they are unregistered from current `World3D` resource.
 */
  static readonly NOTIFICATION_EXIT_WORLD: int;
/**
 * `Node3D` nodes receive this notification when their visibility changes.
 */
  static readonly NOTIFICATION_VISIBILITY_CHANGED: int;
/**
 * `Node3D` nodes receive this notification when their local transform changes. This is not received when the transform of a parent node is changed.
 * In order for `NOTIFICATION_LOCAL_TRANSFORM_CHANGED` to work, users first need to ask for it, with `set_notify_local_transform`.
 */
  static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED: int;
/**
 * The rotation is edited using `Vector3` Euler angles.
 */
  static readonly ROTATION_EDIT_MODE_EULER: int;
/**
 * The rotation is edited using a `Quaternion`.
 */
  static readonly ROTATION_EDIT_MODE_QUATERNION: int;
/**
 * The rotation is edited using a `Basis`. In this mode, `scale` can't be edited separately.
 */
  static readonly ROTATION_EDIT_MODE_BASIS: int;
}
