import type { Container, Control, GodotArray, GodotDictionary, Object, PackedStringArray, Resource, Signal, StringName, Variant, float, int } from "../index.d.ts";
/**
 * Custom control for editing properties that can be added to the `EditorInspector`.
 * 
 * A custom control for editing properties that can be added to the `EditorInspector`. It is added via `EditorInspectorPlugin`.
 */
export class EditorProperty extends Container {
/**
 * Used by the inspector, set to `true` when the property is checkable.
 */
  checkable: boolean;
/**
 * Used by the inspector, set to `true` when the property is checked.
 */
  checked: boolean;
/**
 * Used by the inspector, set to `true` when the property can be deleted by the user.
 */
  deletable: boolean;
/**
 * Used by the inspector, set to `true` when the property label is drawn.
 */
  drawBackground: boolean;
/**
 * Used by the inspector, set to `true` when the property background is drawn.
 */
  drawLabel: boolean;
/**
 * Used by the inspector, set to `true` when the property is drawn with the editor theme's warning color. This is used for editable children's properties.
 */
  drawWarning: boolean;
/**
 * Used by the inspector, set to `true` when the property can add keys for animation.
 */
  keying: boolean;
/**
 * Set this property to change the label (if you want to show one).
 */
  label: string;
/**
 * Space distribution ratio between the label and the editing field.
 */
  nameSplitRatio: float;
/**
 * Used by the inspector, set to `true` when the property is read-only.
 */
  readOnly: boolean;
/**
 * Used by the inspector, set to `true` when the property is selectable.
 */
  selectable: boolean;
/**
 * Used by the inspector, set to `true` when the property is using folding.
 */
  useFolding: boolean;
/**
 * If any of the controls added can gain keyboard focus, add it here. This ensures that focus will be restored if the inspector is refreshed.
 * @param control Control
 */
  addFocusable(control: Control): void;
/**
 * Draw property as not selected. Used by the inspector.
 */
  deselect(): void;
/**
 * If one or several properties have changed, this must be called. `field` is used in case your editor can modify fields separately (as an example, Vector3.x). The `changing` argument avoids the editor requesting this property to be refreshed (leave as `false` if unsure).
 * @param property StringName
 * @param value Variant
 * @param field StringName (optional, default: &"")
 * @param changing boolean (optional, default: false)
 */
  emitChanged(property: StringName, value: Variant, field?: StringName, changing?: boolean): void;
/**
 * Gets the edited object.
 * @returns Object
 */
  getEditedObject(): Object;
/**
 * Gets the edited property. If your editor is for a single property (added via `EditorInspectorPlugin._parse_property`), then this will return the property.
 * @returns StringName
 */
  getEditedProperty(): StringName;
/**
 * Returns `true` if property is drawn as selected. Used by the inspector.
 * @returns boolean
 */
  isSelected(): boolean;
/**
 * Draw property as selected. Used by the inspector.
 * @param focusable int (optional, default: -1)
 */
  select(focusable?: int): void;
/**
 * Puts the `editor` control below the property label. The control must be previously added using `Node.add_child`.
 * @param editor Control
 */
  setBottomEditor(editor: Control): void;
/**
 * Used by the inspector, set to a control that will be used as a reference to calculate the size of the label.
 * @param control Control
 */
  setLabelReference(control: Control): void;
/**
 * Assigns object and property to edit.
 * @param object Object
 * @param property StringName
 */
  setObjectAndProperty(object: Object, property: StringName): void;
/**
 * Called when the read-only status of the property is changed. It may be used to change custom controls into a read-only or modifiable state.
 * @param readOnly boolean
 */
  private setReadOnly(readOnly: boolean): void;
/**
 * Forces refresh of the property display.
 */
  updateProperty(): void;
/**
 * When this virtual function is called, you must update your editor.
 */
  private updateProperty(): void;
/**
 * Emit it if you want multiple properties modified at the same time. Do not use if added via `EditorInspectorPlugin._parse_property`.
 */
  multiplePropertiesChanged: Signal<[properties: PackedStringArray, value: GodotArray<any>]>;
/**
 * Used by sub-inspectors. Emit it if what was selected was an Object ID.
 */
  objectIdSelected: Signal<[property: StringName, id: int]>;
/**
 * Emitted when the revertability (i.e., whether it has a non-default value and thus is displayed with a revert icon) of a property has changed.
 */
  propertyCanRevertChanged: Signal<[property: StringName, canRevert: boolean]>;
/**
 * Do not emit this manually, use the `emit_changed` method instead.
 */
  propertyChanged: Signal<[property: StringName, value: Variant, field: StringName, changing: boolean]>;
/**
 * Emitted when a property was checked. Used internally.
 */
  propertyChecked: Signal<[property: StringName, checked: boolean]>;
/**
 * Emitted when a property was deleted. Used internally.
 */
  propertyDeleted: Signal<[property: StringName]>;
/**
 * Emit it if you want to mark a property as favorited, making it appear at the top of the inspector.
 */
  propertyFavorited: Signal<[property: StringName, favorited: boolean]>;
/**
 * Emit it if you want to add this value as an animation key (check for keying being enabled first).
 */
  propertyKeyed: Signal<[property: StringName]>;
/**
 * Emit it if you want to key a property with a single value.
 */
  propertyKeyedWithValue: Signal<[property: StringName, value: Variant]>;
/**
 * Emit it if you want to mark (or unmark) the value of a property for being saved regardless of being equal to the default value.
 * The default value is the one the property will get when the node is just instantiated and can come from an ancestor scene in the inheritance/instantiation chain, a script or a builtin class.
 */
  propertyPinned: Signal<[property: StringName, pinned: boolean]>;
/**
 * If you want a sub-resource to be edited, emit this signal with the resource.
 */
  resourceSelected: Signal<[path: string, resource: Resource]>;
/**
 * Emitted when selected. Used internally.
 */
  selected: Signal<[path: string, focusableIdx: int]>;
}
