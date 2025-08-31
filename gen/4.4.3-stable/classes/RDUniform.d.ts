import type { GodotArray, GodotDictionary, RID, RefCounted, float, int } from "../index.d.ts";
/**
 * Shader uniform (used by `RenderingDevice`).
 * 
 * This object is used by `RenderingDevice`.
 */
export class RDUniform extends RefCounted {
/**
 * The uniform's binding.
 */
  binding: int;
/**
 * The uniform's data type.
 */
  uniformType: int;
/**
 * Binds the given id to the uniform. The data associated with the id is then used when the uniform is passed to a shader.
 * @param id RID
 */
  addId(id: RID): void;
/**
 * Unbinds all ids currently bound to the uniform.
 */
  clearIds(): void;
/**
 * Returns an array of all ids currently bound to the uniform.
 * @returns RID[]
 */
  getIds(): RID[];
}
