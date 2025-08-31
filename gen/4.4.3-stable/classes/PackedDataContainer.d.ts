import type { GodotArray, GodotDictionary, Resource, Variant, float, int } from "../index.d.ts";
/**
 * Efficiently packs and serializes `Array` or `Dictionary`.
 * 
 * `PackedDataContainer` can be used to efficiently store data from untyped containers. The data is packed into raw bytes and can be saved to file. Only `Array` and `Dictionary` can be stored this way.
 * You can retrieve the data by iterating on the container, which will work as if iterating on the packed data itself. If the packed container is a `Dictionary`, the data can be retrieved by key names (`String`/`StringName` only).
 * 
 * 		```gdscript
 * 
 * 		var data = { "key": "value", "another_key": 123, "lock": Vector2() }
 * 		var packed = PackedDataContainer.new()
 * 		packed.pack(data)
 * 		ResourceSaver.save(packed, "packed_data.res")
 * 		
 * 
 * ```
 * 
 * 		```gdscript
 * 
 * 		var container = load("packed_data.res")
 * 		for key in container:
 * 		    prints(key, container[key])
 * 		
 * 
 * ```
 * Prints:
 * [codeblock lang=text]
 * key value
 * lock (0, 0)
 * another_key 123
 * [/codeblock]
 * Nested containers will be packed recursively. While iterating, they will be returned as `PackedDataContainerRef`.
 */
export class PackedDataContainer extends Resource {
/**
 * Packs the given container into a binary representation. The `value` must be either `Array` or `Dictionary`, any other type will result in invalid data error.
 * 
 * **Note:** Subsequent calls to this method will overwrite the existing data.
 * @param value Variant
 * @returns int
 */
  pack(value: Variant): int;
/**
 * Returns the size of the packed container (see `Array.size` and `Dictionary.size`).
 * @returns int
 */
  size(): int;
}
