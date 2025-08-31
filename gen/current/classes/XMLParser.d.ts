import type { GodotArray, GodotDictionary, PackedByteArray, RefCounted, float, int } from "../index.d.ts";
/**
 * Provides a low-level interface for creating parsers for XML files.
 * 
 * Provides a low-level interface for creating parsers for XML (https://en.wikipedia.org/wiki/XML) files. This class can serve as base to make custom XML parsers.
 * To parse XML, you must open a file with the `open` method or a buffer with the `open_buffer` method. Then, the `read` method must be called to parse the next nodes. Most of the methods take into consideration the currently parsed node.
 * Here is an example of using `XMLParser` to parse an SVG file (which is based on XML), printing each element and its attributes as a dictionary:
 * 
 * 		```gdscript
 * 
 * 		var parser = XMLParser.new()
 * 		parser.open("path/to/file.svg")
 * 		while parser.read() != ERR_FILE_EOF:
 * 		    if parser.get_node_type() == XMLParser.NODE_ELEMENT:
 * 		        var node_name = parser.get_node_name()
 * 		        var attributes_dict = {}
 * 		        for idx in range(parser.get_attribute_count()):
 * 		            attributes_dict[parser.get_attribute_name(idx)] = parser.get_attribute_value(idx)
 * 		        print("The ", node_name, " element has the following attributes: ", attributes_dict)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var parser = new XmlParser();
 * 		parser.Open("path/to/file.svg");
 * 		while (parser.Read() != Error.FileEof)
 * 		{
 * 		    if (parser.GetNodeType() == XmlParser.NodeType.Element)
 * 		    {
 * 		        var nodeName = parser.GetNodeName();
 * 		        var attributesDict = new Godot.Collections.Dictionary();
 * 		        for (int idx = 0; idx < parser.GetAttributeCount(); idx++)
 * 		        {
 * 		            attributesDict[parser.GetAttributeName(idx)] = parser.GetAttributeValue(idx);
 * 		        }
 * 		        GD.Print($"The {nodeName} element has the following attributes: {attributesDict}");
 * 		    }
 * 		}
 * 		
 * 
 * ```
 * 
 */
export class XMLParser extends RefCounted {
/**
 * Returns the number of attributes in the currently parsed element.
 * 
 * **Note:** If this method is used while the currently parsed node is not `NODE_ELEMENT` or `NODE_ELEMENT_END`, this count will not be updated and will still reflect the last element.
 * @returns int
 */
  getAttributeCount(): int;
/**
 * Returns the name of an attribute of the currently parsed element, specified by the `idx` index.
 * @param idx int
 * @returns string
 */
  getAttributeName(idx: int): string;
/**
 * Returns the value of an attribute of the currently parsed element, specified by the `idx` index.
 * @param idx int
 * @returns string
 */
  getAttributeValue(idx: int): string;
/**
 * Returns the current line in the parsed file, counting from 0.
 * @returns int
 */
  getCurrentLine(): int;
/**
 * Returns the value of an attribute of the currently parsed element, specified by its `name`. This method will raise an error if the element has no such attribute.
 * @param name string
 * @returns string
 */
  getNamedAttributeValue(name: string): string;
/**
 * Returns the value of an attribute of the currently parsed element, specified by its `name`. This method will return an empty string if the element has no such attribute.
 * @param name string
 * @returns string
 */
  getNamedAttributeValueSafe(name: string): string;
/**
 * Returns the contents of a text node. This method will raise an error if the current parsed node is of any other type.
 * @returns string
 */
  getNodeData(): string;
/**
 * Returns the name of a node. This method will raise an error if the currently parsed node is a text node.
 * 
 * **Note:** The content of a `NODE_CDATA` node and the comment string of a `NODE_COMMENT` node are also considered names.
 * @returns string
 */
  getNodeName(): string;
/**
 * Returns the byte offset of the currently parsed node since the beginning of the file or buffer. This is usually equivalent to the number of characters before the read position.
 * @returns int
 */
  getNodeOffset(): int;
/**
 * Returns the type of the current node. Compare with `NodeType` constants.
 * @returns int
 */
  getNodeType(): int;
/**
 * Returns `true` if the currently parsed element has an attribute with the `name`.
 * @param name string
 * @returns boolean
 */
  hasAttribute(name: string): boolean;
/**
 * Returns `true` if the currently parsed element is empty, e.g. `<element />`.
 * @returns boolean
 */
  isEmpty(): boolean;
/**
 * Opens an XML `file` for parsing. This method returns an error code.
 * @param file string
 * @returns int
 */
  open(file: string): int;
/**
 * Opens an XML raw `buffer` for parsing. This method returns an error code.
 * @param buffer PackedByteArray
 * @returns int
 */
  openBuffer(buffer: PackedByteArray): int;
/**
 * Parses the next node in the file. This method returns an error code.
 * @returns int
 */
  read(): int;
/**
 * Moves the buffer cursor to a certain offset (since the beginning) and reads the next node there. This method returns an error code.
 * @param position int
 * @returns int
 */
  seek(position: int): int;
/**
 * Skips the current section. If the currently parsed node contains more inner nodes, they will be ignored and the cursor will go to the closing of the current element.
 */
  skipSection(): void;
/**
 * There's no node (no file or buffer opened).
 */
  static readonly NODE_NONE: int;
/**
 * An element node type, also known as a tag, e.g. `<title>`.
 */
  static readonly NODE_ELEMENT: int;
/**
 * An end of element node type, e.g. `</title>`.
 */
  static readonly NODE_ELEMENT_END: int;
/**
 * A text node type, i.e. text that is not inside an element. This includes whitespace.
 */
  static readonly NODE_TEXT: int;
/**
 * A comment node type, e.g. `<!--A comment-->`.
 */
  static readonly NODE_COMMENT: int;
/**
 * A node type for CDATA (Character Data) sections, e.g. `<![CDATA[CDATA section]]>`.
 */
  static readonly NODE_CDATA: int;
/**
 * An unknown node type.
 */
  static readonly NODE_UNKNOWN: int;
}
