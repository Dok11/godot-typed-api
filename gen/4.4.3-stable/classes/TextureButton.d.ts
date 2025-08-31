import type { BaseButton, BitMap, GodotArray, GodotDictionary, Texture2D, float, int } from "../index.d.ts";
/**
 * Texture-based button. Supports Pressed, Hover, Disabled and Focused states.
 * 
 * `TextureButton` has the same functionality as `Button`, except it uses sprites instead of Godot's `Theme` resource. It is faster to create, but it doesn't support localization like more complex `Control`s.
 * See also `BaseButton` which contains common properties and methods associated with this node.
 * 
 * **Note:** Setting a texture for the "normal" state (`texture_normal`) is recommended. If `texture_normal` is not set, the `TextureButton` will still receive input events and be clickable, but the user will not be able to see it unless they activate another one of its states with a texture assigned (e.g., hover over it to show `texture_hover`).
 */
export class TextureButton extends BaseButton {
/**
 * If `true`, texture is flipped horizontally.
 */
  flipH: boolean;
/**
 * If `true`, texture is flipped vertically.
 */
  flipV: boolean;
/**
 * If `true`, the size of the texture won't be considered for minimum size calculation, so the `TextureButton` can be shrunk down past the texture size.
 */
  ignoreTextureSize: boolean;
/**
 * Controls the texture's behavior when you resize the node's bounding rectangle. See the `StretchMode` constants for available options.
 */
  stretchMode: int;
/**
 * Pure black and white `BitMap` image to use for click detection. On the mask, white pixels represent the button's clickable area. Use it to create buttons with curved shapes.
 */
  textureClickMask: BitMap;
/**
 * Texture to display when the node is disabled. See `BaseButton.disabled`. If not assigned, the `TextureButton` displays `texture_normal` instead.
 */
  textureDisabled: Texture2D;
/**
 * Texture to *overlay on the base texture* when the node has mouse or keyboard focus. Because `texture_focused` is displayed on top of the base texture, a partially transparent texture should be used to ensure the base texture remains visible. A texture that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a fully transparent texture of any size. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons.
 */
  textureFocused: Texture2D;
/**
 * Texture to display when the mouse hovers over the node. If not assigned, the `TextureButton` displays `texture_normal` instead when hovered over.
 */
  textureHover: Texture2D;
/**
 * Texture to display by default, when the node is **not** in the disabled, hover or pressed state. This texture is still displayed in the focused state, with `texture_focused` drawn on top.
 */
  textureNormal: Texture2D;
/**
 * Texture to display on mouse down over the node, if the node has keyboard focus and the player presses the Enter key or if the player presses the `BaseButton.shortcut` key. If not assigned, the `TextureButton` displays `texture_hover` instead when pressed.
 */
  texturePressed: Texture2D;
/**
 * Scale to fit the node's bounding rectangle.
 */
  static readonly STRETCH_SCALE: int;
/**
 * Tile inside the node's bounding rectangle.
 */
  static readonly STRETCH_TILE: int;
/**
 * The texture keeps its original size and stays in the bounding rectangle's top-left corner.
 */
  static readonly STRETCH_KEEP: int;
/**
 * The texture keeps its original size and stays centered in the node's bounding rectangle.
 */
  static readonly STRETCH_KEEP_CENTERED: int;
/**
 * Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio.
 */
  static readonly STRETCH_KEEP_ASPECT: int;
/**
 * Scale the texture to fit the node's bounding rectangle, center it, and maintain its aspect ratio.
 */
  static readonly STRETCH_KEEP_ASPECT_CENTERED: int;
/**
 * Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits.
 */
  static readonly STRETCH_KEEP_ASPECT_COVERED: int;
}
