import type { GodotArray, GodotDictionary, Mesh, VisualShaderNodeParticleEmitter, float, int } from "../index.d.ts";
/**
 * A visual shader node that makes particles emitted in a shape defined by a `Mesh`.
 * 
 * `VisualShaderNodeParticleEmitter` that makes the particles emitted in a shape of the assigned `mesh`. It will emit from the mesh's surfaces, either all or only the specified one.
 */
export class VisualShaderNodeParticleMeshEmitter extends VisualShaderNodeParticleEmitter {
/**
 * The `Mesh` that defines emission shape.
 */
  mesh: Mesh;
/**
 * Index of the surface that emits particles. `use_all_surfaces` must be `false` for this to take effect.
 */
  surfaceIndex: int;
/**
 * If `true`, the particles will emit from all surfaces of the mesh.
 */
  useAllSurfaces: boolean;
}
