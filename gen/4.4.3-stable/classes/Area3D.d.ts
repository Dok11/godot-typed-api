import type { CollisionObject3D, GodotArray, GodotDictionary, Node, Node3D, NodePath, RID, Signal, StringName, Vector3, float, int } from "../index.d.ts";
/**
 * A region of 3D space that detects other `CollisionObject3D`s entering or exiting it.
 * 
 * `Area3D` is a region of 3D space defined by one or multiple `CollisionShape3D` or `CollisionPolygon3D` child nodes. It detects when other `CollisionObject3D`s enter or exit it, and it also keeps track of which collision objects haven't exited it yet (i.e. which one are overlapping it).
 * This node can also locally alter or override physics parameters (gravity, damping) and route audio to custom audio buses.
 * 
 * **Note:** Areas and bodies created with `PhysicsServer3D` might not interact as expected with `Area3D`s, and might not emit signals or track objects correctly.
 * 
 * **Warning:** Using a `ConcavePolygonShape3D` inside a `CollisionShape3D` child of this node (created e.g. by using the **Create Trimesh Collision Sibling** option in the **Mesh** menu that appears when selecting a `MeshInstance3D` node) may give unexpected results, since this collision shape is hollow. If this is not desired, it has to be split into multiple `ConvexPolygonShape3D`s or primitive shapes like `BoxShape3D`, or in some cases it may be replaceable by a `CollisionPolygon3D`.
 */
