import type { Color, GodotArray, GodotDictionary, Node2D, NodePath, PackedColorArray, PackedFloat32Array, PackedVector2Array, Texture2D, Vector2, float, int } from "../index.d.ts";
/**
 * A 2D polygon.
 * 
 * A Polygon2D is defined by a set of points. Each point is connected to the next, with the final point being connected to the first, resulting in a closed polygon. Polygon2Ds can be filled with color (solid or gradient) or filled with a given texture.
 */
export class Polygon2D extends Node2D {
/**
 * If `true`, polygon edges will be anti-aliased.
 */
  antialiased: boolean;
/**
 * The polygon's fill color. If `texture` is set, it will be multiplied by this color. It will also be the default color for vertices not set in `vertex_colors`.
 */
  color: Color;
/**
 * Number of internal vertices, used for UV mapping.
 */
  internalVertexCount: int;
/**
 * Added padding applied to the bounding box when `invert_enabled` is set to `true`. Setting this value too small may result in a "Bad Polygon" error.
 */
  invertBorder: float;
/**
 * If `true`, the polygon will be inverted, containing the area outside the defined points and extending to the `invert_border`.
 */
  invertEnabled: boolean;
/**
 * The offset applied to each vertex.
 */
  offset: Vector2;
/**
 * The polygon's list of vertices. The final point will be connected to the first.
 */
  polygon: PackedVector2Array;
/**
 * The list of polygons, in case more than one is being represented. Every individual polygon is stored as a `PackedInt32Array` where each [int] is an index to a point in `polygon`. If empty, this property will be ignored, and the resulting single polygon will be composed of all points in `polygon`, using the order they are stored in.
 */
  polygons: GodotArray<any>;
/**
 * Path to a `Skeleton2D` node used for skeleton-based deformations of this polygon. If empty or invalid, skeletal deformations will not be used.
 */
  skeleton: NodePath;
/**
 * The polygon's fill texture. Use `uv` to set texture coordinates.
 */
  texture: Texture2D;
/**
 * Amount to offset the polygon's `texture`. If set to `Vector2(0, 0)`, the texture's origin (its top-left corner) will be placed at the polygon's position.
 */
  textureOffset: Vector2;
/**
 * The texture's rotation in radians.
 */
  textureRotation: float;
/**
 * Amount to multiply the `uv` coordinates when using `texture`. Larger values make the texture smaller, and vice versa.
 */
  textureScale: Vector2;
/**
 * Texture coordinates for each vertex of the polygon. There should be one UV value per polygon vertex. If there are fewer, undefined vertices will use `Vector2(0, 0)`.
 */
  uv: PackedVector2Array;
/**
 * Color for each vertex. Colors are interpolated between vertices, resulting in smooth gradients. There should be one per polygon vertex. If there are fewer, undefined vertices will use `color`.
 */
  vertexColors: PackedColorArray;
/**
 * Adds a bone with the specified `path` and `weights`.
 * @param path NodePath
 * @param weights PackedFloat32Array
 */
  addBone(path: NodePath, weights: PackedFloat32Array): void;
/**
 * Removes all bones from this `Polygon2D`.
 */
  clearBones(): void;
/**
 * Removes the specified bone from this `Polygon2D`.
 * @param index int
 */
  eraseBone(index: int): void;
/**
 * Returns the number of bones in this `Polygon2D`.
 * @returns int
 */
  getBoneCount(): int;
/**
 * Returns the path to the node associated with the specified bone.
 * @param index int
 * @returns NodePath
 */
  getBonePath(index: int): NodePath;
/**
 * Returns the weight values of the specified bone.
 * @param index int
 * @returns PackedFloat32Array
 */
  getBoneWeights(index: int): PackedFloat32Array;
/**
 * Sets the path to the node associated with the specified bone.
 * @param index int
 * @param path NodePath
 */
  setBonePath(index: int, path: NodePath): void;
/**
 * Sets the weight values for the specified bone.
 * @param index int
 * @param weights PackedFloat32Array
 */
  setBoneWeights(index: int, weights: PackedFloat32Array): void;
}
