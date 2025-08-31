import type { Dictionary, GodotArray, GodotDictionary, Object, PackedStringArray, StringName, Variant, float, int } from "../index.d.ts";
/**
 * A class information repository.
 * 
 * Provides access to metadata stored for every available class.
 */
export class ClassDB extends Object {
/**
 * Returns `true` if objects can be instantiated from the specified `class`, otherwise returns `false`.
 * @param class_ StringName
 * @returns boolean
 */
  canInstantiate(class_: StringName): boolean;
/**
 * Calls a static method on a class.
 * @param class_ StringName
 * @param method StringName
 * @returns Variant
 */
  classCallStatic(class_: StringName, method: StringName): Variant;
/**
 * Returns whether the specified `class` is available or not.
 * @param class_ StringName
 * @returns boolean
 */
  classExists(class_: StringName): boolean;
/**
 * Returns the API type of `class`. See `APIType`.
 * @param class_ StringName
 * @returns int
 */
  classGetApiType(class_: StringName): int;
/**
 * Returns an array with all the keys in `enum` of `class` or its ancestry.
 * @param class_ StringName
 * @param enum_ StringName
 * @param noInheritance boolean (optional, default: false)
 * @returns PackedStringArray
 */
  classGetEnumConstants(class_: StringName, enum_: StringName, noInheritance?: boolean): PackedStringArray;
/**
 * Returns an array with all the enums of `class` or its ancestry.
 * @param class_ StringName
 * @param noInheritance boolean (optional, default: false)
 * @returns PackedStringArray
 */
  classGetEnumList(class_: StringName, noInheritance?: boolean): PackedStringArray;
/**
 * Returns the value of the integer constant `name` of `class` or its ancestry. Always returns 0 when the constant could not be found.
 * @param class_ StringName
 * @param name StringName
 * @returns int
 */
  classGetIntegerConstant(class_: StringName, name: StringName): int;
/**
 * Returns which enum the integer constant `name` of `class` or its ancestry belongs to.
 * @param class_ StringName
 * @param name StringName
 * @param noInheritance boolean (optional, default: false)
 * @returns StringName
 */
  classGetIntegerConstantEnum(class_: StringName, name: StringName, noInheritance?: boolean): StringName;
/**
 * Returns an array with the names all the integer constants of `class` or its ancestry.
 * @param class_ StringName
 * @param noInheritance boolean (optional, default: false)
 * @returns PackedStringArray
 */
  classGetIntegerConstantList(class_: StringName, noInheritance?: boolean): PackedStringArray;
/**
 * Returns the number of arguments of the method `method` of `class` or its ancestry if `no_inheritance` is `false`.
 * @param class_ StringName
 * @param method StringName
 * @param noInheritance boolean (optional, default: false)
 * @returns int
 */
  classGetMethodArgumentCount(class_: StringName, method: StringName, noInheritance?: boolean): int;
/**
 * Returns an array with all the methods of `class` or its ancestry if `no_inheritance` is `false`. Every element of the array is a `Dictionary` with the following keys: `args`, `default_args`, `flags`, `id`, `name`, `return: (class_name, hint, hint_string, name, type, usage)`.
 * 
 * **Note:** In exported release builds the debug info is not available, so the returned dictionaries will contain only method names.
 * @param class_ StringName
 * @param noInheritance boolean (optional, default: false)
 * @returns Dictionary[]
 */
  classGetMethodList(class_: StringName, noInheritance?: boolean): Dictionary[];
/**
 * Returns the value of `property` of `object` or its ancestry.
 * @param object Object
 * @param property StringName
 * @returns Variant
 */
  classGetProperty(object: Object, property: StringName): Variant;
/**
 * Returns the default value of `property` of `class` or its ancestor classes.
 * @param class_ StringName
 * @param property StringName
 * @returns Variant
 */
  classGetPropertyDefaultValue(class_: StringName, property: StringName): Variant;
/**
 * Returns the getter method name of `property` of `class`.
 * @param class_ StringName
 * @param property StringName
 * @returns StringName
 */
  classGetPropertyGetter(class_: StringName, property: StringName): StringName;
/**
 * Returns an array with all the properties of `class` or its ancestry if `no_inheritance` is `false`.
 * @param class_ StringName
 * @param noInheritance boolean (optional, default: false)
 * @returns Dictionary[]
 */
  classGetPropertyList(class_: StringName, noInheritance?: boolean): Dictionary[];
/**
 * Returns the setter method name of `property` of `class`.
 * @param class_ StringName
 * @param property StringName
 * @returns StringName
 */
  classGetPropertySetter(class_: StringName, property: StringName): StringName;
/**
 * Returns the `signal` data of `class` or its ancestry. The returned value is a `Dictionary` with the following keys: `args`, `default_args`, `flags`, `id`, `name`, `return: (class_name, hint, hint_string, name, type, usage)`.
 * @param class_ StringName
 * @param signal StringName
 * @returns GodotDictionary<any>
 */
  classGetSignal(class_: StringName, signal: StringName): GodotDictionary<any>;
/**
 * Returns an array with all the signals of `class` or its ancestry if `no_inheritance` is `false`. Every element of the array is a `Dictionary` as described in `class_get_signal`.
 * @param class_ StringName
 * @param noInheritance boolean (optional, default: false)
 * @returns Dictionary[]
 */
  classGetSignalList(class_: StringName, noInheritance?: boolean): Dictionary[];
/**
 * Returns whether `class` or its ancestry has an enum called `name` or not.
 * @param class_ StringName
 * @param name StringName
 * @param noInheritance boolean (optional, default: false)
 * @returns boolean
 */
  classHasEnum(class_: StringName, name: StringName, noInheritance?: boolean): boolean;
/**
 * Returns whether `class` or its ancestry has an integer constant called `name` or not.
 * @param class_ StringName
 * @param name StringName
 * @returns boolean
 */
  classHasIntegerConstant(class_: StringName, name: StringName): boolean;
/**
 * Returns whether `class` (or its ancestry if `no_inheritance` is `false`) has a method called `method` or not.
 * @param class_ StringName
 * @param method StringName
 * @param noInheritance boolean (optional, default: false)
 * @returns boolean
 */
  classHasMethod(class_: StringName, method: StringName, noInheritance?: boolean): boolean;
/**
 * Returns whether `class` or its ancestry has a signal called `signal` or not.
 * @param class_ StringName
 * @param signal StringName
 * @returns boolean
 */
  classHasSignal(class_: StringName, signal: StringName): boolean;
/**
 * Sets `property` value of `object` to `value`.
 * @param object Object
 * @param property StringName
 * @param value Variant
 * @returns int
 */
  classSetProperty(object: Object, property: StringName, value: Variant): int;
/**
 * Returns the names of all the classes available.
 * @returns PackedStringArray
 */
  getClassList(): PackedStringArray;
/**
 * Returns the names of all the classes that directly or indirectly inherit from `class`.
 * @param class_ StringName
 * @returns PackedStringArray
 */
  getInheritersFromClass(class_: StringName): PackedStringArray;
/**
 * Returns the parent class of `class`.
 * @param class_ StringName
 * @returns StringName
 */
  getParentClass(class_: StringName): StringName;
/**
 * Creates an instance of `class`.
 * @param class_ StringName
 * @returns Variant
 */
  instantiate(class_: StringName): Variant;
/**
 * Returns whether this `class` is enabled or not.
 * @param class_ StringName
 * @returns boolean
 */
  isClassEnabled(class_: StringName): boolean;
/**
 * Returns whether `class` (or its ancestor classes if `no_inheritance` is `false`) has an enum called `enum` that is a bitfield.
 * @param class_ StringName
 * @param enum_ StringName
 * @param noInheritance boolean (optional, default: false)
 * @returns boolean
 */
  isClassEnumBitfield(class_: StringName, enum_: StringName, noInheritance?: boolean): boolean;
/**
 * Returns whether `inherits` is an ancestor of `class` or not.
 * @param class_ StringName
 * @param inherits StringName
 * @returns boolean
 */
  isParentClass(class_: StringName, inherits: StringName): boolean;
/**
 * Native Core class type.
 */
  static readonly API_CORE: int;
/**
 * Native Editor class type.
 */
  static readonly API_EDITOR: int;
/**
 * GDExtension class type.
 */
  static readonly API_EXTENSION: int;
/**
 * GDExtension Editor class type.
 */
  static readonly API_EDITOR_EXTENSION: int;
/**
 * Unknown class type.
 */
  static readonly API_NONE: int;
}