export class Area3D extends CollisionObject3D {
/**
 * The rate at which objects stop spinning in this area. Represents the angular velocity lost per second.
 * See `ProjectSettings.physics/3d/default_angular_damp` for more details about damping.
 */
  angularDamp: float;
/**
 * Override mode for angular damping calculations within this area. See `SpaceOverride` for possible values.
 */
  angularDampSpaceOverride: int;
/**
 * The name of the area's audio bus.
 */
  audioBusName: StringName;
/**
 * If `true`, the area's audio bus overrides the default audio bus.
 */
  audioBusOverride: boolean;
/**
 * The area's gravity intensity (in meters per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction.
 */
  gravity: float;
/**
 * The area's gravity vector (not normalized).
 */
  gravityDirection: Vector3;
/**
 * If `true`, gravity is calculated from a point (set via `gravity_point_center`). See also `gravity_space_override`.
 */
  gravityPoint: boolean;
/**
 * If gravity is a point (see `gravity_point`), this will be the point of attraction.
 */
  gravityPointCenter: Vector3;
/**
 * The distance at which the gravity strength is equal to `gravity`. For example, on a planet 100 meters in radius with a surface gravity of 4.0 m/s², set the `gravity` to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 meters from the center the gravity will be 1.0 m/s² (twice the distance, 1/4th the gravity), at 50 meters it will be 16.0 m/s² (half the distance, 4x the gravity), and so on.
 * The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.
 */
  gravityPointUnitDistance: float;
/**
 * Override mode for gravity calculations within this area. See `SpaceOverride` for possible values.
 */
  gravitySpaceOverride: int;
/**
 * The rate at which objects stop moving in this area. Represents the linear velocity lost per second.
 * See `ProjectSettings.physics/3d/default_linear_damp` for more details about damping.
 */
  linearDamp: float;
/**
 * Override mode for linear damping calculations within this area. See `SpaceOverride` for possible values.
 */
  linearDampSpaceOverride: int;
/**
 * If `true`, other monitoring areas can detect this area.
 */
  monitorable: boolean;
/**
 * If `true`, the area detects bodies or areas entering and exiting it.
 */
  monitoring: boolean;
/**
 * The area's priority. Higher priority areas are processed first. The `World3D`'s physics is always processed last, after all areas.
 */
  priority: int;
/**
 * The degree to which this area applies reverb to its associated audio. Ranges from `0` to `1` with `0.1` precision.
 */
  reverbBusAmount: float;
/**
 * If `true`, the area applies reverb to its associated audio.
 */
  reverbBusEnabled: boolean;
/**
 * The name of the reverb bus to use for this area's associated audio.
 */
  reverbBusName: StringName;
/**
 * The degree to which this area's reverb is a uniform effect. Ranges from `0` to `1` with `0.1` precision.
 */
  reverbBusUniformity: float;
/**
 * The exponential rate at which wind force decreases with distance from its origin.
 * 
 * **Note:** This wind force only applies to `SoftBody3D` nodes. Other physics bodies are currently not affected by wind.
 */
  windAttenuationFactor: float;
/**
 * The magnitude of area-specific wind force.
 * 
 * **Note:** This wind force only applies to `SoftBody3D` nodes. Other physics bodies are currently not affected by wind.
 */
  windForceMagnitude: float;
/**
 * The `Node3D` which is used to specify the direction and origin of an area-specific wind force. The direction is opposite to the z-axis of the `Node3D`'s local transform, and its origin is the origin of the `Node3D`'s local transform.
 * 
 * **Note:** This wind force only applies to `SoftBody3D` nodes. Other physics bodies are currently not affected by wind.
 */
  windSourcePath: NodePath;
/**
 * Returns a list of intersecting `Area3D`s. The overlapping area's `CollisionObject3D.collision_layer` must be part of this area's `CollisionObject3D.collision_mask` in order to be detected.
 * For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 * @returns Area3D[]
 */
  getOverlappingAreas(): Area3D[];
/**
 * Returns a list of intersecting `PhysicsBody3D`s and `GridMap`s. The overlapping body's `CollisionObject3D.collision_layer` must be part of this area's `CollisionObject3D.collision_mask` in order to be detected.
 * For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 * @returns Node3D[]
 */
  getOverlappingBodies(): Node3D[];
/**
 * Returns `true` if intersecting any `Area3D`s, otherwise returns `false`. The overlapping area's `CollisionObject3D.collision_layer` must be part of this area's `CollisionObject3D.collision_mask` in order to be detected.
 * For performance reasons (collisions are all processed at the same time) the list of overlapping areas is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 * @returns boolean
 */
  hasOverlappingAreas(): boolean;
/**
 * Returns `true` if intersecting any `PhysicsBody3D`s or `GridMap`s, otherwise returns `false`. The overlapping body's `CollisionObject3D.collision_layer` must be part of this area's `CollisionObject3D.collision_mask` in order to be detected.
 * For performance reasons (collisions are all processed at the same time) the list of overlapping bodies is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 * @returns boolean
 */
  hasOverlappingBodies(): boolean;
/**
 * Returns `true` if the given `Area3D` intersects or overlaps this `Area3D`, `false` otherwise.
 * 
 * **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.
 * @param area Node
 * @returns boolean
 */
  overlapsArea(area: Node): boolean;
/**
 * Returns `true` if the given physics body intersects or overlaps this `Area3D`, `false` otherwise.
 * 
 * **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.
 * The `body` argument can either be a `PhysicsBody3D` or a `GridMap` instance. While GridMaps are not physics body themselves, they register their tiles with collision shapes as a virtual physics body.
 * @param body Node
 * @returns boolean
 */
  overlapsBody(body: Node): boolean;
/**
 * Emitted when the received `area` enters this area. Requires `monitoring` to be set to `true`.
 */
  areaEntered: Signal<[area: Area3D]>;
/**
 * Emitted when the received `area` exits this area. Requires `monitoring` to be set to `true`.
 */
  areaExited: Signal<[area: Area3D]>;
/**
 * Emitted when a `Shape3D` of the received `area` enters a shape of this area. Requires `monitoring` to be set to `true`.
 * `local_shape_index` and `area_shape_index` contain indices of the interacting shapes from this area and the other area, respectively. `area_rid` contains the `RID` of the other area. These values can be used with the `PhysicsServer3D`.
 * 
 * **Example:** Get the `CollisionShape3D` node from the shape index:
 * 
 * 				```gdscript
 * 
 * 				var other_shape_owner = area.shape_find_owner(area_shape_index)
 * 				var other_shape_node = area.shape_owner_get_owner(other_shape_owner)
 * 
 * 				var local_shape_owner = shape_find_owner(local_shape_index)
 * 				var local_shape_node = shape_owner_get_owner(local_shape_owner)
 * 				
 * 
 * ```
 * 
 */
  areaShapeEntered: Signal<[areaRid: RID, area: Area3D, areaShapeIndex: int, localShapeIndex: int]>;
/**
 * Emitted when a `Shape3D` of the received `area` exits a shape of this area. Requires `monitoring` to be set to `true`.
 * See also `area_shape_entered`.
 */
  areaShapeExited: Signal<[areaRid: RID, area: Area3D, areaShapeIndex: int, localShapeIndex: int]>;
/**
 * Emitted when the received `body` enters this area. `body` can be a `PhysicsBody3D` or a `GridMap`. `GridMap`s are detected if their `MeshLibrary` has collision shapes configured. Requires `monitoring` to be set to `true`.
 */
  bodyEntered: Signal<[body: Node3D]>;
/**
 * Emitted when the received `body` exits this area. `body` can be a `PhysicsBody3D` or a `GridMap`. `GridMap`s are detected if their `MeshLibrary` has collision shapes configured. Requires `monitoring` to be set to `true`.
 */
  bodyExited: Signal<[body: Node3D]>;
/**
 * Emitted when a `Shape3D` of the received `body` enters a shape of this area. `body` can be a `PhysicsBody3D` or a `GridMap`. `GridMap`s are detected if their `MeshLibrary` has collision shapes configured. Requires `monitoring` to be set to `true`.
 * `local_shape_index` and `body_shape_index` contain indices of the interacting shapes from this area and the interacting body, respectively. `body_rid` contains the `RID` of the body. These values can be used with the `PhysicsServer3D`.
 * 
 * **Example:** Get the `CollisionShape3D` node from the shape index:
 * 
 * 				```gdscript
 * 
 * 				var body_shape_owner = body.shape_find_owner(body_shape_index)
 * 				var body_shape_node = body.shape_owner_get_owner(body_shape_owner)
 * 
 * 				var local_shape_owner = shape_find_owner(local_shape_index)
 * 				var local_shape_node = shape_owner_get_owner(local_shape_owner)
 * 				
 * 
 * ```
 * 
 */
  bodyShapeEntered: Signal<[bodyRid: RID, body: Node3D, bodyShapeIndex: int, localShapeIndex: int]>;
/**
 * Emitted when a `Shape3D` of the received `body` exits a shape of this area. `body` can be a `PhysicsBody3D` or a `GridMap`. `GridMap`s are detected if their `MeshLibrary` has collision shapes configured. Requires `monitoring` to be set to `true`.
 * See also `body_shape_entered`.
 */
  bodyShapeExited: Signal<[bodyRid: RID, body: Node3D, bodyShapeIndex: int, localShapeIndex: int]>;
/**
 * This area does not affect gravity/damping.
 */
  static readonly SPACE_OVERRIDE_DISABLED: int;
/**
 * This area adds its gravity/damping values to whatever has been calculated so far (in `priority` order).
 */
  static readonly SPACE_OVERRIDE_COMBINE: int;
/**
 * This area adds its gravity/damping values to whatever has been calculated so far (in `priority` order), ignoring any lower priority areas.
 */
  static readonly SPACE_OVERRIDE_COMBINE_REPLACE: int;
/**
 * This area replaces any gravity/damping, even the defaults, ignoring any lower priority areas.
 */
  static readonly SPACE_OVERRIDE_REPLACE: int;
/**
 * This area replaces any gravity/damping calculated so far (in `priority` order), but keeps calculating the rest of the areas.
 */
  static readonly SPACE_OVERRIDE_REPLACE_COMBINE: int;
}
