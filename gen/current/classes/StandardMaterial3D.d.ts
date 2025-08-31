import type { BaseMaterial3D, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A PBR (Physically Based Rendering) material to be used on 3D objects.
 * 
 * `StandardMaterial3D`'s properties are inherited from `BaseMaterial3D`. `StandardMaterial3D` uses separate textures for ambient occlusion, roughness and metallic maps. To use a single ORM map for all 3 textures, use an `ORMMaterial3D` instead.
 */
export class StandardMaterial3D extends BaseMaterial3D {
}
