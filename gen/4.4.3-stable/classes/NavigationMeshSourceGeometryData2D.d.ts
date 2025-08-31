import type { GodotArray, GodotDictionary, PackedVector2Array, Rect2, Resource, float, int } from "../index.d.ts";
/**
 * Container for parsed source geometry data used in navigation mesh baking.
 * 
 * Container for parsed source geometry data used in navigation mesh baking.
 */
export class NavigationMeshSourceGeometryData2D extends Resource {
/**
 * Adds the outline points of a shape as obstructed area.
 * @param shapeOutline PackedVector2Array
 */
  addObstructionOutline(shapeOutline: PackedVector2Array): void;
/**
 * Adds a projected obstruction shape to the source geometry. If `carve` is `true` the carved shape will not be affected by additional offsets (e.g. agent radius) of the navigation mesh baking process.
 * @param vertices PackedVector2Array
 * @param carve boolean
 */
  addProjectedObstruction(vertices: PackedVector2Array, carve: boolean): void;
/**
 * Adds the outline points of a shape as traversable area.
 * @param shapeOutline PackedVector2Array
 */
  addTraversableOutline(shapeOutline: PackedVector2Array): void;
/**
 * Appends another array of `obstruction_outlines` at the end of the existing obstruction outlines array.
 * @param obstructionOutlines PackedVector2Array[]
 */
  appendObstructionOutlines(obstructionOutlines: PackedVector2Array[]): void;
/**
 * Appends another array of `traversable_outlines` at the end of the existing traversable outlines array.
 * @param traversableOutlines PackedVector2Array[]
 */
  appendTraversableOutlines(traversableOutlines: PackedVector2Array[]): void;
/**
 * Clears the internal data.
 */
  clear(): void;
/**
 * Clears all projected obstructions.
 */
  clearProjectedObstructions(): void;
/**
 * Returns an axis-aligned bounding box that covers all the stored geometry data. The bounds are calculated when calling this function with the result cached until further geometry changes are made.
 * @returns Rect2
 */
  getBounds(): Rect2;
/**
 * Returns all the obstructed area outlines arrays.
 * @returns PackedVector2Array[]
 */
  getObstructionOutlines(): PackedVector2Array[];
/**
 * Returns the projected obstructions as an `Array` of dictionaries. Each `Dictionary` contains the following entries:
 * - `vertices` - A `PackedFloat32Array` that defines the outline points of the projected shape.
 * - `carve` - A [bool] that defines how the projected shape affects the navigation mesh baking. If `true` the projected shape will not be affected by addition offsets, e.g. agent radius.
 * @returns GodotArray<any>
 */
  getProjectedObstructions(): GodotArray<any>;
/**
 * Returns all the traversable area outlines arrays.
 * @returns PackedVector2Array[]
 */
  getTraversableOutlines(): PackedVector2Array[];
/**
 * Returns `true` when parsed source geometry data exists.
 * @returns boolean
 */
  hasData(): boolean;
/**
 * Adds the geometry data of another `NavigationMeshSourceGeometryData2D` to the navigation mesh baking data.
 * @param otherGeometry NavigationMeshSourceGeometryData2D
 */
  merge(otherGeometry: NavigationMeshSourceGeometryData2D): void;
/**
 * Sets all the obstructed area outlines arrays.
 * @param obstructionOutlines PackedVector2Array[]
 */
  setObstructionOutlines(obstructionOutlines: PackedVector2Array[]): void;
/**
 * Sets the projected obstructions with an Array of Dictionaries with the following key value pairs:
 * 
 * 				```gdscript
 * 
 * 				"vertices" : PackedFloat32Array
 * 				"carve" : bool
 * 				
 * 
 * ```
 * 
 * @param projectedObstructions GodotArray<any>
 */
  setProjectedObstructions(projectedObstructions: GodotArray<any>): void;
/**
 * Sets all the traversable area outlines arrays.
 * @param traversableOutlines PackedVector2Array[]
 */
  setTraversableOutlines(traversableOutlines: PackedVector2Array[]): void;
}
