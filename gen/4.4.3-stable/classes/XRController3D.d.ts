import type { GodotArray, GodotDictionary, Signal, StringName, Variant, Vector2, XRNode3D, float, int } from "../index.d.ts";
/**
 * A 3D node representing a spatially-tracked controller.
 * 
 * This is a helper 3D node that is linked to the tracking of controllers. It also offers several handy passthroughs to the state of buttons and such on the controllers.
 * Controllers are linked by their ID. You can create controller nodes before the controllers are available. If your game always uses two controllers (one for each hand), you can predefine the controllers with ID 1 and 2; they will become active as soon as the controllers are identified. If you expect additional controllers to be used, you should react to the signals and add XRController3D nodes to your scene.
 * The position of the controller node is automatically updated by the `XRServer`. This makes this node ideal to add child nodes to visualize the controller.
 * As many XR runtimes now use a configurable action map all inputs are named.
 */
export class XRController3D extends XRNode3D {
/**
 * Returns a numeric value for the input with the given `name`. This is used for triggers and grip sensors.
 * @param name StringName
 * @returns float
 */
  getFloat(name: StringName): float;
/**
 * Returns a `Variant` for the input with the given `name`. This works for any input type, the variant will be typed according to the actions configuration.
 * @param name StringName
 * @returns Variant
 */
  getInput(name: StringName): Variant;
/**
 * Returns the hand holding this controller, if known. See `XRPositionalTracker.TrackerHand`.
 * @returns int
 */
  getTrackerHand(): int;
/**
 * Returns a `Vector2` for the input with the given `name`. This is used for thumbsticks and thumbpads found on many controllers.
 * @param name StringName
 * @returns Vector2
 */
  getVector2(name: StringName): Vector2;
/**
 * Returns `true` if the button with the given `name` is pressed.
 * @param name StringName
 * @returns boolean
 */
  isButtonPressed(name: StringName): boolean;
/**
 * Emitted when a button on this controller is pressed.
 */
  buttonPressed: Signal<[name: string]>;
/**
 * Emitted when a button on this controller is released.
 */
  buttonReleased: Signal<[name: string]>;
/**
 * Emitted when a trigger or similar input on this controller changes value.
 */
  inputFloatChanged: Signal<[name: string, value: float]>;
/**
 * Emitted when a thumbstick or thumbpad on this controller is moved.
 */
  inputVector2Changed: Signal<[name: string, value: Vector2]>;
/**
 * Emitted when the interaction profile on this controller is changed.
 */
  profileChanged: Signal<[role: string]>;
}
