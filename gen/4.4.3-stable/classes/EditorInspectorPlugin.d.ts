import type { Control, GodotArray, GodotDictionary, Object, PackedStringArray, RefCounted, float, int } from "../index.d.ts";
/**
 * Plugin for adding custom property editors on the inspector.
 * 
 * `EditorInspectorPlugin` allows adding custom property editors to `EditorInspector`.
 * When an object is edited, the `_can_handle` function is called and must return `true` if the object type is supported.
 * If supported, the function `_parse_begin` will be called, allowing to place custom controls at the beginning of the class.
 * Subsequently, the `_parse_category` and `_parse_property` are called for every category and property. They offer the ability to add custom controls to the inspector too.
 * Finally, `_parse_end` will be called.
 * On each of these calls, the "add" functions can be called.
 * To use `EditorInspectorPlugin`, register it using the `EditorPlugin.add_inspector_plugin` method first.
 */
export class EditorInspectorPlugin extends RefCounted {
/**
 * Adds a custom control, which is not necessarily a property editor.
 * @param control Control
 */
  addCustomControl(control: Control): void;
/**
 * Adds a property editor for an individual property. The `editor` control must extend `EditorProperty`.
 * There can be multiple property editors for a property. If `add_to_end` is `true`, this newly added editor will be displayed after all the other editors of the property whose `add_to_end` is `false`. For example, the editor uses this parameter to add an "Edit Region" button for `Sprite2D.region_rect` below the regular `Rect2` editor.
 * `label` can be used to choose a custom label for the property editor in the inspector. If left empty, the label is computed from the name of the property instead.
 * @param property string
 * @param editor Control
 * @param addToEnd boolean (optional, default: false)
 * @param label string (optional, default: "")
 */
  addPropertyEditor(property: string, editor: Control, addToEnd?: boolean, label?: string): void;
/**
 * Adds an editor that allows modifying multiple properties. The `editor` control must extend `EditorProperty`.
 * @param label string
 * @param properties PackedStringArray
 * @param editor Control
 */
  addPropertyEditorForMultipleProperties(label: string, properties: PackedStringArray, editor: Control): void;
/**
 * Returns `true` if this object can be handled by this plugin.
 * @param object Object
 * @returns boolean
 */
  private canHandle(object: Object): boolean;
/**
 * Called to allow adding controls at the beginning of the property list for `object`.
 * @param object Object
 */
  private parseBegin(object: Object): void;
/**
 * Called to allow adding controls at the beginning of a category in the property list for `object`.
 * @param object Object
 * @param category string
 */
  private parseCategory(object: Object, category: string): void;
/**
 * Called to allow adding controls at the end of the property list for `object`.
 * @param object Object
 */
  private parseEnd(object: Object): void;
/**
 * Called to allow adding controls at the beginning of a group or a sub-group in the property list for `object`.
 * @param object Object
 * @param group string
 */
  private parseGroup(object: Object, group: string): void;
/**
 * Called to allow adding property-specific editors to the property list for `object`. The added editor control must extend `EditorProperty`. Returning `true` removes the built-in editor for this property, otherwise allows to insert a custom editor before the built-in one.
 * @param object Object
 * @param type_ int
 * @param name string
 * @param hintType int
 * @param hintString string
 * @param usageFlags int
 * @param wide boolean
 * @returns boolean
 */
  private parseProperty(object: Object, type_: int, name: string, hintType: int, hintString: string, usageFlags: int, wide: boolean): boolean;
}
