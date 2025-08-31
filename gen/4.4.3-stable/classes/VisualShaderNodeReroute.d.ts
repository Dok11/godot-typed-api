import type { GodotArray, GodotDictionary, VisualShaderNode, float, int } from "../index.d.ts";
/**
 * A node that allows rerouting a connection within the visual shader graph.
 * 
 * Automatically adapts its port type to the type of the incoming connection and ensures valid connections.
 */
export class VisualShaderNodeReroute extends VisualShaderNode {
/**
 * Returns the port type of the reroute node.
 * @returns int
 */
  getPortType(): int;
}
