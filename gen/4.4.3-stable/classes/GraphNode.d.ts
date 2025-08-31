import type { Color, GodotArray, GodotDictionary, GraphElement, HBoxContainer, Signal, Texture2D, Vector2, Vector2i, float, int } from "../index.d.ts";
/**
 * A container with connection ports, representing a node in a `GraphEdit`.
 * 
 * `GraphNode` allows to create nodes for a `GraphEdit` graph with customizable content based on its child controls. `GraphNode` is derived from `Container` and it is responsible for placing its children on screen. This works similar to `VBoxContainer`. Children, in turn, provide `GraphNode` with so-called slots, each of which can have a connection port on either side.
 * Each `GraphNode` slot is defined by its index and can provide the node with up to two ports: one on the left, and one on the right. By convention the left port is also referred to as the **input port** and the right port is referred to as the **output port**. Each port can be enabled and configured individually, using different type and color. The type is an arbitrary value that you can define using your own considerations. The parent `GraphEdit` will receive this information on each connect and disconnect request.
 * Slots can be configured in the Inspector dock once you add at least one child `Control`. The properties are grouped by each slot's index in the "Slot" section.
 * 
 * **Note:** While GraphNode is set up using slots and slot indices, connections are made between the ports which are enabled. Because of that `GraphEdit` uses the port's index and not the slot's index. You can use `get_input_port_slot` and `get_output_port_slot` to get the slot index from the port index.
 */
