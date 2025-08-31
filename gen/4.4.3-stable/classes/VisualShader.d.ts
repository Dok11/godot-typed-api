import type { Dictionary, GodotArray, GodotDictionary, PackedInt32Array, Shader, StringName, Vector2, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A custom shader program with a visual editor.
 * 
 * This class provides a graph-like visual editor for creating a `Shader`. Although `VisualShader`s do not require coding, they share the same logic with script shaders. They use `VisualShaderNode`s that can be connected to each other to control the flow of the shader. The visual shader graph is converted to a script shader behind the scenes.
 */
export class VisualShader extends Shader {
/**
 * The offset vector of the whole graph.
 */
  graphOffset: Vector2;
/**
 * Adds the specified `node` to the shader.
 * @param type_ int
 * @param node VisualShaderNode
 * @param position Vector2
 * @param id int
 */
  addNode(type_: int, node: VisualShaderNode, position: Vector2, id: int): void;
/**
 * Adds a new varying value node to the shader.
 * @param name string
 * @param mode int
 * @param type_ int
 */
  addVarying(name: string, mode: int, type_: int): void;
/**
 * Attaches the given node to the given frame.
 * @param type_ int
 * @param id int
 * @param frame int
 */
  attachNodeToFrame(type_: int, id: int, frame: int): void;
/**
 * Returns `true` if the specified nodes and ports can be connected together.
 * @param type_ int
 * @param fromNode int
 * @param fromPort int
 * @param toNode int
 * @param toPort int
 * @returns boolean
 */
  canConnectNodes(type_: int, fromNode: int, fromPort: int, toNode: int, toPort: int): boolean;
/**
 * Connects the specified nodes and ports.
 * @param type_ int
 * @param fromNode int
 * @param fromPort int
 * @param toNode int
 * @param toPort int
 * @returns int
 */
  connectNodes(type_: int, fromNode: int, fromPort: int, toNode: int, toPort: int): int;
/**
 * Connects the specified nodes and ports, even if they can't be connected. Such connection is invalid and will not function properly.
 * @param type_ int
 * @param fromNode int
 * @param fromPort int
 * @param toNode int
 * @param toPort int
 */
  connectNodesForced(type_: int, fromNode: int, fromPort: int, toNode: int, toPort: int): void;
/**
 * Detaches the given node from the frame it is attached to.
 * @param type_ int
 * @param id int
 */
  detachNodeFromFrame(type_: int, id: int): void;
/**
 * Connects the specified nodes and ports.
 * @param type_ int
 * @param fromNode int
 * @param fromPort int
 * @param toNode int
 * @param toPort int
 */
  disconnectNodes(type_: int, fromNode: int, fromPort: int, toNode: int, toPort: int): void;
/**
 * Returns the shader node instance with specified `type` and `id`.
 * @param type_ int
 * @param id int
 * @returns VisualShaderNode
 */
  getNode(type_: int, id: int): VisualShaderNode;
/**
 * Returns the list of connected nodes with the specified type.
 * @param type_ int
 * @returns Dictionary[]
 */
  getNodeConnections(type_: int): Dictionary[];
/**
 * Returns the list of all nodes in the shader with the specified type.
 * @param type_ int
 * @returns PackedInt32Array
 */
  getNodeList(type_: int): PackedInt32Array;
/**
 * Returns the position of the specified node within the shader graph.
 * @param type_ int
 * @param id int
 * @returns Vector2
 */
  getNodePosition(type_: int, id: int): Vector2;
/**
 * Returns next valid node ID that can be added to the shader graph.
 * @param type_ int
 * @returns int
 */
  getValidNodeId(type_: int): int;
/**
 * Returns `true` if the shader has a varying with the given `name`.
 * @param name string
 * @returns boolean
 */
  hasVarying(name: string): boolean;
/**
 * Returns `true` if the specified node and port connection exist.
 * @param type_ int
 * @param fromNode int
 * @param fromPort int
 * @param toNode int
 * @param toPort int
 * @returns boolean
 */
  isNodeConnection(type_: int, fromNode: int, fromPort: int, toNode: int, toPort: int): boolean;
/**
 * Removes the specified node from the shader.
 * @param type_ int
 * @param id int
 */
  removeNode(type_: int, id: int): void;
/**
 * Removes a varying value node with the given `name`. Prints an error if a node with this name is not found.
 * @param name string
 */
  removeVarying(name: string): void;
/**
 * Replaces the specified node with a node of new class type.
 * @param type_ int
 * @param id int
 * @param newClass StringName
 */
  replaceNode(type_: int, id: int, newClass: StringName): void;
/**
 * Sets the mode of this shader.
 * @param mode int
 */
  setMode(mode: int): void;
/**
 * Sets the position of the specified node.
 * @param type_ int
 * @param id int
 * @param position Vector2
 */
  setNodePosition(type_: int, id: int, position: Vector2): void;
/**
 * A vertex shader, operating on vertices.
 */
  static readonly TYPE_VERTEX: int;
/**
 * A fragment shader, operating on fragments (pixels).
 */
  static readonly TYPE_FRAGMENT: int;
/**
 * A shader for light calculations.
 */
  static readonly TYPE_LIGHT: int;
/**
 * A function for the "start" stage of particle shader.
 */
  static readonly TYPE_START: int;
/**
 * A function for the "process" stage of particle shader.
 */
  static readonly TYPE_PROCESS: int;
/**
 * A function for the "collide" stage (particle collision handler) of particle shader.
 */
  static readonly TYPE_COLLIDE: int;
/**
 * A function for the "start" stage of particle shader, with customized output.
 */
  static readonly TYPE_START_CUSTOM: int;
/**
 * A function for the "process" stage of particle shader, with customized output.
 */
  static readonly TYPE_PROCESS_CUSTOM: int;
/**
 * A shader for 3D environment's sky.
 */
  static readonly TYPE_SKY: int;
/**
 * A compute shader that runs for each froxel of the volumetric fog map.
 */
  static readonly TYPE_FOG: int;
/**
 * Represents the size of the `Type` enum.
 */
  static readonly TYPE_MAX: int;
/**
 * Varying is passed from `Vertex` function to `Fragment` and `Light` functions.
 */
  static readonly VARYING_MODE_VERTEX_TO_FRAG_LIGHT: int;
/**
 * Varying is passed from `Fragment` function to `Light` function.
 */
  static readonly VARYING_MODE_FRAG_TO_LIGHT: int;
/**
 * Represents the size of the `VaryingMode` enum.
 */
  static readonly VARYING_MODE_MAX: int;
/**
 * Varying is of type [float].
 */
  static readonly VARYING_TYPE_FLOAT: int;
/**
 * Varying is of type [int].
 */
  static readonly VARYING_TYPE_INT: int;
/**
 * Varying is of type unsigned [int].
 */
  static readonly VARYING_TYPE_UINT: int;
/**
 * Varying is of type `Vector2`.
 */
  static readonly VARYING_TYPE_VECTOR_2D: int;
/**
 * Varying is of type `Vector3`.
 */
  static readonly VARYING_TYPE_VECTOR_3D: int;
/**
 * Varying is of type `Vector4`.
 */
  static readonly VARYING_TYPE_VECTOR_4D: int;
/**
 * Varying is of type [bool].
 */
  static readonly VARYING_TYPE_BOOLEAN: int;
/**
 * Varying is of type `Transform3D`.
 */
  static readonly VARYING_TYPE_TRANSFORM: int;
/**
 * Represents the size of the `VaryingType` enum.
 */
  static readonly VARYING_TYPE_MAX: int;
/**
 * Indicates an invalid `VisualShader` node.
 */
  static readonly NODE_ID_INVALID: int;
/**
 * Indicates an output node of `VisualShader`.
 */
  static readonly NODE_ID_OUTPUT: int;
}
