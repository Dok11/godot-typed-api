import type { EditorProperty, GodotArray, GodotDictionary, Object, Resource, ScrollContainer, Signal, Variant, float, int } from "../index.d.ts";
/**
 * A control used to edit properties of an object.
 * 
 * This is the control that implements property editing in the editor's Settings dialogs, the Inspector dock, etc. To get the `EditorInspector` used in the editor's Inspector dock, use `EditorInterface.get_inspector`.
 * `EditorInspector` will show properties in the same order as the array returned by `Object.get_property_list`.
 * If a property's name is path-like (i.e. if it contains forward slashes), `EditorInspector` will create nested sections for "directories" along the path. For example, if a property is named `highlighting/gdscript/node_path_color`, it will be shown as "Node Path Color" inside the "GDScript" section nested inside the "Highlighting" section.
 * If a property has `PROPERTY_USAGE_GROUP` usage, it will group subsequent properties whose name starts with the property's hint string. The group ends when a property does not start with that hint string or when a new group starts. An empty group name effectively ends the current group. `EditorInspector` will create a top-level section for each group. For example, if a property with group usage is named `Collide With` and its hint string is `collide_with_`, a subsequent `collide_with_area` property will be shown as "Area" inside the "Collide With" section. There is also a special case: when the hint string contains the name of a property, that property is grouped too. This is mainly to help grouping properties like `font`, `font_color` and `font_size` (using the hint string `font_`).
 * If a property has `PROPERTY_USAGE_SUBGROUP` usage, a subgroup will be created in the same way as a group, and a second-level section will be created for each subgroup.
 * 
 * **Note:** Unlike sections created from path-like property names, `EditorInspector` won't capitalize the name for sections created from groups. So properties with group usage usually use capitalized names instead of snake_cased names.
 */
export class EditorInspector extends ScrollContainer {
  drawFocusBorder: boolean;
  focusMode: int;
  horizontalScrollMode: int;
/**
 * Shows the properties of the given `object` in this inspector for editing. To clear the inspector, call this method with `null`.
 * 
 * **Note:** If you want to edit an object in the editor's main inspector, use the `edit_*` methods in `EditorInterface` instead.
 * @param object Object
 */
  edit(object: Object): void;
/**
 * Returns the object currently selected in this inspector.
 * @returns Object
 */
  getEditedObject(): Object;
/**
 * Gets the path of the currently selected property.
 * @returns string
 */
  getSelectedPath(): string;
/**
 * Creates a property editor that can be used by plugin UI to edit the specified property of an `object`.
 * @param object Object
 * @param type_ int
 * @param path string
 * @param hint int
 * @param hintText string
 * @param usage int
 * @param wide boolean (optional, default: false)
 * @returns EditorProperty
 */
  instantiatePropertyEditor(object: Object, type_: int, path: string, hint: int, hintText: string, usage: int, wide?: boolean): EditorProperty;
/**
 * Emitted when the object being edited by the inspector has changed.
 */
  editedObjectChanged: Signal<[]>;
/**
 * Emitted when the Edit button of an `Object` has been pressed in the inspector. This is mainly used in the remote scene tree Inspector.
 */
  objectIdSelected: Signal<[id: int]>;
/**
 * Emitted when a property is removed from the inspector.
 */
  propertyDeleted: Signal<[property: string]>;
/**
 * Emitted when a property is edited in the inspector.
 */
  propertyEdited: Signal<[property: string]>;
/**
 * Emitted when a property is keyed in the inspector. Properties can be keyed by clicking the "key" icon next to a property when the Animation panel is toggled.
 */
  propertyKeyed: Signal<[property: string, value: Variant, advance: boolean]>;
/**
 * Emitted when a property is selected in the inspector.
 */
  propertySelected: Signal<[property: string]>;
/**
 * Emitted when a boolean property is toggled in the inspector.
 * 
 * **Note:** This signal is never emitted if the internal `autoclear` property enabled. Since this property is always enabled in the editor inspector, this signal is never emitted by the editor itself.
 */
  propertyToggled: Signal<[property: string, checked: boolean]>;
/**
 * Emitted when a resource is selected in the inspector.
 */
  resourceSelected: Signal<[resource: Resource, path: string]>;
/**
 * Emitted when a property that requires a restart to be applied is edited in the inspector. This is only used in the Project Settings and Editor Settings.
 */
  restartRequested: Signal<[]>;
}
