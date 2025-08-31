import type { CollisionObject2D, GodotArray, GodotDictionary, Node, Node2D, RID, Signal, StringName, Vector2, float, int } from "../index.d.ts";
/**
 * A region of 2D space that detects other `CollisionObject2D`s entering or exiting it.
 * 
 * `Area2D` is a region of 2D space defined by one or multiple `CollisionShape2D` or `CollisionPolygon2D` child nodes. It detects when other `CollisionObject2D`s enter or exit it, and it also keeps track of which collision objects haven't exited it yet (i.e. which one are overlapping it).
 * This node can also locally alter or override physics parameters (gravity, damping) and route audio to custom audio buses.
 * 
 * **Note:** Areas and bodies created with `PhysicsServer2D` might not interact as expected with `Area2D`s, and might not emit signals or track objects correctly.
 */
export class Area2D extends CollisionObject2D {
/**
 * The rate at which objects stop spinning in this area. Represents the angular velocity lost per second.
 * See `ProjectSettings.physics/2d/default_angular_damp` for more details about damping.
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
 * The area's gravity intensity (in pixels per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction.
 */
  gravity: float;
/**
 * The area's gravity vector (not normalized).
 */
  gravityDirection: Vector2;
/**
 * If `true`, gravity is calculated from a point (set via `gravity_point_center`). See also `gravity_space_override`.
 */
  gravityPoint: boolean;
/**
 * If gravity is a point (see `gravity_point`), this will be the point of attraction.
 */
  gravityPointCenter: Vector2;
/**
 * The distance at which the gravity strength is equal to `gravity`. For example, on a planet 100 pixels in radius with a surface gravity of 4.0 px/s², set the `gravity` to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 pixels from the center the gravity will be 1.0 px/s² (twice the distance, 1/4th the gravity), at 50 pixels it will be 16.0 px/s² (half the distance, 4x the gravity), and so on.
 * The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.
 */
  gravityPointUnitDistance: float;
/**
 * Override mode for gravity calculations within this area. See `SpaceOverride` for possible values.
 */
  gravitySpaceOverride: int;
/**
 * The rate at which objects stop moving in this area. Represents the linear velocity lost per second.
 * See `ProjectSettings.physics/2d/default_linear_damp` for more details about damping.
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
 * The area's priority. Higher priority areas are processed first. The `World2D`'s physics is always processed last, after all areas.
 */
  priority: int;
/**
 * Returns a list of intersecting `Area2D`s. The overlapping area's `CollisionObject2D.collision_layer` must be part of this area's `CollisionObject2D.collision_mask` in order to be detected.
 * For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 * @returns Area2D[]
 */
  getOverlappingAreas(): Area2D[];
/**
 * Returns a list of intersecting `PhysicsBody2D`s and `TileMap`s. The overlapping body's `CollisionObject2D.collision_layer` must be part of this area's `CollisionObject2D.collision_mask` in order to be detected.
 * For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 * @returns Node2D[]
 */
  getOverlappingBodies(): Node2D[];
/**
 * Returns `true` if intersecting any `Area2D`s, otherwise returns `false`. The overlapping area's `CollisionObject2D.collision_layer` must be part of this area's `CollisionObject2D.collision_mask` in order to be detected.
 * For performance reasons (collisions are all processed at the same time) the list of overlapping areas is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 * @returns boolean
 */
  hasOverlappingAreas(): boolean;
/**
 * Returns `true` if intersecting any `PhysicsBody2D`s or `TileMap`s, otherwise returns `false`. The overlapping body's `CollisionObject2D.collision_layer` must be part of this area's `CollisionObject2D.collision_mask` in order to be detected.
 * For performance reasons (collisions are all processed at the same time) the list of overlapping bodies is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 * @returns boolean
 */
  hasOverlappingBodies(): boolean;
/**
 * Returns `true` if the given `Area2D` intersects or overlaps this `Area2D`, `false` otherwise.
 * 
 * **Note:** The result of this test is not immediate after moving objects. For performance, the list of overlaps is updated once per frame and before the physics step. Consider using signals instead.
 * @param area Node
 * @returns boolean
 */
  overlapsArea(area: Node): boolean;
/**
 * Returns `true` if the given physics body intersects or overlaps this `Area2D`, `false` otherwise.
 * 
 * **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.
 * The `body` argument can either be a `PhysicsBody2D` or a `TileMap` instance. While TileMaps are not physics bodies themselves, they register their tiles with collision shapes as a virtual physics body.
 * @param body Node
 * @returns boolean
 */
  overlapsBody(body: Node): boolean;
/**
 * Emitted when the received `area` enters this area. Requires `monitoring` to be set to `true`.
 */
  areaEntered: Signal<[area: Area2D]>;
/**
 * Emitted when the received `area` exits this area. Requires `monitoring` to be set to `true`.
 */
  areaExited: Signal<[area: Area2D]>;
/**
 * Emitted when a `Shape2D` of the received `area` enters a shape of this area. Requires `monitoring` to be set to `true`.
 * `local_shape_index` and `area_shape_index` contain indices of the interacting shapes from this area and the other area, respectively. `area_rid` contains the `RID` of the other area. These values can be used with the `PhysicsServer2D`.
 * 
 * **Example:** Get the `CollisionShape2D` node from the shape index:
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
  areaShapeEntered: Signal<[areaRid: RID, area: Area2D, areaShapeIndex: int, localShapeIndex: int]>;
/**
 * Emitted when a `Shape2D` of the received `area` exits a shape of this area. Requires `monitoring` to be set to `true`.
 * See also `area_shape_entered`.
 */
  areaShapeExited: Signal<[areaRid: RID, area: Area2D, areaShapeIndex: int, localShapeIndex: int]>;
/**
 * Emitted when the received `body` enters this area. `body` can be a `PhysicsBody2D` or a `TileMap`. `TileMap`s are detected if their `TileSet` has collision shapes configured. Requires `monitoring` to be set to `true`.
 */
  bodyEntered: Signal<[body: Node2D]>;
/**
 * Emitted when the received `body` exits this area. `body` can be a `PhysicsBody2D` or a `TileMap`. `TileMap`s are detected if their `TileSet` has collision shapes configured. Requires `monitoring` to be set to `true`.
 */
  bodyExited: Signal<[body: Node2D]>;
/**
 * Emitted when a `Shape2D` of the received `body` enters a shape of this area. `body` can be a `PhysicsBody2D` or a `TileMap`. `TileMap`s are detected if their `TileSet` has collision shapes configured. Requires `monitoring` to be set to `true`.
 * `local_shape_index` and `body_shape_index` contain indices of the interacting shapes from this area and the interacting body, respectively. `body_rid` contains the `RID` of the body. These values can be used with the `PhysicsServer2D`.
 * 
 * **Example:** Get the `CollisionShape2D` node from the shape index:
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
  bodyShapeEntered: Signal<[bodyRid: RID, body: Node2D, bodyShapeIndex: int, localShapeIndex: int]>;
/**
 * Emitted when a `Shape2D` of the received `body` exits a shape of this area. `body` can be a `PhysicsBody2D` or a `TileMap`. `TileMap`s are detected if their `TileSet` has collision shapes configured. Requires `monitoring` to be set to `true`.
 * See also `body_shape_entered`.
 */
  bodyShapeExited: Signal<[bodyRid: RID, body: Node2D, bodyShapeIndex: int, localShapeIndex: int]>;
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
