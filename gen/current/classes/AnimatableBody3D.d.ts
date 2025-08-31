import type { GodotArray, GodotDictionary, StaticBody3D, float, int } from "../index.d.ts";
/**
 * A 3D physics body that can't be moved by external forces. When moved manually, it affects other bodies in its path.
 * 
 * An animatable 3D physics body. It can't be moved by external forces or contacts, but can be moved manually by other means such as code, `AnimationMixer`s (with `AnimationMixer.callback_mode_process` set to `AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS`), and `RemoteTransform3D`.
 * When `AnimatableBody3D` is moved, its linear and angular velocity are estimated and used to affect other physics bodies in its path. This makes it useful for moving platforms, doors, and other moving objects.
 */
export class AnimatableBody3D extends StaticBody3D {
/**
 * If `true`, the body's movement will be synchronized to the physics frame. This is useful when animating movement via `AnimationPlayer`, for example on moving platforms. Do **not** use together with `PhysicsBody3D.move_and_collide`.
 */
  syncToPhysics: boolean;
}
