import type { Callable, GodotArray, GodotDictionary, Object, PhysicsDirectBodyState2D, PhysicsDirectSpaceState2D, PhysicsTestMotionParameters2D, PhysicsTestMotionResult2D, RID, Transform2D, Variant, Vector2, float, int } from "../index.d.ts";
/**
 * A server interface for low-level 2D physics access.
 * 
 * PhysicsServer2D is the server responsible for all 2D physics. It can directly create and manipulate all physics objects:
 * - A *space* is a self-contained world for a physics simulation. It contains bodies, areas, and joints. Its state can be queried for collision and intersection information, and several parameters of the simulation can be modified.
 * - A *shape* is a geometric shape such as a circle, a rectangle, a capsule, or a polygon. It can be used for collision detection by adding it to a body/area, possibly with an extra transformation relative to the body/area's origin. Bodies/areas can have multiple (transformed) shapes added to them, and a single shape can be added to bodies/areas multiple times with different local transformations.
 * - A *body* is a physical object which can be in static, kinematic, or rigid mode. Its state (such as position and velocity) can be queried and updated. A force integration callback can be set to customize the body's physics.
 * - An *area* is a region in space which can be used to detect bodies and areas entering and exiting it. A body monitoring callback can be set to report entering/exiting body shapes, and similarly an area monitoring callback can be set. Gravity and damping can be overridden within the area by setting area parameters.
 * - A *joint* is a constraint, either between two bodies or on one body relative to a point. Parameters such as the joint bias and the rest length of a spring joint can be adjusted.
 * Physics objects in `PhysicsServer2D` may be created and manipulated independently; they do not have to be tied to nodes in the scene tree.
 * 
 * **Note:** All the 2D physics nodes use the physics server internally. Adding a physics node to the scene tree will cause a corresponding physics object to be created in the physics server. A rigid body node registers a callback that updates the node's transform with the transform of the respective body object in the physics server (every physics update). An area node registers a callback to inform the area node about overlaps with the respective area object in the physics server. The raycast node queries the direct state of the relevant space in the physics server.
 */
