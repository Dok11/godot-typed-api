import type { GodotArray, GodotDictionary, XRPositionalTracker, float, int } from "../index.d.ts";
/**
 * A tracked controller.
 * 
 * An instance of this object represents a controller that is tracked.
 * As controllers are turned on and the `XRInterface` detects them, instances of this object are automatically added to this list of active tracking objects accessible through the `XRServer`.
 * The `XRController3D` consumes objects of this type and should be used in your project.
 */
export class XRControllerTracker extends XRPositionalTracker {
  type_: int;
}
