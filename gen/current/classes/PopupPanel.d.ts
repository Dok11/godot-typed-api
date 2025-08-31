import type { GodotArray, GodotDictionary, Popup, float, int } from "../index.d.ts";
/**
 * A popup with a panel background.
 * 
 * A popup with a configurable panel background. Any child controls added to this node will be stretched to fit the panel's size (similar to how `PanelContainer` works). If you are making windows, see `Window`.
 */
export class PopupPanel extends Popup {
  transparent: boolean;
  transparentBg: boolean;
}
