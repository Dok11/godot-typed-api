import type { GodotArray, GodotDictionary, Node2D, OccluderPolygon2D, float, int } from "../index.d.ts";
/**
 * Occludes light cast by a Light2D, casting shadows.
 * 
 * Occludes light cast by a Light2D, casting shadows. The LightOccluder2D must be provided with an `OccluderPolygon2D` in order for the shadow to be computed.
 */
export class LightOccluder2D extends Node2D {
/**
 * The `OccluderPolygon2D` used to compute the shadow.
 */
  occluder: OccluderPolygon2D;
/**
 * The LightOccluder2D's occluder light mask. The LightOccluder2D will cast shadows only from Light2D(s) that have the same light mask(s).
 */
  occluderLightMask: int;
/**
 * If enabled, the occluder will be part of a real-time generated signed distance field that can be used in custom shaders.
 */
  sdfCollision: boolean;
}
