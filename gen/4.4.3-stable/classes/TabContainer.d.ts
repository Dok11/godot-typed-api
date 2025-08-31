import type { Container, Control, GodotArray, GodotDictionary, Node, Popup, Signal, TabBar, Texture2D, Variant, Vector2, float, int } from "../index.d.ts";
/**
 * A container that creates a tab for each child control, displaying only the active tab's control.
 * 
 * Arranges child controls into a tabbed view, creating a tab for each one. The active tab's corresponding control is made visible, while all other child controls are hidden. Ignores non-control children.
 * 
 * **Note:** The drawing of the clickable tabs is handled by this node; `TabBar` is not needed.
 */
export class TabContainer extends Container {
/**
 * If `true`, all tabs are drawn in front of the panel. If `false`, inactive tabs are drawn behind the panel.
 */
  allTabsInFront: boolean;
/**
 * If `true`, tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible.
 */
  clipTabs: boolean;
/**
 * The current tab index. When set, this index's `Control` node's `visible` property is set to `true` and all others are set to `false`.
 * A value of `-1` means that no tab is selected.
 */
  currentTab: int;
/**
 * If `true`, all tabs can be deselected so that no tab is selected. Click on the `current_tab` to deselect it.
 * Only the tab header will be shown if no tabs are selected.
 */
  deselectEnabled: boolean;
/**
 * If `true`, tabs can be rearranged with mouse drag.
 */
  dragToRearrangeEnabled: boolean;
/**
 * Sets the position at which tabs will be placed. See `TabBar.AlignmentMode` for details.
 */
  tabAlignment: int;
/**
 * The focus access mode for the internal `TabBar` node.
 */
  tabFocusMode: int;
/**
 * Sets the position of the tab bar. See `TabPosition` for details.
 */
  tabsPosition: int;
/**
 * `TabContainer`s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with `drag_to_rearrange_enabled`.
 * Setting this to `-1` will disable rearranging between `TabContainer`s.
 */
  tabsRearrangeGroup: int;
/**
 * If `true`, tabs are visible. If `false`, tabs' content and titles are hidden.
 */
  tabsVisible: boolean;
/**
 * If `true`, child `Control` nodes that are hidden have their minimum size take into account in the total, instead of only the currently visible one.
 */
  useHiddenTabsForMinSize: boolean;
/**
 * Returns the child `Control` node located at the active tab index.
 * @returns Control
 */
  getCurrentTabControl(): Control;
/**
 * Returns the `Popup` node instance if one has been set already with `set_popup`.
 * 
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their `Window.visible` property.
 * @returns Popup
 */
  getPopup(): Popup;
/**
 * Returns the previously active tab index.
 * @returns int
 */
  getPreviousTab(): int;
/**
 * Returns the `TabBar` contained in this container.
 * 
 * **Warning:** This is a required internal node, removing and freeing it or editing its tabs may cause a crash. If you wish to edit the tabs, use the methods provided in `TabContainer`.
 * @returns TabBar
 */
  getTabBar(): TabBar;
/**
 * Returns the button icon from the tab at index `tab_idx`.
 * @param tabIdx int
 * @returns Texture2D
 */
  getTabButtonIcon(tabIdx: int): Texture2D;
/**
 * Returns the `Control` node from the tab at index `tab_idx`.
 * @param tabIdx int
 * @returns Control
 */
  getTabControl(tabIdx: int): Control;
/**
 * Returns the number of tabs.
 * @returns int
 */
  getTabCount(): int;
/**
 * Returns the `Texture2D` for the tab at index `tab_idx` or `null` if the tab has no `Texture2D`.
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
 * Returns the index of the tab tied to the given `control`. The control must be a child of the `TabContainer`.
 * @param control Control
 * @returns int
 */
  getTabIdxFromControl(control: Control): int;
/**
 * Returns the metadata value set to the tab at index `tab_idx` using `set_tab_metadata`. If no metadata was previously set, returns `null` by default.
 * @param tabIdx int
 * @returns Variant
 */
  getTabMetadata(tabIdx: int): Variant;
/**
 * Returns the title of the tab at index `tab_idx`. Tab titles default to the name of the indexed child node, but this can be overridden with `set_tab_title`.
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
 * If set on a `Popup` node instance, a popup menu icon appears in the top-right corner of the `TabContainer` (setting it to `null` will make it go away). Clicking it will expand the `Popup` node.
 * @param popup Node
 */
  setPopup(popup: Node): void;
/**
 * Sets the button icon from the tab at index `tab_idx`.
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
 * Sets an icon for the tab at index `tab_idx`.
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
 * Sets the metadata value for the tab at index `tab_idx`, which can be retrieved later using `get_tab_metadata`.
 * @param tabIdx int
 * @param metadata Variant
 */
  setTabMetadata(tabIdx: int, metadata: Variant): void;
/**
 * Sets a custom title for the tab at index `tab_idx` (tab titles default to the name of the indexed child node). Set it back to the child's name to make the tab default to it again.
 * @param tabIdx int
 * @param title string
 */
  setTabTitle(tabIdx: int, title: string): void;
/**
 * Sets a custom tooltip text for tab at index `tab_idx`.
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
 * Emitted when the `TabContainer`'s `Popup` button is clicked. See `set_popup` for details.
 */
  prePopupPressed: Signal<[]>;
/**
 * Emitted when the user clicks on the button icon on this tab.
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
 * Emitted when a tab is hovered by the mouse.
 */
  tabHovered: Signal<[tab: int]>;
/**
 * Emitted when a tab is selected via click, directional input, or script, even if it is the current tab.
 */
  tabSelected: Signal<[tab: int]>;
/**
 * Places the tab bar at the top.
 */
  static readonly POSITION_TOP: int;
/**
 * Places the tab bar at the bottom. The tab bar's `StyleBox` will be flipped vertically.
 */
  static readonly POSITION_BOTTOM: int;
/**
 * Represents the size of the `TabPosition` enum.
 */
  static readonly POSITION_MAX: int;
}
