import type { AABB, Color, Curve, GeometryInstance3D, GodotArray, GodotDictionary, Gradient, Mesh, Node, PackedColorArray, PackedVector3Array, Signal, Vector3, float, int } from "../index.d.ts";
/**
 * A CPU-based 3D particle emitter.
 * 
 * CPU-based 3D particle node used to create a variety of particle systems and effects.
 * See also `GPUParticles3D`, which provides the same functionality with hardware acceleration, but may not run on older devices.
 */
export class CPUParticles3D extends GeometryInstance3D {
/**
 * Number of particles emitted in one emission cycle.
 */
  amount: int;
/**
 * Each particle's rotation will be animated along this `Curve`. Should be a unit `Curve`.
 */
  angleCurve: Curve;
/**
 * Maximum angle.
 */
  angleMax: float;
/**
 * Minimum angle.
 */
  angleMin: float;
/**
 * Each particle's angular velocity (rotation speed) will vary along this `Curve` over its lifetime. Should be a unit `Curve`.
 */
  angularVelocityCurve: Curve;
/**
 * Maximum initial angular velocity (rotation speed) applied to each particle in *degrees* per second.
 */
  angularVelocityMax: float;
/**
 * Minimum initial angular velocity (rotation speed) applied to each particle in *degrees* per second.
 */
  angularVelocityMin: float;
/**
 * Each particle's animation offset will vary along this `Curve`. Should be a unit `Curve`.
 */
  animOffsetCurve: Curve;
/**
 * Maximum animation offset.
 */
  animOffsetMax: float;
/**
 * Minimum animation offset.
 */
  animOffsetMin: float;
/**
 * Each particle's animation speed will vary along this `Curve`. Should be a unit `Curve`.
 */
  animSpeedCurve: Curve;
/**
 * Maximum particle animation speed.
 */
  animSpeedMax: float;
/**
 * Minimum particle animation speed.
 */
  animSpeedMin: float;
/**
 * Each particle's initial color.
 * 
 * **Note:** `color` multiplies the particle mesh's vertex colors. To have a visible effect on a `BaseMaterial3D`, `BaseMaterial3D.vertex_color_use_as_albedo` *must* be `true`. For a `ShaderMaterial`, `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, `color` will have no visible effect.
 */
  color: Color;
/**
 * Each particle's initial color will vary along this `Gradient` (multiplied with `color`).
 * 
 * **Note:** `color_initial_ramp` multiplies the particle mesh's vertex colors. To have a visible effect on a `BaseMaterial3D`, `BaseMaterial3D.vertex_color_use_as_albedo` *must* be `true`. For a `ShaderMaterial`, `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, `color_initial_ramp` will have no visible effect.
 */
  colorInitialRamp: Gradient;
/**
 * Each particle's color will vary along this `Gradient` over its lifetime (multiplied with `color`).
 * 
 * **Note:** `color_ramp` multiplies the particle mesh's vertex colors. To have a visible effect on a `BaseMaterial3D`, `BaseMaterial3D.vertex_color_use_as_albedo` *must* be `true`. For a `ShaderMaterial`, `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, `color_ramp` will have no visible effect.
 */
  colorRamp: Gradient;
/**
 * Damping will vary along this `Curve`. Should be a unit `Curve`.
 */
  dampingCurve: Curve;
/**
 * Maximum damping.
 */
  dampingMax: float;
/**
 * Minimum damping.
 */
  dampingMin: float;
/**
 * Unit vector specifying the particles' emission direction.
 */
  direction: Vector3;
/**
 * Particle draw order. Uses `DrawOrder` values.
 */
  drawOrder: int;
/**
 * The rectangle's extents if `emission_shape` is set to `EMISSION_SHAPE_BOX`.
 */
  emissionBoxExtents: Vector3;
/**
 * Sets the `Color`s to modulate particles by when using `EMISSION_SHAPE_POINTS` or `EMISSION_SHAPE_DIRECTED_POINTS`.
 * 
 * **Note:** `emission_colors` multiplies the particle mesh's vertex colors. To have a visible effect on a `BaseMaterial3D`, `BaseMaterial3D.vertex_color_use_as_albedo` *must* be `true`. For a `ShaderMaterial`, `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, `emission_colors` will have no visible effect.
 */
  emissionColors: PackedColorArray;
/**
 * Sets the direction the particles will be emitted in when using `EMISSION_SHAPE_DIRECTED_POINTS`.
 */
  emissionNormals: PackedVector3Array;
/**
 * Sets the initial positions to spawn particles when using `EMISSION_SHAPE_POINTS` or `EMISSION_SHAPE_DIRECTED_POINTS`.
 */
  emissionPoints: PackedVector3Array;
/**
 * The axis of the ring when using the emitter `EMISSION_SHAPE_RING`.
 */
  emissionRingAxis: Vector3;
/**
 * The angle of the cone when using the emitter `EMISSION_SHAPE_RING`. The default angle of 90 degrees results in a ring, while an angle of 0 degrees results in a cone. Intermediate values will result in a ring where one end is larger than the other.
 * 
 * **Note:** Depending on `emission_ring_height`, the angle may be clamped if the ring's end is reached to form a perfect cone.
 */
  emissionRingConeAngle: float;
/**
 * The height of the ring when using the emitter `EMISSION_SHAPE_RING`.
 */
  emissionRingHeight: float;
/**
 * The inner radius of the ring when using the emitter `EMISSION_SHAPE_RING`.
 */
  emissionRingInnerRadius: float;
/**
 * The radius of the ring when using the emitter `EMISSION_SHAPE_RING`.
 */
  emissionRingRadius: float;
/**
 * Particles will be emitted inside this region. See `EmissionShape` for possible values.
 */
  emissionShape: int;
/**
 * The sphere's radius if `EmissionShape` is set to `EMISSION_SHAPE_SPHERE`.
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
 * The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the particle system itself.
 */
  fixedFps: int;
/**
 * Amount of `spread` in Y/Z plane. A value of `1` restricts particles to X/Z plane.
 */
  flatness: float;
/**
 * If `true`, results in fractional delta calculation which has a smoother particles display effect.
 */
  fractDelta: boolean;
/**
 * Gravity applied to every particle.
 */
  gravity: Vector3;
/**
 * Each particle's hue will vary along this `Curve`. Should be a unit `Curve`.
 */
  hueVariationCurve: Curve;
/**
 * Maximum hue variation.
 */
  hueVariationMax: float;
/**
 * Minimum hue variation.
 */
  hueVariationMin: float;
/**
 * Maximum value of the initial velocity.
 */
  initialVelocityMax: float;
/**
 * Minimum value of the initial velocity.
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
 * Maximum linear acceleration.
 */
  linearAccelMax: float;
/**
 * Minimum linear acceleration.
 */
  linearAccelMin: float;
/**
 * If `true`, particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the `CPUParticles3D` node (and its parents) when it is moved or rotated. If `false`, particles use global coordinates; they will not move or rotate along the `CPUParticles3D` node (and its parents) when it is moved or rotated.
 */
  localCoords: boolean;
/**
 * The `Mesh` used for each particle. If `null`, particles will be spheres.
 */
  mesh: Mesh;
/**
 * If `true`, only one emission cycle occurs. If set `true` during a cycle, emission will stop at the cycle's end.
 */
  oneShot: boolean;
/**
 * Each particle's orbital velocity will vary along this `Curve`. Should be a unit `Curve`.
 */
  orbitVelocityCurve: Curve;
/**
 * Maximum orbit velocity.
 */
  orbitVelocityMax: float;
/**
 * Minimum orbit velocity.
 */
  orbitVelocityMin: float;
/**
 * Align Y axis of particle with the direction of its velocity.
 */
  particleFlagAlignY: boolean;
/**
 * If `true`, particles will not move on the Z axis.
 */
  particleFlagDisableZ: boolean;
/**
 * If `true`, particles rotate around Y axis by `angle_min`.
 */
  particleFlagRotateY: boolean;
/**
 * Particle system starts as if it had already run for this many seconds.
 */
  preprocess: float;
/**
 * Each particle's radial acceleration will vary along this `Curve`. Should be a unit `Curve`.
 */
  radialAccelCurve: Curve;
/**
 * Maximum radial acceleration.
 */
  radialAccelMax: float;
/**
 * Minimum radial acceleration.
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
 * Maximum scale.
 */
  scaleAmountMax: float;
/**
 * Minimum scale.
 */
  scaleAmountMin: float;
/**
 * Curve for the scale over life, along the x axis.
 */
  scaleCurveX: Curve;
/**
 * Curve for the scale over life, along the y axis.
 */
  scaleCurveY: Curve;
/**
 * Curve for the scale over life, along the z axis.
 */
  scaleCurveZ: Curve;
/**
 * Sets the random seed used by the particle system. Only effective if `use_fixed_seed` is `true`.
 */
  seed: int;
/**
 * Particle system's running speed scaling ratio. A value of `0` can be used to pause the particles.
 */
  speedScale: float;
/**
 * If set to `true`, three different scale curves can be specified, one per scale axis.
 */
  splitScale: boolean;
/**
 * Each particle's initial direction range from `+spread` to `-spread` degrees. Applied to X/Z plane and Y/Z planes.
 */
  spread: float;
/**
 * Each particle's tangential acceleration will vary along this `Curve`. Should be a unit `Curve`.
 */
  tangentialAccelCurve: Curve;
/**
 * Maximum tangent acceleration.
 */
  tangentialAccelMax: float;
/**
 * Minimum tangent acceleration.
 */
  tangentialAccelMin: float;
/**
 * If `true`, particles will use the same seed for every simulation using the seed defined in `seed`. This is useful for situations where the visual outcome should be consistent across replays, for example when using Movie Maker mode.
 */
  useFixedSeed: boolean;
/**
 * The `AABB` that determines the node's region which needs to be visible on screen for the particle system to be active.
 * Grow the box if particles suddenly appear/disappear when the node enters/exits the screen. The `AABB` can be grown via code or with the **Particles → Generate AABB** editor tool.
 */
  visibilityAabb: AABB;
/**
 * Returns the axis-aligned bounding box that contains all the particles that are active in the current frame.
 * @returns AABB
 */
  captureAabb(): AABB;
/**
 * Sets this node's properties to match a given `GPUParticles3D` node with an assigned `ParticleProcessMaterial`.
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
 * Enables or disables the given particle flag (see `ParticleFlags` for options).
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
 * Particles are drawn in order of depth.
 */
  static readonly DRAW_ORDER_VIEW_DEPTH: int;
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
 * Use with `set_particle_flag` to set `particle_flag_rotate_y`.
 */
  static readonly PARTICLE_FLAG_ROTATE_Y: int;
/**
 * Use with `set_particle_flag` to set `particle_flag_disable_z`.
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
 * Particles will be emitted in the volume of a sphere.
 */
  static readonly EMISSION_SHAPE_SPHERE: int;
/**
 * Particles will be emitted on the surface of a sphere.
 */
  static readonly EMISSION_SHAPE_SPHERE_SURFACE: int;
/**
 * Particles will be emitted in the volume of a box.
 */
  static readonly EMISSION_SHAPE_BOX: int;
/**
 * Particles will be emitted at a position chosen randomly among `emission_points`. Particle color will be modulated by `emission_colors`.
 */
  static readonly EMISSION_SHAPE_POINTS: int;
/**
 * Particles will be emitted at a position chosen randomly among `emission_points`. Particle velocity and rotation will be set based on `emission_normals`. Particle color will be modulated by `emission_colors`.
 */
  static readonly EMISSION_SHAPE_DIRECTED_POINTS: int;
/**
 * Particles will be emitted in a ring or cylinder.
 */
  static readonly EMISSION_SHAPE_RING: int;
/**
 * Represents the size of the `EmissionShape` enum.
 */
  static readonly EMISSION_SHAPE_MAX: int;
}
