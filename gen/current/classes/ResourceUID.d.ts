import type { GodotArray, GodotDictionary, Object, float, int } from "../index.d.ts";
/**
 * A singleton that manages the unique identifiers of all resources within a project.
 * 
 * Resource UIDs (Unique IDentifiers) allow the engine to keep references between resources intact, even if files are renamed or moved. They can be accessed with `uid://`.
 * `ResourceUID` keeps track of all registered resource UIDs in a project, generates new UIDs, and converts between their string and integer representations.
 */
export class ResourceUID extends Object {
/**
 * Adds a new UID value which is mapped to the given resource path.
 * Fails with an error if the UID already exists, so be sure to check `has_id` beforehand, or use `set_id` instead.
 * @param id int
 * @param path string
 */
  addId(id: int, path: string): void;
/**
 * Generates a random resource UID which is guaranteed to be unique within the list of currently loaded UIDs.
 * In order for this UID to be registered, you must call `add_id` or `set_id`.
 * @returns int
 */
  createId(): int;
/**
 * Returns the path that the given UID value refers to.
 * Fails with an error if the UID does not exist, so be sure to check `has_id` beforehand.
 * @param id int
 * @returns string
 */
  getIdPath(id: int): string;
/**
 * Returns whether the given UID value is known to the cache.
 * @param id int
 * @returns boolean
 */
  hasId(id: int): boolean;
/**
 * Converts the given UID to a `uid://` string value.
 * @param id int
 * @returns string
 */
  idToText(id: int): string;
/**
 * Removes a loaded UID value from the cache.
 * Fails with an error if the UID does not exist, so be sure to check `has_id` beforehand.
 * @param id int
 */
  removeId(id: int): void;
/**
 * Updates the resource path of an existing UID.
 * Fails with an error if the UID does not exist, so be sure to check `has_id` beforehand, or use `add_id` instead.
 * @param id int
 * @param path string
 */
  setId(id: int, path: string): void;
/**
 * Extracts the UID value from the given `uid://` string.
 * @param textId string
 * @returns int
 */
  textToId(textId: string): int;
/**
 * The value to use for an invalid UID, for example if the resource could not be loaded.
 * Its text representation is `uid://<invalid>`.
 */
  static readonly INVALID_ID: int;
}
