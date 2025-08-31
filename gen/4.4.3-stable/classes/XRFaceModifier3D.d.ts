import type { GodotArray, GodotDictionary, Node3D, NodePath, StringName, float, int } from "../index.d.ts";
/**
 * A node for driving standard face meshes from `XRFaceTracker` weights.
 * 
 * This node applies weights from a `XRFaceTracker` to a mesh with supporting face blend shapes.
 * The Unified Expressions (https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes) blend shapes are supported, as well as ARKit and SRanipal blend shapes.
 * The node attempts to identify blend shapes based on name matching. Blend shapes should match the names listed in the Unified Expressions Compatibility (https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/compatibility/overview) chart.
 */
export class XRFaceModifier3D extends Node3D {
/**
 * The `XRFaceTracker` path.
 */
  faceTracker: StringName;
/**
 * The `NodePath` of the face `MeshInstance3D`.
 */
  target: NodePath;
}