export class PhysicsServer2D extends Object {
/**
 * Adds a shape to the area, with the given local transform. The shape (together with its `transform` and `disabled` properties) is added to an array of shapes, and the shapes of an area are usually referenced by their index in this array.
 * @param area RID
 * @param shape RID
 * @param transform Transform2D (optional, default: Transform2D(1, 0, 0, 1, 0, 0))
 * @param disabled boolean (optional, default: false)
 */
  areaAddShape(area: RID, shape: RID, transform?: Transform2D, disabled?: boolean): void;
/**
 * Attaches the `ObjectID` of a canvas to the area. Use `Object.get_instance_id` to get the `ObjectID` of a `CanvasLayer`.
 * @param area RID
 * @param id int
 */
  areaAttachCanvasInstanceId(area: RID, id: int): void;
/**
 * Attaches the `ObjectID` of an `Object` to the area. Use `Object.get_instance_id` to get the `ObjectID` of a `CollisionObject2D`.
 * @param area RID
 * @param id int
 */
  areaAttachObjectInstanceId(area: RID, id: int): void;
/**
 * Removes all shapes from the area. This does not delete the shapes themselves, so they can continue to be used elsewhere or added back later.
 * @param area RID
 */
  areaClearShapes(area: RID): void;
/**
 * Creates a 2D area object in the physics server, and returns the `RID` that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and `monitorable` set to `false`.
 * Use `area_add_shape` to add shapes to it, use `area_set_transform` to set its transform, and use `area_set_space` to add the area to a space. If you want the area to be detectable use `area_set_monitorable`.
 * @returns RID
 */
  areaCreate(): RID;
/**
 * Returns the `ObjectID` of the canvas attached to the area. Use `@GlobalScope.instance_from_id` to retrieve a `CanvasLayer` from a nonzero `ObjectID`.
 * @param area RID
 * @returns int
 */
  areaGetCanvasInstanceId(area: RID): int;
/**
 * Returns the physics layer or layers the area belongs to, as a bitmask.
 * @param area RID
 * @returns int
 */
  areaGetCollisionLayer(area: RID): int;
/**
 * Returns the physics layer or layers the area can contact with, as a bitmask.
 * @param area RID
 * @returns int
 */
  areaGetCollisionMask(area: RID): int;
/**
 * Returns the `ObjectID` attached to the area. Use `@GlobalScope.instance_from_id` to retrieve an `Object` from a nonzero `ObjectID`.
 * @param area RID
 * @returns int
 */
  areaGetObjectInstanceId(area: RID): int;
/**
 * Returns the value of the given area parameter. See `AreaParameter` for the list of available parameters.
 * @param area RID
 * @param param int
 * @returns Variant
 */
  areaGetParam(area: RID, param: int): Variant;
/**
 * Returns the `RID` of the shape with the given index in the area's array of shapes.
 * @param area RID
 * @param shapeIdx int
 * @returns RID
 */
  areaGetShape(area: RID, shapeIdx: int): RID;
/**
 * Returns the number of shapes added to the area.
 * @param area RID
 * @returns int
 */
  areaGetShapeCount(area: RID): int;
/**
 * Returns the local transform matrix of the shape with the given index in the area's array of shapes.
 * @param area RID
 * @param shapeIdx int
 * @returns Transform2D
 */
  areaGetShapeTransform(area: RID, shapeIdx: int): Transform2D;
/**
 * Returns the `RID` of the space assigned to the area. Returns an empty `RID` if no space is assigned.
 * @param area RID
 * @returns RID
 */
  areaGetSpace(area: RID): RID;
/**
 * Returns the transform matrix of the area.
 * @param area RID
 * @returns Transform2D
 */
  areaGetTransform(area: RID): Transform2D;
/**
 * Removes the shape with the given index from the area's array of shapes. The shape itself is not deleted, so it can continue to be used elsewhere or added back later. As a result of this operation, the area's shapes which used to have indices higher than `shape_idx` will have their index decreased by one.
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
 * Assigns the area to one or many physics layers, via a bitmask.
 * @param area RID
 * @param layer int
 */
  areaSetCollisionLayer(area: RID, layer: int): void;
/**
 * Sets which physics layers the area will monitor, via a bitmask.
 * @param area RID
 * @param mask int
 */
  areaSetCollisionMask(area: RID, mask: int): void;
/**
 * Sets whether the area is monitorable or not. If `monitorable` is `true`, the area monitoring callback of other areas will be called when this area enters or exits them.
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
 * Sets the value of the given area parameter. See `AreaParameter` for the list of available parameters.
 * @param area RID
 * @param param int
 * @param value Variant
 */
  areaSetParam(area: RID, param: int, value: Variant): void;
/**
 * Replaces the area's shape at the given index by another shape, while not affecting the `transform` and `disabled` properties at the same index.
 * @param area RID
 * @param shapeIdx int
 * @param shape RID
 */
  areaSetShape(area: RID, shapeIdx: int, shape: RID): void;
/**
 * Sets the disabled property of the area's shape with the given index. If `disabled` is `true`, then the shape will not detect any other shapes entering or exiting it.
 * @param area RID
 * @param shapeIdx int
 * @param disabled boolean
 */
  areaSetShapeDisabled(area: RID, shapeIdx: int, disabled: boolean): void;
/**
 * Sets the local transform matrix of the area's shape with the given index.
 * @param area RID
 * @param shapeIdx int
 * @param transform Transform2D
 */
  areaSetShapeTransform(area: RID, shapeIdx: int, transform: Transform2D): void;
/**
 * Adds the area to the given space, after removing the area from the previously assigned space (if any).
 * 
 * **Note:** To remove an area from a space without immediately adding it back elsewhere, use `PhysicsServer2D.area_set_space(area, RID())`.
 * @param area RID
 * @param space RID
 */
  areaSetSpace(area: RID, space: RID): void;
/**
 * Sets the transform matrix of the area.
 * @param area RID
 * @param transform Transform2D
 */
  areaSetTransform(area: RID, transform: Transform2D): void;
/**
 * Adds `excepted_body` to the body's list of collision exceptions, so that collisions with it are ignored.
 * @param body RID
 * @param exceptedBody RID
 */
  bodyAddCollisionException(body: RID, exceptedBody: RID): void;
/**
 * Adds a constant directional force to the body. The force does not affect rotation. The force remains applied over time until cleared with `PhysicsServer2D.body_set_constant_force(body, Vector2(0, 0))`.
 * This is equivalent to using `body_add_constant_force` at the body's center of mass.
 * @param body RID
 * @param force Vector2
 */
  bodyAddConstantCentralForce(body: RID, force: Vector2): void;
/**
 * Adds a constant positioned force to the body. The force can affect rotation if `position` is different from the body's center of mass. The force remains applied over time until cleared with `PhysicsServer2D.body_set_constant_force(body, Vector2(0, 0))`.
 * `position` is the offset from the body origin in global coordinates.
 * @param body RID
 * @param force Vector2
 * @param position Vector2 (optional, default: Vector2(0, 0))
 */
  bodyAddConstantForce(body: RID, force: Vector2, position?: Vector2): void;
/**
 * Adds a constant rotational force to the body. The force does not affect position. The force remains applied over time until cleared with `PhysicsServer2D.body_set_constant_torque(body, 0)`.
 * @param body RID
 * @param torque float
 */
  bodyAddConstantTorque(body: RID, torque: float): void;
/**
 * Adds a shape to the area, with the given local transform. The shape (together with its `transform` and `disabled` properties) is added to an array of shapes, and the shapes of a body are usually referenced by their index in this array.
 * @param body RID
 * @param shape RID
 * @param transform Transform2D (optional, default: Transform2D(1, 0, 0, 1, 0, 0))
 * @param disabled boolean (optional, default: false)
 */
  bodyAddShape(body: RID, shape: RID, transform?: Transform2D, disabled?: boolean): void;
/**
 * Applies a directional force to the body, at the body's center of mass. The force does not affect rotation. A force is time dependent and meant to be applied every physics update.
 * This is equivalent to using `body_apply_force` at the body's center of mass.
 * @param body RID
 * @param force Vector2
 */
  bodyApplyCentralForce(body: RID, force: Vector2): void;
/**
 * Applies a directional impulse to the body, at the body's center of mass. The impulse does not affect rotation.
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 * This is equivalent to using `body_apply_impulse` at the body's center of mass.
 * @param body RID
 * @param impulse Vector2
 */
  bodyApplyCentralImpulse(body: RID, impulse: Vector2): void;
/**
 * Applies a positioned force to the body. The force can affect rotation if `position` is different from the body's center of mass. A force is time dependent and meant to be applied every physics update.
 * `position` is the offset from the body origin in global coordinates.
 * @param body RID
 * @param force Vector2
 * @param position Vector2 (optional, default: Vector2(0, 0))
 */
  bodyApplyForce(body: RID, force: Vector2, position?: Vector2): void;
/**
 * Applies a positioned impulse to the body. The impulse can affect rotation if `position` is different from the body's center of mass.
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 * `position` is the offset from the body origin in global coordinates.
 * @param body RID
 * @param impulse Vector2
 * @param position Vector2 (optional, default: Vector2(0, 0))
 */
  bodyApplyImpulse(body: RID, impulse: Vector2, position?: Vector2): void;
/**
 * Applies a rotational force to the body. The force does not affect position. A force is time dependent and meant to be applied every physics update.
 * @param body RID
 * @param torque float
 */
  bodyApplyTorque(body: RID, torque: float): void;
/**
 * Applies a rotational impulse to the body. The impulse does not affect position.
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 * @param body RID
 * @param impulse float
 */
  bodyApplyTorqueImpulse(body: RID, impulse: float): void;
/**
 * Attaches the `ObjectID` of a canvas to the body. Use `Object.get_instance_id` to get the `ObjectID` of a `CanvasLayer`.
 * @param body RID
 * @param id int
 */
  bodyAttachCanvasInstanceId(body: RID, id: int): void;
/**
 * Attaches the `ObjectID` of an `Object` to the body. Use `Object.get_instance_id` to get the `ObjectID` of a `CollisionObject2D`.
 * @param body RID
 * @param id int
 */
  bodyAttachObjectInstanceId(body: RID, id: int): void;
/**
 * Removes all shapes from the body. This does not delete the shapes themselves, so they can continue to be used elsewhere or added back later.
 * @param body RID
 */
  bodyClearShapes(body: RID): void;
/**
 * Creates a 2D body object in the physics server, and returns the `RID` that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and body mode set to `BODY_MODE_RIGID`.
 * Use `body_add_shape` to add shapes to it, use `body_set_state` to set its transform, and use `body_set_space` to add the body to a space.
 * @returns RID
 */
  bodyCreate(): RID;
/**
 * Returns the `ObjectID` of the canvas attached to the body. Use `@GlobalScope.instance_from_id` to retrieve a `CanvasLayer` from a nonzero `ObjectID`.
 * @param body RID
 * @returns int
 */
  bodyGetCanvasInstanceId(body: RID): int;
/**
 * Returns the physics layer or layers the body belongs to, as a bitmask.
 * @param body RID
 * @returns int
 */
  bodyGetCollisionLayer(body: RID): int;
/**
 * Returns the physics layer or layers the body can collide with, as a bitmask.
 * @param body RID
 * @returns int
 */
  bodyGetCollisionMask(body: RID): int;
/**
 * Returns the body's collision priority. This is used in the depenetration phase of `body_test_motion`. The higher the priority is, the lower the penetration into the body will be.
 * @param body RID
 * @returns float
 */
  bodyGetCollisionPriority(body: RID): float;
/**
 * Returns the body's total constant positional force applied during each physics update.
 * See `body_add_constant_force` and `body_add_constant_central_force`.
 * @param body RID
 * @returns Vector2
 */
  bodyGetConstantForce(body: RID): Vector2;
/**
 * Returns the body's total constant rotational force applied during each physics update.
 * See `body_add_constant_torque`.
 * @param body RID
 * @returns float
 */
  bodyGetConstantTorque(body: RID): float;
/**
 * Returns the body's continuous collision detection mode (see `CCDMode`).
 * @param body RID
 * @returns int
 */
  bodyGetContinuousCollisionDetectionMode(body: RID): int;
/**
 * Returns the `PhysicsDirectBodyState2D` of the body. Returns `null` if the body is destroyed or not assigned to a space.
 * @param body RID
 * @returns PhysicsDirectBodyState2D
 */
  bodyGetDirectState(body: RID): PhysicsDirectBodyState2D;
/**
 * Returns the maximum number of contacts that the body can report. See `body_set_max_contacts_reported`.
 * @param body RID
 * @returns int
 */
  bodyGetMaxContactsReported(body: RID): int;
/**
 * Returns the body's mode (see `BodyMode`).
 * @param body RID
 * @returns int
 */
  bodyGetMode(body: RID): int;
/**
 * Returns the `ObjectID` attached to the body. Use `@GlobalScope.instance_from_id` to retrieve an `Object` from a nonzero `ObjectID`.
 * @param body RID
 * @returns int
 */
  bodyGetObjectInstanceId(body: RID): int;
/**
 * Returns the value of the given body parameter. See `BodyParameter` for the list of available parameters.
 * @param body RID
 * @param param int
 * @returns Variant
 */
  bodyGetParam(body: RID, param: int): Variant;
/**
 * Returns the `RID` of the shape with the given index in the body's array of shapes.
 * @param body RID
 * @param shapeIdx int
 * @returns RID
 */
  bodyGetShape(body: RID, shapeIdx: int): RID;
/**
 * Returns the number of shapes added to the body.
 * @param body RID
 * @returns int
 */
  bodyGetShapeCount(body: RID): int;
/**
 * Returns the local transform matrix of the shape with the given index in the area's array of shapes.
 * @param body RID
 * @param shapeIdx int
 * @returns Transform2D
 */
  bodyGetShapeTransform(body: RID, shapeIdx: int): Transform2D;
/**
 * Returns the `RID` of the space assigned to the body. Returns an empty `RID` if no space is assigned.
 * @param body RID
 * @returns RID
 */
  bodyGetSpace(body: RID): RID;
/**
 * Returns the value of the given state of the body. See `BodyState` for the list of available states.
 * @param body RID
 * @param state int
 * @returns Variant
 */
  bodyGetState(body: RID, state: int): Variant;
/**
 * Returns `true` if the body is omitting the standard force integration. See `body_set_omit_force_integration`.
 * @param body RID
 * @returns boolean
 */
  bodyIsOmittingForceIntegration(body: RID): boolean;
/**
 * Removes `excepted_body` from the body's list of collision exceptions, so that collisions with it are no longer ignored.
 * @param body RID
 * @param exceptedBody RID
 */
  bodyRemoveCollisionException(body: RID, exceptedBody: RID): void;
/**
 * Removes the shape with the given index from the body's array of shapes. The shape itself is not deleted, so it can continue to be used elsewhere or added back later. As a result of this operation, the body's shapes which used to have indices higher than `shape_idx` will have their index decreased by one.
 * @param body RID
 * @param shapeIdx int
 */
  bodyRemoveShape(body: RID, shapeIdx: int): void;
/**
 * Restores the default inertia and center of mass of the body based on its shapes. This undoes any custom values previously set using `body_set_param`.
 * @param body RID
 */
  bodyResetMassProperties(body: RID): void;
/**
 * Modifies the body's linear velocity so that its projection to the axis `axis_velocity.normalized()` is exactly `axis_velocity.length()`. This is useful for jumping behavior.
 * @param body RID
 * @param axisVelocity Vector2
 */
  bodySetAxisVelocity(body: RID, axisVelocity: Vector2): void;
/**
 * Sets the physics layer or layers the body belongs to, via a bitmask.
 * @param body RID
 * @param layer int
 */
  bodySetCollisionLayer(body: RID, layer: int): void;
/**
 * Sets the physics layer or layers the body can collide with, via a bitmask.
 * @param body RID
 * @param mask int
 */
  bodySetCollisionMask(body: RID, mask: int): void;
/**
 * Sets the body's collision priority. This is used in the depenetration phase of `body_test_motion`. The higher the priority is, the lower the penetration into the body will be.
 * @param body RID
 * @param priority float
 */
  bodySetCollisionPriority(body: RID, priority: float): void;
/**
 * Sets the body's total constant positional force applied during each physics update.
 * See `body_add_constant_force` and `body_add_constant_central_force`.
 * @param body RID
 * @param force Vector2
 */
  bodySetConstantForce(body: RID, force: Vector2): void;
/**
 * Sets the body's total constant rotational force applied during each physics update.
 * See `body_add_constant_torque`.
 * @param body RID
 * @param torque float
 */
  bodySetConstantTorque(body: RID, torque: float): void;
/**
 * Sets the continuous collision detection mode using one of the `CCDMode` constants.
 * Continuous collision detection tries to predict where a moving body would collide in between physics updates, instead of moving it and correcting its movement if it collided.
 * @param body RID
 * @param mode int
 */
  bodySetContinuousCollisionDetectionMode(body: RID, mode: int): void;
/**
 * Sets the body's custom force integration callback function to `callable`. Use an empty `Callable` ([code skip-lint]Callable()[/code]) to clear the custom callback.
 * The function `callable` will be called every physics tick, before the standard force integration (see `body_set_omit_force_integration`). It can be used for example to update the body's linear and angular velocity based on contact with other bodies.
 * If `userdata` is not `null`, the function `callable` must take the following two parameters:
 * 1. `state`: a `PhysicsDirectBodyState2D` used to retrieve and modify the body's state,
 * 2. [code skip-lint]userdata[/code]: a `Variant`; its value will be the `userdata` passed into this method.
 * If `userdata` is `null`, then `callable` must take only the `state` parameter.
 * @param body RID
 * @param callable Callable
 * @param userdata Variant (optional, default: null)
 */
  bodySetForceIntegrationCallback(body: RID, callable: Callable, userdata?: Variant): void;
/**
 * Sets the maximum number of contacts that the body can report. If `amount` is greater than zero, then the body will keep track of at most this many contacts with other bodies.
 * @param body RID
 * @param amount int
 */
  bodySetMaxContactsReported(body: RID, amount: int): void;
/**
 * Sets the body's mode. See `BodyMode` for the list of available modes.
 * @param body RID
 * @param mode int
 */
  bodySetMode(body: RID, mode: int): void;
/**
 * Sets whether the body omits the standard force integration. If `enable` is `true`, the body will not automatically use applied forces, torques, and damping to update the body's linear and angular velocity. In this case, `body_set_force_integration_callback` can be used to manually update the linear and angular velocity instead.
 * This method is called when the property `RigidBody2D.custom_integrator` is set.
 * @param body RID
 * @param enable boolean
 */
  bodySetOmitForceIntegration(body: RID, enable: boolean): void;
/**
 * Sets the value of the given body parameter. See `BodyParameter` for the list of available parameters.
 * @param body RID
 * @param param int
 * @param value Variant
 */
  bodySetParam(body: RID, param: int, value: Variant): void;
/**
 * Replaces the body's shape at the given index by another shape, while not affecting the `transform`, `disabled`, and one-way collision properties at the same index.
 * @param body RID
 * @param shapeIdx int
 * @param shape RID
 */
  bodySetShape(body: RID, shapeIdx: int, shape: RID): void;
/**
 * Sets the one-way collision properties of the body's shape with the given index. If `enable` is `true`, the one-way collision direction given by the shape's local upward axis `body_get_shape_transform(body, shape_idx).y` will be used to ignore collisions with the shape in the opposite direction, and to ensure depenetration of kinematic bodies happens in this direction.
 * @param body RID
 * @param shapeIdx int
 * @param enable boolean
 * @param margin float
 */
  bodySetShapeAsOneWayCollision(body: RID, shapeIdx: int, enable: boolean, margin: float): void;
/**
 * Sets the disabled property of the body's shape with the given index. If `disabled` is `true`, then the shape will be ignored in all collision detection.
 * @param body RID
 * @param shapeIdx int
 * @param disabled boolean
 */
  bodySetShapeDisabled(body: RID, shapeIdx: int, disabled: boolean): void;
/**
 * Sets the local transform matrix of the body's shape with the given index.
 * @param body RID
 * @param shapeIdx int
 * @param transform Transform2D
 */
  bodySetShapeTransform(body: RID, shapeIdx: int, transform: Transform2D): void;
/**
 * Adds the body to the given space, after removing the body from the previously assigned space (if any). If the body's mode is set to `BODY_MODE_RIGID`, then adding the body to a space will have the following additional effects:
 * - If the parameter `BODY_PARAM_CENTER_OF_MASS` has never been set explicitly, then the value of that parameter will be recalculated based on the body's shapes.
 * - If the parameter `BODY_PARAM_INERTIA` is set to a value `<= 0.0`, then the value of that parameter will be recalculated based on the body's shapes, mass, and center of mass.
 * 
 * **Note:** To remove a body from a space without immediately adding it back elsewhere, use `PhysicsServer2D.body_set_space(body, RID())`.
 * @param body RID
 * @param space RID
 */
  bodySetSpace(body: RID, space: RID): void;
/**
 * Sets the value of a body's state. See `BodyState` for the list of available states.
 * 
 * **Note:** The state change doesn't take effect immediately. The state will change on the next physics frame.
 * @param body RID
 * @param state int
 * @param value Variant
 */
  bodySetState(body: RID, state: int, value: Variant): void;
/**
 * Sets the body's state synchronization callback function to `callable`. Use an empty `Callable` ([code skip-lint]Callable()[/code]) to clear the callback.
 * The function `callable` will be called every physics frame, assuming that the body was active during the previous physics tick, and can be used to fetch the latest state from the physics server.
 * The function `callable` must take the following parameters:
 * 1. `state`: a `PhysicsDirectBodyState2D`, used to retrieve the body's state.
 * @param body RID
 * @param callable Callable
 */
  bodySetStateSyncCallback(body: RID, callable: Callable): void;
/**
 * Returns `true` if a collision would result from moving the body along a motion vector from a given point in space. See `PhysicsTestMotionParameters2D` for the available motion parameters. Optionally a `PhysicsTestMotionResult2D` object can be passed, which will be used to store the information about the resulting collision.
 * @param body RID
 * @param parameters PhysicsTestMotionParameters2D
 * @param result PhysicsTestMotionResult2D (optional, default: null)
 * @returns boolean
 */
  bodyTestMotion(body: RID, parameters: PhysicsTestMotionParameters2D, result?: PhysicsTestMotionResult2D): boolean;
/**
 * Creates a 2D capsule shape in the physics server, and returns the `RID` that identifies it. Use `shape_set_data` to set the capsule's height and radius.
 * @returns RID
 */
  capsuleShapeCreate(): RID;
/**
 * Creates a 2D circle shape in the physics server, and returns the `RID` that identifies it. Use `shape_set_data` to set the circle's radius.
 * @returns RID
 */
  circleShapeCreate(): RID;
/**
 * Creates a 2D concave polygon shape in the physics server, and returns the `RID` that identifies it. Use `shape_set_data` to set the concave polygon's segments.
 * @returns RID
 */
  concavePolygonShapeCreate(): RID;
/**
 * Creates a 2D convex polygon shape in the physics server, and returns the `RID` that identifies it. Use `shape_set_data` to set the convex polygon's points.
 * @returns RID
 */
  convexPolygonShapeCreate(): RID;
/**
 * Returns the value of the given damped spring joint parameter. See `DampedSpringParam` for the list of available parameters.
 * @param joint RID
 * @param param int
 * @returns float
 */
  dampedSpringJointGetParam(joint: RID, param: int): float;
/**
 * Sets the value of the given damped spring joint parameter. See `DampedSpringParam` for the list of available parameters.
 * @param joint RID
 * @param param int
 * @param value float
 */
  dampedSpringJointSetParam(joint: RID, param: int, value: float): void;
/**
 * Destroys any of the objects created by PhysicsServer2D. If the `RID` passed is not one of the objects that can be created by PhysicsServer2D, an error will be printed to the console.
 * @param rid RID
 */
  freeRid(rid: RID): void;
/**
 * Returns information about the current state of the 2D physics engine. See `ProcessInfo` for the list of available states.
 * @param processInfo int
 * @returns int
 */
  getProcessInfo(processInfo: int): int;
/**
 * Destroys the joint with the given `RID`, creates a new uninitialized joint, and makes the `RID` refer to this new joint.
 * @param joint RID
 */
  jointClear(joint: RID): void;
/**
 * Creates a 2D joint in the physics server, and returns the `RID` that identifies it. To set the joint type, use `joint_make_damped_spring`, `joint_make_groove` or `joint_make_pin`. Use `joint_set_param` to set generic joint parameters.
 * @returns RID
 */
  jointCreate(): RID;
/**
 * Sets whether the bodies attached to the `Joint2D` will collide with each other.
 * @param joint RID
 * @param disable boolean
 */
  jointDisableCollisionsBetweenBodies(joint: RID, disable: boolean): void;
/**
 * Returns the value of the given joint parameter. See `JointParam` for the list of available parameters.
 * @param joint RID
 * @param param int
 * @returns float
 */
  jointGetParam(joint: RID, param: int): float;
/**
 * Returns the joint's type (see `JointType`).
 * @param joint RID
 * @returns int
 */
  jointGetType(joint: RID): int;
/**
 * Returns whether the bodies attached to the `Joint2D` will collide with each other.
 * @param joint RID
 * @returns boolean
 */
  jointIsDisabledCollisionsBetweenBodies(joint: RID): boolean;
/**
 * Makes the joint a damped spring joint, attached at the point `anchor_a` (given in global coordinates) on the body `body_a` and at the point `anchor_b` (given in global coordinates) on the body `body_b`. To set the parameters which are specific to the damped spring, see `damped_spring_joint_set_param`.
 * @param joint RID
 * @param anchorA Vector2
 * @param anchorB Vector2
 * @param bodyA RID
 * @param bodyB RID (optional, default: RID())
 */
  jointMakeDampedSpring(joint: RID, anchorA: Vector2, anchorB: Vector2, bodyA: RID, bodyB?: RID): void;
/**
 * Makes the joint a groove joint.
 * @param joint RID
 * @param groove1A Vector2
 * @param groove2A Vector2
 * @param anchorB Vector2
 * @param bodyA RID (optional, default: RID())
 * @param bodyB RID (optional, default: RID())
 */
  jointMakeGroove(joint: RID, groove1A: Vector2, groove2A: Vector2, anchorB: Vector2, bodyA?: RID, bodyB?: RID): void;
/**
 * Makes the joint a pin joint. If `body_b` is an empty `RID`, then `body_a` is pinned to the point `anchor` (given in global coordinates); otherwise, `body_a` is pinned to `body_b` at the point `anchor` (given in global coordinates). To set the parameters which are specific to the pin joint, see `pin_joint_set_param`.
 * @param joint RID
 * @param anchor Vector2
 * @param bodyA RID
 * @param bodyB RID (optional, default: RID())
 */
  jointMakePin(joint: RID, anchor: Vector2, bodyA: RID, bodyB?: RID): void;
/**
 * Sets the value of the given joint parameter. See `JointParam` for the list of available parameters.
 * @param joint RID
 * @param param int
 * @param value float
 */
  jointSetParam(joint: RID, param: int, value: float): void;
/**
 * Gets a pin joint flag (see `PinJointFlag` constants).
 * @param joint RID
 * @param flag int
 * @returns boolean
 */
  pinJointGetFlag(joint: RID, flag: int): boolean;
/**
 * Returns the value of a pin joint parameter. See `PinJointParam` for a list of available parameters.
 * @param joint RID
 * @param param int
 * @returns float
 */
  pinJointGetParam(joint: RID, param: int): float;
/**
 * Sets a pin joint flag (see `PinJointFlag` constants).
 * @param joint RID
 * @param flag int
 * @param enabled boolean
 */
  pinJointSetFlag(joint: RID, flag: int, enabled: boolean): void;
/**
 * Sets a pin joint parameter. See `PinJointParam` for a list of available parameters.
 * @param joint RID
 * @param param int
 * @param value float
 */
  pinJointSetParam(joint: RID, param: int, value: float): void;
/**
 * Creates a 2D rectangle shape in the physics server, and returns the `RID` that identifies it. Use `shape_set_data` to set the rectangle's half-extents.
 * @returns RID
 */
  rectangleShapeCreate(): RID;
/**
 * Creates a 2D segment shape in the physics server, and returns the `RID` that identifies it. Use `shape_set_data` to set the segment's start and end points.
 * @returns RID
 */
  segmentShapeCreate(): RID;
/**
 * Creates a 2D separation ray shape in the physics server, and returns the `RID` that identifies it. Use `shape_set_data` to set the shape's `length` and `slide_on_slope` properties.
 * @returns RID
 */
  separationRayShapeCreate(): RID;
/**
 * Activates or deactivates the 2D physics server. If `active` is `false`, then the physics server will not do anything in its physics step.
 * @param active boolean
 */
  setActive(active: boolean): void;
/**
 * Returns the shape data that defines the configuration of the shape, such as the half-extents of a rectangle or the segments of a concave shape. See `shape_set_data` for the precise format of this data in each case.
 * @param shape RID
 * @returns Variant
 */
  shapeGetData(shape: RID): Variant;
/**
 * Returns the shape's type (see `ShapeType`).
 * @param shape RID
 * @returns int
 */
  shapeGetType(shape: RID): int;
/**
 * Sets the shape data that defines the configuration of the shape. The `data` to be passed depends on the shape's type (see `shape_get_type`):
 * - `SHAPE_WORLD_BOUNDARY`: an array of length two containing a `Vector2` `normal` direction and a [float] distance `d`,
 * - `SHAPE_SEPARATION_RAY`: a dictionary containing the key `length` with a [float] value and the key `slide_on_slope` with a [bool] value,
 * - `SHAPE_SEGMENT`: a `Rect2` `rect` containing the first point of the segment in `rect.position` and the second point of the segment in `rect.size`,
 * - `SHAPE_CIRCLE`: a [float] `radius`,
 * - `SHAPE_RECTANGLE`: a `Vector2` `half_extents`,
 * - `SHAPE_CAPSULE`: an array of length two (or a `Vector2`) containing a [float] `height` and a [float] `radius`,
 * - `SHAPE_CONVEX_POLYGON`: either a `PackedVector2Array` of points defining a convex polygon in counterclockwise order (the clockwise outward normal of each segment formed by consecutive points is calculated internally), or a `PackedFloat32Array` of length divisible by four so that every 4-tuple of [float]s contains the coordinates of a point followed by the coordinates of the clockwise outward normal vector to the segment between the current point and the next point,
 * - `SHAPE_CONCAVE_POLYGON`: a `PackedVector2Array` of length divisible by two (each pair of points forms one segment).
 * 
 * **Warning:** In the case of `SHAPE_CONVEX_POLYGON`, this method does not check if the points supplied actually form a convex polygon (unlike the `CollisionPolygon2D.polygon` property).
 * @param shape RID
 * @param data Variant
 */
  shapeSetData(shape: RID, data: Variant): void;
/**
 * Creates a 2D space in the physics server, and returns the `RID` that identifies it. A space contains bodies and areas, and controls the stepping of the physics simulation of the objects in it.
 * @returns RID
 */
  spaceCreate(): RID;
/**
 * Returns the state of a space, a `PhysicsDirectSpaceState2D`. This object can be used for collision/intersection queries.
 * @param space RID
 * @returns PhysicsDirectSpaceState2D
 */
  spaceGetDirectState(space: RID): PhysicsDirectSpaceState2D;
/**
 * Returns the value of the given space parameter. See `SpaceParameter` for the list of available parameters.
 * @param space RID
 * @param param int
 * @returns float
 */
  spaceGetParam(space: RID, param: int): float;
/**
 * Returns `true` if the space is active.
 * @param space RID
 * @returns boolean
 */
  spaceIsActive(space: RID): boolean;
/**
 * Activates or deactivates the space. If `active` is `false`, then the physics server will not do anything with this space in its physics step.
 * @param space RID
 * @param active boolean
 */
  spaceSetActive(space: RID, active: boolean): void;
/**
 * Sets the value of the given space parameter. See `SpaceParameter` for the list of available parameters.
 * @param space RID
 * @param param int
 * @param value float
 */
  spaceSetParam(space: RID, param: int, value: float): void;
/**
 * Creates a 2D world boundary shape in the physics server, and returns the `RID` that identifies it. Use `shape_set_data` to set the shape's normal direction and distance properties.
 * @returns RID
 */
  worldBoundaryShapeCreate(): RID;
/**
 * Constant to set/get the maximum distance a pair of bodies has to move before their collision status has to be recalculated. The default value of this parameter is `ProjectSettings.physics/2d/solver/contact_recycle_radius`.
 */
  static readonly SPACE_PARAM_CONTACT_RECYCLE_RADIUS: int;
/**
 * Constant to set/get the maximum distance a shape can be from another before they are considered separated and the contact is discarded. The default value of this parameter is `ProjectSettings.physics/2d/solver/contact_max_separation`.
 */
  static readonly SPACE_PARAM_CONTACT_MAX_SEPARATION: int;
/**
 * Constant to set/get the maximum distance a shape can penetrate another shape before it is considered a collision. The default value of this parameter is `ProjectSettings.physics/2d/solver/contact_max_allowed_penetration`.
 */
  static readonly SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION: int;
/**
 * Constant to set/get the default solver bias for all physics contacts. A solver bias is a factor controlling how much two objects "rebound", after overlapping, to avoid leaving them in that state because of numerical imprecision. The default value of this parameter is `ProjectSettings.physics/2d/solver/default_contact_bias`.
 */
  static readonly SPACE_PARAM_CONTACT_DEFAULT_BIAS: int;
/**
 * Constant to set/get the threshold linear velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given. The default value of this parameter is `ProjectSettings.physics/2d/sleep_threshold_linear`.
 */
  static readonly SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD: int;
/**
 * Constant to set/get the threshold angular velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given. The default value of this parameter is `ProjectSettings.physics/2d/sleep_threshold_angular`.
 */
  static readonly SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD: int;
/**
 * Constant to set/get the maximum time of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after this time. The default value of this parameter is `ProjectSettings.physics/2d/time_before_sleep`.
 */
  static readonly SPACE_PARAM_BODY_TIME_TO_SLEEP: int;
/**
 * Constant to set/get the default solver bias for all physics constraints. A solver bias is a factor controlling how much two objects "rebound", after violating a constraint, to avoid leaving them in that state because of numerical imprecision. The default value of this parameter is `ProjectSettings.physics/2d/solver/default_constraint_bias`.
 */
  static readonly SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS: int;
/**
 * Constant to set/get the number of solver iterations for all contacts and constraints. The greater the number of iterations, the more accurate the collisions will be. However, a greater number of iterations requires more CPU power, which can decrease performance. The default value of this parameter is `ProjectSettings.physics/2d/solver/solver_iterations`.
 */
  static readonly SPACE_PARAM_SOLVER_ITERATIONS: int;
/**
 * This is the constant for creating world boundary shapes. A world boundary shape is an *infinite* line with an origin point, and a normal. Thus, it can be used for front/behind checks.
 */
  static readonly SHAPE_WORLD_BOUNDARY: int;
/**
 * This is the constant for creating separation ray shapes. A separation ray is defined by a length and separates itself from what is touching its far endpoint. Useful for character controllers.
 */
  static readonly SHAPE_SEPARATION_RAY: int;
/**
 * This is the constant for creating segment shapes. A segment shape is a *finite* line from a point A to a point B. It can be checked for intersections.
 */
  static readonly SHAPE_SEGMENT: int;
/**
 * This is the constant for creating circle shapes. A circle shape only has a radius. It can be used for intersections and inside/outside checks.
 */
  static readonly SHAPE_CIRCLE: int;
/**
 * This is the constant for creating rectangle shapes. A rectangle shape is defined by a width and a height. It can be used for intersections and inside/outside checks.
 */
  static readonly SHAPE_RECTANGLE: int;
/**
 * This is the constant for creating capsule shapes. A capsule shape is defined by a radius and a length. It can be used for intersections and inside/outside checks.
 */
  static readonly SHAPE_CAPSULE: int;
/**
 * This is the constant for creating convex polygon shapes. A polygon is defined by a list of points. It can be used for intersections and inside/outside checks.
 */
  static readonly SHAPE_CONVEX_POLYGON: int;
/**
 * This is the constant for creating concave polygon shapes. A polygon is defined by a list of points. It can be used for intersections checks, but not for inside/outside checks.
 */
  static readonly SHAPE_CONCAVE_POLYGON: int;
/**
 * This constant is used internally by the engine. Any attempt to create this kind of shape results in an error.
 */
  static readonly SHAPE_CUSTOM: int;
/**
 * Constant to set/get gravity override mode in an area. See `AreaSpaceOverrideMode` for possible values. The default value of this parameter is `AREA_SPACE_OVERRIDE_DISABLED`.
 */
  static readonly AREA_PARAM_GRAVITY_OVERRIDE_MODE: int;
/**
 * Constant to set/get gravity strength in an area. The default value of this parameter is `9.80665`.
 */
  static readonly AREA_PARAM_GRAVITY: int;
/**
 * Constant to set/get gravity vector/center in an area. The default value of this parameter is `Vector2(0, -1)`.
 */
  static readonly AREA_PARAM_GRAVITY_VECTOR: int;
/**
 * Constant to set/get whether the gravity vector of an area is a direction, or a center point. The default value of this parameter is `false`.
 */
  static readonly AREA_PARAM_GRAVITY_IS_POINT: int;
/**
 * Constant to set/get the distance at which the gravity strength is equal to the gravity controlled by `AREA_PARAM_GRAVITY`. For example, on a planet 100 pixels in radius with a surface gravity of 4.0 px/s², set the gravity to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 pixels from the center the gravity will be 1.0 px/s² (twice the distance, 1/4th the gravity), at 50 pixels it will be 16.0 px/s² (half the distance, 4x the gravity), and so on.
 * The above is true only when the unit distance is a positive number. When the unit distance is set to 0.0, the gravity will be constant regardless of distance. The default value of this parameter is `0.0`.
 */
  static readonly AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE: int;
/**
 * Constant to set/get linear damping override mode in an area. See `AreaSpaceOverrideMode` for possible values. The default value of this parameter is `AREA_SPACE_OVERRIDE_DISABLED`.
 */
  static readonly AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE: int;
/**
 * Constant to set/get the linear damping factor of an area. The default value of this parameter is `0.1`.
 */
  static readonly AREA_PARAM_LINEAR_DAMP: int;
/**
 * Constant to set/get angular damping override mode in an area. See `AreaSpaceOverrideMode` for possible values. The default value of this parameter is `AREA_SPACE_OVERRIDE_DISABLED`.
 */
  static readonly AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE: int;
/**
 * Constant to set/get the angular damping factor of an area. The default value of this parameter is `1.0`.
 */
  static readonly AREA_PARAM_ANGULAR_DAMP: int;
/**
 * Constant to set/get the priority (order of processing) of an area. The default value of this parameter is `0`.
 */
  static readonly AREA_PARAM_PRIORITY: int;
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
 * Constant to set/get a body's bounce factor. The default value of this parameter is `0.0`.
 */
  static readonly BODY_PARAM_BOUNCE: int;
/**
 * Constant to set/get a body's friction. The default value of this parameter is `1.0`.
 */
  static readonly BODY_PARAM_FRICTION: int;
/**
 * Constant to set/get a body's mass. The default value of this parameter is `1.0`. If the body's mode is set to `BODY_MODE_RIGID`, then setting this parameter will have the following additional effects:
 * - If the parameter `BODY_PARAM_CENTER_OF_MASS` has never been set explicitly, then the value of that parameter will be recalculated based on the body's shapes.
 * - If the parameter `BODY_PARAM_INERTIA` is set to a value `<= 0.0`, then the value of that parameter will be recalculated based on the body's shapes, mass, and center of mass.
 */
  static readonly BODY_PARAM_MASS: int;
/**
 * Constant to set/get a body's inertia. The default value of this parameter is `0.0`. If the body's inertia is set to a value `<= 0.0`, then the inertia will be recalculated based on the body's shapes, mass, and center of mass.
 */
  static readonly BODY_PARAM_INERTIA: int;
/**
 * Constant to set/get a body's center of mass position in the body's local coordinate system. The default value of this parameter is `Vector2(0,0)`. If this parameter is never set explicitly, then it is recalculated based on the body's shapes when setting the parameter `BODY_PARAM_MASS` or when calling `body_set_space`.
 */
  static readonly BODY_PARAM_CENTER_OF_MASS: int;
/**
 * Constant to set/get a body's gravity multiplier. The default value of this parameter is `1.0`.
 */
  static readonly BODY_PARAM_GRAVITY_SCALE: int;
/**
 * Constant to set/get a body's linear damping mode. See `BodyDampMode` for possible values. The default value of this parameter is `BODY_DAMP_MODE_COMBINE`.
 */
  static readonly BODY_PARAM_LINEAR_DAMP_MODE: int;
/**
 * Constant to set/get a body's angular damping mode. See `BodyDampMode` for possible values. The default value of this parameter is `BODY_DAMP_MODE_COMBINE`.
 */
  static readonly BODY_PARAM_ANGULAR_DAMP_MODE: int;
/**
 * Constant to set/get a body's linear damping factor. The default value of this parameter is `0.0`.
 */
  static readonly BODY_PARAM_LINEAR_DAMP: int;
/**
 * Constant to set/get a body's angular damping factor. The default value of this parameter is `0.0`.
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
 * Constant to create pin joints.
 */
  static readonly JOINT_TYPE_PIN: int;
/**
 * Constant to create groove joints.
 */
  static readonly JOINT_TYPE_GROOVE: int;
/**
 * Constant to create damped spring joints.
 */
  static readonly JOINT_TYPE_DAMPED_SPRING: int;
/**
 * Represents the size of the `JointType` enum.
 */
  static readonly JOINT_TYPE_MAX: int;
/**
 * Constant to set/get how fast the joint pulls the bodies back to satisfy the joint constraint. The lower the value, the more the two bodies can pull on the joint. The default value of this parameter is `0.0`.
 * 
 * **Note:** In Godot Physics, this parameter is only used for pin joints and groove joints.
 */
  static readonly JOINT_PARAM_BIAS: int;
/**
 * Constant to set/get the maximum speed with which the joint can apply corrections. The default value of this parameter is `3.40282e+38`.
 * 
 * **Note:** In Godot Physics, this parameter is only used for groove joints.
 */
  static readonly JOINT_PARAM_MAX_BIAS: int;
/**
 * Constant to set/get the maximum force that the joint can use to act on the two bodies. The default value of this parameter is `3.40282e+38`.
 * 
 * **Note:** In Godot Physics, this parameter is only used for groove joints.
 */
  static readonly JOINT_PARAM_MAX_FORCE: int;
/**
 * Constant to set/get a how much the bond of the pin joint can flex. The default value of this parameter is `0.0`.
 */
  static readonly PIN_JOINT_SOFTNESS: int;
/**
 * The maximum rotation around the pin.
 */
  static readonly PIN_JOINT_LIMIT_UPPER: int;
/**
 * The minimum rotation around the pin.
 */
  static readonly PIN_JOINT_LIMIT_LOWER: int;
/**
 * Target speed for the motor. In radians per second.
 */
  static readonly PIN_JOINT_MOTOR_TARGET_VELOCITY: int;
/**
 * If `true`, the pin has a maximum and a minimum rotation.
 */
  static readonly PIN_JOINT_FLAG_ANGULAR_LIMIT_ENABLED: int;
/**
 * If `true`, a motor turns the pin.
 */
  static readonly PIN_JOINT_FLAG_MOTOR_ENABLED: int;
/**
 * Sets the resting length of the spring joint. The joint will always try to go to back this length when pulled apart. The default value of this parameter is the distance between the joint's anchor points.
 */
  static readonly DAMPED_SPRING_REST_LENGTH: int;
/**
 * Sets the stiffness of the spring joint. The joint applies a force equal to the stiffness times the distance from its resting length. The default value of this parameter is `20.0`.
 */
  static readonly DAMPED_SPRING_STIFFNESS: int;
/**
 * Sets the damping ratio of the spring joint. A value of 0 indicates an undamped spring, while 1 causes the system to reach equilibrium as fast as possible (critical damping). The default value of this parameter is `1.5`.
 */
  static readonly DAMPED_SPRING_DAMPING: int;
/**
 * Disables continuous collision detection. This is the fastest way to detect body collisions, but it can miss small and/or fast-moving objects.
 */
  static readonly CCD_MODE_DISABLED: int;
/**
 * Enables continuous collision detection by raycasting. It is faster than shapecasting, but less precise.
 */
  static readonly CCD_MODE_CAST_RAY: int;
/**
 * Enables continuous collision detection by shapecasting. It is the slowest CCD method, and the most precise.
 */
  static readonly CCD_MODE_CAST_SHAPE: int;
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
}
