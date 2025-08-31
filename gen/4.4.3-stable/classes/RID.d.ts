import type { GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A handle for a `Resource`'s unique identifier.
 * 
 * The RID `Variant` type is used to access a low-level resource by its unique ID. RIDs are opaque, which means they do not grant access to the resource by themselves. They are used by the low-level server classes, such as `DisplayServer`, `RenderingServer`, `TextServer`, etc.
 * A low-level resource may correspond to a high-level `Resource`, such as `Texture` or `Mesh`.
 * 
 * **Note:** RIDs are only useful during the current session. It won't correspond to a similar resource if sent over a network, or loaded from a file at a later time.
 */
export class RID {
/**
 * Returns the ID of the referenced low-level resource.
 * @returns int
 */
  getId(): int;
/**
 * Returns `true` if the `RID` is not `0`.
 * @returns boolean
 */
  isValid(): boolean;
}
