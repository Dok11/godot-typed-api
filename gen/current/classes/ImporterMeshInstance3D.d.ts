import type { GodotArray, GodotDictionary, ImporterMesh, Node3D, NodePath, Skin, float, int } from "../index.d.ts";
export class ImporterMeshInstance3D extends Node3D {
  castShadow: int;
  layerMask: int;
  mesh: ImporterMesh;
  skeletonPath: NodePath;
  skin: Skin;
  visibilityRangeBegin: float;
  visibilityRangeBeginMargin: float;
  visibilityRangeEnd: float;
  visibilityRangeEndMargin: float;
  visibilityRangeFadeMode: int;
}
