import type { GodotArray, GodotDictionary, PackedVector2Array, Resource, float, int } from "../index.d.ts";
/**
 * Defines a 2D polygon for LightOccluder2D.
 * 
 * Editor facility that helps you draw a 2D polygon used as resource for `LightOccluder2D`.
 */
export class OccluderPolygon2D extends Resource {
/**
 * If `true`, closes the polygon. A closed OccluderPolygon2D occludes the light coming from any direction. An opened OccluderPolygon2D occludes the light only at its outline's direction.
 */
  closed: boolean;
/**
 * The culling mode to use.
 */
  cullMode: int;
/**
 * A `Vector2` array with the index for polygon's vertices positions.
 */
  polygon: PackedVector2Array;
/**
 * Culling is disabled. See `cull_mode`.
 */
  static readonly CULL_DISABLED: int;
/**
 * Culling is performed in the clockwise direction. See `cull_mode`.
 */
  static readonly CULL_CLOCKWISE: int;
/**
 * Culling is performed in the counterclockwise direction. See `cull_mode`.
 */
  static readonly CULL_COUNTER_CLOCKWISE: int;
}
