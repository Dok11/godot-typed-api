import type { EditorResourceTooltipPlugin, GodotArray, GodotDictionary, PackedStringArray, Resource, Signal, VBoxContainer, float, int } from "../index.d.ts";
/**
 * Godot editor's dock for managing files in the project.
 * 
 * This class is available only in `EditorPlugin`s and can't be instantiated. You can access it using `EditorInterface.get_file_system_dock`.
 * While `FileSystemDock` doesn't expose any methods for file manipulation, it can listen for various file-related signals.
 */
export class FileSystemDock extends VBoxContainer {
/**
 * Registers a new `EditorResourceTooltipPlugin`.
 * @param plugin EditorResourceTooltipPlugin
 */
  addResourceTooltipPlugin(plugin: EditorResourceTooltipPlugin): void;
/**
 * Sets the given `path` as currently selected, ensuring that the selected file/directory is visible.
 * @param path string
 */
  navigateToPath(path: string): void;
/**
 * Removes an `EditorResourceTooltipPlugin`. Fails if the plugin wasn't previously added.
 * @param plugin EditorResourceTooltipPlugin
 */
  removeResourceTooltipPlugin(plugin: EditorResourceTooltipPlugin): void;
/**
 * Emitted when the user switches file display mode or split mode.
 */
  displayModeChanged: Signal<[]>;
/**
 * Emitted when the given `file` was removed.
 */
  fileRemoved: Signal<[file: string]>;
/**
 * Emitted when a file is moved from `old_file` path to `new_file` path.
 */
  filesMoved: Signal<[oldFile: string, newFile: string]>;
/**
 * Emitted when folders change color.
 */
  folderColorChanged: Signal<[]>;
/**
 * Emitted when a folder is moved from `old_folder` path to `new_folder` path.
 */
  folderMoved: Signal<[oldFolder: string, newFolder: string]>;
/**
 * Emitted when the given `folder` was removed.
 */
  folderRemoved: Signal<[folder: string]>;
/**
 * Emitted when a new scene is created that inherits the scene at `file` path.
 */
  inherit: Signal<[file: string]>;
/**
 * Emitted when the given scenes are being instantiated in the editor.
 */
  instantiate: Signal<[files: PackedStringArray]>;
/**
 * Emitted when an external `resource` had its file removed.
 */
  resourceRemoved: Signal<[resource: Resource]>;
}
