import type { GodotArray, GodotDictionary, HBoxContainer, float, int } from "../index.d.ts";
/**
 * Manages toast notifications within the editor.
 * 
 * This object manages the functionality and display of toast notifications within the editor, ensuring timely and informative alerts are presented to users.
 * 
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using `EditorInterface.get_editor_toaster`.
 */
export class EditorToaster extends HBoxContainer {
/**
 * Pushes a toast notification to the editor for display.
 * @param message string
 * @param severity int (optional, default: 0)
 * @param tooltip string (optional, default: "")
 */
  pushToast(message: string, severity?: int, tooltip?: string): void;
/**
 * Toast will display with an INFO severity.
 */
  static readonly SEVERITY_INFO: int;
/**
 * Toast will display with a WARNING severity and have a corresponding color.
 */
  static readonly SEVERITY_WARNING: int;
/**
 * Toast will display with an ERROR severity and have a corresponding color.
 */
  static readonly SEVERITY_ERROR: int;
}
