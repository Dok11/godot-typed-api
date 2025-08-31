import type { GodotArray, GodotDictionary, InputEventMouse, Vector2, float, int } from "../index.d.ts";
/**
 * Represents a mouse or a pen movement.
 * 
 * Stores information about a mouse or a pen motion. This includes relative position, absolute position, and velocity. See `Node._input`.
 * 
 * **Note:** By default, this event is only emitted once per frame rendered at most. If you need more precise input reporting, set `Input.use_accumulated_input` to `false` to make events emitted as often as possible. If you use InputEventMouseMotion to draw lines, consider using `Geometry2D.bresenham_line` as well to avoid visible gaps in lines if the user is moving the mouse quickly.
 * 
 * **Note:** This event may be emitted even when the mouse hasn't moved, either by the operating system or by Godot itself. If you really need to know if the mouse has moved (e.g. to suppress displaying a tooltip), you should check that `relative.is_zero_approx()` is `false`.
 */
export class InputEventMouseMotion extends InputEventMouse {
/**
 * Returns `true` when using the eraser end of a stylus pen.
 * 
 * **Note:** This property is implemented on Linux, macOS and Windows.
 */
  penInverted: boolean;
/**
 * Represents the pressure the user puts on the pen. Ranges from `0.0` to `1.0`.
 */
  pressure: float;
/**
 * The mouse position relative to the previous position (position at the last frame).
 * 
 * **Note:** Since `InputEventMouseMotion` may only be emitted when the mouse moves, it is not possible to reliably detect when the mouse has stopped moving by checking this property. A separate, short timer may be necessary.
 * 
 * **Note:** `relative` is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means mouse sensitivity will appear different depending on resolution when using `relative` in a script that handles mouse aiming with the `Input.MOUSE_MODE_CAPTURED` mouse mode. To avoid this, use `screen_relative` instead.
 */
  relative: Vector2;
/**
 * The unscaled mouse position relative to the previous position in the coordinate system of the screen (position at the last frame).
 * 
 * **Note:** Since `InputEventMouseMotion` may only be emitted when the mouse moves, it is not possible to reliably detect when the mouse has stopped moving by checking this property. A separate, short timer may be necessary.
 * 
 * **Note:** This coordinate is *not* scaled according to the content scale factor or calls to `InputEvent.xformed_by`. This should be preferred over `relative` for mouse aiming when using the `Input.MOUSE_MODE_CAPTURED` mouse mode, regardless of the project's stretch mode.
 */
  screenRelative: Vector2;
/**
 * The unscaled mouse velocity in pixels per second in screen coordinates. This velocity is *not* scaled according to the content scale factor or calls to `InputEvent.xformed_by`. This should be preferred over `velocity` for mouse aiming when using the `Input.MOUSE_MODE_CAPTURED` mouse mode, regardless of the project's stretch mode.
 */
  screenVelocity: Vector2;
/**
 * Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from `-1.0` to `1.0` for both axes.
 */
  tilt: Vector2;
/**
 * The mouse velocity in pixels per second.
 * 
 * **Note:** `velocity` is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means mouse sensitivity will appear different depending on resolution when using `velocity` in a script that handles mouse aiming with the `Input.MOUSE_MODE_CAPTURED` mouse mode. To avoid this, use `screen_velocity` instead.
 */
  velocity: Vector2;
}
