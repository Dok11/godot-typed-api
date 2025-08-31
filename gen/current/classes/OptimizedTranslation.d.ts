import type { GodotArray, GodotDictionary, Translation, float, int } from "../index.d.ts";
/**
 * An optimized translation, used by default for CSV Translations.
 * 
 * An optimized translation, used by default for CSV Translations. Uses real-time compressed translations, which results in very small dictionaries.
 */
export class OptimizedTranslation extends Translation {
/**
 * Generates and sets an optimized translation from the given `Translation` resource.
 * 
 * **Note:** This method is intended to be used in the editor. It does nothing when called from an exported project.
 * @param from_ Translation
 */
  generate(from_: Translation): void;
}
