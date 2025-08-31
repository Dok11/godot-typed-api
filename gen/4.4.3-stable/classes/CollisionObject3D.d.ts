import type { Camera3D, GodotArray, GodotDictionary, InputEvent, Node, Node3D, Object, PackedInt32Array, RID, Shape3D, Signal, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * Abstract base class for 3D physics objects.
 * 
 * Abstract base class for 3D physics objects. `CollisionObject3D` can hold any number of `Shape3D`s for collision. Each shape must be assigned to a *shape owner*. Shape owners are not nodes and do not appear in the editor, but are accessible through code using the `shape_owner_*` methods.
 * 
 * **Warning:** With a non-uniform scale, this node will likely not behave as expected. It is advised to keep its scale the same on all axes and adjust its collision shape(s) instead.
 */
export class CollisionObject3D extends Node3D {
/**
 * The physics layers this CollisionObject3D **is in**. Collision objects can exist in one or more of 32 different layers. See also `collision_mask`.
 * 
 * **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See Collision layers and masks (https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks) in the documentation for more information.
 */
  collisionLayer: int;
/**
 * The physics layers this CollisionObject3D **scans**. Collision objects can scan one or more of 32 different layers. See also `collision_layer`.
 * 
 * **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See Collision layers and masks (https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks) in the documentation for more information.
 */
  collisionMask: int;
/**
 * The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level.
 */
  collisionPriority: float;
/**
 * Defines the behavior in physics when `Node.process_mode` is set to `Node.PROCESS_MODE_DISABLED`. See `DisableMode` for more details about the different modes.
 */
  disableMode: int;
/**
 * If `true`, the `CollisionObject3D` will continue to receive input events as the mouse is dragged across its shapes.
 */
  inputCaptureOnDrag: boolean;
/**
 * If `true`, this object is pickable. A pickable object can detect the mouse pointer entering/leaving, and if the mouse is inside it, report input events. Requires at least one `collision_layer` bit to be set.
 */
  inputRayPickable: boolean;
/**
 * Creates a new shape owner for the given object. Returns `owner_id` of the new owner for future reference.
 * @param owner Object
 * @returns int
 */
  createShapeOwner(owner: Object): int;
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
 * Returns the object's `RID`.
 * @returns RID
 */
  getRid(): RID;
/**
 * Returns an `Array` of `owner_id` identifiers. You can use these ids in other methods that take `owner_id` as an argument.
 * @returns PackedInt32Array
 */
  getShapeOwners(): PackedInt32Array;
/**
 * Receives unhandled `InputEvent`s. `event_position` is the location in world space of the mouse pointer on the surface of the shape with index `shape_idx` and `normal` is the normal vector of the surface at that point. Connect to the `input_event` signal to easily pick up these events.
 * 
 * **Note:** `_input_event` requires `input_ray_pickable` to be `true` and at least one `collision_layer` bit to be set.
 * @param camera Camera3D
 * @param event InputEvent
 * @param eventPosition Vector3
 * @param normal Vector3
 * @param shapeIdx int
 */
  private inputEvent(camera: Camera3D, event: InputEvent, eventPosition: Vector3, normal: Vector3, shapeIdx: int): void;
/**
 * If `true`, the shape owner and its shapes are disabled.
 * @param ownerId int
 * @returns boolean
 */
  isShapeOwnerDisabled(ownerId: int): boolean;
/**
 * Called when the mouse pointer enters any of this object's shapes. Requires `input_ray_pickable` to be `true` and at least one `collision_layer` bit to be set. Note that moving between different shapes within a single `CollisionObject3D` won't cause this function to be called.
 */
  private mouseEnter(): void;
/**
 * Called when the mouse pointer exits all this object's shapes. Requires `input_ray_pickable` to be `true` and at least one `collision_layer` bit to be set. Note that moving between different shapes within a single `CollisionObject3D` won't cause this function to be called.
 */
  private mouseExit(): void;
/**
 * Removes the given shape owner.
 * @param ownerId int
 */
  removeShapeOwner(ownerId: int): void;
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
 * Returns the `owner_id` of the given shape.
 * @param shapeIndex int
 * @returns int
 */
  shapeFindOwner(shapeIndex: int): int;
/**
 * Adds a `Shape3D` to the shape owner.
 * @param ownerId int
 * @param shape Shape3D
 */
  shapeOwnerAddShape(ownerId: int, shape: Shape3D): void;
/**
 * Removes all shapes from the shape owner.
 * @param ownerId int
 */
  shapeOwnerClearShapes(ownerId: int): void;
/**
 * Returns the parent object of the given shape owner.
 * @param ownerId int
 * @returns Object
 */
  shapeOwnerGetOwner(ownerId: int): Object;
/**
 * Returns the `Shape3D` with the given ID from the given shape owner.
 * @param ownerId int
 * @param shapeId int
 * @returns Shape3D
 */
  shapeOwnerGetShape(ownerId: int, shapeId: int): Shape3D;
/**
 * Returns the number of shapes the given shape owner contains.
 * @param ownerId int
 * @returns int
 */
  shapeOwnerGetShapeCount(ownerId: int): int;
/**
 * Returns the child index of the `Shape3D` with the given ID from the given shape owner.
 * @param ownerId int
 * @param shapeId int
 * @returns int
 */
  shapeOwnerGetShapeIndex(ownerId: int, shapeId: int): int;
/**
 * Returns the shape owner's `Transform3D`.
 * @param ownerId int
 * @returns Transform3D
 */
  shapeOwnerGetTransform(ownerId: int): Transform3D;
/**
 * Removes a shape from the given shape owner.
 * @param ownerId int
 * @param shapeId int
 */
  shapeOwnerRemoveShape(ownerId: int, shapeId: int): void;
/**
 * If `true`, disables the given shape owner.
 * @param ownerId int
 * @param disabled boolean
 */
  shapeOwnerSetDisabled(ownerId: int, disabled: boolean): void;
/**
 * Sets the `Transform3D` of the given shape owner.
 * @param ownerId int
 * @param transform Transform3D
 */
  shapeOwnerSetTransform(ownerId: int, transform: Transform3D): void;
/**
 * Emitted when the object receives an unhandled `InputEvent`. `event_position` is the location in world space of the mouse pointer on the surface of the shape with index `shape_idx` and `normal` is the normal vector of the surface at that point.
 */
  inputEvent: Signal<[camera: Node, event: InputEvent, eventPosition: Vector3, normal: Vector3, shapeIdx: int]>;
/**
 * Emitted when the mouse pointer enters any of this object's shapes. Requires `input_ray_pickable` to be `true` and at least one `collision_layer` bit to be set.
 * 
 * **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the `CollisionObject3D`'s area is small. This signal may also not be emitted if another `CollisionObject3D` is overlapping the `CollisionObject3D` in question.
 */
  mouseEntered: Signal<[]>;
/**
 * Emitted when the mouse pointer exits all this object's shapes. Requires `input_ray_pickable` to be `true` and at least one `collision_layer` bit to be set.
 * 
 * **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the `CollisionObject3D`'s area is small. This signal may also not be emitted if another `CollisionObject3D` is overlapping the `CollisionObject3D` in question.
 */
  mouseExited: Signal<[]>;
/**
 * When `Node.process_mode` is set to `Node.PROCESS_MODE_DISABLED`, remove from the physics simulation to stop all physics interactions with this `CollisionObject3D`.
 * Automatically re-added to the physics simulation when the `Node` is processed again.
 */
  static readonly DISABLE_MODE_REMOVE: int;
/**
 * When `Node.process_mode` is set to `Node.PROCESS_MODE_DISABLED`, make the body static. Doesn't affect `Area3D`. `PhysicsBody3D` can't be affected by forces or other bodies while static.
 * Automatically set `PhysicsBody3D` back to its original mode when the `Node` is processed again.
 */
  static readonly DISABLE_MODE_MAKE_STATIC: int;
/**
 * When `Node.process_mode` is set to `Node.PROCESS_MODE_DISABLED`, do not affect the physics simulation.
 */
  static readonly DISABLE_MODE_KEEP_ACTIVE: int;
}
