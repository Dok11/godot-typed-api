import type { GodotArray, GodotDictionary, KinematicCollision2D, PhysicsBody2D, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D physics body specialized for characters moved by script.
 * 
 * `CharacterBody2D` is a specialized class for physics bodies that are meant to be user-controlled. They are not affected by physics at all, but they affect other physics bodies in their path. They are mainly used to provide high-level API to move objects with wall and slope detection (`move_and_slide` method) in addition to the general collision detection provided by `PhysicsBody2D.move_and_collide`. This makes it useful for highly configurable physics bodies that must move in specific ways and collide with the world, as is often the case with user-controlled characters.
 * For game objects that don't require complex movement or collision detection, such as moving platforms, `AnimatableBody2D` is simpler to configure.
 */
export class CharacterBody2D extends PhysicsBody2D {
/**
 * If `true`, the body will be able to move on the floor only. This option avoids to be able to walk on walls, it will however allow to slide down along them.
 */
  floorBlockOnWall: boolean;
/**
 * If `false` (by default), the body will move faster on downward slopes and slower on upward slopes.
 * If `true`, the body will always move at the same speed on the ground no matter the slope. Note that you need to use `floor_snap_length` to stick along a downward slope at constant speed.
 */
  floorConstantSpeed: boolean;
/**
 * Maximum angle (in radians) where a slope is still considered a floor (or a ceiling), rather than a wall, when calling `move_and_slide`. The default value equals 45 degrees.
 */
  floorMaxAngle: float;
/**
 * Sets a snapping distance. When set to a value different from `0.0`, the body is kept attached to slopes when calling `move_and_slide`. The snapping vector is determined by the given distance along the opposite direction of the `up_direction`.
 * As long as the snapping vector is in contact with the ground and the body moves against `up_direction`, the body will remain attached to the surface. Snapping is not applied if the body moves along `up_direction`, meaning it contains vertical rising velocity, so it will be able to detach from the ground when jumping or when the body is pushed up by something. If you want to apply a snap without taking into account the velocity, use `apply_floor_snap`.
 */
  floorSnapLength: float;
/**
 * If `true`, the body will not slide on slopes when calling `move_and_slide` when the body is standing still.
 * If `false`, the body will slide on floor's slopes when `velocity` applies a downward force.
 */
  floorStopOnSlope: boolean;
/**
 * Maximum number of times the body can change direction before it stops when calling `move_and_slide`.
 */
  maxSlides: int;
/**
 * Sets the motion mode which defines the behavior of `move_and_slide`. See `MotionMode` constants for available modes.
 */
  motionMode: int;
/**
 * Collision layers that will be included for detecting floor bodies that will act as moving platforms to be followed by the `CharacterBody2D`. By default, all floor bodies are detected and propagate their velocity.
 */
  platformFloorLayers: int;
/**
 * Sets the behavior to apply when you leave a moving platform. By default, to be physically accurate, when you leave the last platform velocity is applied. See `PlatformOnLeave` constants for available behavior.
 */
  platformOnLeave: int;
/**
 * Collision layers that will be included for detecting wall bodies that will act as moving platforms to be followed by the `CharacterBody2D`. By default, all wall bodies are ignored.
 */
  platformWallLayers: int;
/**
 * Extra margin used for collision recovery when calling `move_and_slide`.
 * If the body is at least this close to another body, it will consider them to be colliding and will be pushed away before performing the actual motion.
 * A higher value means it's more flexible for detecting collision, which helps with consistently detecting walls and floors.
 * A lower value forces the collision algorithm to use more exact detection, so it can be used in cases that specifically require precision, e.g at very low scale to avoid visible jittering, or for stability with a stack of character bodies.
 */
  safeMargin: float;
/**
 * If `true`, during a jump against the ceiling, the body will slide, if `false` it will be stopped and will fall vertically.
 */
  slideOnCeiling: boolean;
/**
 * Vector pointing upwards, used to determine what is a wall and what is a floor (or a ceiling) when calling `move_and_slide`. Defaults to `Vector2.UP`. As the vector will be normalized it can't be equal to `Vector2.ZERO`, if you want all collisions to be reported as walls, consider using `MOTION_MODE_FLOATING` as `motion_mode`.
 */
  upDirection: Vector2;
/**
 * Current velocity vector in pixels per second, used and modified during calls to `move_and_slide`.
 */
  velocity: Vector2;
/**
 * Minimum angle (in radians) where the body is allowed to slide when it encounters a slope. The default value equals 15 degrees. This property only affects movement when `motion_mode` is `MOTION_MODE_FLOATING`.
 */
  wallMinSlideAngle: float;
/**
 * Allows to manually apply a snap to the floor regardless of the body's velocity. This function does nothing when `is_on_floor` returns `true`.
 */
  applyFloorSnap(): void;
/**
 * Returns the floor's collision angle at the last collision point according to `up_direction`, which is `Vector2.UP` by default. This value is always positive and only valid after calling `move_and_slide` and when `is_on_floor` returns `true`.
 * @param upDirection Vector2 (optional, default: Vector2(0, -1))
 * @returns float
 */
  getFloorAngle(upDirection?: Vector2): float;
/**
 * Returns the collision normal of the floor at the last collision point. Only valid after calling `move_and_slide` and when `is_on_floor` returns `true`.
 * 
 * **Warning:** The collision normal is not always the same as the surface normal.
 * @returns Vector2
 */
  getFloorNormal(): Vector2;
/**
 * Returns the last motion applied to the `CharacterBody2D` during the last call to `move_and_slide`. The movement can be split into multiple motions when sliding occurs, and this method return the last one, which is useful to retrieve the current direction of the movement.
 * @returns Vector2
 */
  getLastMotion(): Vector2;
/**
 * Returns a `KinematicCollision2D`, which contains information about the latest collision that occurred during the last call to `move_and_slide`.
 * @returns KinematicCollision2D
 */
  getLastSlideCollision(): KinematicCollision2D;
/**
 * Returns the linear velocity of the platform at the last collision point. Only valid after calling `move_and_slide`.
 * @returns Vector2
 */
  getPlatformVelocity(): Vector2;
/**
 * Returns the travel (position delta) that occurred during the last call to `move_and_slide`.
 * @returns Vector2
 */
  getPositionDelta(): Vector2;
/**
 * Returns the current real velocity since the last call to `move_and_slide`. For example, when you climb a slope, you will move diagonally even though the velocity is horizontal. This method returns the diagonal movement, as opposed to `velocity` which returns the requested velocity.
 * @returns Vector2
 */
  getRealVelocity(): Vector2;
/**
 * Returns a `KinematicCollision2D`, which contains information about a collision that occurred during the last call to `move_and_slide`. Since the body can collide several times in a single call to `move_and_slide`, you must specify the index of the collision in the range 0 to (`get_slide_collision_count` - 1).
 * 
 * **Example:** Iterate through the collisions with a `for` loop:
 * 
 * 				```gdscript
 * 
 * 				for i in get_slide_collision_count():
 * 				    var collision = get_slide_collision(i)
 * 				    print("Collided with: ", collision.get_collider().name)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				for (int i = 0; i < GetSlideCollisionCount(); i++)
 * 				{
 * 				    KinematicCollision2D collision = GetSlideCollision(i);
 * 				    GD.Print("Collided with: ", (collision.GetCollider() as Node).Name);
 * 				}
 * 				
 * 
 * ```
 * 
 * @param slideIdx int
 * @returns KinematicCollision2D
 */
  getSlideCollision(slideIdx: int): KinematicCollision2D;
/**
 * Returns the number of times the body collided and changed direction during the last call to `move_and_slide`.
 * @returns int
 */
  getSlideCollisionCount(): int;
/**
 * Returns the collision normal of the wall at the last collision point. Only valid after calling `move_and_slide` and when `is_on_wall` returns `true`.
 * 
 * **Warning:** The collision normal is not always the same as the surface normal.
 * @returns Vector2
 */
  getWallNormal(): Vector2;
/**
 * Returns `true` if the body collided with the ceiling on the last call of `move_and_slide`. Otherwise, returns `false`. The `up_direction` and `floor_max_angle` are used to determine whether a surface is "ceiling" or not.
 * @returns boolean
 */
  isOnCeiling(): boolean;
/**
 * Returns `true` if the body collided only with the ceiling on the last call of `move_and_slide`. Otherwise, returns `false`. The `up_direction` and `floor_max_angle` are used to determine whether a surface is "ceiling" or not.
 * @returns boolean
 */
  isOnCeilingOnly(): boolean;
/**
 * Returns `true` if the body collided with the floor on the last call of `move_and_slide`. Otherwise, returns `false`. The `up_direction` and `floor_max_angle` are used to determine whether a surface is "floor" or not.
 * @returns boolean
 */
  isOnFloor(): boolean;
/**
 * Returns `true` if the body collided only with the floor on the last call of `move_and_slide`. Otherwise, returns `false`. The `up_direction` and `floor_max_angle` are used to determine whether a surface is "floor" or not.
 * @returns boolean
 */
  isOnFloorOnly(): boolean;
/**
 * Returns `true` if the body collided with a wall on the last call of `move_and_slide`. Otherwise, returns `false`. The `up_direction` and `floor_max_angle` are used to determine whether a surface is "wall" or not.
 * @returns boolean
 */
  isOnWall(): boolean;
/**
 * Returns `true` if the body collided only with a wall on the last call of `move_and_slide`. Otherwise, returns `false`. The `up_direction` and `floor_max_angle` are used to determine whether a surface is "wall" or not.
 * @returns boolean
 */
  isOnWallOnly(): boolean;
/**
 * Moves the body based on `velocity`. If the body collides with another, it will slide along the other body (by default only on floor) rather than stop immediately. If the other body is a `CharacterBody2D` or `RigidBody2D`, it will also be affected by the motion of the other body. You can use this to make moving and rotating platforms, or to make nodes push other nodes.
 * Modifies `velocity` if a slide collision occurred. To get the latest collision call `get_last_slide_collision`, for detailed information about collisions that occurred, use `get_slide_collision`.
 * When the body touches a moving platform, the platform's velocity is automatically added to the body motion. If a collision occurs due to the platform's motion, it will always be first in the slide collisions.
 * The general behavior and available properties change according to the `motion_mode`.
 * Returns `true` if the body collided, otherwise, returns `false`.
 * @returns boolean
 */
  moveAndSlide(): boolean;
/**
 * Apply when notions of walls, ceiling and floor are relevant. In this mode the body motion will react to slopes (acceleration/slowdown). This mode is suitable for sided games like platformers.
 */
  static readonly MOTION_MODE_GROUNDED: int;
/**
 * Apply when there is no notion of floor or ceiling. All collisions will be reported as `on_wall`. In this mode, when you slide, the speed will always be constant. This mode is suitable for top-down games.
 */
  static readonly MOTION_MODE_FLOATING: int;
/**
 * Add the last platform velocity to the `velocity` when you leave a moving platform.
 */
  static readonly PLATFORM_ON_LEAVE_ADD_VELOCITY: int;
/**
 * Add the last platform velocity to the `velocity` when you leave a moving platform, but any downward motion is ignored. It's useful to keep full jump height even when the platform is moving down.
 */
  static readonly PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY: int;
/**
 * Do nothing when leaving a platform.
 */
  static readonly PLATFORM_ON_LEAVE_DO_NOTHING: int;
}
