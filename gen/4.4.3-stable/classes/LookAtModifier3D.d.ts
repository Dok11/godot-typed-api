import type { GodotArray, GodotDictionary, NodePath, SkeletonModifier3D, Vector3, float, int } from "../index.d.ts";
/**
 * The `LookAtModifier3D` rotates a bone to look at a target.
 * 
 * This `SkeletonModifier3D` rotates a bone to look at a target. This is helpful for moving a character's head to look at the player, rotating a turret to look at a target, or any other case where you want to make a bone rotate towards something quickly and easily.
 * When applying multiple `LookAtModifier3D`s, the `LookAtModifier3D` assigned to the parent bone must be put above the `LookAtModifier3D` assigned to the child bone in the list in order for the child bone results to be correct.
 */
export class LookAtModifier3D extends SkeletonModifier3D {
/**
 * Index of the `bone_name` in the parent `Skeleton3D`.
 */
  bone: int;
/**
 * The bone name of the `Skeleton3D` that the modification will operate on.
 */
  boneName: string;
/**
 * The duration of the time-based interpolation. Interpolation is triggered at the following cases:
 * - When the target node is changed
 * - When an axis is flipped due to angle limitation
 * 
 * **Note:** The flipping occurs when the target is outside the angle limitation and the internally computed secondary rotation axis of the forward vector is flipped. Visually, it occurs when the target is outside the angle limitation and crosses the plane of the `forward_axis` and `primary_rotation_axis`.
 */
  duration: float;
/**
 * The ease type of the time-based interpolation. See also `Tween.EaseType`.
 */
  easeType: int;
/**
 * The forward axis of the bone. This `SkeletonModifier3D` modifies the bone so that this axis points toward the `target_node`.
 */
  forwardAxis: int;
/**
 * Index of the `origin_bone_name` in the parent `Skeleton3D`.
 */
  originBone: int;
/**
 * If `origin_from` is `ORIGIN_FROM_SPECIFIC_BONE`, the bone global pose position specified for this is used as origin.
 */
  originBoneName: string;
/**
 * If `origin_from` is `ORIGIN_FROM_EXTERNAL_NODE`, the global position of the `Node3D` specified for this is used as origin.
 */
  originExternalNode: NodePath;
/**
 * This value determines from what origin is retrieved for use in the calculation of the forward vector.
 */
  originFrom: int;
/**
 * The offset of the bone pose origin. Matching the origins by offset is useful for cases where multiple bones must always face the same direction, such as the eyes.
 * 
 * **Note:** This value indicates the local position of the object set in `origin_from`.
 */
  originOffset: Vector3;
/**
 * If the target passes through too close to the origin than this value, time-based interpolation is used even if the target is within the angular limitations, to prevent the angular velocity from becoming too high.
 */
  originSafeMargin: float;
/**
 * The threshold to start damping for `primary_limit_angle`. It provides non-linear (b-spline) interpolation, let it feel more resistance the more it rotate to the edge limit. This is useful for simulating the limits of human motion.
 * If `1.0`, no damping is performed. If `0.0`, damping is always performed.
 */
  primaryDampThreshold: float;
/**
 * The limit angle of the primary rotation when `symmetry_limitation` is `true`.
 */
  primaryLimitAngle: float;
/**
 * The threshold to start damping for `primary_negative_limit_angle`.
 */
  primaryNegativeDampThreshold: float;
/**
 * The limit angle of negative side of the primary rotation when `symmetry_limitation` is `false`.
 */
  primaryNegativeLimitAngle: float;
/**
 * The threshold to start damping for `primary_positive_limit_angle`.
 */
  primaryPositiveDampThreshold: float;
/**
 * The limit angle of positive side of the primary rotation when `symmetry_limitation` is `false`.
 */
  primaryPositiveLimitAngle: float;
/**
 * The axis of the first rotation. This `SkeletonModifier3D` works by compositing the rotation by Euler angles to prevent to rotate the `forward_axis`.
 */
  primaryRotationAxis: int;
/**
 * The threshold to start damping for `secondary_limit_angle`.
 */
  secondaryDampThreshold: float;
/**
 * The limit angle of the secondary rotation when `symmetry_limitation` is `true`.
 */
  secondaryLimitAngle: float;
/**
 * The threshold to start damping for `secondary_negative_limit_angle`.
 */
  secondaryNegativeDampThreshold: float;
/**
 * The limit angle of negative side of the secondary rotation when `symmetry_limitation` is `false`.
 */
  secondaryNegativeLimitAngle: float;
/**
 * The threshold to start damping for `secondary_positive_limit_angle`.
 */
  secondaryPositiveDampThreshold: float;
/**
 * The limit angle of positive side of the secondary rotation when `symmetry_limitation` is `false`.
 */
  secondaryPositiveLimitAngle: float;
/**
 * If `true`, the limitations are spread from the bone symmetrically.
 * If `false`, the limitation can be specified separately for each side of the bone rest.
 */
  symmetryLimitation: boolean;
/**
 * The `NodePath` to the node that is the target for the look at modification. This node is what the modification will rotate the bone to.
 */
  targetNode: NodePath;
/**
 * The transition type of the time-based interpolation. See also `Tween.TransitionType`.
 */
  transitionType: int;
/**
 * If `true`, limits the degree of rotation. This helps prevent the character's neck from rotating 360 degrees.
 * 
 * **Note:** As with `AnimationTree` blending, interpolation is provided that favors `Skeleton3D.get_bone_rest`. This means that interpolation does not select the shortest path in some cases.
 * 
 * **Note:** Some `transition_type` may exceed the limitations (e.g. `Back`, `Elastic`, and `Spring`). If interpolation occurs while overshooting the limitations, the result might possibly not respect the bone rest.
 */
  useAngleLimitation: boolean;
/**
 * If `true`, provides rotation by two axes.
 */
  useSecondaryRotation: boolean;
/**
 * Returns the remaining seconds of the time-based interpolation.
 * @returns float
 */
  getInterpolationRemaining(): float;
/**
 * Returns whether the time-based interpolation is running or not. If `true`, it is equivalent to `get_interpolation_remaining` being `0`.
 * This is useful to determine whether a `LookAtModifier3D` can be removed safely.
 * @returns boolean
 */
  isInterpolating(): boolean;
/**
 * Returns whether the target is within the angle limitations. It is useful for unsetting the `target_node` when the target is outside of the angle limitations.
 * 
 * **Note:** The value is updated after `SkeletonModifier3D._process_modification`. To retrieve this value correctly, we recommend using the signal `SkeletonModifier3D.modification_processed`.
 * @returns boolean
 */
  isTargetWithinLimitation(): boolean;
/**
 * The bone rest position of the bone specified in `bone` is used as origin.
 */
  static readonly ORIGIN_FROM_SELF: int;
/**
 * The bone global pose position of the bone specified in `origin_bone` is used as origin.
 * 
 * **Note:** It is recommended that you select only the parent bone unless you are familiar with the bone processing process. The specified bone pose at the time the `LookAtModifier3D` is processed is used as a reference. In other words, if you specify a child bone and the `LookAtModifier3D` causes the child bone to move, the rendered result and direction will not match.
 */
  static readonly ORIGIN_FROM_SPECIFIC_BONE: int;
/**
 * The global position of the `Node3D` specified in `origin_external_node` is used as origin.
 * 
 * **Note:** Same as `ORIGIN_FROM_SPECIFIC_BONE`, when specifying a `BoneAttachment3D` with a child bone assigned, the rendered result and direction will not match.
 */
  static readonly ORIGIN_FROM_EXTERNAL_NODE: int;
}
