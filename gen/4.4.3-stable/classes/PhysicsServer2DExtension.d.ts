import type { Callable, GodotArray, GodotDictionary, PackedVector2Array, PhysicsDirectBodyState2D, PhysicsDirectSpaceState2D, PhysicsServer2D, RID, Transform2D, Variant, Vector2, float, int } from "../index.d.ts";
/**
 * Provides virtual methods that can be overridden to create custom `PhysicsServer2D` implementations.
 * 
 * This class extends `PhysicsServer2D` by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 * Intended for use with GDExtension to create custom implementations of `PhysicsServer2D`.
 */
export class PhysicsServer2DExtension extends PhysicsServer2D {
/**
 * Overridable version of `PhysicsServer2D.area_add_shape`.
 * @param area RID
 * @param shape RID
 * @param transform Transform2D
 * @param disabled boolean
 */
  private areaAddShape(area: RID, shape: RID, transform: Transform2D, disabled: boolean): void;
/**
 * Overridable version of `PhysicsServer2D.area_attach_canvas_instance_id`.
 * @param area RID
 * @param id int
 */
  private areaAttachCanvasInstanceId(area: RID, id: int): void;
/**
 * Overridable version of `PhysicsServer2D.area_attach_object_instance_id`.
 * @param area RID
 * @param id int
 */
  private areaAttachObjectInstanceId(area: RID, id: int): void;
/**
 * Overridable version of `PhysicsServer2D.area_clear_shapes`.
 * @param area RID
 */
  private areaClearShapes(area: RID): void;
/**
 * Overridable version of `PhysicsServer2D.area_create`.
 * @returns RID
 */
  private areaCreate(): RID;
/**
 * Overridable version of `PhysicsServer2D.area_get_canvas_instance_id`.
 * @param area RID
 * @returns int
 */
  private areaGetCanvasInstanceId(area: RID): int;
/**
 * Overridable version of `PhysicsServer2D.area_get_collision_layer`.
 * @param area RID
 * @returns int
 */
  private areaGetCollisionLayer(area: RID): int;
/**
 * Overridable version of `PhysicsServer2D.area_get_collision_mask`.
 * @param area RID
 * @returns int
 */
  private areaGetCollisionMask(area: RID): int;
/**
 * Overridable version of `PhysicsServer2D.area_get_object_instance_id`.
 * @param area RID
 * @returns int
 */
  private areaGetObjectInstanceId(area: RID): int;
/**
 * Overridable version of `PhysicsServer2D.area_get_param`.
 * @param area RID
 * @param param int
 * @returns Variant
 */
  private areaGetParam(area: RID, param: int): Variant;
/**
 * Overridable version of `PhysicsServer2D.area_get_shape`.
 * @param area RID
 * @param shapeIdx int
 * @returns RID
 */
  private areaGetShape(area: RID, shapeIdx: int): RID;
/**
 * Overridable version of `PhysicsServer2D.area_get_shape_count`.
 * @param area RID
 * @returns int
 */
  private areaGetShapeCount(area: RID): int;
/**
 * Overridable version of `PhysicsServer2D.area_get_shape_transform`.
 * @param area RID
 * @param shapeIdx int
 * @returns Transform2D
 */
  private areaGetShapeTransform(area: RID, shapeIdx: int): Transform2D;
/**
 * Overridable version of `PhysicsServer2D.area_get_space`.
 * @param area RID
 * @returns RID
 */
  private areaGetSpace(area: RID): RID;
/**
 * Overridable version of `PhysicsServer2D.area_get_transform`.
 * @param area RID
 * @returns Transform2D
 */
  private areaGetTransform(area: RID): Transform2D;
/**
 * Overridable version of `PhysicsServer2D.area_remove_shape`.
 * @param area RID
 * @param shapeIdx int
 */
  private areaRemoveShape(area: RID, shapeIdx: int): void;
/**
 * Overridable version of `PhysicsServer2D.area_set_area_monitor_callback`.
 * @param area RID
 * @param callback Callable
 */
  private areaSetAreaMonitorCallback(area: RID, callback: Callable): void;
/**
 * Overridable version of `PhysicsServer2D.area_set_collision_layer`.
 * @param area RID
 * @param layer int
 */
  private areaSetCollisionLayer(area: RID, layer: int): void;
/**
 * Overridable version of `PhysicsServer2D.area_set_collision_mask`.
 * @param area RID
 * @param mask int
 */
  private areaSetCollisionMask(area: RID, mask: int): void;
/**
 * Overridable version of `PhysicsServer2D.area_set_monitorable`.
 * @param area RID
 * @param monitorable boolean
 */
  private areaSetMonitorable(area: RID, monitorable: boolean): void;
/**
 * Overridable version of `PhysicsServer2D.area_set_monitor_callback`.
 * @param area RID
 * @param callback Callable
 */
  private areaSetMonitorCallback(area: RID, callback: Callable): void;
/**
 * Overridable version of `PhysicsServer2D.area_set_param`.
 * @param area RID
 * @param param int
 * @param value Variant
 */
  private areaSetParam(area: RID, param: int, value: Variant): void;
/**
 * If set to `true`, allows the area with the given `RID` to detect mouse inputs when the mouse cursor is hovering on it.
 * Overridable version of `PhysicsServer2D`'s internal `area_set_pickable` method. Corresponds to `CollisionObject2D.input_pickable`.
 * @param area RID
 * @param pickable boolean
 */
  private areaSetPickable(area: RID, pickable: boolean): void;
/**
 * Overridable version of `PhysicsServer2D.area_set_shape`.
 * @param area RID
 * @param shapeIdx int
 * @param shape RID
 */
  private areaSetShape(area: RID, shapeIdx: int, shape: RID): void;
/**
 * Overridable version of `PhysicsServer2D.area_set_shape_disabled`.
 * @param area RID
 * @param shapeIdx int
 * @param disabled boolean
 */
  private areaSetShapeDisabled(area: RID, shapeIdx: int, disabled: boolean): void;
/**
 * Overridable version of `PhysicsServer2D.area_set_shape_transform`.
 * @param area RID
 * @param shapeIdx int
 * @param transform Transform2D
 */
  private areaSetShapeTransform(area: RID, shapeIdx: int, transform: Transform2D): void;
/**
 * Overridable version of `PhysicsServer2D.area_set_space`.
 * @param area RID
 * @param space RID
 */
  private areaSetSpace(area: RID, space: RID): void;
/**
 * Overridable version of `PhysicsServer2D.area_set_transform`.
 * @param area RID
 * @param transform Transform2D
 */
  private areaSetTransform(area: RID, transform: Transform2D): void;
/**
 * Overridable version of `PhysicsServer2D.body_add_collision_exception`.
 * @param body RID
 * @param exceptedBody RID
 */
  private bodyAddCollisionException(body: RID, exceptedBody: RID): void;
/**
 * Overridable version of `PhysicsServer2D.body_add_constant_central_force`.
 * @param body RID
 * @param force Vector2
 */
  private bodyAddConstantCentralForce(body: RID, force: Vector2): void;
/**
 * Overridable version of `PhysicsServer2D.body_add_constant_force`.
 * @param body RID
 * @param force Vector2
 * @param position Vector2
 */
  private bodyAddConstantForce(body: RID, force: Vector2, position: Vector2): void;
/**
 * Overridable version of `PhysicsServer2D.body_add_constant_torque`.
 * @param body RID
 * @param torque float
 */
  private bodyAddConstantTorque(body: RID, torque: float): void;
/**
 * Overridable version of `PhysicsServer2D.body_add_shape`.
 * @param body RID
 * @param shape RID
 * @param transform Transform2D
 * @param disabled boolean
 */
  private bodyAddShape(body: RID, shape: RID, transform: Transform2D, disabled: boolean): void;
/**
 * Overridable version of `PhysicsServer2D.body_apply_central_force`.
 * @param body RID
 * @param force Vector2
 */
  private bodyApplyCentralForce(body: RID, force: Vector2): void;
/**
 * Overridable version of `PhysicsServer2D.body_apply_central_impulse`.
 * @param body RID
 * @param impulse Vector2
 */
  private bodyApplyCentralImpulse(body: RID, impulse: Vector2): void;
/**
 * Overridable version of `PhysicsServer2D.body_apply_force`.
 * @param body RID
 * @param force Vector2
 * @param position Vector2
 */
  private bodyApplyForce(body: RID, force: Vector2, position: Vector2): void;
/**
 * Overridable version of `PhysicsServer2D.body_apply_impulse`.
 * @param body RID
 * @param impulse Vector2
 * @param position Vector2
 */
  private bodyApplyImpulse(body: RID, impulse: Vector2, position: Vector2): void;
/**
 * Overridable version of `PhysicsServer2D.body_apply_torque`.
 * @param body RID
 * @param torque float
 */
  private bodyApplyTorque(body: RID, torque: float): void;
/**
 * Overridable version of `PhysicsServer2D.body_apply_torque_impulse`.
 * @param body RID
 * @param impulse float
 */
  private bodyApplyTorqueImpulse(body: RID, impulse: float): void;
/**
 * Overridable version of `PhysicsServer2D.body_attach_canvas_instance_id`.
 * @param body RID
 * @param id int
 */
  private bodyAttachCanvasInstanceId(body: RID, id: int): void;
/**
 * Overridable version of `PhysicsServer2D.body_attach_object_instance_id`.
 * @param body RID
 * @param id int
 */
  private bodyAttachObjectInstanceId(body: RID, id: int): void;
/**
 * Overridable version of `PhysicsServer2D.body_clear_shapes`.
 * @param body RID
 */
  private bodyClearShapes(body: RID): void;
/**
 * Given a `body`, a `shape`, and their respective parameters, this method should return `true` if a collision between the two would occur, with additional details passed in `results`.
 * Overridable version of `PhysicsServer2D`'s internal `shape_collide` method. Corresponds to `PhysicsDirectSpaceState2D.collide_shape`.
 * @param body RID
 * @param bodyShape int
 * @param shape RID
 * @param shapeXform Transform2D
 * @param motion Vector2
 * @param results unknown
 * @param resultMax int
 * @param resultCount unknown
 * @returns boolean
 */
  private bodyCollideShape(body: RID, bodyShape: int, shape: RID, shapeXform: Transform2D, motion: Vector2, results: unknown, resultMax: int, resultCount: unknown): boolean;
/**
 * Overridable version of `PhysicsServer2D.body_create`.
 * @returns RID
 */
  private bodyCreate(): RID;
/**
 * Overridable version of `PhysicsServer2D.body_get_canvas_instance_id`.
 * @param body RID
 * @returns int
 */
  private bodyGetCanvasInstanceId(body: RID): int;
/**
 * Returns the `RID`s of all bodies added as collision exceptions for the given `body`. See also `_body_add_collision_exception` and `_body_remove_collision_exception`.
 * Overridable version of `PhysicsServer2D`'s internal `body_get_collision_exceptions` method. Corresponds to `PhysicsBody2D.get_collision_exceptions`.
 * @param body RID
 * @returns RID[]
 */
  private bodyGetCollisionExceptions(body: RID): RID[];
/**
 * Overridable version of `PhysicsServer2D.body_get_collision_layer`.
 * @param body RID
 * @returns int
 */
  private bodyGetCollisionLayer(body: RID): int;
/**
 * Overridable version of `PhysicsServer2D.body_get_collision_mask`.
 * @param body RID
 * @returns int
 */
  private bodyGetCollisionMask(body: RID): int;
/**
 * Overridable version of `PhysicsServer2D.body_get_collision_priority`.
 * @param body RID
 * @returns float
 */
  private bodyGetCollisionPriority(body: RID): float;
/**
 * Overridable version of `PhysicsServer2D.body_get_constant_force`.
 * @param body RID
 * @returns Vector2
 */
  private bodyGetConstantForce(body: RID): Vector2;
/**
 * Overridable version of `PhysicsServer2D.body_get_constant_torque`.
 * @param body RID
 * @returns float
 */
  private bodyGetConstantTorque(body: RID): float;
/**
 * Overridable version of `PhysicsServer2D`'s internal `body_get_contacts_reported_depth_threshold` method.
 * 
 * **Note:** This method is currently unused by Godot's default physics implementation.
 * @param body RID
 * @returns float
 */
  private bodyGetContactsReportedDepthThreshold(body: RID): float;
/**
 * Overridable version of `PhysicsServer2D.body_get_continuous_collision_detection_mode`.
 * @param body RID
 * @returns int
 */
  private bodyGetContinuousCollisionDetectionMode(body: RID): int;
/**
 * Overridable version of `PhysicsServer2D.body_get_direct_state`.
 * @param body RID
 * @returns PhysicsDirectBodyState2D
 */
  private bodyGetDirectState(body: RID): PhysicsDirectBodyState2D;
/**
 * Overridable version of `PhysicsServer2D.body_get_max_contacts_reported`.
 * @param body RID
 * @returns int
 */
  private bodyGetMaxContactsReported(body: RID): int;
/**
 * Overridable version of `PhysicsServer2D.body_get_mode`.
 * @param body RID
 * @returns int
 */
  private bodyGetMode(body: RID): int;
/**
 * Overridable version of `PhysicsServer2D.body_get_object_instance_id`.
 * @param body RID
 * @returns int
 */
  private bodyGetObjectInstanceId(body: RID): int;
/**
 * Overridable version of `PhysicsServer2D.body_get_param`.
 * @param body RID
 * @param param int
 * @returns Variant
 */
  private bodyGetParam(body: RID, param: int): Variant;
/**
 * Overridable version of `PhysicsServer2D.body_get_shape`.
 * @param body RID
 * @param shapeIdx int
 * @returns RID
 */
  private bodyGetShape(body: RID, shapeIdx: int): RID;
/**
 * Overridable version of `PhysicsServer2D.body_get_shape_count`.
 * @param body RID
 * @returns int
 */
  private bodyGetShapeCount(body: RID): int;
/**
 * Overridable version of `PhysicsServer2D.body_get_shape_transform`.
 * @param body RID
 * @param shapeIdx int
 * @returns Transform2D
 */
  private bodyGetShapeTransform(body: RID, shapeIdx: int): Transform2D;
/**
 * Overridable version of `PhysicsServer2D.body_get_space`.
 * @param body RID
 * @returns RID
 */
  private bodyGetSpace(body: RID): RID;
/**
 * Overridable version of `PhysicsServer2D.body_get_state`.
 * @param body RID
 * @param state int
 * @returns Variant
 */
  private bodyGetState(body: RID, state: int): Variant;
/**
 * Overridable version of `PhysicsServer2D.body_is_omitting_force_integration`.
 * @param body RID
 * @returns boolean
 */
  private bodyIsOmittingForceIntegration(body: RID): boolean;
/**
 * Overridable version of `PhysicsServer2D.body_remove_collision_exception`.
 * @param body RID
 * @param exceptedBody RID
 */
  private bodyRemoveCollisionException(body: RID, exceptedBody: RID): void;
/**
 * Overridable version of `PhysicsServer2D.body_remove_shape`.
 * @param body RID
 * @param shapeIdx int
 */
  private bodyRemoveShape(body: RID, shapeIdx: int): void;
/**
 * Overridable version of `PhysicsServer2D.body_reset_mass_properties`.
 * @param body RID
 */
  private bodyResetMassProperties(body: RID): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_axis_velocity`.
 * @param body RID
 * @param axisVelocity Vector2
 */
  private bodySetAxisVelocity(body: RID, axisVelocity: Vector2): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_collision_layer`.
 * @param body RID
 * @param layer int
 */
  private bodySetCollisionLayer(body: RID, layer: int): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_collision_mask`.
 * @param body RID
 * @param mask int
 */
  private bodySetCollisionMask(body: RID, mask: int): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_collision_priority`.
 * @param body RID
 * @param priority float
 */
  private bodySetCollisionPriority(body: RID, priority: float): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_constant_force`.
 * @param body RID
 * @param force Vector2
 */
  private bodySetConstantForce(body: RID, force: Vector2): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_constant_torque`.
 * @param body RID
 * @param torque float
 */
  private bodySetConstantTorque(body: RID, torque: float): void;
/**
 * Overridable version of `PhysicsServer2D`'s internal `body_set_contacts_reported_depth_threshold` method.
 * 
 * **Note:** This method is currently unused by Godot's default physics implementation.
 * @param body RID
 * @param threshold float
 */
  private bodySetContactsReportedDepthThreshold(body: RID, threshold: float): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_continuous_collision_detection_mode`.
 * @param body RID
 * @param mode int
 */
  private bodySetContinuousCollisionDetectionMode(body: RID, mode: int): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_force_integration_callback`.
 * @param body RID
 * @param callable Callable
 * @param userdata Variant
 */
  private bodySetForceIntegrationCallback(body: RID, callable: Callable, userdata: Variant): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_max_contacts_reported`.
 * @param body RID
 * @param amount int
 */
  private bodySetMaxContactsReported(body: RID, amount: int): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_mode`.
 * @param body RID
 * @param mode int
 */
  private bodySetMode(body: RID, mode: int): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_omit_force_integration`.
 * @param body RID
 * @param enable boolean
 */
  private bodySetOmitForceIntegration(body: RID, enable: boolean): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_param`.
 * @param body RID
 * @param param int
 * @param value Variant
 */
  private bodySetParam(body: RID, param: int, value: Variant): void;
/**
 * If set to `true`, allows the body with the given `RID` to detect mouse inputs when the mouse cursor is hovering on it.
 * Overridable version of `PhysicsServer2D`'s internal `body_set_pickable` method. Corresponds to `CollisionObject2D.input_pickable`.
 * @param body RID
 * @param pickable boolean
 */
  private bodySetPickable(body: RID, pickable: boolean): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_shape`.
 * @param body RID
 * @param shapeIdx int
 * @param shape RID
 */
  private bodySetShape(body: RID, shapeIdx: int, shape: RID): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_shape_as_one_way_collision`.
 * @param body RID
 * @param shapeIdx int
 * @param enable boolean
 * @param margin float
 */
  private bodySetShapeAsOneWayCollision(body: RID, shapeIdx: int, enable: boolean, margin: float): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_shape_disabled`.
 * @param body RID
 * @param shapeIdx int
 * @param disabled boolean
 */
  private bodySetShapeDisabled(body: RID, shapeIdx: int, disabled: boolean): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_shape_transform`.
 * @param body RID
 * @param shapeIdx int
 * @param transform Transform2D
 */
  private bodySetShapeTransform(body: RID, shapeIdx: int, transform: Transform2D): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_space`.
 * @param body RID
 * @param space RID
 */
  private bodySetSpace(body: RID, space: RID): void;
/**
 * Overridable version of `PhysicsServer2D.body_set_state`.
 * @param body RID
 * @param state int
 * @param value Variant
 */
  private bodySetState(body: RID, state: int, value: Variant): void;
/**
 * Assigns the `body` to call the given `callable` during the synchronization phase of the loop, before `_step` is called. See also `_sync`.
 * Overridable version of `PhysicsServer2D.body_set_state_sync_callback`.
 * @param body RID
 * @param callable Callable
 */
  private bodySetStateSyncCallback(body: RID, callable: Callable): void;
/**
 * Overridable version of `PhysicsServer2D.body_test_motion`. Unlike the exposed implementation, this method does not receive all of the arguments inside a `PhysicsTestMotionParameters2D`.
 * @param body RID
 * @param from_ Transform2D
 * @param motion Vector2
 * @param margin float
 * @param collideSeparationRay boolean
 * @param recoveryAsCollision boolean
 * @param result unknown
 * @returns boolean
 */
  private bodyTestMotion(body: RID, from_: Transform2D, motion: Vector2, margin: float, collideSeparationRay: boolean, recoveryAsCollision: boolean, result: unknown): boolean;
/**
 * Returns `true` if the body with the given `RID` is being excluded from `_body_test_motion`. See also `Object.get_instance_id`.
 * @param body RID
 * @returns boolean
 */
  bodyTestMotionIsExcludingBody(body: RID): boolean;
/**
 * Returns `true` if the object with the given instance ID is being excluded from `_body_test_motion`. See also `Object.get_instance_id`.
 * @param object int
 * @returns boolean
 */
  bodyTestMotionIsExcludingObject(object: int): boolean;
/**
 * Overridable version of `PhysicsServer2D.capsule_shape_create`.
 * @returns RID
 */
  private capsuleShapeCreate(): RID;
/**
 * Overridable version of `PhysicsServer2D.circle_shape_create`.
 * @returns RID
 */
  private circleShapeCreate(): RID;
/**
 * Overridable version of `PhysicsServer2D.concave_polygon_shape_create`.
 * @returns RID
 */
  private concavePolygonShapeCreate(): RID;
/**
 * Overridable version of `PhysicsServer2D.convex_polygon_shape_create`.
 * @returns RID
 */
  private convexPolygonShapeCreate(): RID;
/**
 * Overridable version of `PhysicsServer2D.damped_spring_joint_get_param`.
 * @param joint RID
 * @param param int
 * @returns float
 */
  private dampedSpringJointGetParam(joint: RID, param: int): float;
/**
 * Overridable version of `PhysicsServer2D.damped_spring_joint_set_param`.
 * @param joint RID
 * @param param int
 * @param value float
 */
  private dampedSpringJointSetParam(joint: RID, param: int, value: float): void;
/**
 * Called to indicate that the physics server has stopped synchronizing. It is in the loop's iteration/physics phase, and can access physics objects even if running on a separate thread. See also `_sync`.
 * Overridable version of `PhysicsServer2D`'s internal `end_sync` method.
 */
  private endSync(): void;
/**
 * Called when the main loop finalizes to shut down the physics server. See also `MainLoop._finalize` and `_init`.
 * Overridable version of `PhysicsServer2D`'s internal `finish` method.
 */
  private finish(): void;
/**
 * Called every physics step before `_step` to process all remaining queries.
 * Overridable version of `PhysicsServer2D`'s internal `flush_queries` method.
 */
  private flushQueries(): void;
/**
 * Overridable version of `PhysicsServer2D.free_rid`.
 * @param rid RID
 */
  private freeRid(rid: RID): void;
/**
 * Overridable version of `PhysicsServer2D.get_process_info`.
 * @param processInfo int
 * @returns int
 */
  private getProcessInfo(processInfo: int): int;
/**
 * Called when the main loop is initialized and creates a new instance of this physics server. See also `MainLoop._initialize` and `_finish`.
 * Overridable version of `PhysicsServer2D`'s internal `init` method.
 */
  _init(): void;
/**
 * Overridable method that should return `true` when the physics server is processing queries. See also `_flush_queries`.
 * Overridable version of `PhysicsServer2D`'s internal `is_flushing_queries` method.
 * @returns boolean
 */
  private isFlushingQueries(): boolean;
/**
 * Overridable version of `PhysicsServer2D.joint_clear`.
 * @param joint RID
 */
  private jointClear(joint: RID): void;
/**
 * Overridable version of `PhysicsServer2D.joint_create`.
 * @returns RID
 */
  private jointCreate(): RID;
/**
 * Overridable version of `PhysicsServer2D.joint_disable_collisions_between_bodies`.
 * @param joint RID
 * @param disable boolean
 */
  private jointDisableCollisionsBetweenBodies(joint: RID, disable: boolean): void;
/**
 * Overridable version of `PhysicsServer2D.joint_get_param`.
 * @param joint RID
 * @param param int
 * @returns float
 */
  private jointGetParam(joint: RID, param: int): float;
/**
 * Overridable version of `PhysicsServer2D.joint_get_type`.
 * @param joint RID
 * @returns int
 */
  private jointGetType(joint: RID): int;
/**
 * Overridable version of `PhysicsServer2D.joint_is_disabled_collisions_between_bodies`.
 * @param joint RID
 * @returns boolean
 */
  private jointIsDisabledCollisionsBetweenBodies(joint: RID): boolean;
/**
 * Overridable version of `PhysicsServer2D.joint_make_damped_spring`.
 * @param joint RID
 * @param anchorA Vector2
 * @param anchorB Vector2
 * @param bodyA RID
 * @param bodyB RID
 */
  private jointMakeDampedSpring(joint: RID, anchorA: Vector2, anchorB: Vector2, bodyA: RID, bodyB: RID): void;
/**
 * Overridable version of `PhysicsServer2D.joint_make_groove`.
 * @param joint RID
 * @param aGroove1 Vector2
 * @param aGroove2 Vector2
 * @param bAnchor Vector2
 * @param bodyA RID
 * @param bodyB RID
 */
  private jointMakeGroove(joint: RID, aGroove1: Vector2, aGroove2: Vector2, bAnchor: Vector2, bodyA: RID, bodyB: RID): void;
/**
 * Overridable version of `PhysicsServer2D.joint_make_pin`.
 * @param joint RID
 * @param anchor Vector2
 * @param bodyA RID
 * @param bodyB RID
 */
  private jointMakePin(joint: RID, anchor: Vector2, bodyA: RID, bodyB: RID): void;
/**
 * Overridable version of `PhysicsServer2D.joint_set_param`.
 * @param joint RID
 * @param param int
 * @param value float
 */
  private jointSetParam(joint: RID, param: int, value: float): void;
/**
 * Overridable version of `PhysicsServer2D.pin_joint_get_flag`.
 * @param joint RID
 * @param flag int
 * @returns boolean
 */
  private pinJointGetFlag(joint: RID, flag: int): boolean;
/**
 * Overridable version of `PhysicsServer2D.pin_joint_get_param`.
 * @param joint RID
 * @param param int
 * @returns float
 */
  private pinJointGetParam(joint: RID, param: int): float;
/**
 * Overridable version of `PhysicsServer2D.pin_joint_set_flag`.
 * @param joint RID
 * @param flag int
 * @param enabled boolean
 */
  private pinJointSetFlag(joint: RID, flag: int, enabled: boolean): void;
/**
 * Overridable version of `PhysicsServer2D.pin_joint_set_param`.
 * @param joint RID
 * @param param int
 * @param value float
 */
  private pinJointSetParam(joint: RID, param: int, value: float): void;
/**
 * Overridable version of `PhysicsServer2D.rectangle_shape_create`.
 * @returns RID
 */
  private rectangleShapeCreate(): RID;
/**
 * Overridable version of `PhysicsServer2D.segment_shape_create`.
 * @returns RID
 */
  private segmentShapeCreate(): RID;
/**
 * Overridable version of `PhysicsServer2D.separation_ray_shape_create`.
 * @returns RID
 */
  private separationRayShapeCreate(): RID;
/**
 * Overridable version of `PhysicsServer2D.set_active`.
 * @param active boolean
 */
  private setActive(active: boolean): void;
/**
 * Given two shapes and their parameters, should return `true` if a collision between the two would occur, with additional details passed in `results`.
 * Overridable version of `PhysicsServer2D`'s internal `shape_collide` method. Corresponds to `PhysicsDirectSpaceState2D.collide_shape`.
 * @param shapeA RID
 * @param xformA Transform2D
 * @param motionA Vector2
 * @param shapeB RID
 * @param xformB Transform2D
 * @param motionB Vector2
 * @param results unknown
 * @param resultMax int
 * @param resultCount unknown
 * @returns boolean
 */
  private shapeCollide(shapeA: RID, xformA: Transform2D, motionA: Vector2, shapeB: RID, xformB: Transform2D, motionB: Vector2, results: unknown, resultMax: int, resultCount: unknown): boolean;
/**
 * Should return the custom solver bias of the given `shape`, which defines how much bodies are forced to separate on contact when this shape is involved.
 * Overridable version of `PhysicsServer2D`'s internal `shape_get_custom_solver_bias` method. Corresponds to `Shape2D.custom_solver_bias`.
 * @param shape RID
 * @returns float
 */
  private shapeGetCustomSolverBias(shape: RID): float;
/**
 * Overridable version of `PhysicsServer2D.shape_get_data`.
 * @param shape RID
 * @returns Variant
 */
  private shapeGetData(shape: RID): Variant;
/**
 * Overridable version of `PhysicsServer2D.shape_get_type`.
 * @param shape RID
 * @returns int
 */
  private shapeGetType(shape: RID): int;
/**
 * Should set the custom solver bias for the given `shape`. It defines how much bodies are forced to separate on contact.
 * Overridable version of `PhysicsServer2D`'s internal `shape_get_custom_solver_bias` method. Corresponds to `Shape2D.custom_solver_bias`.
 * @param shape RID
 * @param bias float
 */
  private shapeSetCustomSolverBias(shape: RID, bias: float): void;
/**
 * Overridable version of `PhysicsServer2D.shape_set_data`.
 * @param shape RID
 * @param data Variant
 */
  private shapeSetData(shape: RID, data: Variant): void;
/**
 * Overridable version of `PhysicsServer2D.space_create`.
 * @returns RID
 */
  private spaceCreate(): RID;
/**
 * Should return how many contacts have occurred during the last physics step in the given `space`. See also `_space_get_contacts` and `_space_set_debug_contacts`.
 * Overridable version of `PhysicsServer2D`'s internal `space_get_contact_count` method.
 * @param space RID
 * @returns int
 */
  private spaceGetContactCount(space: RID): int;
/**
 * Should return the positions of all contacts that have occurred during the last physics step in the given `space`. See also `_space_get_contact_count` and `_space_set_debug_contacts`.
 * Overridable version of `PhysicsServer2D`'s internal `space_get_contacts` method.
 * @param space RID
 * @returns PackedVector2Array
 */
  private spaceGetContacts(space: RID): PackedVector2Array;
/**
 * Overridable version of `PhysicsServer2D.space_get_direct_state`.
 * @param space RID
 * @returns PhysicsDirectSpaceState2D
 */
  private spaceGetDirectState(space: RID): PhysicsDirectSpaceState2D;
/**
 * Overridable version of `PhysicsServer2D.space_get_param`.
 * @param space RID
 * @param param int
 * @returns float
 */
  private spaceGetParam(space: RID, param: int): float;
/**
 * Overridable version of `PhysicsServer2D.space_is_active`.
 * @param space RID
 * @returns boolean
 */
  private spaceIsActive(space: RID): boolean;
/**
 * Overridable version of `PhysicsServer2D.space_set_active`.
 * @param space RID
 * @param active boolean
 */
  private spaceSetActive(space: RID, active: boolean): void;
/**
 * Used internally to allow the given `space` to store contact points, up to `max_contacts`. This is automatically set for the main `World2D`'s space when `SceneTree.debug_collisions_hint` is `true`, or by checking "Visible Collision Shapes" in the editor. Only works in debug builds.
 * Overridable version of `PhysicsServer2D`'s internal `space_set_debug_contacts` method.
 * @param space RID
 * @param maxContacts int
 */
  private spaceSetDebugContacts(space: RID, maxContacts: int): void;
/**
 * Overridable version of `PhysicsServer2D.space_set_param`.
 * @param space RID
 * @param param int
 * @param value float
 */
  private spaceSetParam(space: RID, param: int, value: float): void;
/**
 * Called every physics step to process the physics simulation. `step` is the time elapsed since the last physics step, in seconds. It is usually the same as `Node.get_physics_process_delta_time`.
 * Overridable version of `PhysicsServer2D`'s internal [code skip-lint]step[/code] method.
 * @param step float
 */
  private step(step: float): void;
/**
 * Called to indicate that the physics server is synchronizing and cannot access physics states if running on a separate thread. See also `_end_sync`.
 * Overridable version of `PhysicsServer2D`'s internal `sync` method.
 */
  private sync(): void;
/**
 * Overridable version of `PhysicsServer2D.world_boundary_shape_create`.
 * @returns RID
 */
  private worldBoundaryShapeCreate(): RID;
}
