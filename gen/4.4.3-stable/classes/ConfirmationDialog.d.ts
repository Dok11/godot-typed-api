import type { AcceptDialog, Button, GodotArray, GodotDictionary, Vector2i, float, int } from "../index.d.ts";
/**
 * A dialog used for confirmation of actions.
 * 
 * A dialog used for confirmation of actions. This window is similar to `AcceptDialog`, but pressing its Cancel button can have a different outcome from pressing the OK button. The order of the two buttons varies depending on the host OS.
 * To get cancel action, you can use:
 * 
 * 		```gdscript
 * 
 * 		get_cancel_button().pressed.connect(_on_canceled)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		GetCancelButton().Pressed += OnCanceled;
 * 		
 * 
 * ```
 * 
 */
export class ConfirmationDialog extends AcceptDialog {
/**
 * The text displayed by the cancel button (see `get_cancel_button`).
 */
  cancelButtonText: string;
  minSize: Vector2i;
  size: Vector2i;
  title: string;
/**
 * Returns the cancel button.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `CanvasItem.visible` property.
 * @returns Button
 */
  getCancelButton(): Button;
}
