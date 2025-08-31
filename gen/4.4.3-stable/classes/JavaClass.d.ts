import type { Dictionary, GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Represents a class from the Java Native Interface.
 * 
 * Represents a class from the Java Native Interface. It is returned from `JavaClassWrapper.wrap`.
 * 
 * **Note:** This class only works on Android. On any other platform, this class does nothing.
 * 
 * **Note:** This class is not to be confused with `JavaScriptObject`.
 */
export class JavaClass extends RefCounted {
/**
 * Returns the Java class name.
 * @returns string
 */
  getJavaClassName(): string;
/**
 * Returns the object's Java methods and their signatures as an `Array` of dictionaries, in the same format as `Object.get_method_list`.
 * @returns Dictionary[]
 */
  getJavaMethodList(): Dictionary[];
/**
 * Returns a `JavaClass` representing the Java parent class of this class.
 * @returns JavaClass
 */
  getJavaParentClass(): JavaClass;
}
