import type { AABB, Callable, GodotArray, GodotDictionary, Object, PhysicsDirectBodyState3D, PhysicsDirectSpaceState3D, PhysicsServer3DRenderingServerHandler, PhysicsTestMotionParameters3D, PhysicsTestMotionResult3D, RID, Transform3D, Variant, Vector3, float, int } from "../index.d.ts";
/**
 * A server interface for low-level 3D physics access.
 * 
 * PhysicsServer3D is the server responsible for all 3D physics. It can directly create and manipulate all physics objects:
 * - A *space* is a self-contained world for a physics simulation. It contains bodies, areas, and joints. Its state can be queried for collision and intersection information, and several parameters of the simulation can be modified.
 * - A *shape* is a geometric shape such as a sphere, a box, a cylinder, or a polygon. It can be used for collision detection by adding it to a body/area, possibly with an extra transformation relative to the body/area's origin. Bodies/areas can have multiple (transformed) shapes added to them, and a single shape can be added to bodies/areas multiple times with different local transformations.
 * - A *body* is a physical object which can be in static, kinematic, or rigid mode. Its state (such as position and velocity) can be queried and updated. A force integration callback can be set to customize the body's physics.
 * - An *area* is a region in space which can be used to detect bodies and areas entering and exiting it. A body monitoring callback can be set to report entering/exiting body shapes, and similarly an area monitoring callback can be set. Gravity and damping can be overridden within the area by setting area parameters.
 * - A *joint* is a constraint, either between two bodies or on one body relative to a point. Parameters such as the joint bias and the rest length of a spring joint can be adjusted.
 * Physics objects in `PhysicsServer3D` may be created and manipulated independently; they do not have to be tied to nodes in the scene tree.
 * 
 * **Note:** All the 3D physics nodes use the physics server internally. Adding a physics node to the scene tree will cause a corresponding physics object to be created in the physics server. A rigid body node registers a callback that updates the node's transform with the transform of the respective body object in the physics server (every physics update). An area node registers a callback to inform the area node about overlaps with the respective area object in the physics server. The raycast node queries the direct state of the relevant space in the physics server.
 */
