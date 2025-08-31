import type { GodotArray, GodotDictionary, Object, PackedStringArray, StringName, Translation, TranslationDomain, float, int } from "../index.d.ts";
/**
 * The server responsible for language translations.
 * 
 * The translation server is the API backend that manages all language translations.
 * Translations are stored in `TranslationDomain`s, which can be accessed by name. The most commonly used translation domain is the main translation domain. It always exists and can be accessed using an empty `StringName`. The translation server provides wrapper methods for accessing the main translation domain directly, without having to fetch the translation domain first. Custom translation domains are mainly for advanced usages like editor plugins. Names starting with `godot.` are reserved for engine internals.
 */
export class TranslationServer extends Object {
/**
 * If `true`, enables the use of pseudolocalization on the main translation domain. See `ProjectSettings.internationalization/pseudolocalization/use_pseudolocalization` for details.
 */
  pseudolocalizationEnabled: boolean;
/**
 * Adds a translation to the main translation domain.
 * @param translation Translation
 */
  addTranslation(translation: Translation): void;
/**
 * Removes all translations from the main translation domain.
 */
  clear(): void;
/**
 * Compares two locales and returns a similarity score between `0` (no match) and `10` (full match).
 * @param localeA string
 * @param localeB string
 * @returns int
 */
  compareLocales(localeA: string, localeB: string): int;
/**
 * Returns an array of known country codes.
 * @returns PackedStringArray
 */
  getAllCountries(): PackedStringArray;
/**
 * Returns array of known language codes.
 * @returns PackedStringArray
 */
  getAllLanguages(): PackedStringArray;
/**
 * Returns an array of known script codes.
 * @returns PackedStringArray
 */
  getAllScripts(): PackedStringArray;
/**
 * Returns a readable country name for the `country` code.
 * @param country string
 * @returns string
 */
  getCountryName(country: string): string;
/**
 * Returns a readable language name for the `language` code.
 * @param language string
 * @returns string
 */
  getLanguageName(language: string): string;
/**
 * Returns an array of all loaded locales of the project.
 * @returns PackedStringArray
 */
  getLoadedLocales(): PackedStringArray;
/**
 * Returns the current locale of the project.
 * See also `OS.get_locale` and `OS.get_locale_language` to query the locale of the user system.
 * @returns string
 */
  getLocale(): string;
/**
 * Returns a locale's language and its variant (e.g. `"en_US"` would return `"English (United States)"`).
 * @param locale string
 * @returns string
 */
  getLocaleName(locale: string): string;
/**
 * Returns the translation domain with the specified name. An empty translation domain will be created and added if it does not exist.
 * @param domain StringName
 * @returns TranslationDomain
 */
  getOrAddDomain(domain: StringName): TranslationDomain;
/**
 * Returns a readable script name for the `script` code.
 * @param script string
 * @returns string
 */
  getScriptName(script: string): string;
/**
 * Returns the current locale of the editor.
 * 
 * **Note:** When called from an exported project returns the same value as `get_locale`.
 * @returns string
 */
  getToolLocale(): string;
/**
 * Returns the `Translation` instance that best matches `locale` in the main translation domain. Returns `null` if there are no matches.
 * @param locale string
 * @returns Translation
 */
  getTranslationObject(locale: string): Translation;
/**
 * Returns `true` if a translation domain with the specified name exists.
 * @param domain StringName
 * @returns boolean
 */
  hasDomain(domain: StringName): boolean;
/**
 * Returns the pseudolocalized string based on the `message` passed in.
 * 
 * **Note:** This method always uses the main translation domain.
 * @param message StringName
 * @returns StringName
 */
  pseudolocalize(message: StringName): StringName;
/**
 * Reparses the pseudolocalization options and reloads the translation for the main translation domain.
 */
  reloadPseudolocalization(): void;
/**
 * Removes the translation domain with the specified name.
 * 
 * **Note:** Trying to remove the main translation domain is an error.
 * @param domain StringName
 */
  removeDomain(domain: StringName): void;
/**
 * Removes the given translation from the main translation domain.
 * @param translation Translation
 */
  removeTranslation(translation: Translation): void;
/**
 * Sets the locale of the project. The `locale` string will be standardized to match known locales (e.g. `en-US` would be matched to `en_US`).
 * If translations have been loaded beforehand for the new locale, they will be applied.
 * @param locale string
 */
  setLocale(locale: string): void;
/**
 * Returns a `locale` string standardized to match known locales (e.g. `en-US` would be matched to `en_US`). If `add_defaults` is `true`, the locale may have a default script or country added.
 * @param locale string
 * @param addDefaults boolean (optional, default: false)
 * @returns string
 */
  standardizeLocale(locale: string, addDefaults?: boolean): string;
/**
 * Returns the current locale's translation for the given message and context.
 * 
 * **Note:** This method always uses the main translation domain.
 * @param message StringName
 * @param context StringName (optional, default: &"")
 * @returns StringName
 */
  translate(message: StringName, context?: StringName): StringName;
/**
 * Returns the current locale's translation for the given message, plural message and context.
 * The number `n` is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.
 * 
 * **Note:** This method always uses the main translation domain.
 * @param message StringName
 * @param pluralMessage StringName
 * @param n int
 * @param context StringName (optional, default: &"")
 * @returns StringName
 */
  translatePlural(message: StringName, pluralMessage: StringName, n: int, context?: StringName): StringName;
}
