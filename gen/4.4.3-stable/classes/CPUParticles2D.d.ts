import type { Color, Curve, GodotArray, GodotDictionary, Gradient, Node, Node2D, PackedColorArray, PackedVector2Array, Signal, Texture2D, Vector2, float, int } from "../index.d.ts";
/**
 * A CPU-based 2D particle emitter.
 * 
 * CPU-based 2D particle node used to create a variety of particle systems and effects.
 * See also `GPUParticles2D`, which provides the same functionality with hardware acceleration, but may not run on older devices.
 */
export class CPUParticles2D extends Node2D {
/**
 * Number of particles emitted in one emission cycle.
 */
  amount: int;
/**
 * Each particle's rotation will be animated along this `Curve`. Should be a unit `Curve`.
 */
  angleCurve: Curve;
/**
 * Maximum initial rotation applied to each particle, in degrees.
 */
  angleMax: float;
/**
 * Minimum equivalent of `angle_max`.
 */
  angleMin: float;
/**
 * Each particle's angular velocity will vary along this `Curve`. Should be a unit `Curve`.
 */
  angularVelocityCurve: Curve;
/**
 * Maximum initial angular velocity (rotation speed) applied to each particle in *degrees* per second.
 */
  angularVelocityMax: float;
/**
 * Minimum equivalent of `angular_velocity_max`.
 */
  angularVelocityMin: float;
/**
 * Each particle's animation offset will vary along this `Curve`. Should be a unit `Curve`.
 */
  animOffsetCurve: Curve;
/**
 * Maximum animation offset that corresponds to frame index in the texture. `0` is the first frame, `1` is the last one. See `CanvasItemMaterial.particles_animation`.
 */
  animOffsetMax: float;
/**
 * Minimum equivalent of `anim_offset_max`.
 */
  animOffsetMin: float;
/**
 * Each particle's animation speed will vary along this `Curve`. Should be a unit `Curve`.
 */
  animSpeedCurve: Curve;
/**
 * Maximum particle animation speed. Animation speed of `1` means that the particles will make full `0` to `1` offset cycle during lifetime, `2` means `2` cycles etc.
 * With animation speed greater than `1`, remember to enable `CanvasItemMaterial.particles_anim_loop` property if you want the animation to repeat.
 */
  animSpeedMax: float;
/**
 * Minimum equivalent of `anim_speed_max`.
 */
  animSpeedMin: float;
/**
 * Each particle's initial color. If `texture` is defined, it will be multiplied by this color.
 */
  color: Color;
/**
 * Each particle's initial color will vary along this `Gradient` (multiplied with `color`).
 */
  colorInitialRamp: Gradient;
/**
 * Each particle's color will vary along this `Gradient` over its lifetime (multiplied with `color`).
 */
  colorRamp: Gradient;
/**
 * Damping will vary along this `Curve`. Should be a unit `Curve`.
 */
  dampingCurve: Curve;
/**
 * The maximum rate at which particles lose velocity. For example value of `100` means that the particle will go from `100` velocity to `0` in `1` second.
 */
  dampingMax: float;
/**
 * Minimum equivalent of `damping_max`.
 */
  dampingMin: float;
/**
 * Unit vector specifying the particles' emission direction.
 */
  direction: Vector2;
/**
 * Particle draw order. Uses `DrawOrder` values.
 */
  drawOrder: int;
/**
 * Sets the `Color`s to modulate particles by when using `EMISSION_SHAPE_POINTS` or `EMISSION_SHAPE_DIRECTED_POINTS`.
 */
  emissionColors: PackedColorArray;
/**
 * Sets the direction the particles will be emitted in when using `EMISSION_SHAPE_DIRECTED_POINTS`.
 */
  emissionNormals: PackedVector2Array;
/**
 * Sets the initial positions to spawn particles when using `EMISSION_SHAPE_POINTS` or `EMISSION_SHAPE_DIRECTED_POINTS`.
 */
  emissionPoints: PackedVector2Array;
/**
 * The rectangle's extents if `emission_shape` is set to `EMISSION_SHAPE_RECTANGLE`.
 */
  emissionRectExtents: Vector2;
/**
 * Particles will be emitted inside this region. See `EmissionShape` for possible values.
 */
  emissionShape: int;
/**
 * The sphere's radius if `emission_shape` is set to `EMISSION_SHAPE_SPHERE`.
 */
  emissionSphereRadius: float;
/**
 * If `true`, particles are being emitted. `emitting` can be used to start and stop particles from emitting. However, if `one_shot` is `true` setting `emitting` to `true` will not restart the emission cycle until after all active particles finish processing. You can use the `finished` signal to be notified once all active particles finish processing.
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
 * Gravity applied to every particle.
 */
  gravity: Vector2;
/**
 * Each particle's hue will vary along this `Curve`. Should be a unit `Curve`.
 */
  hueVariationCurve: Curve;
/**
 * Maximum initial hue variation applied to each particle. It will shift the particle color's hue.
 */
  hueVariationMax: float;
/**
 * Minimum equivalent of `hue_variation_max`.
 */
  hueVariationMin: float;
/**
 * Maximum initial velocity magnitude for each particle. Direction comes from `direction` and `spread`.
 */
  initialVelocityMax: float;
/**
 * Minimum equivalent of `initial_velocity_max`.
 */
  initialVelocityMin: float;
/**
 * Amount of time each particle will exist.
 */
  lifetime: float;
/**
 * Particle lifetime randomness ratio.
 */
  lifetimeRandomness: float;
/**
 * Each particle's linear acceleration will vary along this `Curve`. Should be a unit `Curve`.
 */
  linearAccelCurve: Curve;
/**
 * Maximum linear acceleration applied to each particle in the direction of motion.
 */
  linearAccelMax: float;
/**
 * Minimum equivalent of `linear_accel_max`.
 */
  linearAccelMin: float;
/**
 * If `true`, particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the `CPUParticles2D` node (and its parents) when it is moved or rotated. If `false`, particles use global coordinates; they will not move or rotate along the `CPUParticles2D` node (and its parents) when it is moved or rotated.
 */
  localCoords: boolean;
/**
 * If `true`, only one emission cycle occurs. If set `true` during a cycle, emission will stop at the cycle's end.
 */
  oneShot: boolean;
/**
 * Each particle's orbital velocity will vary along this `Curve`. Should be a unit `Curve`.
 */
  orbitVelocityCurve: Curve;
/**
 * Maximum orbital velocity applied to each particle. Makes the particles circle around origin. Specified in number of full rotations around origin per second.
 */
  orbitVelocityMax: float;
/**
 * Minimum equivalent of `orbit_velocity_max`.
 */
  orbitVelocityMin: float;
/**
 * Align Y axis of particle with the direction of its velocity.
 */
  particleFlagAlignY: boolean;
  physicsInterpolationMode: int;
/**
 * Particle system starts as if it had already run for this many seconds.
 */
  preprocess: float;
/**
 * Each particle's radial acceleration will vary along this `Curve`. Should be a unit `Curve`.
 */
  radialAccelCurve: Curve;
/**
 * Maximum radial acceleration applied to each particle. Makes particle accelerate away from the origin or towards it if negative.
 */
  radialAccelMax: float;
/**
 * Minimum equivalent of `radial_accel_max`.
 */
  radialAccelMin: float;
/**
 * Emission lifetime randomness ratio.
 */
  randomness: float;
/**
 * Each particle's scale will vary along this `Curve`. Should be a unit `Curve`.
 */
  scaleAmountCurve: Curve;
/**
 * Maximum initial scale applied to each particle.
 */
  scaleAmountMax: float;
/**
 * Minimum equivalent of `scale_amount_max`.
 */
  scaleAmountMin: float;
/**
 * Each particle's horizontal scale will vary along this `Curve`. Should be a unit `Curve`.
 * `split_scale` must be enabled.
 */
  scaleCurveX: Curve;
/**
 * Each particle's vertical scale will vary along this `Curve`. Should be a unit `Curve`.
 * `split_scale` must be enabled.
 */
  scaleCurveY: Curve;
/**
 * Sets the random seed used by the particle system. Only effective if `use_fixed_seed` is `true`.
 */
  seed: int;
/**
 * Particle system's running speed scaling ratio. A value of `0` can be used to pause the particles.
 */
  speedScale: float;
/**
 * If `true`, the scale curve will be split into x and y components. See `scale_curve_x` and `scale_curve_y`.
 */
  splitScale: boolean;
/**
 * Each particle's initial direction range from `+spread` to `-spread` degrees.
 */
  spread: float;
/**
 * Each particle's tangential acceleration will vary along this `Curve`. Should be a unit `Curve`.
 */
  tangentialAccelCurve: Curve;
/**
 * Maximum tangential acceleration applied to each particle. Tangential acceleration is perpendicular to the particle's velocity giving the particles a swirling motion.
 */
  tangentialAccelMax: float;
/**
 * Minimum equivalent of `tangential_accel_max`.
 */
  tangentialAccelMin: float;
/**
 * Particle texture. If `null`, particles will be squares.
 */
  texture: Texture2D;
/**
 * If `true`, particles will use the same seed for every simulation using the seed defined in `seed`. This is useful for situations where the visual outcome should be consistent across replays, for example when using Movie Maker mode.
 */
  useFixedSeed: boolean;
/**
 * Sets this node's properties to match a given `GPUParticles2D` node with an assigned `ParticleProcessMaterial`.
 * @param particles Node
 */
  convertFromParticles(particles: Node): void;
/**
 * Returns the `Curve` of the parameter specified by `Parameter`.
 * @param param int
 * @returns Curve
 */
  getParamCurve(param: int): Curve;
/**
 * Returns the maximum value range for the given parameter.
 * @param param int
 * @returns float
 */
  getParamMax(param: int): float;
/**
 * Returns the minimum value range for the given parameter.
 * @param param int
 * @returns float
 */
  getParamMin(param: int): float;
/**
 * Returns the enabled state of the given particle flag (see `ParticleFlags` for options).
 * @param particleFlag int
 * @returns boolean
 */
  getParticleFlag(particleFlag: int): boolean;
/**
 * Requests the particles to process for extra process time during a single frame.
 * Useful for particle playback, if used in combination with `use_fixed_seed` or by calling `restart` with parameter `keep_seed` set to `true`.
 * @param processTime float
 */
  requestParticlesProcess(processTime: float): void;
/**
 * Restarts the particle emitter.
 * If `keep_seed` is `true`, the current random seed will be preserved. Useful for seeking and playback.
 * @param keepSeed boolean (optional, default: false)
 */
  restart(keepSeed?: boolean): void;
/**
 * Sets the `Curve` of the parameter specified by `Parameter`. Should be a unit `Curve`.
 * @param param int
 * @param curve Curve
 */
  setParamCurve(param: int, curve: Curve): void;
/**
 * Sets the maximum value for the given parameter.
 * @param param int
 * @param value float
 */
  setParamMax(param: int, value: float): void;
/**
 * Sets the minimum value for the given parameter.
 * @param param int
 * @param value float
 */
  setParamMin(param: int, value: float): void;
/**
 * Enables or disables the given flag (see `ParticleFlags` for options).
 * @param particleFlag int
 * @param enable boolean
 */
  setParticleFlag(particleFlag: int, enable: boolean): void;
/**
 * Emitted when all active particles have finished processing. When `one_shot` is disabled, particles will process continuously, so this is never emitted.
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
 * Use with `set_param_min`, `set_param_max`, and `set_param_curve` to set initial velocity properties.
 */
  static readonly PARAM_INITIAL_LINEAR_VELOCITY: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_curve` to set angular velocity properties.
 */
  static readonly PARAM_ANGULAR_VELOCITY: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_curve` to set orbital velocity properties.
 */
  static readonly PARAM_ORBIT_VELOCITY: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_curve` to set linear acceleration properties.
 */
  static readonly PARAM_LINEAR_ACCEL: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_curve` to set radial acceleration properties.
 */
  static readonly PARAM_RADIAL_ACCEL: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_curve` to set tangential acceleration properties.
 */
  static readonly PARAM_TANGENTIAL_ACCEL: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_curve` to set damping properties.
 */
  static readonly PARAM_DAMPING: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_curve` to set angle properties.
 */
  static readonly PARAM_ANGLE: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_curve` to set scale properties.
 */
  static readonly PARAM_SCALE: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_curve` to set hue variation properties.
 */
  static readonly PARAM_HUE_VARIATION: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_curve` to set animation speed properties.
 */
  static readonly PARAM_ANIM_SPEED: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_curve` to set animation offset properties.
 */
  static readonly PARAM_ANIM_OFFSET: int;
/**
 * Represents the size of the `Parameter` enum.
 */
  static readonly PARAM_MAX: int;
/**
 * Use with `set_particle_flag` to set `particle_flag_align_y`.
 */
  static readonly PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY: int;
/**
 * Present for consistency with 3D particle nodes, not used in 2D.
 */
  static readonly PARTICLE_FLAG_ROTATE_Y: int;
/**
 * Present for consistency with 3D particle nodes, not used in 2D.
 */
  static readonly PARTICLE_FLAG_DISABLE_Z: int;
/**
 * Represents the size of the `ParticleFlags` enum.
 */
  static readonly PARTICLE_FLAG_MAX: int;
/**
 * All particles will be emitted from a single point.
 */
  static readonly EMISSION_SHAPE_POINT: int;
/**
 * Particles will be emitted in the volume of a sphere flattened to two dimensions.
 */
  static readonly EMISSION_SHAPE_SPHERE: int;
/**
 * Particles will be emitted on the surface of a sphere flattened to two dimensions.
 */
  static readonly EMISSION_SHAPE_SPHERE_SURFACE: int;
/**
 * Particles will be emitted in the area of a rectangle.
 */
  static readonly EMISSION_SHAPE_RECTANGLE: int;
/**
 * Particles will be emitted at a position chosen randomly among `emission_points`. Particle color will be modulated by `emission_colors`.
 */
  static readonly EMISSION_SHAPE_POINTS: int;
/**
 * Particles will be emitted at a position chosen randomly among `emission_points`. Particle velocity and rotation will be set based on `emission_normals`. Particle color will be modulated by `emission_colors`.
 */
  static readonly EMISSION_SHAPE_DIRECTED_POINTS: int;
/**
 * Represents the size of the `EmissionShape` enum.
 */
  static readonly EMISSION_SHAPE_MAX: int;
}
