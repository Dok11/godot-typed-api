import type { Control, GodotArray, GodotDictionary, Rect2, Signal, Texture2D, Variant, Vector2, float, int } from "../index.d.ts";
/**
 * A control that provides a horizontal bar with tabs.
 * 
 * A control that provides a horizontal bar with tabs. Similar to `TabContainer` but is only in charge of drawing tabs, not interacting with children.
 */
export class TabBar extends Control {
/**
 * If `true`, tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible.
 */
  clipTabs: boolean;
/**
 * The index of the current selected tab. A value of `-1` means that no tab is selected and can only be set when `deselect_enabled` is `true` or if all tabs are hidden or disabled.
 */
  currentTab: int;
/**
 * If `true`, all tabs can be deselected so that no tab is selected. Click on the current tab to deselect it.
 */
  deselectEnabled: boolean;
/**
 * If `true`, tabs can be rearranged with mouse drag.
 */
  dragToRearrangeEnabled: boolean;
  focusMode: int;
/**
 * Sets the maximum width which all tabs should be limited to. Unlimited if set to `0`.
 */
  maxTabWidth: int;
/**
 * if `true`, the mouse's scroll wheel can be used to navigate the scroll view.
 */
  scrollingEnabled: boolean;
/**
 * If `true`, the tab offset will be changed to keep the currently selected tab visible.
 */
  scrollToSelected: boolean;
/**
 * If `true`, enables selecting a tab with the right mouse button.
 */
  selectWithRmb: boolean;
/**
 * Sets the position at which tabs will be placed. See `AlignmentMode` for details.
 */
  tabAlignment: int;
/**
 * Sets when the close button will appear on the tabs. See `CloseButtonDisplayPolicy` for details.
 */
  tabCloseDisplayPolicy: int;
/**
 * The number of tabs currently in the bar.
 */
  tabCount: int;
/**
 * `TabBar`s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with `drag_to_rearrange_enabled`.
 * Setting this to `-1` will disable rearranging between `TabBar`s.
 */
  tabsRearrangeGroup: int;
/**
 * Adds a new tab.
 * @param title string (optional, default: "")
 * @param icon Texture2D (optional, default: null)
 */
  addTab(title?: string, icon?: Texture2D): void;
/**
 * Clears all tabs.
 */
  clearTabs(): void;
/**
 * Moves the scroll view to make the tab visible.
 * @param idx int
 */
  ensureTabVisible(idx: int): void;
/**
 * Returns `true` if the offset buttons (the ones that appear when there's not enough space for all tabs) are visible.
 * @returns boolean
 */
  getOffsetButtonsVisible(): boolean;
/**
 * Returns the previously active tab index.
 * @returns int
 */
  getPreviousTab(): int;
/**
 * Returns the icon for the right button of the tab at index `tab_idx` or `null` if the right button has no icon.
 * @param tabIdx int
 * @returns Texture2D
 */
  getTabButtonIcon(tabIdx: int): Texture2D;
/**
 * Returns the icon for the tab at index `tab_idx` or `null` if the tab has no icon.
 * @param tabIdx int
 * @returns Texture2D
 */
  getTabIcon(tabIdx: int): Texture2D;
/**
 * Returns the maximum allowed width of the icon for the tab at index `tab_idx`.
 * @param tabIdx int
 * @returns int
 */
  getTabIconMaxWidth(tabIdx: int): int;
/**
 * Returns the index of the tab at local coordinates `point`. Returns `-1` if the point is outside the control boundaries or if there's no tab at the queried position.
 * @param point Vector2
 * @returns int
 */
  getTabIdxAtPoint(point: Vector2): int;
/**
 * Returns tab title language code.
 * @param tabIdx int
 * @returns string
 */
  getTabLanguage(tabIdx: int): string;
/**
 * Returns the metadata value set to the tab at index `tab_idx` using `set_tab_metadata`. If no metadata was previously set, returns `null` by default.
 * @param tabIdx int
 * @returns Variant
 */
  getTabMetadata(tabIdx: int): Variant;
/**
 * Returns the number of hidden tabs offsetted to the left.
 * @returns int
 */
  getTabOffset(): int;
/**
 * Returns tab `Rect2` with local position and size.
 * @param tabIdx int
 * @returns Rect2
 */
  getTabRect(tabIdx: int): Rect2;
/**
 * Returns tab title text base writing direction.
 * @param tabIdx int
 * @returns int
 */
  getTabTextDirection(tabIdx: int): int;
/**
 * Returns the title of the tab at index `tab_idx`.
 * @param tabIdx int
 * @returns string
 */
  getTabTitle(tabIdx: int): string;
/**
 * Returns the tooltip text of the tab at index `tab_idx`.
 * @param tabIdx int
 * @returns string
 */
  getTabTooltip(tabIdx: int): string;
/**
 * Returns `true` if the tab at index `tab_idx` is disabled.
 * @param tabIdx int
 * @returns boolean
 */
  isTabDisabled(tabIdx: int): boolean;
/**
 * Returns `true` if the tab at index `tab_idx` is hidden.
 * @param tabIdx int
 * @returns boolean
 */
  isTabHidden(tabIdx: int): boolean;
/**
 * Moves a tab from `from` to `to`.
 * @param from_ int
 * @param to int
 */
  moveTab(from_: int, to: int): void;
/**
 * Removes the tab at index `tab_idx`.
 * @param tabIdx int
 */
  removeTab(tabIdx: int): void;
/**
 * Selects the first available tab with greater index than the currently selected. Returns `true` if tab selection changed.
 * @returns boolean
 */
  selectNextAvailable(): boolean;
/**
 * Selects the first available tab with lower index than the currently selected. Returns `true` if tab selection changed.
 * @returns boolean
 */
  selectPreviousAvailable(): boolean;
/**
 * Sets an `icon` for the button of the tab at index `tab_idx` (located to the right, before the close button), making it visible and clickable (See `tab_button_pressed`). Giving it a `null` value will hide the button.
 * @param tabIdx int
 * @param icon Texture2D
 */
  setTabButtonIcon(tabIdx: int, icon: Texture2D): void;
/**
 * If `disabled` is `true`, disables the tab at index `tab_idx`, making it non-interactable.
 * @param tabIdx int
 * @param disabled boolean
 */
  setTabDisabled(tabIdx: int, disabled: boolean): void;
/**
 * If `hidden` is `true`, hides the tab at index `tab_idx`, making it disappear from the tab area.
 * @param tabIdx int
 * @param hidden boolean
 */
  setTabHidden(tabIdx: int, hidden: boolean): void;
/**
 * Sets an `icon` for the tab at index `tab_idx`.
 * @param tabIdx int
 * @param icon Texture2D
 */
  setTabIcon(tabIdx: int, icon: Texture2D): void;
/**
 * Sets the maximum allowed width of the icon for the tab at index `tab_idx`. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio.
 * @param tabIdx int
 * @param width int
 */
  setTabIconMaxWidth(tabIdx: int, width: int): void;
/**
 * Sets language code of tab title used for line-breaking and text shaping algorithms, if left empty current locale is used instead.
 * @param tabIdx int
 * @param language string
 */
  setTabLanguage(tabIdx: int, language: string): void;
/**
 * Sets the metadata value for the tab at index `tab_idx`, which can be retrieved later using `get_tab_metadata`.
 * @param tabIdx int
 * @param metadata Variant
 */
  setTabMetadata(tabIdx: int, metadata: Variant): void;
/**
 * Sets tab title base writing direction.
 * @param tabIdx int
 * @param direction int
 */
  setTabTextDirection(tabIdx: int, direction: int): void;
/**
 * Sets a `title` for the tab at index `tab_idx`.
 * @param tabIdx int
 * @param title string
 */
  setTabTitle(tabIdx: int, title: string): void;
/**
 * Sets a `tooltip` for tab at index `tab_idx`.
 * 
 * **Note:** By default, if the `tooltip` is empty and the tab text is truncated (not all characters fit into the tab), the title will be displayed as a tooltip. To hide the tooltip, assign `" "` as the `tooltip` text.
 * @param tabIdx int
 * @param tooltip string
 */
  setTabTooltip(tabIdx: int, tooltip: string): void;
/**
 * Emitted when the active tab is rearranged via mouse drag. See `drag_to_rearrange_enabled`.
 */
  activeTabRearranged: Signal<[idxTo: int]>;
/**
 * Emitted when a tab's right button is pressed. See `set_tab_button_icon`.
 */
  tabButtonPressed: Signal<[tab: int]>;
/**
 * Emitted when switching to another tab.
 */
  tabChanged: Signal<[tab: int]>;
/**
 * Emitted when a tab is clicked, even if it is the current tab.
 */
  tabClicked: Signal<[tab: int]>;
/**
 * Emitted when a tab's close button is pressed.
 * 
 * **Note:** Tabs are not removed automatically once the close button is pressed, this behavior needs to be programmed manually. For example:
 * 
 * 				```gdscript
 * 
 * 				$TabBar.tab_close_pressed.connect($TabBar.remove_tab)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				GetNode<TabBar>("TabBar").TabClosePressed += GetNode<TabBar>("TabBar").RemoveTab;
 * 				
 * 
 * ```
 * 
 */
  tabClosePressed: Signal<[tab: int]>;
/**
 * Emitted when a tab is hovered by the mouse.
 */
  tabHovered: Signal<[tab: int]>;
/**
 * Emitted when a tab is right-clicked. `select_with_rmb` must be enabled.
 */
  tabRmbClicked: Signal<[tab: int]>;
/**
 * Emitted when a tab is selected via click, directional input, or script, even if it is the current tab.
 */
  tabSelected: Signal<[tab: int]>;
/**
 * Places tabs to the left.
 */
  static readonly ALIGNMENT_LEFT: int;
/**
 * Places tabs in the middle.
 */
  static readonly ALIGNMENT_CENTER: int;
/**
 * Places tabs to the right.
 */
  static readonly ALIGNMENT_RIGHT: int;
/**
 * Represents the size of the `AlignmentMode` enum.
 */
  static readonly ALIGNMENT_MAX: int;
/**
 * Never show the close buttons.
 */
  static readonly CLOSE_BUTTON_SHOW_NEVER: int;
/**
 * Only show the close button on the currently active tab.
 */
  static readonly CLOSE_BUTTON_SHOW_ACTIVE_ONLY: int;
/**
 * Show the close button on all tabs.
 */
  static readonly CLOSE_BUTTON_SHOW_ALWAYS: int;
/**
 * Represents the size of the `CloseButtonDisplayPolicy` enum.
 */
  static readonly CLOSE_BUTTON_MAX: int;
}