export class GraphNode extends GraphElement {
/**
 * If `true`, you can connect ports with different types, even if the connection was not explicitly allowed in the parent `GraphEdit`.
 */
  ignoreInvalidConnectionType: boolean;
  mouseFilter: int;
/**
 * The text displayed in the GraphNode's title bar.
 */
  title: string;
/**
 * Disables all slots of the GraphNode. This will remove all input/output ports from the GraphNode.
 */
  clearAllSlots(): void;
/**
 * Disables the slot with the given `slot_index`. This will remove the corresponding input and output port from the GraphNode.
 * @param slotIndex int
 */
  clearSlot(slotIndex: int): void;
/**
 * @param slotIndex int
 * @param position Vector2i
 * @param left boolean
 * @param color Color
 */
  private drawPort(slotIndex: int, position: Vector2i, left: boolean, color: Color): void;
/**
 * Returns the `Color` of the input port with the given `port_idx`.
 * @param portIdx int
 * @returns Color
 */
  getInputPortColor(portIdx: int): Color;
/**
 * Returns the number of slots with an enabled input port.
 * @returns int
 */
  getInputPortCount(): int;
/**
 * Returns the position of the input port with the given `port_idx`.
 * @param portIdx int
 * @returns Vector2
 */
  getInputPortPosition(portIdx: int): Vector2;
/**
 * Returns the corresponding slot index of the input port with the given `port_idx`.
 * @param portIdx int
 * @returns int
 */
  getInputPortSlot(portIdx: int): int;
/**
 * Returns the type of the input port with the given `port_idx`.
 * @param portIdx int
 * @returns int
 */
  getInputPortType(portIdx: int): int;
/**
 * Returns the `Color` of the output port with the given `port_idx`.
 * @param portIdx int
 * @returns Color
 */
  getOutputPortColor(portIdx: int): Color;
/**
 * Returns the number of slots with an enabled output port.
 * @returns int
 */
  getOutputPortCount(): int;
/**
 * Returns the position of the output port with the given `port_idx`.
 * @param portIdx int
 * @returns Vector2
 */
  getOutputPortPosition(portIdx: int): Vector2;
/**
 * Returns the corresponding slot index of the output port with the given `port_idx`.
 * @param portIdx int
 * @returns int
 */
  getOutputPortSlot(portIdx: int): int;
/**
 * Returns the type of the output port with the given `port_idx`.
 * @param portIdx int
 * @returns int
 */
  getOutputPortType(portIdx: int): int;
/**
 * Returns the left (input) `Color` of the slot with the given `slot_index`.
 * @param slotIndex int
 * @returns Color
 */
  getSlotColorLeft(slotIndex: int): Color;
/**
 * Returns the right (output) `Color` of the slot with the given `slot_index`.
 * @param slotIndex int
 * @returns Color
 */
  getSlotColorRight(slotIndex: int): Color;
/**
 * Returns the left (input) custom `Texture2D` of the slot with the given `slot_index`.
 * @param slotIndex int
 * @returns Texture2D
 */
  getSlotCustomIconLeft(slotIndex: int): Texture2D;
/**
 * Returns the right (output) custom `Texture2D` of the slot with the given `slot_index`.
 * @param slotIndex int
 * @returns Texture2D
 */
  getSlotCustomIconRight(slotIndex: int): Texture2D;
/**
 * Returns the left (input) type of the slot with the given `slot_index`.
 * @param slotIndex int
 * @returns int
 */
  getSlotTypeLeft(slotIndex: int): int;
/**
 * Returns the right (output) type of the slot with the given `slot_index`.
 * @param slotIndex int
 * @returns int
 */
  getSlotTypeRight(slotIndex: int): int;
/**
 * Returns the `HBoxContainer` used for the title bar, only containing a `Label` for displaying the title by default. This can be used to add custom controls to the title bar such as option or close buttons.
 * @returns HBoxContainer
 */
  getTitlebarHbox(): HBoxContainer;
/**
 * Returns `true` if the background `StyleBox` of the slot with the given `slot_index` is drawn.
 * @param slotIndex int
 * @returns boolean
 */
  isSlotDrawStylebox(slotIndex: int): boolean;
/**
 * Returns `true` if left (input) side of the slot with the given `slot_index` is enabled.
 * @param slotIndex int
 * @returns boolean
 */
  isSlotEnabledLeft(slotIndex: int): boolean;
/**
 * Returns `true` if right (output) side of the slot with the given `slot_index` is enabled.
 * @param slotIndex int
 * @returns boolean
 */
  isSlotEnabledRight(slotIndex: int): boolean;
/**
 * Sets properties of the slot with the given `slot_index`.
 * If `enable_left_port`/`enable_right_port` is `true`, a port will appear and the slot will be able to be connected from this side.
 * With `type_left`/`type_right` an arbitrary type can be assigned to each port. Two ports can be connected if they share the same type, or if the connection between their types is allowed in the parent `GraphEdit` (see `GraphEdit.add_valid_connection_type`). Keep in mind that the `GraphEdit` has the final say in accepting the connection. Type compatibility simply allows the `GraphEdit.connection_request` signal to be emitted.
 * Ports can be further customized using `color_left`/`color_right` and `custom_icon_left`/`custom_icon_right`. The color parameter adds a tint to the icon. The custom icon can be used to override the default port dot.
 * Additionally, `draw_stylebox` can be used to enable or disable drawing of the background stylebox for each slot. See [theme_item slot].
 * Individual properties can also be set using one of the `set_slot_*` methods.
 * 
 * **Note:** This method only sets properties of the slot. To create the slot itself, add a `Control`-derived child to the GraphNode.
 * @param slotIndex int
 * @param enableLeftPort boolean
 * @param typeLeft int
 * @param colorLeft Color
 * @param enableRightPort boolean
 * @param typeRight int
 * @param colorRight Color
 * @param customIconLeft Texture2D (optional, default: null)
 * @param customIconRight Texture2D (optional, default: null)
 * @param drawStylebox boolean (optional, default: true)
 */
  setSlot(slotIndex: int, enableLeftPort: boolean, typeLeft: int, colorLeft: Color, enableRightPort: boolean, typeRight: int, colorRight: Color, customIconLeft?: Texture2D, customIconRight?: Texture2D, drawStylebox?: boolean): void;
/**
 * Sets the `Color` of the left (input) side of the slot with the given `slot_index` to `color`.
 * @param slotIndex int
 * @param color Color
 */
  setSlotColorLeft(slotIndex: int, color: Color): void;
/**
 * Sets the `Color` of the right (output) side of the slot with the given `slot_index` to `color`.
 * @param slotIndex int
 * @param color Color
 */
  setSlotColorRight(slotIndex: int, color: Color): void;
/**
 * Sets the custom `Texture2D` of the left (input) side of the slot with the given `slot_index` to `custom_icon`.
 * @param slotIndex int
 * @param customIcon Texture2D
 */
  setSlotCustomIconLeft(slotIndex: int, customIcon: Texture2D): void;
/**
 * Sets the custom `Texture2D` of the right (output) side of the slot with the given `slot_index` to `custom_icon`.
 * @param slotIndex int
 * @param customIcon Texture2D
 */
  setSlotCustomIconRight(slotIndex: int, customIcon: Texture2D): void;
/**
 * Toggles the background `StyleBox` of the slot with the given `slot_index`.
 * @param slotIndex int
 * @param enable boolean
 */
  setSlotDrawStylebox(slotIndex: int, enable: boolean): void;
/**
 * Toggles the left (input) side of the slot with the given `slot_index`. If `enable` is `true`, a port will appear on the left side and the slot will be able to be connected from this side.
 * @param slotIndex int
 * @param enable boolean
 */
  setSlotEnabledLeft(slotIndex: int, enable: boolean): void;
/**
 * Toggles the right (output) side of the slot with the given `slot_index`. If `enable` is `true`, a port will appear on the right side and the slot will be able to be connected from this side.
 * @param slotIndex int
 * @param enable boolean
 */
  setSlotEnabledRight(slotIndex: int, enable: boolean): void;
/**
 * Sets the left (input) type of the slot with the given `slot_index` to `type`. If the value is negative, all connections will be disallowed to be created via user inputs.
 * @param slotIndex int
 * @param type_ int
 */
  setSlotTypeLeft(slotIndex: int, type_: int): void;
/**
 * Sets the right (output) type of the slot with the given `slot_index` to `type`. If the value is negative, all connections will be disallowed to be created via user inputs.
 * @param slotIndex int
 * @param type_ int
 */
  setSlotTypeRight(slotIndex: int, type_: int): void;
/**
 * Emitted when any GraphNode's slot is updated.
 */
  slotUpdated: Signal<[slotIndex: int]>;
}
