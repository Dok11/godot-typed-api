import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Holds a reference to an `Object`'s instance ID.
 * 
 * Utility class which holds a reference to the internal identifier of an `Object` instance, as given by `Object.get_instance_id`. This ID can then be used to retrieve the object instance with `@GlobalScope.instance_from_id`.
 * This class is used internally by the editor inspector and script debugger, but can also be used in plugins to pass and display objects as their IDs.
 */
export class EncodedObjectAsID extends RefCounted {
/**
 * The `Object` identifier stored in this `EncodedObjectAsID` instance. The object instance can be retrieved with `@GlobalScope.instance_from_id`.
 */
  objectId: int;
}
