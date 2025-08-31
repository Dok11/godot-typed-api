import type { GodotArray, GodotDictionary, JavaClass, JavaObject, Object, float, int } from "../index.d.ts";
/**
 * Provides access to the Java Native Interface.
 * 
 * The JavaClassWrapper singleton provides a way for the Godot application to send and receive data through the Java Native Interface (https://developer.android.com/training/articles/perf-jni) (JNI).
 * 
 * **Note:** This singleton is only available in Android builds.
 * 
 * 		```gdscript
 * 
 * 		var LocalDateTime = JavaClassWrapper.wrap("java.time.LocalDateTime")
 * 		var DateTimeFormatter = JavaClassWrapper.wrap("java.time.format.DateTimeFormatter")
 * 
 * 		var datetime = LocalDateTime.now()
 * 		var formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")
 * 
 * 		print(datetime.format(formatter))
 * 		
 * 
 * ```
 * 
 * **Warning:** When calling Java methods, be sure to check `JavaClassWrapper.get_exception` to check if the method threw an exception.
 */
export class JavaClassWrapper extends Object {
/**
 * Returns the Java exception from the last call into a Java class. If there was no exception, it will return `null`.
 * 
 * **Note:** This method only works on Android. On every other platform, this method will always return `null`.
 * @returns JavaObject
 */
  getException(): JavaObject;
/**
 * Wraps a class defined in Java, and returns it as a `JavaClass` `Object` type that Godot can interact with.
 * 
 * **Note:** This method only works on Android. On every other platform, this method does nothing and returns an empty `JavaClass`.
 * @param name string
 * @returns JavaClass
 */
  wrap(name: string): JavaClass;
}
