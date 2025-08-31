import type { Container, GodotArray, GodotDictionary, Signal, Vector2, float, int } from "../index.d.ts";
/**
 * A container that represents a basic element that can be placed inside a `GraphEdit` control.
 * 
 * `GraphElement` allows to create custom elements for a `GraphEdit` graph. By default such elements can be selected, resized, and repositioned, but they cannot be connected. For a graph element that allows for connections see `GraphNode`.
 */
export class GraphElement extends Container {
/**
 * If `true`, the user can drag the GraphElement.
 */
  draggable: boolean;
/**
 * The offset of the GraphElement, relative to the scroll offset of the `GraphEdit`.
 */
  positionOffset: Vector2;
/**
 * If `true`, the user can resize the GraphElement.
 * 
 * **Note:** Dragging the handle will only emit the `resize_request` and `resize_end` signals, the GraphElement needs to be resized manually.
 */
  resizable: boolean;
/**
 * If `true`, the user can select the GraphElement.
 */
  selectable: boolean;
/**
 * If `true`, the GraphElement is selected.
 */
  selected: boolean;
/**
 * Emitted when removing the GraphElement is requested.
 */
  deleteRequest: Signal<[]>;
/**
 * Emitted when the GraphElement is dragged.
 */
  dragged: Signal<[from_: Vector2, to: Vector2]>;
/**
 * Emitted when the GraphElement is deselected.
 */
  nodeDeselected: Signal<[]>;
/**
 * Emitted when the GraphElement is selected.
 */
  nodeSelected: Signal<[]>;
/**
 * Emitted when the GraphElement is moved.
 */
  positionOffsetChanged: Signal<[]>;
/**
 * Emitted when displaying the GraphElement over other ones is requested. Happens on focusing (clicking into) the GraphElement.
 */
  raiseRequest: Signal<[]>;
/**
 * Emitted when releasing the mouse button after dragging the resizer handle (see `resizable`).
 */
  resizeEnd: Signal<[newSize: Vector2]>;
/**
 * Emitted when resizing the GraphElement is requested. Happens on dragging the resizer handle (see `resizable`).
 */
  resizeRequest: Signal<[newSize: Vector2]>;
}
