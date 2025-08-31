import type { GodotArray, GodotDictionary, MeshInstance3D, Node, NodePath, PhysicsBody3D, RID, Vector3, float, int } from "../index.d.ts";
/**
 * A deformable 3D physics mesh.
 * 
 * A deformable 3D physics mesh. Used to create elastic or deformable objects such as cloth, rubber, or other flexible materials.
 * Additionally, `SoftBody3D` is subject to wind forces defined in `Area3D` (see `Area3D.wind_source_path`, `Area3D.wind_force_magnitude`, and `Area3D.wind_attenuation_factor`).
 * 
 * **Note:** There are many known bugs in `SoftBody3D`. Therefore, it's not recommended to use them for things that can affect gameplay (such as trampolines).
 */
export class SoftBody3D extends MeshInstance3D {
/**
 * The physics layers this SoftBody3D **is in**. Collision objects can exist in one or more of 32 different layers. See also `collision_mask`.
 * 
 * **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See Collision layers and masks (https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks) in the documentation for more information.
 */
  collisionLayer: int;
/**
 * The physics layers this SoftBody3D **scans**. Collision objects can scan one or more of 32 different layers. See also `collision_layer`.
 * 
 * **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See Collision layers and masks (https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks) in the documentation for more information.
 */
  collisionMask: int;
/**
 * The body's damping coefficient. Higher values will slow down the body more noticeably when forces are applied.
 */
  dampingCoefficient: float;
/**
 * Defines the behavior in physics when `Node.process_mode` is set to `Node.PROCESS_MODE_DISABLED`. See `DisableMode` for more details about the different modes.
 */
  disableMode: int;
/**
 * The body's drag coefficient. Higher values increase this body's air resistance.
 * 
 * **Note:** This value is currently unused by Godot's default physics implementation.
 */
  dragCoefficient: float;
/**
 * Higher values will result in a stiffer body, while lower values will increase the body's ability to bend. The value can be between `0.0` and `1.0` (inclusive).
 */
  linearStiffness: float;
/**
 * `NodePath` to a `CollisionObject3D` this SoftBody3D should avoid clipping.
 */
  parentCollisionIgnore: NodePath;
/**
 * The pressure coefficient of this soft body. Simulate pressure build-up from inside this body. Higher values increase the strength of this effect.
 */
  pressureCoefficient: float;
/**
 * If `true`, the `SoftBody3D` will respond to `RayCast3D`s.
 */
  rayPickable: boolean;
/**
 * Increasing this value will improve the resulting simulation, but can affect performance. Use with care.
 */
  simulationPrecision: int;
/**
 * The SoftBody3D's mass.
 */
  totalMass: float;
/**
 * Adds a body to the list of bodies that this body can't collide with.
 * @param body Node
 */
  addCollisionExceptionWith(body: Node): void;
/**
 * Returns an array of nodes that were added as collision exceptions for this body.
 * @returns PhysicsBody3D[]
 */
  getCollisionExceptions(): PhysicsBody3D[];
/**
 * Returns whether or not the specified layer of the `collision_layer` is enabled, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @returns boolean
 */
  getCollisionLayerValue(layerNumber: int): boolean;
/**
 * Returns whether or not the specified layer of the `collision_mask` is enabled, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @returns boolean
 */
  getCollisionMaskValue(layerNumber: int): boolean;
/**
 * Returns the internal `RID` used by the `PhysicsServer3D` for this body.
 * @returns RID
 */
  getPhysicsRid(): RID;
/**
 * Returns local translation of a vertex in the surface array.
 * @param pointIndex int
 * @returns Vector3
 */
  getPointTransform(pointIndex: int): Vector3;
/**
 * Returns `true` if vertex is set to pinned.
 * @param pointIndex int
 * @returns boolean
 */
  isPointPinned(pointIndex: int): boolean;
/**
 * Removes a body from the list of bodies that this body can't collide with.
 * @param body Node
 */
  removeCollisionExceptionWith(body: Node): void;
/**
 * Based on `value`, enables or disables the specified layer in the `collision_layer`, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @param value boolean
 */
  setCollisionLayerValue(layerNumber: int, value: boolean): void;
/**
 * Based on `value`, enables or disables the specified layer in the `collision_mask`, given a `layer_number` between 1 and 32.
 * @param layerNumber int
 * @param value boolean
 */
  setCollisionMaskValue(layerNumber: int, value: boolean): void;
/**
 * Sets the pinned state of a surface vertex. When set to `true`, the optional `attachment_path` can define a `Node3D` the pinned vertex will be attached to.
 * @param pointIndex int
 * @param pinned boolean
 * @param attachmentPath NodePath (optional, default: NodePath(""))
 * @param insertAt int (optional, default: -1)
 */
  setPointPinned(pointIndex: int, pinned: boolean, attachmentPath?: NodePath, insertAt?: int): void;
/**
 * When `Node.process_mode` is set to `Node.PROCESS_MODE_DISABLED`, remove from the physics simulation to stop all physics interactions with this `SoftBody3D`.
 * Automatically re-added to the physics simulation when the `Node` is processed again.
 */
  static readonly DISABLE_MODE_REMOVE: int;
/**
 * When `Node.process_mode` is set to `Node.PROCESS_MODE_DISABLED`, do not affect the physics simulation.
 */
  static readonly DISABLE_MODE_KEEP_ACTIVE: int;
}
