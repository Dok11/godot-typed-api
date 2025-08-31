import type { Button, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A button that represents a binary choice.
 * 
 * `CheckButton` is a toggle button displayed as a check field. It's similar to `CheckBox` in functionality, but it has a different appearance. To follow established UX patterns, it's recommended to use `CheckButton` when toggling it has an **immediate** effect on something. For example, it can be used when pressing it shows or hides advanced settings, without asking the user to confirm this action.
 * See also `BaseButton` which contains common properties and methods associated with this node.
 */
export class CheckButton extends Button {
  alignment: int;
  toggleMode: boolean;
}
