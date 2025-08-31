import type { GodotArray, GodotDictionary, RefCounted, StringName, Translation, float, int } from "../index.d.ts";
/**
 * A self-contained collection of `Translation` resources.
 * 
 * `TranslationDomain` is a self-contained collection of `Translation` resources. Translations can be added to or removed from it.
 * If you're working with the main translation domain, it is more convenient to use the wrap methods on `TranslationServer`.
 */
export class TranslationDomain extends RefCounted {
/**
 * Replace all characters with their accented variants during pseudolocalization.
 * 
 * **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the `MainLoop.NOTIFICATION_TRANSLATION_CHANGED` notification manually after you have finished modifying pseudolocalization related options.
 */
  pseudolocalizationAccentsEnabled: boolean;
/**
 * Double vowels in strings during pseudolocalization to simulate the lengthening of text due to localization.
 * 
 * **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the `MainLoop.NOTIFICATION_TRANSLATION_CHANGED` notification manually after you have finished modifying pseudolocalization related options.
 */
  pseudolocalizationDoubleVowelsEnabled: boolean;
/**
 * If `true`, enables pseudolocalization for the project. This can be used to spot untranslatable strings or layout issues that may occur once the project is localized to languages that have longer strings than the source language.
 * 
 * **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the `MainLoop.NOTIFICATION_TRANSLATION_CHANGED` notification manually after you have finished modifying pseudolocalization related options.
 */
  pseudolocalizationEnabled: boolean;
/**
 * The expansion ratio to use during pseudolocalization. A value of `0.3` is sufficient for most practical purposes, and will increase the length of each string by 30%.
 * 
 * **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the `MainLoop.NOTIFICATION_TRANSLATION_CHANGED` notification manually after you have finished modifying pseudolocalization related options.
 */
  pseudolocalizationExpansionRatio: float;
/**
 * If `true`, emulate bidirectional (right-to-left) text when pseudolocalization is enabled. This can be used to spot issues with RTL layout and UI mirroring that will crop up if the project is localized to RTL languages such as Arabic or Hebrew.
 * 
 * **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the `MainLoop.NOTIFICATION_TRANSLATION_CHANGED` notification manually after you have finished modifying pseudolocalization related options.
 */
  pseudolocalizationFakeBidiEnabled: boolean;
/**
 * Replace all characters in the string with `*`. Useful for finding non-localizable strings.
 * 
 * **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the `MainLoop.NOTIFICATION_TRANSLATION_CHANGED` notification manually after you have finished modifying pseudolocalization related options.
 */
  pseudolocalizationOverrideEnabled: boolean;
/**
 * Prefix that will be prepended to the pseudolocalized string.
 * 
 * **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the `MainLoop.NOTIFICATION_TRANSLATION_CHANGED` notification manually after you have finished modifying pseudolocalization related options.
 */
  pseudolocalizationPrefix: string;
/**
 * Skip placeholders for string formatting like `%s` or `%f` during pseudolocalization. Useful to identify strings which need additional control characters to display correctly.
 * 
 * **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the `MainLoop.NOTIFICATION_TRANSLATION_CHANGED` notification manually after you have finished modifying pseudolocalization related options.
 */
  pseudolocalizationSkipPlaceholdersEnabled: boolean;
/**
 * Suffix that will be appended to the pseudolocalized string.
 * 
 * **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the `MainLoop.NOTIFICATION_TRANSLATION_CHANGED` notification manually after you have finished modifying pseudolocalization related options.
 */
  pseudolocalizationSuffix: string;
/**
 * Adds a translation.
 * @param translation Translation
 */
  addTranslation(translation: Translation): void;
/**
 * Removes all translations.
 */
  clear(): void;
/**
 * Returns the `Translation` instance that best matches `locale`. Returns `null` if there are no matches.
 * @param locale string
 * @returns Translation
 */
  getTranslationObject(locale: string): Translation;
/**
 * Returns the pseudolocalized string based on the `message` passed in.
 * @param message StringName
 * @returns StringName
 */
  pseudolocalize(message: StringName): StringName;
/**
 * Removes the given translation.
 * @param translation Translation
 */
  removeTranslation(translation: Translation): void;
/**
 * Returns the current locale's translation for the given message and context.
 * @param message StringName
 * @param context StringName (optional, default: &"")
 * @returns StringName
 */
  translate(message: StringName, context?: StringName): StringName;
/**
 * Returns the current locale's translation for the given message, plural message and context.
 * The number `n` is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.
 * @param message StringName
 * @param messagePlural StringName
 * @param n int
 * @param context StringName (optional, default: &"")
 * @returns StringName
 */
  translatePlural(message: StringName, messagePlural: StringName, n: int, context?: StringName): StringName;
}
