import type { Curve, GodotArray, GodotDictionary, NodePath, SkeletonModifier3D, Vector3, float, int } from "../index.d.ts";
/**
 * A `SkeletonModifier3D` to apply inertial wavering to bone chains.
 * 
 * This `SkeletonModifier3D` can be used to wiggle hair, cloth, and tails. This modifier behaves differently from `PhysicalBoneSimulator3D` as it attempts to return the original pose after modification.
 * If you setup `set_root_bone` and `set_end_bone`, it is treated as one bone chain. Note that it does not support a branched chain like Y-shaped chains.
 * When a bone chain is created, an array is generated from the bones that exist in between and listed in the joint list.
 * Several properties can be applied to each joint, such as `set_joint_stiffness`, `set_joint_drag`, and `set_joint_gravity`.
 * For simplicity, you can set values to all joints at the same time by using a `Curve`. If you want to specify detailed values individually, set `set_individual_config` to `true`.
 * For physical simulation, `SpringBoneSimulator3D` can have children as self-standing collisions that are not related to `PhysicsServer3D`, see also `SpringBoneCollision3D`.
 * 
 * **Warning:** A scaled `SpringBoneSimulator3D` will likely not behave as expected. Make sure that the parent `Skeleton3D` and its bones are not scaled.
 */
