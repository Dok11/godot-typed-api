import type { Font, GodotArray, GodotDictionary, PrimitiveMesh, Vector2, float, int } from "../index.d.ts";
/**
 * Generate an `PrimitiveMesh` from the text.
 * 
 * Generate an `PrimitiveMesh` from the text.
 * TextMesh can be generated only when using dynamic fonts with vector glyph contours. Bitmap fonts (including bitmap data in the TrueType/OpenType containers, like color emoji fonts) are not supported.
 * The UV layout is arranged in 4 horizontal strips, top to bottom: 40% of the height for the front face, 40% for the back face, 10% for the outer edges and 10% for the inner edges.
 */
export class TextMesh extends PrimitiveMesh {
/**
 * If set to something other than `TextServer.AUTOWRAP_OFF`, the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see `TextServer.AutowrapMode`.
 */
  autowrapMode: int;
/**
 * Step (in pixels) used to approximate Bézier curves.
 */
  curveStep: float;
/**
 * Depths of the mesh, if set to `0.0` only front surface, is generated, and UV layout is changed to use full texture for the front face only.
 */
  depth: float;
/**
 * Font configuration used to display text.
 */
  font: Font;
/**
 * Font size of the `TextMesh`'s text.
 */
  fontSize: int;
/**
 * Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the `HorizontalAlignment` constants.
 */
  horizontalAlignment: int;
/**
 * Line fill alignment rules. See `TextServer.JustificationFlag` for more information.
 */
  justificationFlags: int;
/**
 * Language code used for text shaping algorithms, if left empty current locale is used instead.
 */
  language: string;
/**
 * Additional vertical spacing between lines (in pixels), spacing is added to line descent. This value can be negative.
 */
  lineSpacing: float;
/**
 * The text drawing offset (in pixels).
 */
  offset: Vector2;
/**
 * The size of one pixel's width on the text to scale it in 3D.
 */
  pixelSize: float;
/**
 * Set BiDi algorithm override for the structured text.
 */
  structuredTextBidiOverride: int;
/**
 * Set additional options for BiDi override.
 */
  structuredTextBidiOverrideOptions: GodotArray<any>;
/**
 * The text to generate mesh from.
 * 
 * **Note:** Due to being a `Resource`, it doesn't follow the rules of `Node.auto_translate_mode`. If disabling translation is desired, it should be done manually with `Object.set_message_translation`.
 */
  text: string;
/**
 * Base text writing direction.
 */
  textDirection: int;
/**
 * If `true`, all the text displays as UPPERCASE.
 */
  uppercase: boolean;
/**
 * Controls the text's vertical alignment. Supports top, center, bottom. Set it to one of the `VerticalAlignment` constants.
 */
  verticalAlignment: int;
/**
 * Text width (in pixels), used for fill alignment.
 */
  width: float;
}
