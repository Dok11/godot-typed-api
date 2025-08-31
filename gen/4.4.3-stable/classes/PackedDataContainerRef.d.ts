import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * An internal class used by `PackedDataContainer` to pack nested arrays and dictionaries.
 * 
 * When packing nested containers using `PackedDataContainer`, they are recursively packed into `PackedDataContainerRef` (only applies to `Array` and `Dictionary`). Their data can be retrieved the same way as from `PackedDataContainer`.
 * 
 * 		```gdscript
 * 
 * 		var packed = PackedDataContainer.new()
 * 		packed.pack([1, 2, 3, ["nested1", "nested2"], 4, 5, 6])
 * 
 * 		for element in packed:
 * 		    if element is PackedDataContainerRef:
 * 		        for subelement in element:
 * 		            print("::", subelement)
 * 		    else:
 * 		        print(element)
 * 		
 * 
 * ```
 * Prints:
 * [codeblock lang=text]
 * 1
 * 2
 * 3
 * ::nested1
 * ::nested2
 * 4
 * 5
 * 6
 * [/codeblock]
 */
export class PackedDataContainerRef extends RefCounted {
/**
 * Returns the size of the packed container (see `Array.size` and `Dictionary.size`).
 * @returns int
 */
  size(): int;
}
