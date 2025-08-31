import type { AABB, Callable, GodotArray, GodotDictionary, PackedVector3Array, PhysicsDirectBodyState3D, PhysicsDirectSpaceState3D, PhysicsServer3D, PhysicsServer3DRenderingServerHandler, RID, Transform3D, Variant, Vector3, float, int } from "../index.d.ts";
/**
 * Provides virtual methods that can be overridden to create custom `PhysicsServer3D` implementations.
 * 
 * This class extends `PhysicsServer3D` by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 * Intended for use with GDExtension to create custom implementations of `PhysicsServer3D`.
 */
export class PhysicsServer3DExtension extends PhysicsServer3D {
/**
 * @param area RID
 * @param shape RID
 * @param transform Transform3D
 * @param disabled boolean
 */
  private areaAddShape(area: RID, shape: RID, transform: Transform3D, disabled: boolean): void;
/**
 * @param area RID
 * @param id int
 */
  private areaAttachObjectInstanceId(area: RID, id: int): void;
/**
 * @param area RID
 */
  private areaClearShapes(area: RID): void;
/**
 * @returns RID
 */
  private areaCreate(): RID;
/**
 * @param area RID
 * @returns int
 */
  private areaGetCollisionLayer(area: RID): int;
/**
 * @param area RID
 * @returns int
 */
  private areaGetCollisionMask(area: RID): int;
/**
 * @param area RID
 * @returns int
 */
  private areaGetObjectInstanceId(area: RID): int;
/**
 * @param area RID
 * @param param int
 * @returns Variant
 */
  private areaGetParam(area: RID, param: int): Variant;
/**
 * @param area RID
 * @param shapeIdx int
 * @returns RID
 */
  private areaGetShape(area: RID, shapeIdx: int): RID;
/**
 * @param area RID
 * @returns int
 */
  private areaGetShapeCount(area: RID): int;
/**
 * @param area RID
 * @param shapeIdx int
 * @returns Transform3D
 */
  private areaGetShapeTransform(area: RID, shapeIdx: int): Transform3D;
/**
 * @param area RID
 * @returns RID
 */
  private areaGetSpace(area: RID): RID;
/**
 * @param area RID
 * @returns Transform3D
 */
  private areaGetTransform(area: RID): Transform3D;
/**
 * @param area RID
 * @param shapeIdx int
 */
  private areaRemoveShape(area: RID, shapeIdx: int): void;
/**
 * @param area RID
 * @param callback Callable
 */
  private areaSetAreaMonitorCallback(area: RID, callback: Callable): void;
/**
 * @param area RID
 * @param layer int
 */
  private areaSetCollisionLayer(area: RID, layer: int): void;
/**
 * @param area RID
 * @param mask int
 */
  private areaSetCollisionMask(area: RID, mask: int): void;
/**
 * @param area RID
 * @param monitorable boolean
 */
  private areaSetMonitorable(area: RID, monitorable: boolean): void;
/**
 * @param area RID
 * @param callback Callable
 */
  private areaSetMonitorCallback(area: RID, callback: Callable): void;
/**
 * @param area RID
 * @param param int
 * @param value Variant
 */
  private areaSetParam(area: RID, param: int, value: Variant): void;
/**
 * @param area RID
 * @param enable boolean
 */
  private areaSetRayPickable(area: RID, enable: boolean): void;
/**
 * @param area RID
 * @param shapeIdx int
 * @param shape RID
 */
  private areaSetShape(area: RID, shapeIdx: int, shape: RID): void;
/**
 * @param area RID
 * @param shapeIdx int
 * @param disabled boolean
 */
  private areaSetShapeDisabled(area: RID, shapeIdx: int, disabled: boolean): void;
/**
 * @param area RID
 * @param shapeIdx int
 * @param transform Transform3D
 */
  private areaSetShapeTransform(area: RID, shapeIdx: int, transform: Transform3D): void;
/**
 * @param area RID
 * @param space RID
 */
  private areaSetSpace(area: RID, space: RID): void;
/**
 * @param area RID
 * @param transform Transform3D
 */
  private areaSetTransform(area: RID, transform: Transform3D): void;
/**
 * @param body RID
 * @param exceptedBody RID
 */
  private bodyAddCollisionException(body: RID, exceptedBody: RID): void;
/**
 * @param body RID
 * @param force Vector3
 */
  private bodyAddConstantCentralForce(body: RID, force: Vector3): void;
/**
 * @param body RID
 * @param force Vector3
 * @param position Vector3
 */
  private bodyAddConstantForce(body: RID, force: Vector3, position: Vector3): void;
/**
 * @param body RID
 * @param torque Vector3
 */
  private bodyAddConstantTorque(body: RID, torque: Vector3): void;
/**
 * @param body RID
 * @param shape RID
 * @param transform Transform3D
 * @param disabled boolean
 */
  private bodyAddShape(body: RID, shape: RID, transform: Transform3D, disabled: boolean): void;
/**
 * @param body RID
 * @param force Vector3
 */
  private bodyApplyCentralForce(body: RID, force: Vector3): void;
/**
 * @param body RID
 * @param impulse Vector3
 */
  private bodyApplyCentralImpulse(body: RID, impulse: Vector3): void;
/**
 * @param body RID
 * @param force Vector3
 * @param position Vector3
 */
  private bodyApplyForce(body: RID, force: Vector3, position: Vector3): void;
/**
 * @param body RID
 * @param impulse Vector3
 * @param position Vector3
 */
  private bodyApplyImpulse(body: RID, impulse: Vector3, position: Vector3): void;
/**
 * @param body RID
 * @param torque Vector3
 */
  private bodyApplyTorque(body: RID, torque: Vector3): void;
/**
 * @param body RID
 * @param impulse Vector3
 */
  private bodyApplyTorqueImpulse(body: RID, impulse: Vector3): void;
/**
 * @param body RID
 * @param id int
 */
  private bodyAttachObjectInstanceId(body: RID, id: int): void;
/**
 * @param body RID
 */
  private bodyClearShapes(body: RID): void;
/**
 * @returns RID
 */
  private bodyCreate(): RID;
/**
 * @param body RID
 * @returns RID[]
 */
  private bodyGetCollisionExceptions(body: RID): RID[];
/**
 * @param body RID
 * @returns int
 */
  private bodyGetCollisionLayer(body: RID): int;
/**
 * @param body RID
 * @returns int
 */
  private bodyGetCollisionMask(body: RID): int;
/**
 * @param body RID
 * @returns float
 */
  private bodyGetCollisionPriority(body: RID): float;
/**
 * @param body RID
 * @returns Vector3
 */
  private bodyGetConstantForce(body: RID): Vector3;
/**
 * @param body RID
 * @returns Vector3
 */
  private bodyGetConstantTorque(body: RID): Vector3;
/**
 * @param body RID
 * @returns float
 */
  private bodyGetContactsReportedDepthThreshold(body: RID): float;
/**
 * @param body RID
 * @returns PhysicsDirectBodyState3D
 */
  private bodyGetDirectState(body: RID): PhysicsDirectBodyState3D;
/**
 * @param body RID
 * @returns int
 */
  private bodyGetMaxContactsReported(body: RID): int;
/**
 * @param body RID
 * @returns int
 */
  private bodyGetMode(body: RID): int;
/**
 * @param body RID
 * @returns int
 */
  private bodyGetObjectInstanceId(body: RID): int;
/**
 * @param body RID
 * @param param int
 * @returns Variant
 */
  private bodyGetParam(body: RID, param: int): Variant;
/**
 * @param body RID
 * @param shapeIdx int
 * @returns RID
 */
  private bodyGetShape(body: RID, shapeIdx: int): RID;
/**
 * @param body RID
 * @returns int
 */
  private bodyGetShapeCount(body: RID): int;
/**
 * @param body RID
 * @param shapeIdx int
 * @returns Transform3D
 */
  private bodyGetShapeTransform(body: RID, shapeIdx: int): Transform3D;
/**
 * @param body RID
 * @returns RID
 */
  private bodyGetSpace(body: RID): RID;
/**
 * @param body RID
 * @param state int
 * @returns Variant
 */
  private bodyGetState(body: RID, state: int): Variant;
/**
 * @param body RID
 * @returns int
 */
  private bodyGetUserFlags(body: RID): int;
/**
 * @param body RID
 * @param axis int
 * @returns boolean
 */
  private bodyIsAxisLocked(body: RID, axis: int): boolean;
/**
 * @param body RID
 * @returns boolean
 */
  private bodyIsContinuousCollisionDetectionEnabled(body: RID): boolean;
/**
 * @param body RID
 * @returns boolean
 */
  private bodyIsOmittingForceIntegration(body: RID): boolean;
/**
 * @param body RID
 * @param exceptedBody RID
 */
  private bodyRemoveCollisionException(body: RID, exceptedBody: RID): void;
/**
 * @param body RID
 * @param shapeIdx int
 */
  private bodyRemoveShape(body: RID, shapeIdx: int): void;
/**
 * @param body RID
 */
  private bodyResetMassProperties(body: RID): void;
/**
 * @param body RID
 * @param axis int
 * @param lock boolean
 */
  private bodySetAxisLock(body: RID, axis: int, lock: boolean): void;
/**
 * @param body RID
 * @param axisVelocity Vector3
 */
  private bodySetAxisVelocity(body: RID, axisVelocity: Vector3): void;
/**
 * @param body RID
 * @param layer int
 */
  private bodySetCollisionLayer(body: RID, layer: int): void;
/**
 * @param body RID
 * @param mask int
 */
  private bodySetCollisionMask(body: RID, mask: int): void;
/**
 * @param body RID
 * @param priority float
 */
  private bodySetCollisionPriority(body: RID, priority: float): void;
/**
 * @param body RID
 * @param force Vector3
 */
  private bodySetConstantForce(body: RID, force: Vector3): void;
/**
 * @param body RID
 * @param torque Vector3
 */
  private bodySetConstantTorque(body: RID, torque: Vector3): void;
/**
 * @param body RID
 * @param threshold float
 */
  private bodySetContactsReportedDepthThreshold(body: RID, threshold: float): void;
/**
 * @param body RID
 * @param enable boolean
 */
  private bodySetEnableContinuousCollisionDetection(body: RID, enable: boolean): void;
/**
 * @param body RID
 * @param callable Callable
 * @param userdata Variant
 */
  private bodySetForceIntegrationCallback(body: RID, callable: Callable, userdata: Variant): void;
/**
 * @param body RID
 * @param amount int
 */
  private bodySetMaxContactsReported(body: RID, amount: int): void;
/**
 * @param body RID
 * @param mode int
 */
  private bodySetMode(body: RID, mode: int): void;
/**
 * @param body RID
 * @param enable boolean
 */
  private bodySetOmitForceIntegration(body: RID, enable: boolean): void;
/**
 * @param body RID
 * @param param int
 * @param value Variant
 */
  private bodySetParam(body: RID, param: int, value: Variant): void;
/**
 * @param body RID
 * @param enable boolean
 */
  private bodySetRayPickable(body: RID, enable: boolean): void;
/**
 * @param body RID
 * @param shapeIdx int
 * @param shape RID
 */
  private bodySetShape(body: RID, shapeIdx: int, shape: RID): void;
/**
 * @param body RID
 * @param shapeIdx int
 * @param disabled boolean
 */
  private bodySetShapeDisabled(body: RID, shapeIdx: int, disabled: boolean): void;
/**
 * @param body RID
 * @param shapeIdx int
 * @param transform Transform3D
 */
  private bodySetShapeTransform(body: RID, shapeIdx: int, transform: Transform3D): void;
/**
 * @param body RID
 * @param space RID
 */
  private bodySetSpace(body: RID, space: RID): void;
/**
 * @param body RID
 * @param state int
 * @param value Variant
 */
  private bodySetState(body: RID, state: int, value: Variant): void;
/**
 * @param body RID
 * @param callable Callable
 */
  private bodySetStateSyncCallback(body: RID, callable: Callable): void;
/**
 * @param body RID
 * @param flags int
 */
  private bodySetUserFlags(body: RID, flags: int): void;
/**
 * @param body RID
 * @param from_ Transform3D
 * @param motion Vector3
 * @param margin float
 * @param maxCollisions int
 * @param collideSeparationRay boolean
 * @param recoveryAsCollision boolean
 * @param result unknown
 * @returns boolean
 */
  private bodyTestMotion(body: RID, from_: Transform3D, motion: Vector3, margin: float, maxCollisions: int, collideSeparationRay: boolean, recoveryAsCollision: boolean, result: unknown): boolean;
/**
 * @param body RID
 * @returns boolean
 */
  bodyTestMotionIsExcludingBody(body: RID): boolean;
/**
 * @param object int
 * @returns boolean
 */
  bodyTestMotionIsExcludingObject(object: int): boolean;
/**
 * @returns RID
 */
  private boxShapeCreate(): RID;
/**
 * @returns RID
 */
  private capsuleShapeCreate(): RID;
/**
 * @returns RID
 */
  private concavePolygonShapeCreate(): RID;
/**
 * @param joint RID
 * @param param int
 * @returns float
 */
  private coneTwistJointGetParam(joint: RID, param: int): float;
/**
 * @param joint RID
 * @param param int
 * @param value float
 */
  private coneTwistJointSetParam(joint: RID, param: int, value: float): void;
/**
 * @returns RID
 */
  private convexPolygonShapeCreate(): RID;
/**
 * @returns RID
 */
  private customShapeCreate(): RID;
/**
 * @returns RID
 */
  private cylinderShapeCreate(): RID;
  private endSync(): void;
  private finish(): void;
  private flushQueries(): void;
/**
 * @param rid RID
 */
  private freeRid(rid: RID): void;
/**
 * @param joint RID
 * @param axis int
 * @param flag int
 * @returns boolean
 */
  private generic6dofJointGetFlag(joint: RID, axis: int, flag: int): boolean;
/**
 * @param joint RID
 * @param axis int
 * @param param int
 * @returns float
 */
  private generic6dofJointGetParam(joint: RID, axis: int, param: int): float;
/**
 * @param joint RID
 * @param axis int
 * @param flag int
 * @param enable boolean
 */
  private generic6dofJointSetFlag(joint: RID, axis: int, flag: int, enable: boolean): void;
/**
 * @param joint RID
 * @param axis int
 * @param param int
 * @param value float
 */
  private generic6dofJointSetParam(joint: RID, axis: int, param: int, value: float): void;
/**
 * @param processInfo int
 * @returns int
 */
  private getProcessInfo(processInfo: int): int;
/**
 * @returns RID
 */
  private heightmapShapeCreate(): RID;
/**
 * @param joint RID
 * @param flag int
 * @returns boolean
 */
  private hingeJointGetFlag(joint: RID, flag: int): boolean;
/**
 * @param joint RID
 * @param param int
 * @returns float
 */
  private hingeJointGetParam(joint: RID, param: int): float;
/**
 * @param joint RID
 * @param flag int
 * @param enabled boolean
 */
  private hingeJointSetFlag(joint: RID, flag: int, enabled: boolean): void;
/**
 * @param joint RID
 * @param param int
 * @param value float
 */
  private hingeJointSetParam(joint: RID, param: int, value: float): void;
  _init(): void;
/**
 * @returns boolean
 */
  private isFlushingQueries(): boolean;
/**
 * @param joint RID
 */
  private jointClear(joint: RID): void;
/**
 * @returns RID
 */
  private jointCreate(): RID;
/**
 * @param joint RID
 * @param disable boolean
 */
  private jointDisableCollisionsBetweenBodies(joint: RID, disable: boolean): void;
/**
 * @param joint RID
 * @returns int
 */
  private jointGetSolverPriority(joint: RID): int;
/**
 * @param joint RID
 * @returns int
 */
  private jointGetType(joint: RID): int;
/**
 * @param joint RID
 * @returns boolean
 */
  private jointIsDisabledCollisionsBetweenBodies(joint: RID): boolean;
/**
 * @param joint RID
 * @param bodyA RID
 * @param localRefA Transform3D
 * @param bodyB RID
 * @param localRefB Transform3D
 */
  private jointMakeConeTwist(joint: RID, bodyA: RID, localRefA: Transform3D, bodyB: RID, localRefB: Transform3D): void;
/**
 * @param joint RID
 * @param bodyA RID
 * @param localRefA Transform3D
 * @param bodyB RID
 * @param localRefB Transform3D
 */
  private jointMakeGeneric6dof(joint: RID, bodyA: RID, localRefA: Transform3D, bodyB: RID, localRefB: Transform3D): void;
/**
 * @param joint RID
 * @param bodyA RID
 * @param hingeA Transform3D
 * @param bodyB RID
 * @param hingeB Transform3D
 */
  private jointMakeHinge(joint: RID, bodyA: RID, hingeA: Transform3D, bodyB: RID, hingeB: Transform3D): void;
/**
 * @param joint RID
 * @param bodyA RID
 * @param pivotA Vector3
 * @param axisA Vector3
 * @param bodyB RID
 * @param pivotB Vector3
 * @param axisB Vector3
 */
  private jointMakeHingeSimple(joint: RID, bodyA: RID, pivotA: Vector3, axisA: Vector3, bodyB: RID, pivotB: Vector3, axisB: Vector3): void;
/**
 * @param joint RID
 * @param bodyA RID
 * @param localA Vector3
 * @param bodyB RID
 * @param localB Vector3
 */
  private jointMakePin(joint: RID, bodyA: RID, localA: Vector3, bodyB: RID, localB: Vector3): void;
/**
 * @param joint RID
 * @param bodyA RID
 * @param localRefA Transform3D
 * @param bodyB RID
 * @param localRefB Transform3D
 */
  private jointMakeSlider(joint: RID, bodyA: RID, localRefA: Transform3D, bodyB: RID, localRefB: Transform3D): void;
/**
 * @param joint RID
 * @param priority int
 */
  private jointSetSolverPriority(joint: RID, priority: int): void;
/**
 * @param joint RID
 * @returns Vector3
 */
  private pinJointGetLocalA(joint: RID): Vector3;
/**
 * @param joint RID
 * @returns Vector3
 */
  private pinJointGetLocalB(joint: RID): Vector3;
/**
 * @param joint RID
 * @param param int
 * @returns float
 */
  private pinJointGetParam(joint: RID, param: int): float;
/**
 * @param joint RID
 * @param localA Vector3
 */
  private pinJointSetLocalA(joint: RID, localA: Vector3): void;
/**
 * @param joint RID
 * @param localB Vector3
 */
  private pinJointSetLocalB(joint: RID, localB: Vector3): void;
/**
 * @param joint RID
 * @param param int
 * @param value float
 */
  private pinJointSetParam(joint: RID, param: int, value: float): void;
/**
 * @returns RID
 */
  private separationRayShapeCreate(): RID;
/**
 * @param active boolean
 */
  private setActive(active: boolean): void;
/**
 * @param shape RID
 * @returns float
 */
  private shapeGetCustomSolverBias(shape: RID): float;
/**
 * @param shape RID
 * @returns Variant
 */
  private shapeGetData(shape: RID): Variant;
/**
 * @param shape RID
 * @returns float
 */
  private shapeGetMargin(shape: RID): float;
/**
 * @param shape RID
 * @returns int
 */
  private shapeGetType(shape: RID): int;
/**
 * @param shape RID
 * @param bias float
 */
  private shapeSetCustomSolverBias(shape: RID, bias: float): void;
/**
 * @param shape RID
 * @param data Variant
 */
  private shapeSetData(shape: RID, data: Variant): void;
/**
 * @param shape RID
 * @param margin float
 */
  private shapeSetMargin(shape: RID, margin: float): void;
/**
 * @param joint RID
 * @param param int
 * @returns float
 */
  private sliderJointGetParam(joint: RID, param: int): float;
/**
 * @param joint RID
 * @param param int
 * @param value float
 */
  private sliderJointSetParam(joint: RID, param: int, value: float): void;
/**
 * @param body RID
 * @param bodyB RID
 */
  private softBodyAddCollisionException(body: RID, bodyB: RID): void;
/**
 * @returns RID
 */
  private softBodyCreate(): RID;
/**
 * @param body RID
 * @returns AABB
 */
  private softBodyGetBounds(body: RID): AABB;
/**
 * @param body RID
 * @returns RID[]
 */
  private softBodyGetCollisionExceptions(body: RID): RID[];
/**
 * @param body RID
 * @returns int
 */
  private softBodyGetCollisionLayer(body: RID): int;
/**
 * @param body RID
 * @returns int
 */
  private softBodyGetCollisionMask(body: RID): int;
/**
 * @param body RID
 * @returns float
 */
  private softBodyGetDampingCoefficient(body: RID): float;
/**
 * @param body RID
 * @returns float
 */
  private softBodyGetDragCoefficient(body: RID): float;
/**
 * @param body RID
 * @returns float
 */
  private softBodyGetLinearStiffness(body: RID): float;
/**
 * @param body RID
 * @param pointIndex int
 * @returns Vector3
 */
  private softBodyGetPointGlobalPosition(body: RID, pointIndex: int): Vector3;
/**
 * @param body RID
 * @returns float
 */
  private softBodyGetPressureCoefficient(body: RID): float;
/**
 * @param body RID
 * @returns int
 */
  private softBodyGetSimulationPrecision(body: RID): int;
/**
 * @param body RID
 * @returns RID
 */
  private softBodyGetSpace(body: RID): RID;
/**
 * @param body RID
 * @param state int
 * @returns Variant
 */
  private softBodyGetState(body: RID, state: int): Variant;
/**
 * @param body RID
 * @returns float
 */
  private softBodyGetTotalMass(body: RID): float;
/**
 * @param body RID
 * @param pointIndex int
 * @returns boolean
 */
  private softBodyIsPointPinned(body: RID, pointIndex: int): boolean;
/**
 * @param body RID
 * @param pointIndex int
 * @param globalPosition Vector3
 */
  private softBodyMovePoint(body: RID, pointIndex: int, globalPosition: Vector3): void;
/**
 * @param body RID
 * @param pointIndex int
 * @param pin boolean
 */
  private softBodyPinPoint(body: RID, pointIndex: int, pin: boolean): void;
/**
 * @param body RID
 */
  private softBodyRemoveAllPinnedPoints(body: RID): void;
/**
 * @param body RID
 * @param bodyB RID
 */
  private softBodyRemoveCollisionException(body: RID, bodyB: RID): void;
/**
 * @param body RID
 * @param layer int
 */
  private softBodySetCollisionLayer(body: RID, layer: int): void;
/**
 * @param body RID
 * @param mask int
 */
  private softBodySetCollisionMask(body: RID, mask: int): void;
/**
 * @param body RID
 * @param dampingCoefficient float
 */
  private softBodySetDampingCoefficient(body: RID, dampingCoefficient: float): void;
/**
 * @param body RID
 * @param dragCoefficient float
 */
  private softBodySetDragCoefficient(body: RID, dragCoefficient: float): void;
/**
 * @param body RID
 * @param linearStiffness float
 */
  private softBodySetLinearStiffness(body: RID, linearStiffness: float): void;
/**
 * @param body RID
 * @param mesh RID
 */
  private softBodySetMesh(body: RID, mesh: RID): void;
/**
 * @param body RID
 * @param pressureCoefficient float
 */
  private softBodySetPressureCoefficient(body: RID, pressureCoefficient: float): void;
/**
 * @param body RID
 * @param enable boolean
 */
  private softBodySetRayPickable(body: RID, enable: boolean): void;
/**
 * @param body RID
 * @param simulationPrecision int
 */
  private softBodySetSimulationPrecision(body: RID, simulationPrecision: int): void;
/**
 * @param body RID
 * @param space RID
 */
  private softBodySetSpace(body: RID, space: RID): void;
/**
 * @param body RID
 * @param state int
 * @param variant Variant
 */
  private softBodySetState(body: RID, state: int, variant: Variant): void;
/**
 * @param body RID
 * @param totalMass float
 */
  private softBodySetTotalMass(body: RID, totalMass: float): void;
/**
 * @param body RID
 * @param transform Transform3D
 */
  private softBodySetTransform(body: RID, transform: Transform3D): void;
/**
 * @param body RID
 * @param renderingServerHandler PhysicsServer3DRenderingServerHandler
 */
  private softBodyUpdateRenderingServer(body: RID, renderingServerHandler: PhysicsServer3DRenderingServerHandler): void;
/**
 * @returns RID
 */
  private spaceCreate(): RID;
/**
 * @param space RID
 * @returns int
 */
  private spaceGetContactCount(space: RID): int;
/**
 * @param space RID
 * @returns PackedVector3Array
 */
  private spaceGetContacts(space: RID): PackedVector3Array;
/**
 * @param space RID
 * @returns PhysicsDirectSpaceState3D
 */
  private spaceGetDirectState(space: RID): PhysicsDirectSpaceState3D;
/**
 * @param space RID
 * @param param int
 * @returns float
 */
  private spaceGetParam(space: RID, param: int): float;
/**
 * @param space RID
 * @returns boolean
 */
  private spaceIsActive(space: RID): boolean;
/**
 * @param space RID
 * @param active boolean
 */
  private spaceSetActive(space: RID, active: boolean): void;
/**
 * @param space RID
 * @param maxContacts int
 */
  private spaceSetDebugContacts(space: RID, maxContacts: int): void;
/**
 * @param space RID
 * @param param int
 * @param value float
 */
  private spaceSetParam(space: RID, param: int, value: float): void;
/**
 * @returns RID
 */
  private sphereShapeCreate(): RID;
/**
 * @param step float
 */
  private step(step: float): void;
  private sync(): void;
/**
 * @returns RID
 */
  private worldBoundaryShapeCreate(): RID;
}
