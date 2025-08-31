import type { BaseButton, GodotArray, GodotDictionary, Texture2D, float, int } from "../index.d.ts";
/**
 * A themed button that can contain text and an icon.
 * 
 * `Button` is the standard themed button. It can contain text and an icon, and it will display them according to the current `Theme`.
 * 
 * **Example:** Create a button and connect a method that will be called when the button is pressed:
 * 
 * 		```gdscript
 * 
 * 		func _ready():
 * 		    var button = Button.new()
 * 		    button.text = "Click me"
 * 		    button.pressed.connect(_button_pressed)
 * 		    add_child(button)
 * 
 * 		func _button_pressed():
 * 		    print("Hello world!")
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		public override void _Ready()
 * 		{
 * 		    var button = new Button();
 * 		    button.Text = "Click me";
 * 		    button.Pressed += ButtonPressed;
 * 		    AddChild(button);
 * 		}
 * 
 * 		private void ButtonPressed()
 * 		{
 * 		    GD.Print("Hello world!");
 * 		}
 * 		
 * 
 * ```
 * 
 * See also `BaseButton` which contains common properties and methods associated with this node.
 * 
 * **Note:** Buttons do not detect touch input and therefore don't support multitouch, since mouse emulation can only press one button at a given time. Use `TouchScreenButton` for buttons that trigger gameplay movement or actions.
 */
export class Button extends BaseButton {
/**
 * Text alignment policy for the button's text, use one of the `HorizontalAlignment` constants.
 */
  alignment: int;
/**
 * If set to something other than `TextServer.AUTOWRAP_OFF`, the text gets wrapped inside the node's bounding rectangle.
 */
  autowrapMode: int;
/**
 * If `true`, text that is too large to fit the button is clipped horizontally. If `false`, the button will always be wide enough to hold the text. The text is not vertically clipped, and the button's height is not affected by this property.
 */
  clipText: boolean;
/**
 * When enabled, the button's icon will expand/shrink to fit the button's size while keeping its aspect. See also [theme_item icon_max_width].
 */
  expandIcon: boolean;
/**
 * Flat buttons don't display decoration.
 */
  flat: boolean;
/**
 * Button's icon, if text is present the icon will be placed before the text.
 * To edit margin and spacing of the icon, use [theme_item h_separation] theme property and `content_margin_*` properties of the used `StyleBox`es.
 */
  icon: Texture2D;
/**
 * Specifies if the icon should be aligned horizontally to the left, right, or center of a button. Uses the same `HorizontalAlignment` constants as the text alignment. If centered horizontally and vertically, text will draw on top of the icon.
 */
  iconAlignment: int;
/**
 * Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead.
 */
  language: string;
/**
 * The button's text that will be displayed inside the button's area.
 */
  text: string;
/**
 * Base text writing direction.
 */
  textDirection: int;
/**
 * Sets the clipping behavior when the text exceeds the node's bounding rectangle. See `TextServer.OverrunBehavior` for a description of all modes.
 */
  textOverrunBehavior: int;
/**
 * Specifies if the icon should be aligned vertically to the top, bottom, or center of a button. Uses the same `VerticalAlignment` constants as the text alignment. If centered horizontally and vertically, text will draw on top of the icon.
 */
  verticalIconAlignment: int;
}