export class PhysicsServer3D extends Object {
/**
 * Adds a shape to the area, along with a transform matrix. Shapes are usually referenced by their index, so you should track which shape has a given index.
 * @param area RID
 * @param shape RID
 * @param transform Transform3D (optional, default: Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0))
 * @param disabled boolean (optional, default: false)
 */
  areaAddShape(area: RID, shape: RID, transform?: Transform3D, disabled?: boolean): void;
/**
 * Assigns the area to a descendant of `Object`, so it can exist in the node tree.
 * @param area RID
 * @param id int
 */
  areaAttachObjectInstanceId(area: RID, id: int): void;
/**
 * Removes all shapes from an area. It does not delete the shapes, so they can be reassigned later.
 * @param area RID
 */
  areaClearShapes(area: RID): void;
/**
 * Creates a 3D area object in the physics server, and returns the `RID` that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and `monitorable` set to `false`.
 * Use `area_add_shape` to add shapes to it, use `area_set_transform` to set its transform, and use `area_set_space` to add the area to a space. If you want the area to be detectable use `area_set_monitorable`.
 * @returns RID
 */
  areaCreate(): RID;
/**
 * Returns the physics layer or layers an area belongs to.
 * @param area RID
 * @returns int
 */
  areaGetCollisionLayer(area: RID): int;
/**
 * Returns the physics layer or layers an area can contact with.
 * @param area RID
 * @returns int
 */
  areaGetCollisionMask(area: RID): int;
/**
 * Gets the instance ID of the object the area is assigned to.
 * @param area RID
 * @returns int
 */
  areaGetObjectInstanceId(area: RID): int;
/**
 * Returns an area parameter value. A list of available parameters is on the `AreaParameter` constants.
 * @param area RID
 * @param param int
 * @returns Variant
 */
  areaGetParam(area: RID, param: int): Variant;
/**
 * Returns the `RID` of the nth shape of an area.
 * @param area RID
 * @param shapeIdx int
 * @returns RID
 */
  areaGetShape(area: RID, shapeIdx: int): RID;
/**
 * Returns the number of shapes assigned to an area.
 * @param area RID
 * @returns int
 */
  areaGetShapeCount(area: RID): int;
/**
 * Returns the transform matrix of a shape within an area.
 * @param area RID
 * @param shapeIdx int
 * @returns Transform3D
 */
  areaGetShapeTransform(area: RID, shapeIdx: int): Transform3D;
/**
 * Returns the space assigned to the area.
 * @param area RID
 * @returns RID
 */
  areaGetSpace(area: RID): RID;
/**
 * Returns the transform matrix for an area.
 * @param area RID
 * @returns Transform3D
 */
  areaGetTransform(area: RID): Transform3D;
/**
 * Removes a shape from an area. It does not delete the shape, so it can be reassigned later.
 * @param area RID
 * @param shapeIdx int
 */
  areaRemoveShape(area: RID, shapeIdx: int): void;
/**
 * Sets the area's area monitor callback. This callback will be called when any other (shape of an) area enters or exits (a shape of) the given area, and must take the following five parameters:
 * 1. an integer `status`: either `AREA_BODY_ADDED` or `AREA_BODY_REMOVED` depending on whether the other area's shape entered or exited the area,
 * 2. an `RID` `area_rid`: the `RID` of the other area that entered or exited the area,
 * 3. an integer `instance_id`: the `ObjectID` attached to the other area,
 * 4. an integer `area_shape_idx`: the index of the shape of the other area that entered or exited the area,
 * 5. an integer `self_shape_idx`: the index of the shape of the area where the other area entered or exited.
 * By counting (or keeping track of) the shapes that enter and exit, it can be determined if an area (with all its shapes) is entering for the first time or exiting for the last time.
 * @param area RID
 * @param callback Callable
 */
  areaSetAreaMonitorCallback(area: RID, callback: Callable): void;
/**
 * Assigns the area to one or many physics layers.
 * @param area RID
 * @param layer int
 */
  areaSetCollisionLayer(area: RID, layer: int): void;
/**
 * Sets which physics layers the area will monitor.
 * @param area RID
 * @param mask int
 */
  areaSetCollisionMask(area: RID, mask: int): void;
/**
 * @param area RID
 * @param monitorable boolean
 */
  areaSetMonitorable(area: RID, monitorable: boolean): void;
/**
 * Sets the area's body monitor callback. This callback will be called when any other (shape of a) body enters or exits (a shape of) the given area, and must take the following five parameters:
 * 1. an integer `status`: either `AREA_BODY_ADDED` or `AREA_BODY_REMOVED` depending on whether the other body shape entered or exited the area,
 * 2. an `RID` `body_rid`: the `RID` of the body that entered or exited the area,
 * 3. an integer `instance_id`: the `ObjectID` attached to the body,
 * 4. an integer `body_shape_idx`: the index of the shape of the body that entered or exited the area,
 * 5. an integer `self_shape_idx`: the index of the shape of the area where the body entered or exited.
 * By counting (or keeping track of) the shapes that enter and exit, it can be determined if a body (with all its shapes) is entering for the first time or exiting for the last time.
 * @param area RID
 * @param callback Callable
 */
  areaSetMonitorCallback(area: RID, callback: Callable): void;
/**
 * Sets the value for an area parameter. A list of available parameters is on the `AreaParameter` constants.
 * @param area RID
 * @param param int
 * @param value Variant
 */
  areaSetParam(area: RID, param: int, value: Variant): void;
/**
 * Sets object pickable with rays.
 * @param area RID
 * @param enable boolean
 */
  areaSetRayPickable(area: RID, enable: boolean): void;
/**
 * Substitutes a given area shape by another. The old shape is selected by its index, the new one by its `RID`.
 * @param area RID
 * @param shapeIdx int
 * @param shape RID
 */
  areaSetShape(area: RID, shapeIdx: int, shape: RID): void;
/**
 * @param area RID
 * @param shapeIdx int
 * @param disabled boolean
 */
  areaSetShapeDisabled(area: RID, shapeIdx: int, disabled: boolean): void;
/**
 * Sets the transform matrix for an area shape.
 * @param area RID
 * @param shapeIdx int
 * @param transform Transform3D
 */
  areaSetShapeTransform(area: RID, shapeIdx: int, transform: Transform3D): void;
/**
 * Assigns a space to the area.
 * @param area RID
 * @param space RID
 */
  areaSetSpace(area: RID, space: RID): void;
/**
 * Sets the transform matrix for an area.
 * @param area RID
 * @param transform Transform3D
 */
  areaSetTransform(area: RID, transform: Transform3D): void;
/**
 * Adds a body to the list of bodies exempt from collisions.
 * @param body RID
 * @param exceptedBody RID
 */
  bodyAddCollisionException(body: RID, exceptedBody: RID): void;
/**
 * Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `body_set_constant_force(body, Vector3(0, 0, 0))`.
 * This is equivalent to using `body_add_constant_force` at the body's center of mass.
 * @param body RID
 * @param force Vector3
 */
  bodyAddConstantCentralForce(body: RID, force: Vector3): void;
/**
 * Adds a constant positioned force to the body that keeps being applied over time until cleared with `body_set_constant_force(body, Vector3(0, 0, 0))`.
 * `position` is the offset from the body origin in global coordinates.
 * @param body RID
 * @param force Vector3
 * @param position Vector3 (optional, default: Vector3(0, 0, 0))
 */
  bodyAddConstantForce(body: RID, force: Vector3, position?: Vector3): void;
/**
 * Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `body_set_constant_torque(body, Vector3(0, 0, 0))`.
 * @param body RID
 * @param torque Vector3
 */
  bodyAddConstantTorque(body: RID, torque: Vector3): void;
/**
 * Adds a shape to the body, along with a transform matrix. Shapes are usually referenced by their index, so you should track which shape has a given index.
 * @param body RID
 * @param shape RID
 * @param transform Transform3D (optional, default: Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0))
 * @param disabled boolean (optional, default: false)
 */
  bodyAddShape(body: RID, shape: RID, transform?: Transform3D, disabled?: boolean): void;
/**
 * Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.
 * This is equivalent to using `body_apply_force` at the body's center of mass.
 * @param body RID
 * @param force Vector3
 */
  bodyApplyCentralForce(body: RID, force: Vector3): void;
/**
 * Applies a directional impulse without affecting rotation.
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 * This is equivalent to using `body_apply_impulse` at the body's center of mass.
 * @param body RID
 * @param impulse Vector3
 */
  bodyApplyCentralImpulse(body: RID, impulse: Vector3): void;
/**
 * Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.
 * `position` is the offset from the body origin in global coordinates.
 * @param body RID
 * @param force Vector3
 * @param position Vector3 (optional, default: Vector3(0, 0, 0))
 */
  bodyApplyForce(body: RID, force: Vector3, position?: Vector3): void;
/**
 * Applies a positioned impulse to the body.
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 * `position` is the offset from the body origin in global coordinates.
 * @param body RID
 * @param impulse Vector3
 * @param position Vector3 (optional, default: Vector3(0, 0, 0))
 */
  bodyApplyImpulse(body: RID, impulse: Vector3, position?: Vector3): void;
/**
 * Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.
 * @param body RID
 * @param torque Vector3
 */
  bodyApplyTorque(body: RID, torque: Vector3): void;
/**
 * Applies a rotational impulse to the body without affecting the position.
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 * @param body RID
 * @param impulse Vector3
 */
  bodyApplyTorqueImpulse(body: RID, impulse: Vector3): void;
/**
 * Assigns the area to a descendant of `Object`, so it can exist in the node tree.
 * @param body RID
 * @param id int
 */
  bodyAttachObjectInstanceId(body: RID, id: int): void;
/**
 * Removes all shapes from a body.
 * @param body RID
 */
  bodyClearShapes(body: RID): void;
/**
 * Creates a 3D body object in the physics server, and returns the `RID` that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and body mode set to `BODY_MODE_RIGID`.
 * Use `body_add_shape` to add shapes to it, use `body_set_state` to set its transform, and use `body_set_space` to add the body to a space.
 * @returns RID
 */
  bodyCreate(): RID;
/**
 * Returns the physics layer or layers a body belongs to.
 * @param body RID
 * @returns int
 */
  bodyGetCollisionLayer(body: RID): int;
/**
 * Returns the physics layer or layers a body can collide with.
 * @param body RID
 * @returns int
 */
  bodyGetCollisionMask(body: RID): int;
/**
 * Returns the body's collision priority.
 * @param body RID
 * @returns float
 */
  bodyGetCollisionPriority(body: RID): float;
/**
 * Returns the body's total constant positional forces applied during each physics update.
 * See `body_add_constant_force` and `body_add_constant_central_force`.
 * @param body RID
 * @returns Vector3
 */
  bodyGetConstantForce(body: RID): Vector3;
/**
 * Returns the body's total constant rotational forces applied during each physics update.
 * See `body_add_constant_torque`.
 * @param body RID
 * @returns Vector3
 */
  bodyGetConstantTorque(body: RID): Vector3;
/**
 * Returns the `PhysicsDirectBodyState3D` of the body. Returns `null` if the body is destroyed or removed from the physics space.
 * @param body RID
 * @returns PhysicsDirectBodyState3D
 */
  bodyGetDirectState(body: RID): PhysicsDirectBodyState3D;
/**
 * Returns the maximum contacts that can be reported. See `body_set_max_contacts_reported`.
 * @param body RID
 * @returns int
 */
  bodyGetMaxContactsReported(body: RID): int;
/**
 * Returns the body mode.
 * @param body RID
 * @returns int
 */
  bodyGetMode(body: RID): int;
/**
 * Gets the instance ID of the object the area is assigned to.
 * @param body RID
 * @returns int
 */
  bodyGetObjectInstanceId(body: RID): int;
/**
 * Returns the value of a body parameter. A list of available parameters is on the `BodyParameter` constants.
 * @param body RID
 * @param param int
 * @returns Variant
 */
  bodyGetParam(body: RID, param: int): Variant;
/**
 * Returns the `RID` of the nth shape of a body.
 * @param body RID
 * @param shapeIdx int
 * @returns RID
 */
  bodyGetShape(body: RID, shapeIdx: int): RID;
/**
 * Returns the number of shapes assigned to a body.
 * @param body RID
 * @returns int
 */
  bodyGetShapeCount(body: RID): int;
/**
 * Returns the transform matrix of a body shape.
 * @param body RID
 * @param shapeIdx int
 * @returns Transform3D
 */
  bodyGetShapeTransform(body: RID, shapeIdx: int): Transform3D;
/**
 * Returns the `RID` of the space assigned to a body.
 * @param body RID
 * @returns RID
 */
  bodyGetSpace(body: RID): RID;
/**
 * Returns a body state.
 * @param body RID
 * @param state int
 * @returns Variant
 */
  bodyGetState(body: RID, state: int): Variant;
/**
 * @param body RID
 * @param axis int
 * @returns boolean
 */
  bodyIsAxisLocked(body: RID, axis: int): boolean;
/**
 * If `true`, the continuous collision detection mode is enabled.
 * @param body RID
 * @returns boolean
 */
  bodyIsContinuousCollisionDetectionEnabled(body: RID): boolean;
/**
 * Returns `true` if the body is omitting the standard force integration. See `body_set_omit_force_integration`.
 * @param body RID
 * @returns boolean
 */
  bodyIsOmittingForceIntegration(body: RID): boolean;
/**
 * Removes a body from the list of bodies exempt from collisions.
 * Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided.
 * @param body RID
 * @param exceptedBody RID
 */
  bodyRemoveCollisionException(body: RID, exceptedBody: RID): void;
/**
 * Removes a shape from a body. The shape is not deleted, so it can be reused afterwards.
 * @param body RID
 * @param shapeIdx int
 */
  bodyRemoveShape(body: RID, shapeIdx: int): void;
/**
 * Restores the default inertia and center of mass based on shapes to cancel any custom values previously set using `body_set_param`.
 * @param body RID
 */
  bodyResetMassProperties(body: RID): void;
/**
 * @param body RID
 * @param axis int
 * @param lock boolean
 */
  bodySetAxisLock(body: RID, axis: int, lock: boolean): void;
/**
 * Sets an axis velocity. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior.
 * @param body RID
 * @param axisVelocity Vector3
 */
  bodySetAxisVelocity(body: RID, axisVelocity: Vector3): void;
/**
 * Sets the physics layer or layers a body belongs to.
 * @param body RID
 * @param layer int
 */
  bodySetCollisionLayer(body: RID, layer: int): void;
/**
 * Sets the physics layer or layers a body can collide with.
 * @param body RID
 * @param mask int
 */
  bodySetCollisionMask(body: RID, mask: int): void;
/**
 * Sets the body's collision priority.
 * @param body RID
 * @param priority float
 */
  bodySetCollisionPriority(body: RID, priority: float): void;
/**
 * Sets the body's total constant positional forces applied during each physics update.
 * See `body_add_constant_force` and `body_add_constant_central_force`.
 * @param body RID
 * @param force Vector3
 */
  bodySetConstantForce(body: RID, force: Vector3): void;
/**
 * Sets the body's total constant rotational forces applied during each physics update.
 * See `body_add_constant_torque`.
 * @param body RID
 * @param torque Vector3
 */
  bodySetConstantTorque(body: RID, torque: Vector3): void;
/**
 * If `true`, the continuous collision detection mode is enabled.
 * Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided.
 * @param body RID
 * @param enable boolean
 */
  bodySetEnableContinuousCollisionDetection(body: RID, enable: boolean): void;
/**
 * Sets the body's custom force integration callback function to `callable`. Use an empty `Callable` ([code skip-lint]Callable()[/code]) to clear the custom callback.
 * The function `callable` will be called every physics tick, before the standard force integration (see `body_set_omit_force_integration`). It can be used for example to update the body's linear and angular velocity based on contact with other bodies.
 * If `userdata` is not `null`, the function `callable` must take the following two parameters:
 * 1. `state`: a `PhysicsDirectBodyState3D`, used to retrieve and modify the body's state,
 * 2. [code skip-lint]userdata[/code]: a `Variant`; its value will be the `userdata` passed into this method.
 * If `userdata` is `null`, then `callable` must take only the `state` parameter.
 * @param body RID
 * @param callable Callable
 * @param userdata Variant (optional, default: null)
 */
  bodySetForceIntegrationCallback(body: RID, callable: Callable, userdata?: Variant): void;
/**
 * Sets the maximum contacts to report. Bodies can keep a log of the contacts with other bodies. This is enabled by setting the maximum number of contacts reported to a number greater than 0.
 * @param body RID
 * @param amount int
 */
  bodySetMaxContactsReported(body: RID, amount: int): void;
/**
 * Sets the body mode, from one of the `BodyMode` constants.
 * @param body RID
 * @param mode int
 */
  bodySetMode(body: RID, mode: int): void;
/**
 * Sets whether the body omits the standard force integration. If `enable` is `true`, the body will not automatically use applied forces, torques, and damping to update the body's linear and angular velocity. In this case, `body_set_force_integration_callback` can be used to manually update the linear and angular velocity instead.
 * This method is called when the property `RigidBody3D.custom_integrator` is set.
 * @param body RID
 * @param enable boolean
 */
  bodySetOmitForceIntegration(body: RID, enable: boolean): void;
/**
 * Sets a body parameter. A list of available parameters is on the `BodyParameter` constants.
 * @param body RID
 * @param param int
 * @param value Variant
 */
  bodySetParam(body: RID, param: int, value: Variant): void;
/**
 * Sets the body pickable with rays if `enable` is set.
 * @param body RID
 * @param enable boolean
 */
  bodySetRayPickable(body: RID, enable: boolean): void;
/**
 * Substitutes a given body shape by another. The old shape is selected by its index, the new one by its `RID`.
 * @param body RID
 * @param shapeIdx int
 * @param shape RID
 */
  bodySetShape(body: RID, shapeIdx: int, shape: RID): void;
/**
 * @param body RID
 * @param shapeIdx int
 * @param disabled boolean
 */
  bodySetShapeDisabled(body: RID, shapeIdx: int, disabled: boolean): void;
/**
 * Sets the transform matrix for a body shape.
 * @param body RID
 * @param shapeIdx int
 * @param transform Transform3D
 */
  bodySetShapeTransform(body: RID, shapeIdx: int, transform: Transform3D): void;
/**
 * Assigns a space to the body (see `space_create`).
 * @param body RID
 * @param space RID
 */
  bodySetSpace(body: RID, space: RID): void;
/**
 * Sets a body state (see `BodyState` constants).
 * @param body RID
 * @param state int
 * @param value Variant
 */
  bodySetState(body: RID, state: int, value: Variant): void;
/**
 * Sets the body's state synchronization callback function to `callable`. Use an empty `Callable` ([code skip-lint]Callable()[/code]) to clear the callback.
 * The function `callable` will be called every physics frame, assuming that the body was active during the previous physics tick, and can be used to fetch the latest state from the physics server.
 * The function `callable` must take the following parameters:
 * 1. `state`: a `PhysicsDirectBodyState3D`, used to retrieve the body's state.
 * @param body RID
 * @param callable Callable
 */
  bodySetStateSyncCallback(body: RID, callable: Callable): void;
/**
 * Returns `true` if a collision would result from moving along a motion vector from a given point in space. `PhysicsTestMotionParameters3D` is passed to set motion parameters. `PhysicsTestMotionResult3D` can be passed to return additional information.
 * @param body RID
 * @param parameters PhysicsTestMotionParameters3D
 * @param result PhysicsTestMotionResult3D (optional, default: null)
 * @returns boolean
 */
  bodyTestMotion(body: RID, parameters: PhysicsTestMotionParameters3D, result?: PhysicsTestMotionResult3D): boolean;
/**
 * @returns RID
 */
  boxShapeCreate(): RID;
/**
 * @returns RID
 */
  capsuleShapeCreate(): RID;
/**
 * @returns RID
 */
  concavePolygonShapeCreate(): RID;
/**
 * Gets a cone_twist_joint parameter (see `ConeTwistJointParam` constants).
 * @param joint RID
 * @param param int
 * @returns float
 */
  coneTwistJointGetParam(joint: RID, param: int): float;
/**
 * Sets a cone_twist_joint parameter (see `ConeTwistJointParam` constants).
 * @param joint RID
 * @param param int
 * @param value float
 */
  coneTwistJointSetParam(joint: RID, param: int, value: float): void;
/**
 * @returns RID
 */
  convexPolygonShapeCreate(): RID;
/**
 * @returns RID
 */
  customShapeCreate(): RID;
/**
 * @returns RID
 */
  cylinderShapeCreate(): RID;
/**
 * Destroys any of the objects created by PhysicsServer3D. If the `RID` passed is not one of the objects that can be created by PhysicsServer3D, an error will be sent to the console.
 * @param rid RID
 */
  freeRid(rid: RID): void;
/**
 * Returns the value of a generic 6DOF joint flag. See `G6DOFJointAxisFlag` for the list of available flags.
 * @param joint RID
 * @param axis int
 * @param flag int
 * @returns boolean
 */
  generic6dofJointGetFlag(joint: RID, axis: int, flag: int): boolean;
/**
 * Returns the value of a generic 6DOF joint parameter. See `G6DOFJointAxisParam` for the list of available parameters.
 * @param joint RID
 * @param axis int
 * @param param int
 * @returns float
 */
  generic6dofJointGetParam(joint: RID, axis: int, param: int): float;
/**
 * Sets the value of a given generic 6DOF joint flag. See `G6DOFJointAxisFlag` for the list of available flags.
 * @param joint RID
 * @param axis int
 * @param flag int
 * @param enable boolean
 */
  generic6dofJointSetFlag(joint: RID, axis: int, flag: int, enable: boolean): void;
/**
 * Sets the value of a given generic 6DOF joint parameter. See `G6DOFJointAxisParam` for the list of available parameters.
 * @param joint RID
 * @param axis int
 * @param param int
 * @param value float
 */
  generic6dofJointSetParam(joint: RID, axis: int, param: int, value: float): void;
/**
 * Returns information about the current state of the 3D physics engine. See `ProcessInfo` for a list of available states.
 * @param processInfo int
 * @returns int
 */
  getProcessInfo(processInfo: int): int;
/**
 * @returns RID
 */
  heightmapShapeCreate(): RID;
/**
 * Gets a hinge_joint flag (see `HingeJointFlag` constants).
 * @param joint RID
 * @param flag int
 * @returns boolean
 */
  hingeJointGetFlag(joint: RID, flag: int): boolean;
/**
 * Gets a hinge_joint parameter (see `HingeJointParam`).
 * @param joint RID
 * @param param int
 * @returns float
 */
  hingeJointGetParam(joint: RID, param: int): float;
/**
 * Sets a hinge_joint flag (see `HingeJointFlag` constants).
 * @param joint RID
 * @param flag int
 * @param enabled boolean
 */
  hingeJointSetFlag(joint: RID, flag: int, enabled: boolean): void;
/**
 * Sets a hinge_joint parameter (see `HingeJointParam` constants).
 * @param joint RID
 * @param param int
 * @param value float
 */
  hingeJointSetParam(joint: RID, param: int, value: float): void;
/**
 * @param joint RID
 */
  jointClear(joint: RID): void;
/**
 * @returns RID
 */
  jointCreate(): RID;
/**
 * Sets whether the bodies attached to the `Joint3D` will collide with each other.
 * @param joint RID
 * @param disable boolean
 */
  jointDisableCollisionsBetweenBodies(joint: RID, disable: boolean): void;
/**
 * Gets the priority value of the Joint3D.
 * @param joint RID
 * @returns int
 */
  jointGetSolverPriority(joint: RID): int;
/**
 * Returns the type of the Joint3D.
 * @param joint RID
 * @returns int
 */
  jointGetType(joint: RID): int;
/**
 * Returns whether the bodies attached to the `Joint3D` will collide with each other.
 * @param joint RID
 * @returns boolean
 */
  jointIsDisabledCollisionsBetweenBodies(joint: RID): boolean;
/**
 * @param joint RID
 * @param bodyA RID
 * @param localRefA Transform3D
 * @param bodyB RID
 * @param localRefB Transform3D
 */
  jointMakeConeTwist(joint: RID, bodyA: RID, localRefA: Transform3D, bodyB: RID, localRefB: Transform3D): void;
/**
 * Make the joint a generic six degrees of freedom (6DOF) joint. Use `generic_6dof_joint_set_flag` and `generic_6dof_joint_set_param` to set the joint's flags and parameters respectively.
 * @param joint RID
 * @param bodyA RID
 * @param localRefA Transform3D
 * @param bodyB RID
 * @param localRefB Transform3D
 */
  jointMakeGeneric6dof(joint: RID, bodyA: RID, localRefA: Transform3D, bodyB: RID, localRefB: Transform3D): void;
/**
 * @param joint RID
 * @param bodyA RID
 * @param hingeA Transform3D
 * @param bodyB RID
 * @param hingeB Transform3D
 */
  jointMakeHinge(joint: RID, bodyA: RID, hingeA: Transform3D, bodyB: RID, hingeB: Transform3D): void;
/**
 * @param joint RID
 * @param bodyA RID
 * @param localA Vector3
 * @param bodyB RID
 * @param localB Vector3
 */
  jointMakePin(joint: RID, bodyA: RID, localA: Vector3, bodyB: RID, localB: Vector3): void;
/**
 * @param joint RID
 * @param bodyA RID
 * @param localRefA Transform3D
 * @param bodyB RID
 * @param localRefB Transform3D
 */
  jointMakeSlider(joint: RID, bodyA: RID, localRefA: Transform3D, bodyB: RID, localRefB: Transform3D): void;
/**
 * Sets the priority value of the Joint3D.
 * @param joint RID
 * @param priority int
 */
  jointSetSolverPriority(joint: RID, priority: int): void;
/**
 * Returns position of the joint in the local space of body a of the joint.
 * @param joint RID
 * @returns Vector3
 */
  pinJointGetLocalA(joint: RID): Vector3;
/**
 * Returns position of the joint in the local space of body b of the joint.
 * @param joint RID
 * @returns Vector3
 */
  pinJointGetLocalB(joint: RID): Vector3;
/**
 * Gets a pin_joint parameter (see `PinJointParam` constants).
 * @param joint RID
 * @param param int
 * @returns float
 */
  pinJointGetParam(joint: RID, param: int): float;
/**
 * Sets position of the joint in the local space of body a of the joint.
 * @param joint RID
 * @param localA Vector3
 */
  pinJointSetLocalA(joint: RID, localA: Vector3): void;
/**
 * Sets position of the joint in the local space of body b of the joint.
 * @param joint RID
 * @param localB Vector3
 */
  pinJointSetLocalB(joint: RID, localB: Vector3): void;
/**
 * Sets a pin_joint parameter (see `PinJointParam` constants).
 * @param joint RID
 * @param param int
 * @param value float
 */
  pinJointSetParam(joint: RID, param: int, value: float): void;
/**
 * @returns RID
 */
  separationRayShapeCreate(): RID;
/**
 * Activates or deactivates the 3D physics engine.
 * @param active boolean
 */
  setActive(active: boolean): void;
/**
 * Returns the shape data.
 * @param shape RID
 * @returns Variant
 */
  shapeGetData(shape: RID): Variant;
/**
 * Returns the collision margin for the shape.
 * 
 * **Note:** This is not used in Godot Physics, so will always return `0`.
 * @param shape RID
 * @returns float
 */
  shapeGetMargin(shape: RID): float;
/**
 * Returns the type of shape (see `ShapeType` constants).
 * @param shape RID
 * @returns int
 */
  shapeGetType(shape: RID): int;
/**
 * Sets the shape data that defines its shape and size. The data to be passed depends on the kind of shape created `shape_get_type`.
 * @param shape RID
 * @param data Variant
 */
  shapeSetData(shape: RID, data: Variant): void;
/**
 * Sets the collision margin for the shape.
 * 
 * **Note:** This is not used in Godot Physics.
 * @param shape RID
 * @param margin float
 */
  shapeSetMargin(shape: RID, margin: float): void;
/**
 * Gets a slider_joint parameter (see `SliderJointParam` constants).
 * @param joint RID
 * @param param int
 * @returns float
 */
  sliderJointGetParam(joint: RID, param: int): float;
/**
 * Gets a slider_joint parameter (see `SliderJointParam` constants).
 * @param joint RID
 * @param param int
 * @param value float
 */
  sliderJointSetParam(joint: RID, param: int, value: float): void;
/**
 * Adds the given body to the list of bodies exempt from collisions.
 * @param body RID
 * @param bodyB RID
 */
  softBodyAddCollisionException(body: RID, bodyB: RID): void;
/**
 * Creates a new soft body and returns its internal `RID`.
 * @returns RID
 */
  softBodyCreate(): RID;
/**
 * Returns the bounds of the given soft body in global coordinates.
 * @param body RID
 * @returns AABB
 */
  softBodyGetBounds(body: RID): AABB;
/**
 * Returns the physics layer or layers that the given soft body belongs to.
 * @param body RID
 * @returns int
 */
  softBodyGetCollisionLayer(body: RID): int;
/**
 * Returns the physics layer or layers that the given soft body can collide with.
 * @param body RID
 * @returns int
 */
  softBodyGetCollisionMask(body: RID): int;
/**
 * Returns the damping coefficient of the given soft body.
 * @param body RID
 * @returns float
 */
  softBodyGetDampingCoefficient(body: RID): float;
/**
 * Returns the drag coefficient of the given soft body.
 * @param body RID
 * @returns float
 */
  softBodyGetDragCoefficient(body: RID): float;
/**
 * Returns the linear stiffness of the given soft body.
 * @param body RID
 * @returns float
 */
  softBodyGetLinearStiffness(body: RID): float;
/**
 * Returns the current position of the given soft body point in global coordinates.
 * @param body RID
 * @param pointIndex int
 * @returns Vector3
 */
  softBodyGetPointGlobalPosition(body: RID, pointIndex: int): Vector3;
/**
 * Returns the pressure coefficient of the given soft body.
 * @param body RID
 * @returns float
 */
  softBodyGetPressureCoefficient(body: RID): float;
/**
 * Returns the simulation precision of the given soft body.
 * @param body RID
 * @returns int
 */
  softBodyGetSimulationPrecision(body: RID): int;
/**
 * Returns the `RID` of the space assigned to the given soft body.
 * @param body RID
 * @returns RID
 */
  softBodyGetSpace(body: RID): RID;
/**
 * Returns the given soft body state (see `BodyState` constants).
 * 
 * **Note:** Godot's default physics implementation does not support `BODY_STATE_LINEAR_VELOCITY`, `BODY_STATE_ANGULAR_VELOCITY`, `BODY_STATE_SLEEPING`, or `BODY_STATE_CAN_SLEEP`.
 * @param body RID
 * @param state int
 * @returns Variant
 */
  softBodyGetState(body: RID, state: int): Variant;
/**
 * Returns the total mass assigned to the given soft body.
 * @param body RID
 * @returns float
 */
  softBodyGetTotalMass(body: RID): float;
/**
 * Returns whether the given soft body point is pinned.
 * @param body RID
 * @param pointIndex int
 * @returns boolean
 */
  softBodyIsPointPinned(body: RID, pointIndex: int): boolean;
/**
 * Moves the given soft body point to a position in global coordinates.
 * @param body RID
 * @param pointIndex int
 * @param globalPosition Vector3
 */
  softBodyMovePoint(body: RID, pointIndex: int, globalPosition: Vector3): void;
/**
 * Pins or unpins the given soft body point based on the value of `pin`.
 * 
 * **Note:** Pinning a point effectively makes it kinematic, preventing it from being affected by forces, but you can still move it using `soft_body_move_point`.
 * @param body RID
 * @param pointIndex int
 * @param pin boolean
 */
  softBodyPinPoint(body: RID, pointIndex: int, pin: boolean): void;
/**
 * Unpins all points of the given soft body.
 * @param body RID
 */
  softBodyRemoveAllPinnedPoints(body: RID): void;
/**
 * Removes the given body from the list of bodies exempt from collisions.
 * @param body RID
 * @param bodyB RID
 */
  softBodyRemoveCollisionException(body: RID, bodyB: RID): void;
/**
 * Sets the physics layer or layers the given soft body belongs to.
 * @param body RID
 * @param layer int
 */
  softBodySetCollisionLayer(body: RID, layer: int): void;
/**
 * Sets the physics layer or layers the given soft body can collide with.
 * @param body RID
 * @param mask int
 */
  softBodySetCollisionMask(body: RID, mask: int): void;
/**
 * Sets the damping coefficient of the given soft body. Higher values will slow down the body more noticeably when forces are applied.
 * @param body RID
 * @param dampingCoefficient float
 */
  softBodySetDampingCoefficient(body: RID, dampingCoefficient: float): void;
/**
 * Sets the drag coefficient of the given soft body. Higher values increase this body's air resistance.
 * 
 * **Note:** This value is currently unused by Godot's default physics implementation.
 * @param body RID
 * @param dragCoefficient float
 */
  softBodySetDragCoefficient(body: RID, dragCoefficient: float): void;
/**
 * Sets the linear stiffness of the given soft body. Higher values will result in a stiffer body, while lower values will increase the body's ability to bend. The value can be between `0.0` and `1.0` (inclusive).
 * @param body RID
 * @param stiffness float
 */
  softBodySetLinearStiffness(body: RID, stiffness: float): void;
/**
 * Sets the mesh of the given soft body.
 * @param body RID
 * @param mesh RID
 */
  softBodySetMesh(body: RID, mesh: RID): void;
/**
 * Sets the pressure coefficient of the given soft body. Simulates pressure build-up from inside this body. Higher values increase the strength of this effect.
 * @param body RID
 * @param pressureCoefficient float
 */
  softBodySetPressureCoefficient(body: RID, pressureCoefficient: float): void;
/**
 * Sets whether the given soft body will be pickable when using object picking.
 * @param body RID
 * @param enable boolean
 */
  softBodySetRayPickable(body: RID, enable: boolean): void;
/**
 * Sets the simulation precision of the given soft body. Increasing this value will improve the resulting simulation, but can affect performance. Use with care.
 * @param body RID
 * @param simulationPrecision int
 */
  softBodySetSimulationPrecision(body: RID, simulationPrecision: int): void;
/**
 * Assigns a space to the given soft body (see `space_create`).
 * @param body RID
 * @param space RID
 */
  softBodySetSpace(body: RID, space: RID): void;
/**
 * Sets the given body state for the given body (see `BodyState` constants).
 * 
 * **Note:** Godot's default physics implementation does not support `BODY_STATE_LINEAR_VELOCITY`, `BODY_STATE_ANGULAR_VELOCITY`, `BODY_STATE_SLEEPING`, or `BODY_STATE_CAN_SLEEP`.
 * @param body RID
 * @param state int
 * @param variant Variant
 */
  softBodySetState(body: RID, state: int, variant: Variant): void;
/**
 * Sets the total mass for the given soft body.
 * @param body RID
 * @param totalMass float
 */
  softBodySetTotalMass(body: RID, totalMass: float): void;
/**
 * Sets the global transform of the given soft body.
 * @param body RID
 * @param transform Transform3D
 */
  softBodySetTransform(body: RID, transform: Transform3D): void;
/**
 * Requests that the physics server updates the rendering server with the latest positions of the given soft body's points through the `rendering_server_handler` interface.
 * @param body RID
 * @param renderingServerHandler PhysicsServer3DRenderingServerHandler
 */
  softBodyUpdateRenderingServer(body: RID, renderingServerHandler: PhysicsServer3DRenderingServerHandler): void;
/**
 * Creates a space. A space is a collection of parameters for the physics engine that can be assigned to an area or a body. It can be assigned to an area with `area_set_space`, or to a body with `body_set_space`.
 * @returns RID
 */
  spaceCreate(): RID;
/**
 * Returns the state of a space, a `PhysicsDirectSpaceState3D`. This object can be used to make collision/intersection queries.
 * @param space RID
 * @returns PhysicsDirectSpaceState3D
 */
  spaceGetDirectState(space: RID): PhysicsDirectSpaceState3D;
/**
 * Returns the value of a space parameter.
 * @param space RID
 * @param param int
 * @returns float
 */
  spaceGetParam(space: RID, param: int): float;
/**
 * Returns whether the space is active.
 * @param space RID
 * @returns boolean
 */
  spaceIsActive(space: RID): boolean;
/**
 * Marks a space as active. It will not have an effect, unless it is assigned to an area or body.
 * @param space RID
 * @param active boolean
 */
  spaceSetActive(space: RID, active: boolean): void;
/**
 * Sets the value for a space parameter. A list of available parameters is on the `SpaceParameter` constants.
 * @param space RID
 * @param param int
 * @param value float
 */
  spaceSetParam(space: RID, param: int, value: float): void;
/**
 * @returns RID
 */
  sphereShapeCreate(): RID;
/**
 * @returns RID
 */
  worldBoundaryShapeCreate(): RID;
/**
 * The `Joint3D` is a `PinJoint3D`.
 */
  static readonly JOINT_TYPE_PIN: int;
/**
 * The `Joint3D` is a `HingeJoint3D`.
 */
  static readonly JOINT_TYPE_HINGE: int;
/**
 * The `Joint3D` is a `SliderJoint3D`.
 */
  static readonly JOINT_TYPE_SLIDER: int;
/**
 * The `Joint3D` is a `ConeTwistJoint3D`.
 */
  static readonly JOINT_TYPE_CONE_TWIST: int;
/**
 * The `Joint3D` is a `Generic6DOFJoint3D`.
 */
  static readonly JOINT_TYPE_6DOF: int;
/**
 * Represents the size of the `JointType` enum.
 */
  static readonly JOINT_TYPE_MAX: int;
/**
 * The strength with which the pinned objects try to stay in positional relation to each other.
 * The higher, the stronger.
 */
  static readonly PIN_JOINT_BIAS: int;
/**
 * The strength with which the pinned objects try to stay in velocity relation to each other.
 * The higher, the stronger.
 */
  static readonly PIN_JOINT_DAMPING: int;
/**
 * If above 0, this value is the maximum value for an impulse that this Joint3D puts on its ends.
 */
  static readonly PIN_JOINT_IMPULSE_CLAMP: int;
/**
 * The speed with which the two bodies get pulled together when they move in different directions.
 */
  static readonly HINGE_JOINT_BIAS: int;
/**
 * The maximum rotation across the Hinge.
 */
  static readonly HINGE_JOINT_LIMIT_UPPER: int;
/**
 * The minimum rotation across the Hinge.
 */
  static readonly HINGE_JOINT_LIMIT_LOWER: int;
/**
 * The speed with which the rotation across the axis perpendicular to the hinge gets corrected.
 */
  static readonly HINGE_JOINT_LIMIT_BIAS: int;
  static readonly HINGE_JOINT_LIMIT_SOFTNESS: int;
/**
 * The lower this value, the more the rotation gets slowed down.
 */
  static readonly HINGE_JOINT_LIMIT_RELAXATION: int;
/**
 * Target speed for the motor.
 */
  static readonly HINGE_JOINT_MOTOR_TARGET_VELOCITY: int;
/**
 * Maximum acceleration for the motor.
 */
  static readonly HINGE_JOINT_MOTOR_MAX_IMPULSE: int;
/**
 * If `true`, the Hinge has a maximum and a minimum rotation.
 */
  static readonly HINGE_JOINT_FLAG_USE_LIMIT: int;
/**
 * If `true`, a motor turns the Hinge.
 */
  static readonly HINGE_JOINT_FLAG_ENABLE_MOTOR: int;
/**
 * The maximum difference between the pivot points on their X axis before damping happens.
 */
  static readonly SLIDER_JOINT_LINEAR_LIMIT_UPPER: int;
/**
 * The minimum difference between the pivot points on their X axis before damping happens.
 */
  static readonly SLIDER_JOINT_LINEAR_LIMIT_LOWER: int;
/**
 * A factor applied to the movement across the slider axis once the limits get surpassed. The lower, the slower the movement.
 */
  static readonly SLIDER_JOINT_LINEAR_LIMIT_SOFTNESS: int;
/**
 * The amount of restitution once the limits are surpassed. The lower, the more velocity-energy gets lost.
 */
  static readonly SLIDER_JOINT_LINEAR_LIMIT_RESTITUTION: int;
/**
 * The amount of damping once the slider limits are surpassed.
 */
  static readonly SLIDER_JOINT_LINEAR_LIMIT_DAMPING: int;
/**
 * A factor applied to the movement across the slider axis as long as the slider is in the limits. The lower, the slower the movement.
 */
  static readonly SLIDER_JOINT_LINEAR_MOTION_SOFTNESS: int;
/**
 * The amount of restitution inside the slider limits.
 */
  static readonly SLIDER_JOINT_LINEAR_MOTION_RESTITUTION: int;
/**
 * The amount of damping inside the slider limits.
 */
  static readonly SLIDER_JOINT_LINEAR_MOTION_DAMPING: int;
/**
 * A factor applied to the movement across axes orthogonal to the slider.
 */
  static readonly SLIDER_JOINT_LINEAR_ORTHOGONAL_SOFTNESS: int;
/**
 * The amount of restitution when movement is across axes orthogonal to the slider.
 */
  static readonly SLIDER_JOINT_LINEAR_ORTHOGONAL_RESTITUTION: int;
/**
 * The amount of damping when movement is across axes orthogonal to the slider.
 */
  static readonly SLIDER_JOINT_LINEAR_ORTHOGONAL_DAMPING: int;
/**
 * The upper limit of rotation in the slider.
 */
  static readonly SLIDER_JOINT_ANGULAR_LIMIT_UPPER: int;
/**
 * The lower limit of rotation in the slider.
 */
  static readonly SLIDER_JOINT_ANGULAR_LIMIT_LOWER: int;
/**
 * A factor applied to the all rotation once the limit is surpassed.
 */
  static readonly SLIDER_JOINT_ANGULAR_LIMIT_SOFTNESS: int;
/**
 * The amount of restitution of the rotation when the limit is surpassed.
 */
  static readonly SLIDER_JOINT_ANGULAR_LIMIT_RESTITUTION: int;
/**
 * The amount of damping of the rotation when the limit is surpassed.
 */
  static readonly SLIDER_JOINT_ANGULAR_LIMIT_DAMPING: int;
/**
 * A factor that gets applied to the all rotation in the limits.
 */
  static readonly SLIDER_JOINT_ANGULAR_MOTION_SOFTNESS: int;
/**
 * The amount of restitution of the rotation in the limits.
 */
  static readonly SLIDER_JOINT_ANGULAR_MOTION_RESTITUTION: int;
/**
 * The amount of damping of the rotation in the limits.
 */
  static readonly SLIDER_JOINT_ANGULAR_MOTION_DAMPING: int;
/**
 * A factor that gets applied to the all rotation across axes orthogonal to the slider.
 */
  static readonly SLIDER_JOINT_ANGULAR_ORTHOGONAL_SOFTNESS: int;
/**
 * The amount of restitution of the rotation across axes orthogonal to the slider.
 */
  static readonly SLIDER_JOINT_ANGULAR_ORTHOGONAL_RESTITUTION: int;
/**
 * The amount of damping of the rotation across axes orthogonal to the slider.
 */
  static readonly SLIDER_JOINT_ANGULAR_ORTHOGONAL_DAMPING: int;
/**
 * Represents the size of the `SliderJointParam` enum.
 */
  static readonly SLIDER_JOINT_MAX: int;
/**
 * Swing is rotation from side to side, around the axis perpendicular to the twist axis.
 * The swing span defines, how much rotation will not get corrected along the swing axis.
 * Could be defined as looseness in the `ConeTwistJoint3D`.
 * If below 0.05, this behavior is locked.
 */
  static readonly CONE_TWIST_JOINT_SWING_SPAN: int;
/**
 * Twist is the rotation around the twist axis, this value defined how far the joint can twist.
 * Twist is locked if below 0.05.
 */
  static readonly CONE_TWIST_JOINT_TWIST_SPAN: int;
/**
 * The speed with which the swing or twist will take place.
 * The higher, the faster.
 */
  static readonly CONE_TWIST_JOINT_BIAS: int;
/**
 * The ease with which the Joint3D twists, if it's too low, it takes more force to twist the joint.
 */
  static readonly CONE_TWIST_JOINT_SOFTNESS: int;
/**
 * Defines, how fast the swing- and twist-speed-difference on both sides gets synced.
 */
  static readonly CONE_TWIST_JOINT_RELAXATION: int;
/**
 * The minimum difference between the pivot points' axes.
 */
  static readonly G6DOF_JOINT_LINEAR_LOWER_LIMIT: int;
/**
 * The maximum difference between the pivot points' axes.
 */
  static readonly G6DOF_JOINT_LINEAR_UPPER_LIMIT: int;
/**
 * A factor that gets applied to the movement across the axes. The lower, the slower the movement.
 */
  static readonly G6DOF_JOINT_LINEAR_LIMIT_SOFTNESS: int;
/**
 * The amount of restitution on the axes movement. The lower, the more velocity-energy gets lost.
 */
  static readonly G6DOF_JOINT_LINEAR_RESTITUTION: int;
/**
 * The amount of damping that happens at the linear motion across the axes.
 */
  static readonly G6DOF_JOINT_LINEAR_DAMPING: int;
/**
 * The velocity that the joint's linear motor will attempt to reach.
 */
  static readonly G6DOF_JOINT_LINEAR_MOTOR_TARGET_VELOCITY: int;
/**
 * The maximum force that the linear motor can apply while trying to reach the target velocity.
 */
  static readonly G6DOF_JOINT_LINEAR_MOTOR_FORCE_LIMIT: int;
  static readonly G6DOF_JOINT_LINEAR_SPRING_STIFFNESS: int;
  static readonly G6DOF_JOINT_LINEAR_SPRING_DAMPING: int;
  static readonly G6DOF_JOINT_LINEAR_SPRING_EQUILIBRIUM_POINT: int;
/**
 * The minimum rotation in negative direction to break loose and rotate around the axes.
 */
  static readonly G6DOF_JOINT_ANGULAR_LOWER_LIMIT: int;
/**
 * The minimum rotation in positive direction to break loose and rotate around the axes.
 */
  static readonly G6DOF_JOINT_ANGULAR_UPPER_LIMIT: int;
/**
 * A factor that gets multiplied onto all rotations across the axes.
 */
  static readonly G6DOF_JOINT_ANGULAR_LIMIT_SOFTNESS: int;
/**
 * The amount of rotational damping across the axes. The lower, the more damping occurs.
 */
  static readonly G6DOF_JOINT_ANGULAR_DAMPING: int;
/**
 * The amount of rotational restitution across the axes. The lower, the more restitution occurs.
 */
  static readonly G6DOF_JOINT_ANGULAR_RESTITUTION: int;
/**
 * The maximum amount of force that can occur, when rotating around the axes.
 */
  static readonly G6DOF_JOINT_ANGULAR_FORCE_LIMIT: int;
/**
 * When correcting the crossing of limits in rotation across the axes, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower.
 */
  static readonly G6DOF_JOINT_ANGULAR_ERP: int;
/**
 * Target speed for the motor at the axes.
 */
  static readonly G6DOF_JOINT_ANGULAR_MOTOR_TARGET_VELOCITY: int;
/**
 * Maximum acceleration for the motor at the axes.
 */
  static readonly G6DOF_JOINT_ANGULAR_MOTOR_FORCE_LIMIT: int;
  static readonly G6DOF_JOINT_ANGULAR_SPRING_STIFFNESS: int;
  static readonly G6DOF_JOINT_ANGULAR_SPRING_DAMPING: int;
  static readonly G6DOF_JOINT_ANGULAR_SPRING_EQUILIBRIUM_POINT: int;
/**
 * Represents the size of the `G6DOFJointAxisParam` enum.
 */
  static readonly G6DOF_JOINT_MAX: int;
/**
 * If set, linear motion is possible within the given limits.
 */
  static readonly G6DOF_JOINT_FLAG_ENABLE_LINEAR_LIMIT: int;
/**
 * If set, rotational motion is possible.
 */
  static readonly G6DOF_JOINT_FLAG_ENABLE_ANGULAR_LIMIT: int;
  static readonly G6DOF_JOINT_FLAG_ENABLE_ANGULAR_SPRING: int;
  static readonly G6DOF_JOINT_FLAG_ENABLE_LINEAR_SPRING: int;
/**
 * If set, there is a rotational motor across these axes.
 */
  static readonly G6DOF_JOINT_FLAG_ENABLE_MOTOR: int;
/**
 * If set, there is a linear motor on this axis that targets a specific velocity.
 */
  static readonly G6DOF_JOINT_FLAG_ENABLE_LINEAR_MOTOR: int;
/**
 * Represents the size of the `G6DOFJointAxisFlag` enum.
 */
  static readonly G6DOF_JOINT_FLAG_MAX: int;
/**
 * The `Shape3D` is a `WorldBoundaryShape3D`.
 */
  static readonly SHAPE_WORLD_BOUNDARY: int;
/**
 * The `Shape3D` is a `SeparationRayShape3D`.
 */
  static readonly SHAPE_SEPARATION_RAY: int;
/**
 * The `Shape3D` is a `SphereShape3D`.
 */
  static readonly SHAPE_SPHERE: int;
/**
 * The `Shape3D` is a `BoxShape3D`.
 */
  static readonly SHAPE_BOX: int;
/**
 * The `Shape3D` is a `CapsuleShape3D`.
 */
  static readonly SHAPE_CAPSULE: int;
/**
 * The `Shape3D` is a `CylinderShape3D`.
 */
  static readonly SHAPE_CYLINDER: int;
/**
 * The `Shape3D` is a `ConvexPolygonShape3D`.
 */
  static readonly SHAPE_CONVEX_POLYGON: int;
/**
 * The `Shape3D` is a `ConcavePolygonShape3D`.
 */
  static readonly SHAPE_CONCAVE_POLYGON: int;
/**
 * The `Shape3D` is a `HeightMapShape3D`.
 */
  static readonly SHAPE_HEIGHTMAP: int;
/**
 * The `Shape3D` is used internally for a soft body. Any attempt to create this kind of shape results in an error.
 */
  static readonly SHAPE_SOFT_BODY: int;
/**
 * This constant is used internally by the engine. Any attempt to create this kind of shape results in an error.
 */
  static readonly SHAPE_CUSTOM: int;
/**
 * Constant to set/get gravity override mode in an area. See `AreaSpaceOverrideMode` for possible values.
 */
  static readonly AREA_PARAM_GRAVITY_OVERRIDE_MODE: int;
/**
 * Constant to set/get gravity strength in an area.
 */
  static readonly AREA_PARAM_GRAVITY: int;
/**
 * Constant to set/get gravity vector/center in an area.
 */
  static readonly AREA_PARAM_GRAVITY_VECTOR: int;
/**
 * Constant to set/get whether the gravity vector of an area is a direction, or a center point.
 */
  static readonly AREA_PARAM_GRAVITY_IS_POINT: int;
/**
 * Constant to set/get the distance at which the gravity strength is equal to the gravity controlled by `AREA_PARAM_GRAVITY`. For example, on a planet 100 meters in radius with a surface gravity of 4.0 m/s², set the gravity to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 meters from the center the gravity will be 1.0 m/s² (twice the distance, 1/4th the gravity), at 50 meters it will be 16.0 m/s² (half the distance, 4x the gravity), and so on.
 * The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.
 */
  static readonly AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE: int;
/**
 * Constant to set/get linear damping override mode in an area. See `AreaSpaceOverrideMode` for possible values.
 */
  static readonly AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE: int;
/**
 * Constant to set/get the linear damping factor of an area.
 */
  static readonly AREA_PARAM_LINEAR_DAMP: int;
/**
 * Constant to set/get angular damping override mode in an area. See `AreaSpaceOverrideMode` for possible values.
 */
  static readonly AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE: int;
/**
 * Constant to set/get the angular damping factor of an area.
 */
  static readonly AREA_PARAM_ANGULAR_DAMP: int;
/**
 * Constant to set/get the priority (order of processing) of an area.
 */
  static readonly AREA_PARAM_PRIORITY: int;
/**
 * Constant to set/get the magnitude of area-specific wind force. This wind force only applies to `SoftBody3D` nodes. Other physics bodies are currently not affected by wind.
 */
  static readonly AREA_PARAM_WIND_FORCE_MAGNITUDE: int;
/**
 * Constant to set/get the 3D vector that specifies the origin from which an area-specific wind blows.
 */
  static readonly AREA_PARAM_WIND_SOURCE: int;
/**
 * Constant to set/get the 3D vector that specifies the direction in which an area-specific wind blows.
 */
  static readonly AREA_PARAM_WIND_DIRECTION: int;
/**
 * Constant to set/get the exponential rate at which wind force decreases with distance from its origin.
 */
  static readonly AREA_PARAM_WIND_ATTENUATION_FACTOR: int;
/**
 * This area does not affect gravity/damp. These are generally areas that exist only to detect collisions, and objects entering or exiting them.
 */
  static readonly AREA_SPACE_OVERRIDE_DISABLED: int;
/**
 * This area adds its gravity/damp values to whatever has been calculated so far. This way, many overlapping areas can combine their physics to make interesting effects.
 */
  static readonly AREA_SPACE_OVERRIDE_COMBINE: int;
/**
 * This area adds its gravity/damp values to whatever has been calculated so far. Then stops taking into account the rest of the areas, even the default one.
 */
  static readonly AREA_SPACE_OVERRIDE_COMBINE_REPLACE: int;
/**
 * This area replaces any gravity/damp, even the default one, and stops taking into account the rest of the areas.
 */
  static readonly AREA_SPACE_OVERRIDE_REPLACE: int;
/**
 * This area replaces any gravity/damp calculated so far, but keeps calculating the rest of the areas, down to the default one.
 */
  static readonly AREA_SPACE_OVERRIDE_REPLACE_COMBINE: int;
/**
 * Constant for static bodies. In this mode, a body can be only moved by user code and doesn't collide with other bodies along its path when moved.
 */
  static readonly BODY_MODE_STATIC: int;
/**
 * Constant for kinematic bodies. In this mode, a body can be only moved by user code and collides with other bodies along its path.
 */
  static readonly BODY_MODE_KINEMATIC: int;
/**
 * Constant for rigid bodies. In this mode, a body can be pushed by other bodies and has forces applied.
 */
  static readonly BODY_MODE_RIGID: int;
/**
 * Constant for linear rigid bodies. In this mode, a body can not rotate, and only its linear velocity is affected by external forces.
 */
  static readonly BODY_MODE_RIGID_LINEAR: int;
/**
 * Constant to set/get a body's bounce factor.
 */
  static readonly BODY_PARAM_BOUNCE: int;
/**
 * Constant to set/get a body's friction.
 */
  static readonly BODY_PARAM_FRICTION: int;
/**
 * Constant to set/get a body's mass.
 */
  static readonly BODY_PARAM_MASS: int;
/**
 * Constant to set/get a body's inertia.
 */
  static readonly BODY_PARAM_INERTIA: int;
/**
 * Constant to set/get a body's center of mass position in the body's local coordinate system.
 */
  static readonly BODY_PARAM_CENTER_OF_MASS: int;
/**
 * Constant to set/get a body's gravity multiplier.
 */
  static readonly BODY_PARAM_GRAVITY_SCALE: int;
/**
 * Constant to set/get a body's linear damping mode. See `BodyDampMode` for possible values.
 */
  static readonly BODY_PARAM_LINEAR_DAMP_MODE: int;
/**
 * Constant to set/get a body's angular damping mode. See `BodyDampMode` for possible values.
 */
  static readonly BODY_PARAM_ANGULAR_DAMP_MODE: int;
/**
 * Constant to set/get a body's linear damping factor.
 */
  static readonly BODY_PARAM_LINEAR_DAMP: int;
/**
 * Constant to set/get a body's angular damping factor.
 */
  static readonly BODY_PARAM_ANGULAR_DAMP: int;
/**
 * Represents the size of the `BodyParameter` enum.
 */
  static readonly BODY_PARAM_MAX: int;
/**
 * The body's damping value is added to any value set in areas or the default value.
 */
  static readonly BODY_DAMP_MODE_COMBINE: int;
/**
 * The body's damping value replaces any value set in areas or the default value.
 */
  static readonly BODY_DAMP_MODE_REPLACE: int;
/**
 * Constant to set/get the current transform matrix of the body.
 */
  static readonly BODY_STATE_TRANSFORM: int;
/**
 * Constant to set/get the current linear velocity of the body.
 */
  static readonly BODY_STATE_LINEAR_VELOCITY: int;
/**
 * Constant to set/get the current angular velocity of the body.
 */
  static readonly BODY_STATE_ANGULAR_VELOCITY: int;
/**
 * Constant to sleep/wake up a body, or to get whether it is sleeping.
 */
  static readonly BODY_STATE_SLEEPING: int;
/**
 * Constant to set/get whether the body can sleep.
 */
  static readonly BODY_STATE_CAN_SLEEP: int;
/**
 * The value of the first parameter and area callback function receives, when an object enters one of its shapes.
 */
  static readonly AREA_BODY_ADDED: int;
/**
 * The value of the first parameter and area callback function receives, when an object exits one of its shapes.
 */
  static readonly AREA_BODY_REMOVED: int;
/**
 * Constant to get the number of objects that are not sleeping.
 */
  static readonly INFO_ACTIVE_OBJECTS: int;
/**
 * Constant to get the number of possible collisions.
 */
  static readonly INFO_COLLISION_PAIRS: int;
/**
 * Constant to get the number of space regions where a collision could occur.
 */
  static readonly INFO_ISLAND_COUNT: int;
/**
 * Constant to set/get the maximum distance a pair of bodies has to move before their collision status has to be recalculated.
 */
  static readonly SPACE_PARAM_CONTACT_RECYCLE_RADIUS: int;
/**
 * Constant to set/get the maximum distance a shape can be from another before they are considered separated and the contact is discarded.
 */
  static readonly SPACE_PARAM_CONTACT_MAX_SEPARATION: int;
/**
 * Constant to set/get the maximum distance a shape can penetrate another shape before it is considered a collision.
 */
  static readonly SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION: int;
/**
 * Constant to set/get the default solver bias for all physics contacts. A solver bias is a factor controlling how much two objects "rebound", after overlapping, to avoid leaving them in that state because of numerical imprecision.
 */
  static readonly SPACE_PARAM_CONTACT_DEFAULT_BIAS: int;
/**
 * Constant to set/get the threshold linear velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given.
 */
  static readonly SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD: int;
/**
 * Constant to set/get the threshold angular velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given.
 */
  static readonly SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD: int;
/**
 * Constant to set/get the maximum time of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after this time.
 */
  static readonly SPACE_PARAM_BODY_TIME_TO_SLEEP: int;
/**
 * Constant to set/get the number of solver iterations for contacts and constraints. The greater the number of iterations, the more accurate the collisions and constraints will be. However, a greater number of iterations requires more CPU power, which can decrease performance.
 */
  static readonly SPACE_PARAM_SOLVER_ITERATIONS: int;
  static readonly BODY_AXIS_LINEAR_X: int;
  static readonly BODY_AXIS_LINEAR_Y: int;
  static readonly BODY_AXIS_LINEAR_Z: int;
  static readonly BODY_AXIS_ANGULAR_X: int;
  static readonly BODY_AXIS_ANGULAR_Y: int;
  static readonly BODY_AXIS_ANGULAR_Z: int;
}
