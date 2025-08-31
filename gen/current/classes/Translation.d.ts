import type { GodotArray, GodotDictionary, PackedStringArray, Resource, StringName, float, int } from "../index.d.ts";
/**
 * A language translation that maps a collection of strings to their individual translations.
 * 
 * `Translation`s are resources that can be loaded and unloaded on demand. They map a collection of strings to their individual translations, and they also provide convenience methods for pluralization.
 */
export class Translation extends Resource {
/**
 * The locale of the translation.
 */
  locale: string;
/**
 * Adds a message if nonexistent, followed by its translation.
 * An additional context could be used to specify the translation context or differentiate polysemic words.
 * @param srcMessage StringName
 * @param xlatedMessage StringName
 * @param context StringName (optional, default: &"")
 */
  addMessage(srcMessage: StringName, xlatedMessage: StringName, context?: StringName): void;
/**
 * Adds a message involving plural translation if nonexistent, followed by its translation.
 * An additional context could be used to specify the translation context or differentiate polysemic words.
 * @param srcMessage StringName
 * @param xlatedMessages PackedStringArray
 * @param context StringName (optional, default: &"")
 */
  addPluralMessage(srcMessage: StringName, xlatedMessages: PackedStringArray, context?: StringName): void;
/**
 * Erases a message.
 * @param srcMessage StringName
 * @param context StringName (optional, default: &"")
 */
  eraseMessage(srcMessage: StringName, context?: StringName): void;
/**
 * Returns a message's translation.
 * @param srcMessage StringName
 * @param context StringName (optional, default: &"")
 * @returns StringName
 */
  getMessage(srcMessage: StringName, context?: StringName): StringName;
/**
 * Virtual method to override `get_message`.
 * @param srcMessage StringName
 * @param context StringName
 * @returns StringName
 */
  private getMessage(srcMessage: StringName, context: StringName): StringName;
/**
 * Returns the number of existing messages.
 * @returns int
 */
  getMessageCount(): int;
/**
 * Returns all the messages (keys).
 * @returns PackedStringArray
 */
  getMessageList(): PackedStringArray;
/**
 * Returns a message's translation involving plurals.
 * The number `n` is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.
 * @param srcMessage StringName
 * @param srcPluralMessage StringName
 * @param n int
 * @param context StringName (optional, default: &"")
 * @returns StringName
 */
  getPluralMessage(srcMessage: StringName, srcPluralMessage: StringName, n: int, context?: StringName): StringName;
/**
 * Virtual method to override `get_plural_message`.
 * @param srcMessage StringName
 * @param srcPluralMessage StringName
 * @param n int
 * @param context StringName
 * @returns StringName
 */
  private getPluralMessage(srcMessage: StringName, srcPluralMessage: StringName, n: int, context: StringName): StringName;
/**
 * Returns all the messages (translated text).
 * @returns PackedStringArray
 */
  getTranslatedMessageList(): PackedStringArray;
}