export class SpringBoneSimulator3D extends SkeletonModifier3D {
/**
 * The number of settings.
 */
  settingCount: int;
/**
 * Returns `true` if the all child `SpringBoneCollision3D`s are contained in the collision list at `index` in the settings.
 * @param index int
 * @returns boolean
 */
  areAllChildCollisionsEnabled(index: int): boolean;
/**
 * Clears all collisions from the collision list at `index` in the settings when `are_all_child_collisions_enabled` is `false`.
 * @param index int
 */
  clearCollisions(index: int): void;
/**
 * Clears all exclude collisions from the collision list at `index` in the settings when `are_all_child_collisions_enabled` is `true`.
 * @param index int
 */
  clearExcludeCollisions(index: int): void;
/**
 * Clears all settings.
 */
  clearSettings(): void;
/**
 * Returns the center bone index of the bone chain.
 * @param index int
 * @returns int
 */
  getCenterBone(index: int): int;
/**
 * Returns the center bone name of the bone chain.
 * @param index int
 * @returns string
 */
  getCenterBoneName(index: int): string;
/**
 * Returns what the center originates from in the bone chain.
 * @param index int
 * @returns int
 */
  getCenterFrom(index: int): int;
/**
 * Returns the center node path of the bone chain.
 * @param index int
 * @returns NodePath
 */
  getCenterNode(index: int): NodePath;
/**
 * Returns the collision count of the bone chain's collision list when `are_all_child_collisions_enabled` is `false`.
 * @param index int
 * @returns int
 */
  getCollisionCount(index: int): int;
/**
 * Returns the node path of the `SpringBoneCollision3D` at `collision` in the bone chain's collision list when `are_all_child_collisions_enabled` is `false`.
 * @param index int
 * @param collision int
 * @returns NodePath
 */
  getCollisionPath(index: int, collision: int): NodePath;
/**
 * Returns the drag force damping curve of the bone chain.
 * @param index int
 * @returns float
 */
  getDrag(index: int): float;
/**
 * Returns the drag force damping curve of the bone chain.
 * @param index int
 * @returns Curve
 */
  getDragDampingCurve(index: int): Curve;
/**
 * Returns the end bone index of the bone chain.
 * @param index int
 * @returns int
 */
  getEndBone(index: int): int;
/**
 * Returns the end bone's tail direction of the bone chain when `is_end_bone_extended` is `true`.
 * @param index int
 * @returns int
 */
  getEndBoneDirection(index: int): int;
/**
 * Returns the end bone's tail length of the bone chain when `is_end_bone_extended` is `true`.
 * @param index int
 * @returns float
 */
  getEndBoneLength(index: int): float;
/**
 * Returns the end bone name of the bone chain.
 * @param index int
 * @returns string
 */
  getEndBoneName(index: int): string;
/**
 * Returns the exclude collision count of the bone chain's exclude collision list when `are_all_child_collisions_enabled` is `true`.
 * @param index int
 * @returns int
 */
  getExcludeCollisionCount(index: int): int;
/**
 * Returns the node path of the `SpringBoneCollision3D` at `collision` in the bone chain's exclude collision list when `are_all_child_collisions_enabled` is `true`.
 * @param index int
 * @param collision int
 * @returns NodePath
 */
  getExcludeCollisionPath(index: int, collision: int): NodePath;
/**
 * Returns the gravity amount of the bone chain.
 * @param index int
 * @returns float
 */
  getGravity(index: int): float;
/**
 * Returns the gravity amount damping curve of the bone chain.
 * @param index int
 * @returns Curve
 */
  getGravityDampingCurve(index: int): Curve;
/**
 * Returns the gravity direction of the bone chain.
 * @param index int
 * @returns Vector3
 */
  getGravityDirection(index: int): Vector3;
/**
 * Returns the bone index at `joint` in the bone chain's joint list.
 * @param index int
 * @param joint int
 * @returns int
 */
  getJointBone(index: int, joint: int): int;
/**
 * Returns the bone name at `joint` in the bone chain's joint list.
 * @param index int
 * @param joint int
 * @returns string
 */
  getJointBoneName(index: int, joint: int): string;
/**
 * Returns the joint count of the bone chain's joint list.
 * @param index int
 * @returns int
 */
  getJointCount(index: int): int;
/**
 * Returns the drag force at `joint` in the bone chain's joint list.
 * @param index int
 * @param joint int
 * @returns float
 */
  getJointDrag(index: int, joint: int): float;
/**
 * Returns the gravity amount at `joint` in the bone chain's joint list.
 * @param index int
 * @param joint int
 * @returns float
 */
  getJointGravity(index: int, joint: int): float;
/**
 * Returns the gravity direction at `joint` in the bone chain's joint list.
 * @param index int
 * @param joint int
 * @returns Vector3
 */
  getJointGravityDirection(index: int, joint: int): Vector3;
/**
 * Returns the radius at `joint` in the bone chain's joint list.
 * @param index int
 * @param joint int
 * @returns float
 */
  getJointRadius(index: int, joint: int): float;
/**
 * Returns the rotation axis at `joint` in the bone chain's joint list.
 * @param index int
 * @param joint int
 * @returns int
 */
  getJointRotationAxis(index: int, joint: int): int;
/**
 * Returns the stiffness force at `joint` in the bone chain's joint list.
 * @param index int
 * @param joint int
 * @returns float
 */
  getJointStiffness(index: int, joint: int): float;
/**
 * Returns the joint radius of the bone chain.
 * @param index int
 * @returns float
 */
  getRadius(index: int): float;
/**
 * Returns the joint radius damping curve of the bone chain.
 * @param index int
 * @returns Curve
 */
  getRadiusDampingCurve(index: int): Curve;
/**
 * Returns the root bone index of the bone chain.
 * @param index int
 * @returns int
 */
  getRootBone(index: int): int;
/**
 * Returns the root bone name of the bone chain.
 * @param index int
 * @returns string
 */
  getRootBoneName(index: int): string;
/**
 * Returns the rotation axis of the bone chain.
 * @param index int
 * @returns int
 */
  getRotationAxis(index: int): int;
/**
 * Returns the stiffness force of the bone chain.
 * @param index int
 * @returns float
 */
  getStiffness(index: int): float;
/**
 * Returns the stiffness force damping curve of the bone chain.
 * @param index int
 * @returns Curve
 */
  getStiffnessDampingCurve(index: int): Curve;
/**
 * Returns `true` if the config can be edited individually for each joint.
 * @param index int
 * @returns boolean
 */
  isConfigIndividual(index: int): boolean;
/**
 * Returns `true` if the end bone is extended to have the tail.
 * @param index int
 * @returns boolean
 */
  isEndBoneExtended(index: int): boolean;
/**
 * Resets a simulating state with respect to the current bone pose.
 * It is useful to prevent the simulation result getting violent. For example, calling this immediately after a call to `AnimationPlayer.play` without a fading, or within the previous `SkeletonModifier3D.modification_processed` signal if it's condition changes significantly.
 */
  reset(): void;
/**
 * Sets the center bone index of the bone chain.
 * @param index int
 * @param bone int
 */
  setCenterBone(index: int, bone: int): void;
/**
 * Sets the center bone name of the bone chain.
 * @param index int
 * @param boneName string
 */
  setCenterBoneName(index: int, boneName: string): void;
/**
 * Sets what the center originates from in the bone chain.
 * Bone movement is calculated based on the difference in relative distance between center and bone in the previous and next frames.
 * For example, if the parent `Skeleton3D` is used as the center, the bones are considered to have not moved if the `Skeleton3D` moves in the world.
 * In this case, only a change in the bone pose is considered to be a bone movement.
 * @param index int
 * @param centerFrom int
 */
  setCenterFrom(index: int, centerFrom: int): void;
/**
 * Sets the center node path of the bone chain.
 * @param index int
 * @param nodePath NodePath
 */
  setCenterNode(index: int, nodePath: NodePath): void;
/**
 * Sets the number of collisions in the collision list at `index` in the settings when `are_all_child_collisions_enabled` is `false`.
 * @param index int
 * @param count int
 */
  setCollisionCount(index: int, count: int): void;
/**
 * Sets the node path of the `SpringBoneCollision3D` at `collision` in the bone chain's collision list when `are_all_child_collisions_enabled` is `false`.
 * @param index int
 * @param collision int
 * @param nodePath NodePath
 */
  setCollisionPath(index: int, collision: int, nodePath: NodePath): void;
/**
 * Sets the drag force of the bone chain. The greater the value, the more suppressed the wiggling.
 * The value is scaled by `set_drag_damping_curve` and cached in each joint setting in the joint list.
 * @param index int
 * @param drag float
 */
  setDrag(index: int, drag: float): void;
/**
 * Sets the drag force damping curve of the bone chain.
 * @param index int
 * @param curve Curve
 */
  setDragDampingCurve(index: int, curve: Curve): void;
/**
 * If sets `enabled` to `true`, the all child `SpringBoneCollision3D`s are collided and `set_exclude_collision_path` is enabled as an exclusion list at `index` in the settings.
 * If sets `enabled` to `false`, you need to manually register all valid collisions with `set_collision_path`.
 * @param index int
 * @param enabled boolean
 */
  setEnableAllChildCollisions(index: int, enabled: boolean): void;
/**
 * Sets the end bone index of the bone chain.
 * @param index int
 * @param bone int
 */
  setEndBone(index: int, bone: int): void;
/**
 * Sets the end bone tail direction of the bone chain when `is_end_bone_extended` is `true`.
 * @param index int
 * @param boneDirection int
 */
  setEndBoneDirection(index: int, boneDirection: int): void;
/**
 * Sets the end bone tail length of the bone chain when `is_end_bone_extended` is `true`.
 * @param index int
 * @param length float
 */
  setEndBoneLength(index: int, length: float): void;
/**
 * Sets the end bone name of the bone chain.
 * 
 * **Note:** End bone must be the root bone or a child of the root bone. If they are the same, the tail must be extended by `set_extend_end_bone` to jiggle the bone.
 * @param index int
 * @param boneName string
 */
  setEndBoneName(index: int, boneName: string): void;
/**
 * Sets the number of exclude collisions in the exclude collision list at `index` in the settings when `are_all_child_collisions_enabled` is `true`.
 * @param index int
 * @param count int
 */
  setExcludeCollisionCount(index: int, count: int): void;
/**
 * Sets the node path of the `SpringBoneCollision3D` at `collision` in the bone chain's exclude collision list when `are_all_child_collisions_enabled` is `true`.
 * @param index int
 * @param collision int
 * @param nodePath NodePath
 */
  setExcludeCollisionPath(index: int, collision: int, nodePath: NodePath): void;
/**
 * If `enabled` is `true`, the end bone is extended to have the tail.
 * The extended tail config is allocated to the last element in the joint list.
 * In other words, if you set `enabled` is `false`, the config of last element in the joint list has no effect in the simulated result.
 * @param index int
 * @param enabled boolean
 */
  setExtendEndBone(index: int, enabled: boolean): void;
/**
 * Sets the gravity amount of the bone chain. This value is not an acceleration, but a constant velocity of movement in `set_gravity_direction`.
 * If `gravity` is not `0`, the modified pose will not return to the original pose since it is always affected by gravity.
 * The value is scaled by `set_gravity_damping_curve` and cached in each joint setting in the joint list.
 * @param index int
 * @param gravity float
 */
  setGravity(index: int, gravity: float): void;
/**
 * Sets the gravity amount damping curve of the bone chain.
 * @param index int
 * @param curve Curve
 */
  setGravityDampingCurve(index: int, curve: Curve): void;
/**
 * Sets the gravity direction of the bone chain. This value is internally normalized and then multiplied by `set_gravity`.
 * The value is cached in each joint setting in the joint list.
 * @param index int
 * @param gravityDirection Vector3
 */
  setGravityDirection(index: int, gravityDirection: Vector3): void;
/**
 * If `enabled` is `true`, the config can be edited individually for each joint.
 * @param index int
 * @param enabled boolean
 */
  setIndividualConfig(index: int, enabled: boolean): void;
/**
 * Sets the drag force at `joint` in the bone chain's joint list when `is_config_individual` is `true`.
 * @param index int
 * @param joint int
 * @param drag float
 */
  setJointDrag(index: int, joint: int, drag: float): void;
/**
 * Sets the gravity amount at `joint` in the bone chain's joint list when `is_config_individual` is `true`.
 * @param index int
 * @param joint int
 * @param gravity float
 */
  setJointGravity(index: int, joint: int, gravity: float): void;
/**
 * Sets the gravity direction at `joint` in the bone chain's joint list when `is_config_individual` is `true`.
 * @param index int
 * @param joint int
 * @param gravityDirection Vector3
 */
  setJointGravityDirection(index: int, joint: int, gravityDirection: Vector3): void;
/**
 * Sets the joint radius at `joint` in the bone chain's joint list when `is_config_individual` is `true`.
 * @param index int
 * @param joint int
 * @param radius float
 */
  setJointRadius(index: int, joint: int, radius: float): void;
/**
 * Sets the rotation axis at `joint` in the bone chain's joint list when `is_config_individual` is `true`.
 * @param index int
 * @param joint int
 * @param axis int
 */
  setJointRotationAxis(index: int, joint: int, axis: int): void;
/**
 * Sets the stiffness force at `joint` in the bone chain's joint list when `is_config_individual` is `true`.
 * @param index int
 * @param joint int
 * @param stiffness float
 */
  setJointStiffness(index: int, joint: int, stiffness: float): void;
/**
 * Sets the joint radius of the bone chain. It is used to move and slide with the `SpringBoneCollision3D` in the collision list.
 * The value is scaled by `set_radius_damping_curve` and cached in each joint setting in the joint list.
 * @param index int
 * @param radius float
 */
  setRadius(index: int, radius: float): void;
/**
 * Sets the joint radius damping curve of the bone chain.
 * @param index int
 * @param curve Curve
 */
  setRadiusDampingCurve(index: int, curve: Curve): void;
/**
 * Sets the root bone index of the bone chain.
 * @param index int
 * @param bone int
 */
  setRootBone(index: int, bone: int): void;
/**
 * Sets the root bone name of the bone chain.
 * @param index int
 * @param boneName string
 */
  setRootBoneName(index: int, boneName: string): void;
/**
 * Sets the rotation axis of the bone chain. If sets a specific axis, it acts like a hinge joint.
 * The value is cached in each joint setting in the joint list.
 * 
 * **Note:** The rotation axis and the forward vector shouldn't be colinear to avoid unintended rotation since `SpringBoneSimulator3D` does not factor in twisting forces.
 * @param index int
 * @param axis int
 */
  setRotationAxis(index: int, axis: int): void;
/**
 * Sets the stiffness force of the bone chain. The greater the value, the faster it recovers to its initial pose.
 * If `stiffness` is `0`, the modified pose will not return to the original pose.
 * The value is scaled by `set_stiffness_damping_curve` and cached in each joint setting in the joint list.
 * @param index int
 * @param stiffness float
 */
  setStiffness(index: int, stiffness: float): void;
/**
 * Sets the stiffness force damping curve of the bone chain.
 * @param index int
 * @param curve Curve
 */
  setStiffnessDampingCurve(index: int, curve: Curve): void;
/**
 * Enumerated value for the +X axis.
 */
  static readonly BONE_DIRECTION_PLUS_X: int;
/**
 * Enumerated value for the -X axis.
 */
  static readonly BONE_DIRECTION_MINUS_X: int;
/**
 * Enumerated value for the +Y axis.
 */
  static readonly BONE_DIRECTION_PLUS_Y: int;
/**
 * Enumerated value for the -Y axis.
 */
  static readonly BONE_DIRECTION_MINUS_Y: int;
/**
 * Enumerated value for the +Z axis.
 */
  static readonly BONE_DIRECTION_PLUS_Z: int;
/**
 * Enumerated value for the -Z axis.
 */
  static readonly BONE_DIRECTION_MINUS_Z: int;
/**
 * Enumerated value for the axis from a parent bone to the child bone.
 */
  static readonly BONE_DIRECTION_FROM_PARENT: int;
/**
 * The world origin is defined as center.
 */
  static readonly CENTER_FROM_WORLD_ORIGIN: int;
/**
 * The `Node3D` specified by `set_center_node` is defined as center.
 * If `Node3D` is not found, the parent `Skeleton3D` is treated as center.
 */
  static readonly CENTER_FROM_NODE: int;
/**
 * The bone pose origin of the parent `Skeleton3D` specified by `set_center_bone` is defined as center.
 * If `Node3D` is not found, the parent `Skeleton3D` is treated as center.
 */
  static readonly CENTER_FROM_BONE: int;
/**
 * Enumerated value for the rotation of the X axis.
 */
  static readonly ROTATION_AXIS_X: int;
/**
 * Enumerated value for the rotation of the Y axis.
 */
  static readonly ROTATION_AXIS_Y: int;
/**
 * Enumerated value for the rotation of the Z axis.
 */
  static readonly ROTATION_AXIS_Z: int;
/**
 * Enumerated value for the unconstrained rotation.
 */
  static readonly ROTATION_AXIS_ALL: int;
}
