import type { GodotArray, GodotDictionary, ResourceImporter, float, int } from "../index.d.ts";
/**
 * Imports comma-separated values
 * 
 * Comma-separated values are a plain text table storage format. The format's simplicity makes it easy to edit in any text editor or spreadsheet software. This makes it a common choice for game localization.
 * 
 * **Example CSV file:**
 * [codeblock lang=text]
 * keys,en,es,ja
 * GREET,"Hello, friend!","Hola, amigo!",こんにちは
 * ASK,How are you?,Cómo está?,元気ですか
 * BYE,Goodbye,Adiós,さようなら
 * QUOTE,"""Hello"" said the man.","""Hola"" dijo el hombre.",「こんにちは」男は言いました
 * [/codeblock]
 */
export class ResourceImporterCSVTranslation extends ResourceImporter {
/**
 * If `true`, creates an `OptimizedTranslation` instead of a `Translation`. This makes the resulting file smaller at the cost of a small CPU overhead.
 */
  compress: boolean;
/**
 * The delimiter to use in the CSV file. The default value matches the common CSV convention. Tab-separated values are sometimes called TSV files.
 */
  delimiter: int;
}
