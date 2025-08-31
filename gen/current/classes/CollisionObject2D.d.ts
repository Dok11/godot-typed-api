import type { GodotArray, GodotDictionary, InputEvent, Node, Node2D, Object, PackedInt32Array, RID, Shape2D, Signal, Transform2D, Viewport, float, int } from "../index.d.ts";
/**
 * Abstract base class for 2D physics objects.
 * 
 * Abstract base class for 2D physics objects. `CollisionObject2D` can hold any number of `Shape2D`s for collision. Each shape must be assigned to a *shape owner*. Shape owners are not nodes and do not appear in the editor, but are accessible through code using the `shape_owner_*` methods.
 * 
 * **Note:** Only collisions between objects within the same canvas (`Viewport` canvas or `CanvasLayer`) are supported. The behavior of collisions between objects in different canvases is undefined.
 */
export class CollisionObject2D extends Node2D {
/**
 * The physics layers this CollisionObject2D is in. Collision objects can exist in one or more of 32 different layers. See also `collision_mask`.
 * 
 * **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See Collision layers and masks (https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks) in the documentation for more information.
 */
  collisionLayer: int;
/**
 * The physics layers this CollisionObject2D scans. Collision objects can scan one or more of 32 different layers. See also `collision_layer`.
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
 * If `true`, this object is pickable. A pickable object can detect the mouse pointer entering/leaving, and if the mouse is inside it, report input events. Requires at least one `collision_layer` bit to be set.
 */
  inputPickable: boolean;
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
 * Returns the `one_way_collision_margin` of the shape owner identified by given `owner_id`.
 * @param ownerId int
 * @returns float
 */
  getShapeOwnerOneWayCollisionMargin(ownerId: int): float;
/**
 * Returns an `Array` of `owner_id` identifiers. You can use these ids in other methods that take `owner_id` as an argument.
 * @returns PackedInt32Array
 */
  getShapeOwners(): PackedInt32Array;
/**
 * Accepts unhandled `InputEvent`s. `shape_idx` is the child index of the clicked `Shape2D`. Connect to `input_event` to easily pick up these events.
 * 
 * **Note:** `_input_event` requires `input_pickable` to be `true` and at least one `collision_layer` bit to be set.
 * @param viewport Viewport
 * @param event InputEvent
 * @param shapeIdx int
 */
  private inputEvent(viewport: Viewport, event: InputEvent, shapeIdx: int): void;
/**
 * If `true`, the shape owner and its shapes are disabled.
 * @param ownerId int
 * @returns boolean
 */
  isShapeOwnerDisabled(ownerId: int): boolean;
/**
 * Returns `true` if collisions for the shape owner originating from this `CollisionObject2D` will not be reported to collided with `CollisionObject2D`s.
 * @param ownerId int
 * @returns boolean
 */
  isShapeOwnerOneWayCollisionEnabled(ownerId: int): boolean;
/**
 * Called when the mouse pointer enters any of this object's shapes. Requires `input_pickable` to be `true` and at least one `collision_layer` bit to be set. Note that moving between different shapes within a single `CollisionObject2D` won't cause this function to be called.
 */
  private mouseEnter(): void;
/**
 * Called when the mouse pointer exits all this object's shapes. Requires `input_pickable` to be `true` and at least one `collision_layer` bit to be set. Note that moving between different shapes within a single `CollisionObject2D` won't cause this function to be called.
 */
  private mouseExit(): void;
/**
 * Called when the mouse pointer enters any of this object's shapes or moves from one shape to another. `shape_idx` is the child index of the newly entered `Shape2D`. Requires `input_pickable` to be `true` and at least one `collision_layer` bit to be called.
 * @param shapeIdx int
 */
  private mouseShapeEnter(shapeIdx: int): void;
/**
 * Called when the mouse pointer exits any of this object's shapes. `shape_idx` is the child index of the exited `Shape2D`. Requires `input_pickable` to be `true` and at least one `collision_layer` bit to be called.
 * @param shapeIdx int
 */
  private mouseShapeExit(shapeIdx: int): void;
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
 * Adds a `Shape2D` to the shape owner.
 * @param ownerId int
 * @param shape Shape2D
 */
  shapeOwnerAddShape(ownerId: int, shape: Shape2D): void;
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
 * Returns the `Shape2D` with the given ID from the given shape owner.
 * @param ownerId int
 * @param shapeId int
 * @returns Shape2D
 */
  shapeOwnerGetShape(ownerId: int, shapeId: int): Shape2D;
/**
 * Returns the number of shapes the given shape owner contains.
 * @param ownerId int
 * @returns int
 */
  shapeOwnerGetShapeCount(ownerId: int): int;
/**
 * Returns the child index of the `Shape2D` with the given ID from the given shape owner.
 * @param ownerId int
 * @param shapeId int
 * @returns int
 */
  shapeOwnerGetShapeIndex(ownerId: int, shapeId: int): int;
/**
 * Returns the shape owner's `Transform2D`.
 * @param ownerId int
 * @returns Transform2D
 */
  shapeOwnerGetTransform(ownerId: int): Transform2D;
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
 * If `enable` is `true`, collisions for the shape owner originating from this `CollisionObject2D` will not be reported to collided with `CollisionObject2D`s.
 * @param ownerId int
 * @param enable boolean
 */
  shapeOwnerSetOneWayCollision(ownerId: int, enable: boolean): void;
/**
 * Sets the `one_way_collision_margin` of the shape owner identified by given `owner_id` to `margin` pixels.
 * @param ownerId int
 * @param margin float
 */
  shapeOwnerSetOneWayCollisionMargin(ownerId: int, margin: float): void;
/**
 * Sets the `Transform2D` of the given shape owner.
 * @param ownerId int
 * @param transform Transform2D
 */
  shapeOwnerSetTransform(ownerId: int, transform: Transform2D): void;
/**
 * Emitted when an input event occurs. Requires `input_pickable` to be `true` and at least one `collision_layer` bit to be set. See `_input_event` for details.
 */
  inputEvent: Signal<[viewport: Node, event: InputEvent, shapeIdx: int]>;
/**
 * Emitted when the mouse pointer enters any of this object's shapes. Requires `input_pickable` to be `true` and at least one `collision_layer` bit to be set. Note that moving between different shapes within a single `CollisionObject2D` won't cause this signal to be emitted.
 * 
 * **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the `CollisionObject2D`'s area is small. This signal may also not be emitted if another `CollisionObject2D` is overlapping the `CollisionObject2D` in question.
 */
  mouseEntered: Signal<[]>;
/**
 * Emitted when the mouse pointer exits all this object's shapes. Requires `input_pickable` to be `true` and at least one `collision_layer` bit to be set. Note that moving between different shapes within a single `CollisionObject2D` won't cause this signal to be emitted.
 * 
 * **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the `CollisionObject2D`'s area is small. This signal may also not be emitted if another `CollisionObject2D` is overlapping the `CollisionObject2D` in question.
 */
  mouseExited: Signal<[]>;
/**
 * Emitted when the mouse pointer enters any of this object's shapes or moves from one shape to another. `shape_idx` is the child index of the newly entered `Shape2D`. Requires `input_pickable` to be `true` and at least one `collision_layer` bit to be set.
 */
  mouseShapeEntered: Signal<[shapeIdx: int]>;
/**
 * Emitted when the mouse pointer exits any of this object's shapes. `shape_idx` is the child index of the exited `Shape2D`. Requires `input_pickable` to be `true` and at least one `collision_layer` bit to be set.
 */
  mouseShapeExited: Signal<[shapeIdx: int]>;
/**
 * When `Node.process_mode` is set to `Node.PROCESS_MODE_DISABLED`, remove from the physics simulation to stop all physics interactions with this `CollisionObject2D`.
 * Automatically re-added to the physics simulation when the `Node` is processed again.
 */
  static readonly DISABLE_MODE_REMOVE: int;
/**
 * When `Node.process_mode` is set to `Node.PROCESS_MODE_DISABLED`, make the body static. Doesn't affect `Area2D`. `PhysicsBody2D` can't be affected by forces or other bodies while static.
 * Automatically set `PhysicsBody2D` back to its original mode when the `Node` is processed again.
 */
  static readonly DISABLE_MODE_MAKE_STATIC: int;
/**
 * When `Node.process_mode` is set to `Node.PROCESS_MODE_DISABLED`, do not affect the physics simulation.
 */
  static readonly DISABLE_MODE_KEEP_ACTIVE: int;
}
