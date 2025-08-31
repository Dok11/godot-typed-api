import type { Dictionary, GodotArray, GodotDictionary, Object, Resource, StringName, Variant, float, int } from "../index.d.ts";
/**
 * A class stored as a resource.
 * 
 * A class stored as a resource. A script extends the functionality of all objects that instantiate it.
 * This is the base class for all scripts and should not be used directly. Trying to create a new script with this class will result in an error.
 * The `new` method of a script subclass creates a new instance. `Object.set_script` extends an existing object, if that object's class matches one of the script's base classes.
 */
export class Script extends Resource {
/**
 * The script source code or an empty string if source code is not available. When set, does not reload the class implementation automatically.
 */
  sourceCode: string;
/**
 * Returns `true` if the script can be instantiated.
 * @returns boolean
 */
  canInstantiate(): boolean;
/**
 * Returns the script directly inherited by this script.
 * @returns Script
 */
  getBaseScript(): Script;
/**
 * Returns the class name associated with the script, if there is one. Returns an empty string otherwise.
 * To give the script a global name, you can use the `class_name` keyword in GDScript and the ``GlobalClass`` attribute in C#.
 * 
 * 				```gdscript
 * 
 * 				class_name MyNode
 * 				extends Node
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				using Godot;
 * 
 * 				`GlobalClass`
 * 				public partial class MyNode : Node
 * 				{
 * 				}
 * 				
 * 
 * ```
 * 
 * @returns StringName
 */
  getGlobalName(): StringName;
/**
 * Returns the script's base type.
 * @returns StringName
 */
  getInstanceBaseType(): StringName;
/**
 * Returns the default value of the specified property.
 * @param property StringName
 * @returns Variant
 */
  getPropertyDefaultValue(property: StringName): Variant;
/**
 * Returns a `Dictionary` mapping method names to their RPC configuration defined by this script.
 * @returns Variant
 */
  getRpcConfig(): Variant;
/**
 * Returns a dictionary containing constant names and their values.
 * @returns GodotDictionary<any>
 */
  getScriptConstantMap(): GodotDictionary<any>;
/**
 * Returns the list of methods in this `Script`.
 * @returns Dictionary[]
 */
  getScriptMethodList(): Dictionary[];
/**
 * Returns the list of properties in this `Script`.
 * @returns Dictionary[]
 */
  getScriptPropertyList(): Dictionary[];
/**
 * Returns the list of user signals defined in this `Script`.
 * @returns Dictionary[]
 */
  getScriptSignalList(): Dictionary[];
/**
 * Returns `true` if the script, or a base class, defines a signal with the given name.
 * @param signalName StringName
 * @returns boolean
 */
  hasScriptSignal(signalName: StringName): boolean;
/**
 * Returns `true` if the script contains non-empty source code.
 * 
 * **Note:** If a script does not have source code, this does not mean that it is invalid or unusable. For example, a `GDScript` that was exported with binary tokenization has no source code, but still behaves as expected and could be instantiated. This can be checked with `can_instantiate`.
 * @returns boolean
 */
  hasSourceCode(): boolean;
/**
 * Returns `true` if `base_object` is an instance of this script.
 * @param baseObject Object
 * @returns boolean
 */
  instanceHas(baseObject: Object): boolean;
/**
 * Returns `true` if the script is an abstract script. An abstract script does not have a constructor and cannot be instantiated.
 * @returns boolean
 */
  isAbstract(): boolean;
/**
 * Returns `true` if the script is a tool script. A tool script can run in the editor.
 * @returns boolean
 */
  isTool(): boolean;
/**
 * Reloads the script's class implementation. Returns an error code.
 * @param keepState boolean (optional, default: false)
 * @returns int
 */
  reload(keepState?: boolean): int;
}
