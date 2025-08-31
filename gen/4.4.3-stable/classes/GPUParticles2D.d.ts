import type { Color, GodotArray, GodotDictionary, Material, Node, Node2D, NodePath, Rect2, Signal, Texture2D, Transform2D, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D particle emitter.
 * 
 * 2D particle node used to create a variety of particle systems and effects. `GPUParticles2D` features an emitter that generates some number of particles at a given rate.
 * Use the `process_material` property to add a `ParticleProcessMaterial` to configure particle appearance and behavior. Alternatively, you can add a `ShaderMaterial` which will be applied to all particles.
 * 2D particles can optionally collide with `LightOccluder2D`, but they don't collide with `PhysicsBody2D` nodes.
 */
export class GPUParticles2D extends Node2D {
/**
 * The number of particles to emit in one emission cycle. The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. Higher values will increase GPU requirements, even if not all particles are visible at a given time or if `amount_ratio` is decreased.
 * 
 * **Note:** Changing this value will cause the particle system to restart. To avoid this, change `amount_ratio` instead.
 */
  amount: int;
/**
 * The ratio of particles that should actually be emitted. If set to a value lower than `1.0`, this will set the amount of emitted particles throughout the lifetime to `amount * amount_ratio`. Unlike changing `amount`, changing `amount_ratio` while emitting does not affect already-emitted particles and doesn't cause the particle system to restart. `amount_ratio` can be used to create effects that make the number of emitted particles vary over time.
 * 
 * **Note:** Reducing the `amount_ratio` has no performance benefit, since resources need to be allocated and processed for the total `amount` of particles regardless of the `amount_ratio`. If you don't intend to change the number of particles emitted while the particles are emitting, make sure `amount_ratio` is set to `1` and change `amount` to your liking instead.
 */
  amountRatio: float;
/**
 * Multiplier for particle's collision radius. `1.0` corresponds to the size of the sprite. If particles appear to sink into the ground when colliding, increase this value. If particles appear to float when colliding, decrease this value. Only effective if `ParticleProcessMaterial.collision_mode` is `ParticleProcessMaterial.COLLISION_RIGID` or `ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT`.
 * 
 * **Note:** Particles always have a spherical collision shape.
 */
  collisionBaseSize: float;
/**
 * Particle draw order. Uses `DrawOrder` values.
 */
  drawOrder: int;
/**
 * If `true`, particles are being emitted. `emitting` can be used to start and stop particles from emitting. However, if `one_shot` is `true` setting `emitting` to `true` will not restart the emission cycle unless all active particles have finished processing. Use the `finished` signal to be notified once all active particles finish processing.
 * 
 * **Note:** For `one_shot` emitters, due to the particles being computed on the GPU, there may be a short period after receiving the `finished` signal during which setting this to `true` will not restart the emission cycle.
 * 
 * **Tip:** If your `one_shot` emitter needs to immediately restart emitting particles once `finished` signal is received, consider calling `restart` instead of setting `emitting`.
 */
  emitting: boolean;
/**
 * How rapidly particles in an emission cycle are emitted. If greater than `0`, there will be a gap in emissions before the next cycle begins.
 */
  explosiveness: float;
/**
 * The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself.
 */
  fixedFps: int;
/**
 * If `true`, results in fractional delta calculation which has a smoother particles display effect.
 */
  fractDelta: boolean;
/**
 * Enables particle interpolation, which makes the particle movement smoother when their `fixed_fps` is lower than the screen refresh rate.
 */
  interpolate: boolean;
/**
 * Causes all the particles in this node to interpolate towards the end of their lifetime.
 * 
 * **Note:** This only works when used with a `ParticleProcessMaterial`. It needs to be manually implemented for custom process shaders.
 */
  interpToEnd: float;
/**
 * The amount of time each particle will exist (in seconds). The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second.
 */
  lifetime: float;
/**
 * If `true`, particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the `GPUParticles2D` node (and its parents) when it is moved or rotated. If `false`, particles use global coordinates; they will not move or rotate along the `GPUParticles2D` node (and its parents) when it is moved or rotated.
 */
  localCoords: boolean;
/**
 * If `true`, only one emission cycle occurs. If set `true` during a cycle, emission will stop at the cycle's end.
 */
  oneShot: boolean;
/**
 * Particle system starts as if it had already run for this many seconds.
 * 
 * **Note:** This can be very expensive if set to a high number as it requires running the particle shader a number of times equal to the `fixed_fps` (or 30, if `fixed_fps` is 0) for every second. In extreme cases it can even lead to a GPU crash due to the volume of work done in a single frame.
 */
  preprocess: float;
/**
 * `Material` for processing particles. Can be a `ParticleProcessMaterial` or a `ShaderMaterial`.
 */
  processMaterial: Material;
/**
 * Emission lifetime randomness ratio.
 */
  randomness: float;
/**
 * Sets the random seed used by the particle system. Only effective if `use_fixed_seed` is `true`.
 */
  seed: int;
/**
 * Particle system's running speed scaling ratio. A value of `0` can be used to pause the particles.
 */
  speedScale: float;
/**
 * Path to another `GPUParticles2D` node that will be used as a subemitter (see `ParticleProcessMaterial.sub_emitter_mode`). Subemitters can be used to achieve effects such as fireworks, sparks on collision, bubbles popping into water drops, and more.
 * 
 * **Note:** When `sub_emitter` is set, the target `GPUParticles2D` node will no longer emit particles on its own.
 */
  subEmitter: NodePath;
/**
 * Particle texture. If `null`, particles will be squares with a size of 1×1 pixels.
 * 
 * **Note:** To use a flipbook texture, assign a new `CanvasItemMaterial` to the `GPUParticles2D`'s `CanvasItem.material` property, then enable `CanvasItemMaterial.particles_animation` and set `CanvasItemMaterial.particles_anim_h_frames`, `CanvasItemMaterial.particles_anim_v_frames`, and `CanvasItemMaterial.particles_anim_loop` to match the flipbook texture.
 */
  texture: Texture2D;
/**
 * If `true`, enables particle trails using a mesh skinning system.
 * 
 * **Note:** Unlike `GPUParticles3D`, the number of trail sections and subdivisions is set with the `trail_sections` and `trail_section_subdivisions` properties.
 */
  trailEnabled: boolean;
/**
 * The amount of time the particle's trail should represent (in seconds). Only effective if `trail_enabled` is `true`.
 */
  trailLifetime: float;
/**
 * The number of sections to use for the particle trail rendering. Higher values can result in smoother trail curves, at the cost of performance due to increased mesh complexity. See also `trail_section_subdivisions`. Only effective if `trail_enabled` is `true`.
 */
  trailSections: int;
/**
 * The number of subdivisions to use for the particle trail rendering. Higher values can result in smoother trail curves, at the cost of performance due to increased mesh complexity. See also `trail_sections`. Only effective if `trail_enabled` is `true`.
 */
  trailSectionSubdivisions: int;
/**
 * If `true`, particles will use the same seed for every simulation using the seed defined in `seed`. This is useful for situations where the visual outcome should be consistent across replays, for example when using Movie Maker mode.
 */
  useFixedSeed: boolean;
/**
 * The `Rect2` that determines the node's region which needs to be visible on screen for the particle system to be active.
 * Grow the rect if particles suddenly appear/disappear when the node enters/exits the screen. The `Rect2` can be grown via code or with the **Particles → Generate Visibility Rect** editor tool.
 */
  visibilityRect: Rect2;
/**
 * Returns a rectangle containing the positions of all existing particles.
 * 
 * **Note:** When using threaded rendering this method synchronizes the rendering thread. Calling it often may have a negative impact on performance.
 * @returns Rect2
 */
  captureRect(): Rect2;
/**
 * Sets this node's properties to match a given `CPUParticles2D` node.
 * @param particles Node
 */
  convertFromParticles(particles: Node): void;
/**
 * Emits a single particle. Whether `xform`, `velocity`, `color` and `custom` are applied depends on the value of `flags`. See `EmitFlags`.
 * The default ParticleProcessMaterial will overwrite `color` and use the contents of `custom` as `(rotation, age, animation, lifetime)`.
 * 
 * **Note:** `emit_particle` is only supported on the Forward+ and Mobile rendering methods, not Compatibility.
 * @param xform Transform2D
 * @param velocity Vector2
 * @param color Color
 * @param custom Color
 * @param flags int
 */
  emitParticle(xform: Transform2D, velocity: Vector2, color: Color, custom: Color, flags: int): void;
/**
 * Requests the particles to process for extra process time during a single frame.
 * Useful for particle playback, if used in combination with `use_fixed_seed` or by calling `restart` with parameter `keep_seed` set to `true`.
 * @param processTime float
 */
  requestParticlesProcess(processTime: float): void;
/**
 * Restarts the particle emission cycle, clearing existing particles. To avoid particles vanishing from the viewport, wait for the `finished` signal before calling.
 * 
 * **Note:** The `finished` signal is only emitted by `one_shot` emitters.
 * If `keep_seed` is `true`, the current random seed will be preserved. Useful for seeking and playback.
 * @param keepSeed boolean (optional, default: false)
 */
  restart(keepSeed?: boolean): void;
/**
 * Emitted when all active particles have finished processing. To immediately restart the emission cycle, call `restart`.
 * This signal is never emitted when `one_shot` is disabled, as particles will be emitted and processed continuously.
 * 
 * **Note:** For `one_shot` emitters, due to the particles being computed on the GPU, there may be a short period after receiving the signal during which setting `emitting` to `true` will not restart the emission cycle. This delay is avoided by instead calling `restart`.
 */
  finished: Signal<[]>;
/**
 * Particles are drawn in the order emitted.
 */
  static readonly DRAW_ORDER_INDEX: int;
/**
 * Particles are drawn in order of remaining lifetime. In other words, the particle with the highest lifetime is drawn at the front.
 */
  static readonly DRAW_ORDER_LIFETIME: int;
/**
 * Particles are drawn in reverse order of remaining lifetime. In other words, the particle with the lowest lifetime is drawn at the front.
 */
  static readonly DRAW_ORDER_REVERSE_LIFETIME: int;
/**
 * Particle starts at the specified position.
 */
  static readonly EMIT_FLAG_POSITION: int;
/**
 * Particle starts with specified rotation and scale.
 */
  static readonly EMIT_FLAG_ROTATION_SCALE: int;
/**
 * Particle starts with the specified velocity vector, which defines the emission direction and speed.
 */
  static readonly EMIT_FLAG_VELOCITY: int;
/**
 * Particle starts with specified color.
 */
  static readonly EMIT_FLAG_COLOR: int;
/**
 * Particle starts with specified `CUSTOM` data.
 */
  static readonly EMIT_FLAG_CUSTOM: int;
}
