import type { Control, Dictionary, GodotArray, GodotDictionary, GraphFrame, HBoxContainer, Node, Object, PackedVector2Array, Rect2, Signal, StringName, Vector2, float, int } from "../index.d.ts";
/**
 * An editor for graph-like structures, using `GraphNode`s.
 * 
 * `GraphEdit` provides tools for creation, manipulation, and display of various graphs. Its main purpose in the engine is to power the visual programming systems, such as visual shaders, but it is also available for use in user projects.
 * `GraphEdit` by itself is only an empty container, representing an infinite grid where `GraphNode`s can be placed. Each `GraphNode` represents a node in the graph, a single unit of data in the connected scheme. `GraphEdit`, in turn, helps to control various interactions with nodes and between nodes. When the user attempts to connect, disconnect, or delete a `GraphNode`, a signal is emitted in the `GraphEdit`, but no action is taken by default. It is the responsibility of the programmer utilizing this control to implement the necessary logic to determine how each request should be handled.
 * 
 * **Performance:** It is greatly advised to enable low-processor usage mode (see `OS.low_processor_usage_mode`) when using GraphEdits.
 * 
 * **Note:** Keep in mind that `Node.get_children` will also return the connection layer node named `_connection_layer` due to technical limitations. This behavior may change in future releases.
 */
