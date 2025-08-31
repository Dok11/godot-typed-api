import type { GodotArray, GodotDictionary, RefCounted, float, int } from "../index.d.ts";
/**
 * Creates packages that can be loaded into a running project.
 * 
 * The `PCKPacker` is used to create packages that can be loaded into a running project using `ProjectSettings.load_resource_pack`.
 * 
 * 		```gdscript
 * 
 * 		var packer = PCKPacker.new()
 * 		packer.pck_start("test.pck")
 * 		packer.add_file("res://text.txt", "text.txt")
 * 		packer.flush()
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var packer = new PckPacker();
 * 		packer.PckStart("test.pck");
 * 		packer.AddFile("res://text.txt", "text.txt");
 * 		packer.Flush();
 * 		
 * 
 * ```
 * 
 * The above `PCKPacker` creates package `test.pck`, then adds a file named `text.txt` at the root of the package.
 * 
 * **Note:** PCK is Godot's own pack file format. To create ZIP archives that can be read by any program, use `ZIPPacker` instead.
 */
export class PCKPacker extends RefCounted {
/**
 * Adds the `source_path` file to the current PCK package at the `target_path` internal path. The `res://` prefix for `target_path` is optional and stripped internally.
 * @param targetPath string
 * @param sourcePath string
 * @param encrypt boolean (optional, default: false)
 * @returns int
 */
  addFile(targetPath: string, sourcePath: string, encrypt?: boolean): int;
/**
 * Registers a file removal of the `target_path` internal path to the PCK. This is mainly used for patches. If the file at this path has been loaded from a previous PCK, it will be removed. The `res://` prefix for `target_path` is optional and stripped internally.
 * @param targetPath string
 * @returns int
 */
  addFileRemoval(targetPath: string): int;
/**
 * Writes the files specified using all `add_file` calls since the last flush. If `verbose` is `true`, a list of files added will be printed to the console for easier debugging.
 * @param verbose boolean (optional, default: false)
 * @returns int
 */
  flush(verbose?: boolean): int;
/**
 * Creates a new PCK file at the file path `pck_path`. The `.pck` file extension isn't added automatically, so it should be part of `pck_path` (even though it's not required).
 * @param pckPath string
 * @param alignment int (optional, default: 32)
 * @param key string (optional, default: "0000000000000000000000000000000000000000000000000000000000000000")
 * @param encryptDirectory boolean (optional, default: false)
 * @returns int
 */
  pckStart(pckPath: string, alignment?: int, key?: string, encryptDirectory?: boolean): int;
}
