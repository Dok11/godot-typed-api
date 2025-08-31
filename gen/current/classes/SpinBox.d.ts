import type { GodotArray, GodotDictionary, LineEdit, Range, float, int } from "../index.d.ts";
/**
 * An input field for numbers.
 * 
 * `SpinBox` is a numerical input text field. It allows entering integers and floating-point numbers.
 * 
 * **Example:** Create a `SpinBox`, disable its context menu and set its text alignment to right.
 * 
 * 		```gdscript
 * 
 * 		var spin_box = SpinBox.new()
 * 		add_child(spin_box)
 * 		var line_edit = spin_box.get_line_edit()
 * 		line_edit.context_menu_enabled = false
 * 		spin_box.horizontal_alignment = LineEdit.HORIZONTAL_ALIGNMENT_RIGHT
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var spinBox = new SpinBox();
 * 		AddChild(spinBox);
 * 		var lineEdit = spinBox.GetLineEdit();
 * 		lineEdit.ContextMenuEnabled = false;
 * 		spinBox.AlignHorizontal = LineEdit.HorizontalAlignEnum.Right;
 * 		
 * 
 * ```
 * 
 * See `Range` class for more options over the `SpinBox`.
 * 
 * **Note:** With the `SpinBox`'s context menu disabled, you can right-click the bottom half of the spinbox to set the value to its minimum, while right-clicking the top half sets the value to its maximum.
 * 
 * **Note:** `SpinBox` relies on an underlying `LineEdit` node. To theme a `SpinBox`'s background, add theme items for `LineEdit` and customize them. The `LineEdit` has the `SpinBoxInnerLineEdit` theme variation, so that you can give it a distinct appearance from regular `LineEdit`s.
 * 
 * **Note:** If you want to implement drag and drop for the underlying `LineEdit`, you can use `Control.set_drag_forwarding` on the node returned by `get_line_edit`.
 */
export class SpinBox extends Range {
/**
 * Changes the alignment of the underlying `LineEdit`.
 */
  alignment: int;
/**
 * If not `0`, `Range.value` will always be rounded to a multiple of `custom_arrow_step` when interacting with the arrow buttons of the `SpinBox`.
 */
  customArrowStep: float;
/**
 * If `true`, the `SpinBox` will be editable. Otherwise, it will be read only.
 */
  editable: boolean;
/**
 * Adds the specified prefix string before the numerical value of the `SpinBox`.
 */
  prefix: string;
/**
 * If `true`, the `SpinBox` will select the whole text when the `LineEdit` gains focus. Clicking the up and down arrows won't trigger this behavior.
 */
  selectAllOnFocus: boolean;
  sizeFlagsVertical: int;
  step: float;
/**
 * Adds the specified suffix string after the numerical value of the `SpinBox`.
 */
  suffix: string;
/**
 * Sets the value of the `Range` for this `SpinBox` when the `LineEdit` text is *changed* instead of *submitted*. See `LineEdit.text_changed` and `LineEdit.text_submitted`.
 */
  updateOnTextChanged: boolean;
/**
 * Applies the current value of this `SpinBox`.
 */
  apply(): void;
/**
 * Returns the `LineEdit` instance from this `SpinBox`. You can use it to access properties and methods of `LineEdit`.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `CanvasItem.visible` property.
 * @returns LineEdit
 */
  getLineEdit(): LineEdit;
}