export class GraphEdit extends Control {
  clipContents: boolean;
/**
 * If `true`, the lines between nodes will use antialiasing.
 */
  connectionLinesAntialiased: boolean;
/**
 * The curvature of the lines between the nodes. 0 results in straight lines.
 */
  connectionLinesCurvature: float;
/**
 * The thickness of the lines between the nodes.
 */
  connectionLinesThickness: float;
/**
 * The connections between `GraphNode`s.
 * A connection is represented as a `Dictionary` in the form of:
 * 
 * 			```gdscript
 * 
 * 			{
 * 			    from_node: StringName,
 * 			    from_port: int,
 * 			    to_node: StringName,
 * 			    to_port: int,
 * 			    keep_alive: bool
 * 			}
 * 			
 * 
 * ```
 * Connections with `keep_alive` set to `false` may be deleted automatically if invalid during a redraw.
 */
  connections: Dictionary[];
  focusMode: int;
/**
 * The pattern used for drawing the grid.
 */
  gridPattern: int;
/**
 * If `true`, the minimap is visible.
 */
  minimapEnabled: boolean;
/**
 * The opacity of the minimap rectangle.
 */
  minimapOpacity: float;
/**
 * The size of the minimap rectangle. The map itself is based on the size of the grid area and is scaled to fit this rectangle.
 */
  minimapSize: Vector2;
/**
 * Defines the control scheme for panning with mouse wheel.
 */
  panningScheme: int;
/**
 * If `true`, enables disconnection of existing connections in the GraphEdit by dragging the right end.
 */
  rightDisconnects: boolean;
/**
 * The scroll offset.
 */
  scrollOffset: Vector2;
/**
 * If `true`, the button to automatically arrange graph nodes is visible.
 */
  showArrangeButton: boolean;
/**
 * If `true`, the grid is visible.
 */
  showGrid: boolean;
/**
 * If `true`, buttons that allow to configure grid and snapping options are visible.
 */
  showGridButtons: boolean;
/**
 * If `true`, the menu toolbar is visible.
 */
  showMenu: boolean;
/**
 * If `true`, the button to toggle the minimap is visible.
 */
  showMinimapButton: boolean;
/**
 * If `true`, buttons that allow to change and reset the zoom level are visible.
 */
  showZoomButtons: boolean;
/**
 * If `true`, the label with the current zoom level is visible. The zoom level is displayed in percents.
 */
  showZoomLabel: boolean;
/**
 * The snapping distance in pixels, also determines the grid line distance.
 */
  snappingDistance: int;
/**
 * If `true`, enables snapping.
 */
  snappingEnabled: boolean;
/**
 * The current zoom value.
 */
  zoom: float;
/**
 * The upper zoom limit.
 */
  zoomMax: float;
/**
 * The lower zoom limit.
 */
  zoomMin: float;
/**
 * The step of each zoom level.
 */
  zoomStep: float;
/**
 * Allows the connection between two different port types. The port type is defined individually for the left and the right port of each slot with the `GraphNode.set_slot` method.
 * See also `is_valid_connection_type` and `remove_valid_connection_type`.
 * @param fromType int
 * @param toType int
 */
  addValidConnectionType(fromType: int, toType: int): void;
/**
 * Allows to disconnect nodes when dragging from the left port of the `GraphNode`'s slot if it has the specified type. See also `remove_valid_left_disconnect_type`.
 * @param type_ int
 */
  addValidLeftDisconnectType(type_: int): void;
/**
 * Allows to disconnect nodes when dragging from the right port of the `GraphNode`'s slot if it has the specified type. See also `remove_valid_right_disconnect_type`.
 * @param type_ int
 */
  addValidRightDisconnectType(type_: int): void;
/**
 * Rearranges selected nodes in a layout with minimum crossings between connections and uniform horizontal and vertical gap between nodes.
 */
  arrangeNodes(): void;
/**
 * Attaches the `element` `GraphElement` to the `frame` `GraphFrame`.
 * @param element StringName
 * @param frame StringName
 */
  attachGraphElementToFrame(element: StringName, frame: StringName): void;
/**
 * Removes all connections between nodes.
 */
  clearConnections(): void;
/**
 * Create a connection between the `from_port` of the `from_node` `GraphNode` and the `to_port` of the `to_node` `GraphNode`. If the connection already exists, no connection is created.
 * Connections with `keep_alive` set to `false` may be deleted automatically if invalid during a redraw.
 * @param fromNode StringName
 * @param fromPort int
 * @param toNode StringName
 * @param toPort int
 * @param keepAlive boolean (optional, default: false)
 * @returns int
 */
  connectNode(fromNode: StringName, fromPort: int, toNode: StringName, toPort: int, keepAlive?: boolean): int;
/**
 * Detaches the `element` `GraphElement` from the `GraphFrame` it is currently attached to.
 * @param element StringName
 */
  detachGraphElementFromFrame(element: StringName): void;
/**
 * Removes the connection between the `from_port` of the `from_node` `GraphNode` and the `to_port` of the `to_node` `GraphNode`. If the connection does not exist, no connection is removed.
 * @param fromNode StringName
 * @param fromPort int
 * @param toNode StringName
 * @param toPort int
 */
  disconnectNode(fromNode: StringName, fromPort: int, toNode: StringName, toPort: int): void;
/**
 * Ends the creation of the current connection. In other words, if you are dragging a connection you can use this method to abort the process and remove the line that followed your cursor.
 * This is best used together with `connection_drag_started` and `connection_drag_ended` to add custom behavior like node addition through shortcuts.
 * 
 * **Note:** This method suppresses any other connection request signals apart from `connection_drag_ended`.
 */
  forceConnectionDragEnd(): void;
/**
 * Returns an array of node names that are attached to the `GraphFrame` with the given name.
 * @param frame StringName
 * @returns StringName[]
 */
  getAttachedNodesOfFrame(frame: StringName): StringName[];
/**
 * Returns the closest connection to the given point in screen space. If no connection is found within `max_distance` pixels, an empty `Dictionary` is returned.
 * A connection is represented as a `Dictionary` in the form of:
 * 
 * 				```gdscript
 * 
 * 				{
 * 				    from_node: StringName,
 * 				    from_port: int,
 * 				    to_node: StringName,
 * 				    to_port: int,
 * 				    keep_alive: bool
 * 				}
 * 				
 * 
 * ```
 * For example, getting a connection at a given mouse position can be achieved like this:
 * 
 * 				```gdscript
 * 
 * 				var connection = get_closest_connection_at_point(mouse_event.get_position())
 * 				
 * 
 * ```
 * 
 * @param point Vector2
 * @param maxDistance float (optional, default: 4.0)
 * @returns GodotDictionary<any>
 */
  getClosestConnectionAtPoint(point: Vector2, maxDistance?: float): GodotDictionary<any>;
/**
 * Returns the number of connections from `from_port` of `from_node`.
 * @param fromNode StringName
 * @param fromPort int
 * @returns int
 */
  getConnectionCount(fromNode: StringName, fromPort: int): int;
/**
 * Returns the points which would make up a connection between `from_node` and `to_node`.
 * @param fromNode Vector2
 * @param toNode Vector2
 * @returns PackedVector2Array
 */
  getConnectionLine(fromNode: Vector2, toNode: Vector2): PackedVector2Array;
/**
 * Virtual method which can be overridden to customize how connections are drawn.
 * @param fromPosition Vector2
 * @param toPosition Vector2
 * @returns PackedVector2Array
 */
  private getConnectionLine(fromPosition: Vector2, toPosition: Vector2): PackedVector2Array;
/**
 * Returns an `Array` containing the list of connections that intersect with the given `Rect2`.
 * A connection is represented as a `Dictionary` in the form of:
 * 
 * 				```gdscript
 * 
 * 				{
 * 				    from_node: StringName,
 * 				    from_port: int,
 * 				    to_node: StringName,
 * 				    to_port: int,
 * 				    keep_alive: bool
 * 				}
 * 				
 * 
 * ```
 * @param rect Rect2
 * @returns Dictionary[]
 */
  getConnectionsIntersectingWithRect(rect: Rect2): Dictionary[];
/**
 * Returns the `GraphFrame` that contains the `GraphElement` with the given name.
 * @param element StringName
 * @returns GraphFrame
 */
  getElementFrame(element: StringName): GraphFrame;
/**
 * Gets the `HBoxContainer` that contains the zooming and grid snap controls in the top left of the graph. You can use this method to reposition the toolbar or to add your own custom controls to it.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `CanvasItem.visible` property.
 * @returns HBoxContainer
 */
  getMenuHbox(): HBoxContainer;
/**
 * Returns whether the `mouse_position` is in the input hot zone.
 * By default, a hot zone is a `Rect2` positioned such that its center is at `in_node`.`GraphNode.get_input_port_position`(`in_port`) (For output's case, call `GraphNode.get_output_port_position` instead). The hot zone's width is twice the Theme Property `port_grab_distance_horizontal`, and its height is twice the `port_grab_distance_vertical`.
 * Below is a sample code to help get started:
 * 
 * 				```gdscript
 * 
 * 				func _is_in_input_hotzone(in_node, in_port, mouse_position):
 * 				    var port_size = Vector2(get_theme_constant("port_grab_distance_horizontal"), get_theme_constant("port_grab_distance_vertical"))
 * 				    var port_pos = in_node.get_position() + in_node.get_input_port_position(in_port) - port_size / 2
 * 				    var rect = Rect2(port_pos, port_size)
 * 
 * 				    return rect.has_point(mouse_position)
 * 				
 * 
 * ```
 * @param inNode Object
 * @param inPort int
 * @param mousePosition Vector2
 * @returns boolean
 */
  private isInInputHotzone(inNode: Object, inPort: int, mousePosition: Vector2): boolean;
/**
 * Returns whether the `mouse_position` is in the output hot zone. For more information on hot zones, see `_is_in_input_hotzone`.
 * Below is a sample code to help get started:
 * 
 * 				```gdscript
 * 
 * 				func _is_in_output_hotzone(in_node, in_port, mouse_position):
 * 				    var port_size = Vector2(get_theme_constant("port_grab_distance_horizontal"), get_theme_constant("port_grab_distance_vertical"))
 * 				    var port_pos = in_node.get_position() + in_node.get_output_port_position(in_port) - port_size / 2
 * 				    var rect = Rect2(port_pos, port_size)
 * 
 * 				    return rect.has_point(mouse_position)
 * 				
 * 
 * ```
 * @param inNode Object
 * @param inPort int
 * @param mousePosition Vector2
 * @returns boolean
 */
  private isInOutputHotzone(inNode: Object, inPort: int, mousePosition: Vector2): boolean;
/**
 * Returns `true` if the `from_port` of the `from_node` `GraphNode` is connected to the `to_port` of the `to_node` `GraphNode`.
 * @param fromNode StringName
 * @param fromPort int
 * @param toNode StringName
 * @param toPort int
 * @returns boolean
 */
  isNodeConnected(fromNode: StringName, fromPort: int, toNode: StringName, toPort: int): boolean;
/**
 * This virtual method can be used to insert additional error detection while the user is dragging a connection over a valid port.
 * Return `true` if the connection is indeed valid or return `false` if the connection is impossible. If the connection is impossible, no snapping to the port and thus no connection request to that port will happen.
 * In this example a connection to same node is suppressed:
 * 
 * 				```gdscript
 * 
 * 				func _is_node_hover_valid(from, from_port, to, to_port):
 * 				    return from != to
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override bool _IsNodeHoverValid(StringName fromNode, int fromPort, StringName toNode, int toPort)
 * 				{
 * 				    return fromNode != toNode;
 * 				}
 * 				
 * 
 * ```
 * 
 * @param fromNode StringName
 * @param fromPort int
 * @param toNode StringName
 * @param toPort int
 * @returns boolean
 */
  private isNodeHoverValid(fromNode: StringName, fromPort: int, toNode: StringName, toPort: int): boolean;
/**
 * Returns whether it's possible to make a connection between two different port types. The port type is defined individually for the left and the right port of each slot with the `GraphNode.set_slot` method.
 * See also `add_valid_connection_type` and `remove_valid_connection_type`.
 * @param fromType int
 * @param toType int
 * @returns boolean
 */
  isValidConnectionType(fromType: int, toType: int): boolean;
/**
 * Disallows the connection between two different port types previously allowed by `add_valid_connection_type`. The port type is defined individually for the left and the right port of each slot with the `GraphNode.set_slot` method.
 * See also `is_valid_connection_type`.
 * @param fromType int
 * @param toType int
 */
  removeValidConnectionType(fromType: int, toType: int): void;
/**
 * Disallows to disconnect nodes when dragging from the left port of the `GraphNode`'s slot if it has the specified type. Use this to disable disconnection previously allowed with `add_valid_left_disconnect_type`.
 * @param type_ int
 */
  removeValidLeftDisconnectType(type_: int): void;
/**
 * Disallows to disconnect nodes when dragging from the right port of the `GraphNode`'s slot if it has the specified type. Use this to disable disconnection previously allowed with `add_valid_right_disconnect_type`.
 * @param type_ int
 */
  removeValidRightDisconnectType(type_: int): void;
/**
 * Sets the coloration of the connection between `from_node`'s `from_port` and `to_node`'s `to_port` with the color provided in the [theme_item activity] theme property. The color is linearly interpolated between the connection color and the activity color using `amount` as weight.
 * @param fromNode StringName
 * @param fromPort int
 * @param toNode StringName
 * @param toPort int
 * @param amount float
 */
  setConnectionActivity(fromNode: StringName, fromPort: int, toNode: StringName, toPort: int, amount: float): void;
/**
 * Sets the specified `node` as the one selected.
 * @param node Node
 */
  setSelected(node: Node): void;
/**
 * Emitted at the beginning of a `GraphElement`'s movement.
 */
  beginNodeMove: Signal<[]>;
/**
 * Emitted at the end of a connection drag.
 */
  connectionDragEnded: Signal<[]>;
/**
 * Emitted at the beginning of a connection drag.
 */
  connectionDragStarted: Signal<[fromNode: StringName, fromPort: int, isOutput: boolean]>;
/**
 * Emitted when user drags a connection from an input port into the empty space of the graph.
 */
  connectionFromEmpty: Signal<[toNode: StringName, toPort: int, releasePosition: Vector2]>;
/**
 * Emitted to the GraphEdit when the connection between the `from_port` of the `from_node` `GraphNode` and the `to_port` of the `to_node` `GraphNode` is attempted to be created.
 */
  connectionRequest: Signal<[fromNode: StringName, fromPort: int, toNode: StringName, toPort: int]>;
/**
 * Emitted when user drags a connection from an output port into the empty space of the graph.
 */
  connectionToEmpty: Signal<[fromNode: StringName, fromPort: int, releasePosition: Vector2]>;
/**
 * Emitted when this `GraphEdit` captures a `ui_copy` action (`Ctrl + C` by default). In general, this signal indicates that the selected `GraphElement`s should be copied.
 */
  copyNodesRequest: Signal<[]>;
/**
 * Emitted when this `GraphEdit` captures a `ui_cut` action (`Ctrl + X` by default). In general, this signal indicates that the selected `GraphElement`s should be cut.
 */
  cutNodesRequest: Signal<[]>;
/**
 * Emitted when this `GraphEdit` captures a `ui_graph_delete` action (`Delete` by default).
 * `nodes` is an array of node names that should be removed. These usually include all selected nodes.
 */
  deleteNodesRequest: Signal<[nodes: StringName[]]>;
/**
 * Emitted to the GraphEdit when the connection between `from_port` of `from_node` `GraphNode` and `to_port` of `to_node` `GraphNode` is attempted to be removed.
 */
  disconnectionRequest: Signal<[fromNode: StringName, fromPort: int, toNode: StringName, toPort: int]>;
/**
 * Emitted when this `GraphEdit` captures a `ui_graph_duplicate` action (`Ctrl + D` by default). In general, this signal indicates that the selected `GraphElement`s should be duplicated.
 */
  duplicateNodesRequest: Signal<[]>;
/**
 * Emitted at the end of a `GraphElement`'s movement.
 */
  endNodeMove: Signal<[]>;
/**
 * Emitted when the `GraphFrame` `frame` is resized to `new_rect`.
 */
  frameRectChanged: Signal<[frame: GraphFrame, newRect: Rect2]>;
/**
 * Emitted when one or more `GraphElement`s are dropped onto the `GraphFrame` named `frame`, when they were not previously attached to any other one.
 * `elements` is an array of `GraphElement`s to be attached.
 */
  graphElementsLinkedToFrameRequest: Signal<[elements: GodotArray<any>, frame: StringName]>;
/**
 * Emitted when the given `GraphElement` node is deselected.
 */
  nodeDeselected: Signal<[node: Node]>;
/**
 * Emitted when the given `GraphElement` node is selected.
 */
  nodeSelected: Signal<[node: Node]>;
/**
 * Emitted when this `GraphEdit` captures a `ui_paste` action (`Ctrl + V` by default). In general, this signal indicates that previously copied `GraphElement`s should be pasted.
 */
  pasteNodesRequest: Signal<[]>;
/**
 * Emitted when a popup is requested. Happens on right-clicking in the GraphEdit. `at_position` is the position of the mouse pointer when the signal is sent.
 */
  popupRequest: Signal<[atPosition: Vector2]>;
/**
 * Emitted when the scroll offset is changed by the user. It will not be emitted when changed in code.
 */
  scrollOffsetChanged: Signal<[offset: Vector2]>;
/**
 * `Mouse Wheel` will zoom, `Ctrl + Mouse Wheel` will move the view.
 */
  static readonly SCROLL_ZOOMS: int;
/**
 * `Mouse Wheel` will move the view, `Ctrl + Mouse Wheel` will zoom.
 */
  static readonly SCROLL_PANS: int;
/**
 * Draw the grid using solid lines.
 */
  static readonly GRID_PATTERN_LINES: int;
/**
 * Draw the grid using dots.
 */
  static readonly GRID_PATTERN_DOTS: int;
}
