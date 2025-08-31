import type { Color, GodotArray, GodotDictionary, Material, Signal, Texture2D, Vector2, Vector3, float, int } from "../index.d.ts";
/**
 * Holds a particle configuration for `GPUParticles2D` or `GPUParticles3D` nodes.
 * 
 * `ParticleProcessMaterial` defines particle properties and behavior. It is used in the `process_material` of the `GPUParticles2D` and `GPUParticles3D` nodes. Some of this material's properties are applied to each particle when emitted, while others can have a `CurveTexture` or a `GradientTexture1D` applied to vary numerical or color values over the lifetime of the particle.
 */
export class ParticleProcessMaterial extends Material {
/**
 * The alpha value of each particle's color will be multiplied by this `CurveTexture` over its lifetime.
 * 
 * **Note:** `alpha_curve` multiplies the particle mesh's vertex colors. To have a visible effect on a `BaseMaterial3D`, `BaseMaterial3D.vertex_color_use_as_albedo` *must* be `true`. For a `ShaderMaterial`, `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, `alpha_curve` will have no visible effect.
 */
  alphaCurve: Texture2D;
/**
 * Each particle's rotation will be animated along this `CurveTexture`.
 */
  angleCurve: Texture2D;
/**
 * Maximum initial rotation applied to each particle, in degrees.
 * Only applied when `particle_flag_disable_z` or `particle_flag_rotate_y` are `true` or the `BaseMaterial3D` being used to draw the particle is using `BaseMaterial3D.BILLBOARD_PARTICLES`.
 */
  angleMax: float;
/**
 * Minimum equivalent of `angle_max`.
 */
  angleMin: float;
/**
 * Each particle's angular velocity (rotation speed) will vary along this `CurveTexture` over its lifetime.
 */
  angularVelocityCurve: Texture2D;
/**
 * Maximum initial angular velocity (rotation speed) applied to each particle in *degrees* per second.
 * Only applied when `particle_flag_disable_z` or `particle_flag_rotate_y` are `true` or the `BaseMaterial3D` being used to draw the particle is using `BaseMaterial3D.BILLBOARD_PARTICLES`.
 */
  angularVelocityMax: float;
/**
 * Minimum equivalent of `angular_velocity_max`.
 */
  angularVelocityMin: float;
/**
 * Each particle's animation offset will vary along this `CurveTexture`.
 */
  animOffsetCurve: Texture2D;
/**
 * Maximum animation offset that corresponds to frame index in the texture. `0` is the first frame, `1` is the last one. See `CanvasItemMaterial.particles_animation`.
 */
  animOffsetMax: float;
/**
 * Minimum equivalent of `anim_offset_max`.
 */
  animOffsetMin: float;
/**
 * Each particle's animation speed will vary along this `CurveTexture`.
 */
  animSpeedCurve: Texture2D;
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
 * If `true`, interaction with particle attractors is enabled. In 3D, attraction only occurs within the area defined by the `GPUParticles3D` node's `GPUParticles3D.visibility_aabb`.
 */
  attractorInteractionEnabled: boolean;
/**
 * The particles' bounciness. Values range from `0` (no bounce) to `1` (full bounciness). Only effective if `collision_mode` is `COLLISION_RIGID`.
 */
  collisionBounce: float;
/**
 * The particles' friction. Values range from `0` (frictionless) to `1` (maximum friction). Only effective if `collision_mode` is `COLLISION_RIGID`.
 */
  collisionFriction: float;
/**
 * The particles' collision mode.
 * 
 * **Note:** 3D Particles can only collide with `GPUParticlesCollision3D` nodes, not `PhysicsBody3D` nodes. To make particles collide with various objects, you can add `GPUParticlesCollision3D` nodes as children of `PhysicsBody3D` nodes. In 3D, collisions only occur within the area defined by the `GPUParticles3D` node's `GPUParticles3D.visibility_aabb`.
 * 
 * **Note:** 2D Particles can only collide with `LightOccluder2D` nodes, not `PhysicsBody2D` nodes.
 */
  collisionMode: int;
/**
 * If `true`, `GPUParticles3D.collision_base_size` is multiplied by the particle's effective scale (see `scale_min`, `scale_max`, `scale_curve`, and `scale_over_velocity_curve`).
 */
  collisionUseScale: boolean;
/**
 * Each particle's initial color. If the `GPUParticles2D`'s `texture` is defined, it will be multiplied by this color.
 * 
 * **Note:** `color` multiplies the particle mesh's vertex colors. To have a visible effect on a `BaseMaterial3D`, `BaseMaterial3D.vertex_color_use_as_albedo` *must* be `true`. For a `ShaderMaterial`, `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, `color` will have no visible effect.
 */
  color: Color;
/**
 * Each particle's initial color will vary along this `GradientTexture1D` (multiplied with `color`).
 * 
 * **Note:** `color_initial_ramp` multiplies the particle mesh's vertex colors. To have a visible effect on a `BaseMaterial3D`, `BaseMaterial3D.vertex_color_use_as_albedo` *must* be `true`. For a `ShaderMaterial`, `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, `color_initial_ramp` will have no visible effect.
 */
  colorInitialRamp: Texture2D;
/**
 * Each particle's color will vary along this `GradientTexture1D` over its lifetime (multiplied with `color`).
 * 
 * **Note:** `color_ramp` multiplies the particle mesh's vertex colors. To have a visible effect on a `BaseMaterial3D`, `BaseMaterial3D.vertex_color_use_as_albedo` *must* be `true`. For a `ShaderMaterial`, `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, `color_ramp` will have no visible effect.
 */
  colorRamp: Texture2D;
/**
 * Damping will vary along this `CurveTexture`.
 */
  dampingCurve: Texture2D;
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
  direction: Vector3;
/**
 * A curve that specifies the velocity along each of the axes of the particle system along its lifetime.
 * 
 * **Note:** Animated velocities will not be affected by damping, use `velocity_limit_curve` instead.
 */
  directionalVelocityCurve: Texture2D;
/**
 * Maximum directional velocity value, which is multiplied by `directional_velocity_curve`.
 * 
 * **Note:** Animated velocities will not be affected by damping, use `velocity_limit_curve` instead.
 */
  directionalVelocityMax: float;
/**
 * Minimum directional velocity value, which is multiplied by `directional_velocity_curve`.
 * 
 * **Note:** Animated velocities will not be affected by damping, use `velocity_limit_curve` instead.
 */
  directionalVelocityMin: float;
/**
 * The box's extents if `emission_shape` is set to `EMISSION_SHAPE_BOX`.
 * 
 * **Note:** `emission_box_extents` starts from the center point and applies the X, Y, and Z values in both directions. The size is twice the area of the extents.
 */
  emissionBoxExtents: Vector3;
/**
 * Particle color will be modulated by color determined by sampling this texture at the same point as the `emission_point_texture`.
 * 
 * **Note:** `emission_color_texture` multiplies the particle mesh's vertex colors. To have a visible effect on a `BaseMaterial3D`, `BaseMaterial3D.vertex_color_use_as_albedo` *must* be `true`. For a `ShaderMaterial`, `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, `emission_color_texture` will have no visible effect.
 */
  emissionColorTexture: Texture2D;
/**
 * Each particle's color will be multiplied by this `CurveTexture` over its lifetime.
 * 
 * **Note:** `emission_curve` multiplies the particle mesh's vertex colors. To have a visible effect on a `BaseMaterial3D`, `BaseMaterial3D.vertex_color_use_as_albedo` *must* be `true`. For a `ShaderMaterial`, `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, `emission_curve` will have no visible effect.
 */
  emissionCurve: Texture2D;
/**
 * Particle velocity and rotation will be set by sampling this texture at the same point as the `emission_point_texture`. Used only in `EMISSION_SHAPE_DIRECTED_POINTS`. Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar.
 */
  emissionNormalTexture: Texture2D;
/**
 * The number of emission points if `emission_shape` is set to `EMISSION_SHAPE_POINTS` or `EMISSION_SHAPE_DIRECTED_POINTS`.
 */
  emissionPointCount: int;
/**
 * Particles will be emitted at positions determined by sampling this texture at a random position. Used with `EMISSION_SHAPE_POINTS` and `EMISSION_SHAPE_DIRECTED_POINTS`. Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar.
 */
  emissionPointTexture: Texture2D;
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
 * Particles will be emitted inside this region. Use `EmissionShape` constants for values.
 */
  emissionShape: int;
/**
 * The offset for the `emission_shape`, in local space.
 */
  emissionShapeOffset: Vector3;
/**
 * The scale of the `emission_shape`, in local space.
 */
  emissionShapeScale: Vector3;
/**
 * The sphere's radius if `emission_shape` is set to `EMISSION_SHAPE_SPHERE`.
 */
  emissionSphereRadius: float;
/**
 * Amount of `spread` along the Y axis.
 */
  flatness: float;
/**
 * Gravity applied to every particle.
 */
  gravity: Vector3;
/**
 * Each particle's hue will vary along this `CurveTexture`.
 */
  hueVariationCurve: Texture2D;
/**
 * Maximum initial hue variation applied to each particle. It will shift the particle color's hue.
 */
  hueVariationMax: float;
/**
 * Minimum equivalent of `hue_variation_max`.
 */
  hueVariationMin: float;
/**
 * Percentage of the velocity of the respective `GPUParticles2D` or `GPUParticles3D` inherited by each particle when spawning.
 */
  inheritVelocityRatio: float;
/**
 * Maximum initial velocity magnitude for each particle. Direction comes from `direction` and `spread`.
 */
  initialVelocityMax: float;
/**
 * Minimum equivalent of `initial_velocity_max`.
 */
  initialVelocityMin: float;
/**
 * Particle lifetime randomness ratio. The equation for the lifetime of a particle is `lifetime * (1.0 - randf() * lifetime_randomness)`. For example, a `lifetime_randomness` of `0.4` scales the lifetime between `0.6` to `1.0` of its original value.
 */
  lifetimeRandomness: float;
/**
 * Each particle's linear acceleration will vary along this `CurveTexture`.
 */
  linearAccelCurve: Texture2D;
/**
 * Maximum linear acceleration applied to each particle in the direction of motion.
 */
  linearAccelMax: float;
/**
 * Minimum equivalent of `linear_accel_max`.
 */
  linearAccelMin: float;
/**
 * Each particle's orbital velocity will vary along this `CurveTexture`.
 * 
 * **Note:** For 3D orbital velocity, use a `CurveXYZTexture`.
 * 
 * **Note:** Animated velocities will not be affected by damping, use `velocity_limit_curve` instead.
 */
  orbitVelocityCurve: Texture2D;
/**
 * Maximum orbital velocity applied to each particle. Makes the particles circle around origin. Specified in number of full rotations around origin per second.
 * 
 * **Note:** Animated velocities will not be affected by damping, use `velocity_limit_curve` instead.
 */
  orbitVelocityMax: float;
/**
 * Minimum equivalent of `orbit_velocity_max`.
 * 
 * **Note:** Animated velocities will not be affected by damping, use `velocity_limit_curve` instead.
 */
  orbitVelocityMin: float;
/**
 * Align Y axis of particle with the direction of its velocity.
 */
  particleFlagAlignY: boolean;
/**
 * Changes the behavior of the damping properties from a linear deceleration to a deceleration based on speed percentage.
 */
  particleFlagDampingAsFriction: boolean;
/**
 * If `true`, particles will not move on the z axis.
 */
  particleFlagDisableZ: boolean;
/**
 * If `true`, particles rotate around Y axis by `angle_min`.
 */
  particleFlagRotateY: boolean;
/**
 * Each particle's radial acceleration will vary along this `CurveTexture`.
 */
  radialAccelCurve: Texture2D;
/**
 * Maximum radial acceleration applied to each particle. Makes particle accelerate away from the origin or towards it if negative.
 */
  radialAccelMax: float;
/**
 * Minimum equivalent of `radial_accel_max`.
 */
  radialAccelMin: float;
/**
 * A `CurveTexture` that defines the velocity over the particle's lifetime away (or toward) the `velocity_pivot`.
 * 
 * **Note:** Animated velocities will not be affected by damping, use `velocity_limit_curve` instead.
 */
  radialVelocityCurve: Texture2D;
/**
 * Maximum radial velocity applied to each particle. Makes particles move away from the `velocity_pivot`, or toward it if negative.
 * 
 * **Note:** Animated velocities will not be affected by damping, use `velocity_limit_curve` instead.
 */
  radialVelocityMax: float;
/**
 * Minimum radial velocity applied to each particle. Makes particles move away from the `velocity_pivot`, or toward it if negative.
 * 
 * **Note:** Animated velocities will not be affected by damping, use `velocity_limit_curve` instead.
 */
  radialVelocityMin: float;
/**
 * Each particle's scale will vary along this `CurveTexture` over its lifetime. If a `CurveXYZTexture` is supplied instead, the scale will be separated per-axis.
 */
  scaleCurve: Texture2D;
/**
 * Maximum initial scale applied to each particle.
 */
  scaleMax: float;
/**
 * Minimum equivalent of `scale_max`.
 */
  scaleMin: float;
/**
 * Either a `CurveTexture` or a `CurveXYZTexture` that scales each particle based on its velocity.
 */
  scaleOverVelocityCurve: Texture2D;
/**
 * Maximum velocity value reference for `scale_over_velocity_curve`.
 * `scale_over_velocity_curve` will be interpolated between `scale_over_velocity_min` and `scale_over_velocity_max`.
 */
  scaleOverVelocityMax: float;
/**
 * Minimum velocity value reference for `scale_over_velocity_curve`.
 * `scale_over_velocity_curve` will be interpolated between `scale_over_velocity_min` and `scale_over_velocity_max`.
 */
  scaleOverVelocityMin: float;
/**
 * Each particle's initial direction range from `+spread` to `-spread` degrees.
 */
  spread: float;
/**
 * The amount of particles to spawn from the subemitter node when a collision occurs. When combined with `COLLISION_HIDE_ON_CONTACT` on the main particles material, this can be used to achieve effects such as raindrops hitting the ground.
 * 
 * **Note:** This value shouldn't exceed `GPUParticles2D.amount` or `GPUParticles3D.amount` defined on the *subemitter node* (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.
 */
  subEmitterAmountAtCollision: int;
/**
 * The amount of particles to spawn from the subemitter node when the particle expires.
 * 
 * **Note:** This value shouldn't exceed `GPUParticles2D.amount` or `GPUParticles3D.amount` defined on the *subemitter node* (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.
 */
  subEmitterAmountAtEnd: int;
/**
 * The amount of particles to spawn from the subemitter node when the particle spawns.
 * 
 * **Note:** This value shouldn't exceed `GPUParticles2D.amount` or `GPUParticles3D.amount` defined on the *subemitter node* (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.
 */
  subEmitterAmountAtStart: int;
/**
 * The frequency at which particles should be emitted from the subemitter node. One particle will be spawned every `sub_emitter_frequency` seconds.
 * 
 * **Note:** This value shouldn't exceed `GPUParticles2D.amount` or `GPUParticles3D.amount` defined on the *subemitter node* (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.
 */
  subEmitterFrequency: float;
/**
 * If `true`, the subemitter inherits the parent particle's velocity when it spawns.
 */
  subEmitterKeepVelocity: boolean;
/**
 * The particle subemitter mode (see `GPUParticles2D.sub_emitter` and `GPUParticles3D.sub_emitter`).
 */
  subEmitterMode: int;
/**
 * Each particle's tangential acceleration will vary along this `CurveTexture`.
 */
  tangentialAccelCurve: Texture2D;
/**
 * Maximum tangential acceleration applied to each particle. Tangential acceleration is perpendicular to the particle's velocity giving the particles a swirling motion.
 */
  tangentialAccelMax: float;
/**
 * Minimum equivalent of `tangential_accel_max`.
 */
  tangentialAccelMin: float;
/**
 * If `true`, enables turbulence for the particle system. Turbulence can be used to vary particle movement according to its position (based on a 3D noise pattern). In 3D, `GPUParticlesAttractorVectorField3D` with `NoiseTexture3D` can be used as an alternative to turbulence that works in world space and with multiple particle systems reacting in the same way.
 * 
 * **Note:** Enabling turbulence has a high performance cost on the GPU. Only enable turbulence on a few particle systems at once at most, and consider disabling it when targeting mobile/web platforms.
 */
  turbulenceEnabled: boolean;
/**
 * Maximum turbulence influence on each particle.
 * The actual amount of turbulence influence on each particle is calculated as a random value between `turbulence_influence_min` and `turbulence_influence_max` and multiplied by the amount of turbulence influence from `turbulence_influence_over_life`.
 */
  turbulenceInfluenceMax: float;
/**
 * Minimum turbulence influence on each particle.
 * The actual amount of turbulence influence on each particle is calculated as a random value between `turbulence_influence_min` and `turbulence_influence_max` and multiplied by the amount of turbulence influence from `turbulence_influence_over_life`.
 */
  turbulenceInfluenceMin: float;
/**
 * Each particle's amount of turbulence will be influenced along this `CurveTexture` over its life time.
 */
  turbulenceInfluenceOverLife: Texture2D;
/**
 * Maximum displacement of each particle's spawn position by the turbulence.
 * The actual amount of displacement will be a factor of the underlying turbulence multiplied by a random value between `turbulence_initial_displacement_min` and `turbulence_initial_displacement_max`.
 */
  turbulenceInitialDisplacementMax: float;
/**
 * Minimum displacement of each particle's spawn position by the turbulence.
 * The actual amount of displacement will be a factor of the underlying turbulence multiplied by a random value between `turbulence_initial_displacement_min` and `turbulence_initial_displacement_max`.
 */
  turbulenceInitialDisplacementMin: float;
/**
 * This value controls the overall scale/frequency of the turbulence noise pattern.
 * A small scale will result in smaller features with more detail while a high scale will result in smoother noise with larger features.
 */
  turbulenceNoiseScale: float;
/**
 * A scrolling velocity for the turbulence field. This sets a directional trend for the pattern to move in over time.
 * The default value of `Vector3(0, 0, 0)` turns off the scrolling.
 */
  turbulenceNoiseSpeed: Vector3;
/**
 * The in-place rate of change of the turbulence field. This defines how quickly the noise pattern varies over time.
 * A value of 0.0 will result in a fixed pattern.
 */
  turbulenceNoiseSpeedRandom: float;
/**
 * The turbulence noise strength. Increasing this will result in a stronger, more contrasting, flow pattern.
 */
  turbulenceNoiseStrength: float;
/**
 * A `CurveTexture` that defines the maximum velocity of a particle during its lifetime.
 */
  velocityLimitCurve: Texture2D;
/**
 * A pivot point used to calculate radial and orbital velocity of particles.
 */
  velocityPivot: Vector3;
/**
 * Returns the minimum and maximum values of the given `param` as a vector.
 * The `x` component of the returned vector corresponds to minimum and the `y` component corresponds to maximum.
 * @param param int
 * @returns Vector2
 */
  getParam(param: int): Vector2;
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
 * Returns the `Texture2D` used by the specified parameter.
 * @param param int
 * @returns Texture2D
 */
  getParamTexture(param: int): Texture2D;
/**
 * Returns `true` if the specified particle flag is enabled. See `ParticleFlags` for options.
 * @param particleFlag int
 * @returns boolean
 */
  getParticleFlag(particleFlag: int): boolean;
/**
 * Sets the minimum and maximum values of the given `param`.
 * The `x` component of the argument vector corresponds to minimum and the `y` component corresponds to maximum.
 * @param param int
 * @param value Vector2
 */
  setParam(param: int, value: Vector2): void;
/**
 * Sets the maximum value range for the given parameter.
 * @param param int
 * @param value float
 */
  setParamMax(param: int, value: float): void;
/**
 * Sets the minimum value range for the given parameter.
 * @param param int
 * @param value float
 */
  setParamMin(param: int, value: float): void;
/**
 * Sets the `Texture2D` for the specified `Parameter`.
 * @param param int
 * @param texture Texture2D
 */
  setParamTexture(param: int, texture: Texture2D): void;
/**
 * If `true`, enables the specified particle flag. See `ParticleFlags` for options.
 * @param particleFlag int
 * @param enable boolean
 */
  setParticleFlag(particleFlag: int, enable: boolean): void;
/**
 * Emitted when this material's emission shape is changed in any way. This includes changes to `emission_shape`, `emission_shape_scale`, or `emission_sphere_radius`, and any other property that affects the emission shape's offset, size, scale, or orientation.
 * 
 * **Note:** This signal is only emitted inside the editor for performance reasons.
 */
  emissionShapeChanged: Signal<[]>;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set initial velocity properties.
 */
  static readonly PARAM_INITIAL_LINEAR_VELOCITY: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set angular velocity properties.
 */
  static readonly PARAM_ANGULAR_VELOCITY: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set orbital velocity properties.
 */
  static readonly PARAM_ORBIT_VELOCITY: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set linear acceleration properties.
 */
  static readonly PARAM_LINEAR_ACCEL: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set radial acceleration properties.
 */
  static readonly PARAM_RADIAL_ACCEL: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set tangential acceleration properties.
 */
  static readonly PARAM_TANGENTIAL_ACCEL: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set damping properties.
 */
  static readonly PARAM_DAMPING: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set angle properties.
 */
  static readonly PARAM_ANGLE: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set scale properties.
 */
  static readonly PARAM_SCALE: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set hue variation properties.
 */
  static readonly PARAM_HUE_VARIATION: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set animation speed properties.
 */
  static readonly PARAM_ANIM_SPEED: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set animation offset properties.
 */
  static readonly PARAM_ANIM_OFFSET: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set radial velocity properties.
 */
  static readonly PARAM_RADIAL_VELOCITY: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set directional velocity properties.
 */
  static readonly PARAM_DIRECTIONAL_VELOCITY: int;
/**
 * Use with `set_param_min`, `set_param_max`, and `set_param_texture` to set scale over velocity properties.
 */
  static readonly PARAM_SCALE_OVER_VELOCITY: int;
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
  static readonly PARTICLE_FLAG_DAMPING_AS_FRICTION: int;
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
 * Particles will be emitted at a position determined by sampling a random point on the `emission_point_texture`. Particle color will be modulated by `emission_color_texture`.
 */
  static readonly EMISSION_SHAPE_POINTS: int;
/**
 * Particles will be emitted at a position determined by sampling a random point on the `emission_point_texture`. Particle velocity and rotation will be set based on `emission_normal_texture`. Particle color will be modulated by `emission_color_texture`.
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
/**
 * Use with `set_param_min` and `set_param_max` to set the turbulence minimum und maximum influence on each particles velocity.
 */
  static readonly PARAM_TURB_VEL_INFLUENCE: int;
/**
 * Use with `set_param_min` and `set_param_max` to set the turbulence minimum and maximum displacement of the particles spawn position.
 */
  static readonly PARAM_TURB_INIT_DISPLACEMENT: int;
/**
 * Use with `set_param_texture` to set the turbulence influence over the particles life time.
 */
  static readonly PARAM_TURB_INFLUENCE_OVER_LIFE: int;
  static readonly SUB_EMITTER_DISABLED: int;
  static readonly SUB_EMITTER_CONSTANT: int;
  static readonly SUB_EMITTER_AT_END: int;
  static readonly SUB_EMITTER_AT_COLLISION: int;
  static readonly SUB_EMITTER_AT_START: int;
/**
 * Represents the size of the `SubEmitterMode` enum.
 */
  static readonly SUB_EMITTER_MAX: int;
/**
 * No collision for particles. Particles will go through `GPUParticlesCollision3D` nodes.
 */
  static readonly COLLISION_DISABLED: int;
/**
 * `RigidBody3D`-style collision for particles using `GPUParticlesCollision3D` nodes.
 */
  static readonly COLLISION_RIGID: int;
/**
 * Hide particles instantly when colliding with a `GPUParticlesCollision3D` node. This can be combined with a subemitter that uses the `COLLISION_RIGID` collision mode to "replace" the parent particle with the subemitter on impact.
 */
  static readonly COLLISION_HIDE_ON_CONTACT: int;
/**
 * Represents the size of the `CollisionMode` enum.
 */
  static readonly COLLISION_MAX: int;
}
