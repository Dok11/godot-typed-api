import type { Color, GodotArray, GodotDictionary, SyntaxHighlighter, float, int } from "../index.d.ts";
/**
 * A syntax highlighter intended for code.
 * 
 * By adjusting various properties of this resource, you can change the colors of strings, comments, numbers, and other text patterns inside a `TextEdit` control.
 */
export class CodeHighlighter extends SyntaxHighlighter {
/**
 * Sets the color regions. All existing regions will be removed. The `Dictionary` key is the region start and end key, separated by a space. The value is the region color.
 */
  colorRegions: GodotDictionary<any>;
/**
 * Sets color for functions. A function is a non-keyword string followed by a '('.
 */
  functionColor: Color;
/**
 * Sets the keyword colors. All existing keywords will be removed. The `Dictionary` key is the keyword. The value is the keyword color.
 */
  keywordColors: GodotDictionary<any>;
/**
 * Sets the member keyword colors. All existing member keyword will be removed. The `Dictionary` key is the member keyword. The value is the member keyword color.
 */
  memberKeywordColors: GodotDictionary<any>;
/**
 * Sets color for member variables. A member variable is non-keyword, non-function string proceeded with a '.'.
 */
  memberVariableColor: Color;
/**
 * Sets the color for numbers.
 */
  numberColor: Color;
/**
 * Sets the color for symbols.
 */
  symbolColor: Color;
/**
 * Adds a color region (such as for comments or strings) from `start_key` to `end_key`. Both keys should be symbols, and `start_key` must not be shared with other delimiters.
 * If `line_only` is `true` or `end_key` is an empty `String`, the region does not carry over to the next line.
 * @param startKey string
 * @param endKey string
 * @param color Color
 * @param lineOnly boolean (optional, default: false)
 */
  addColorRegion(startKey: string, endKey: string, color: Color, lineOnly?: boolean): void;
/**
 * Sets the color for a keyword.
 * The keyword cannot contain any symbols except '_'.
 * @param keyword string
 * @param color Color
 */
  addKeywordColor(keyword: string, color: Color): void;
/**
 * Sets the color for a member keyword.
 * The member keyword cannot contain any symbols except '_'.
 * It will not be highlighted if preceded by a '.'.
 * @param memberKeyword string
 * @param color Color
 */
  addMemberKeywordColor(memberKeyword: string, color: Color): void;
/**
 * Removes all color regions.
 */
  clearColorRegions(): void;
/**
 * Removes all keywords.
 */
  clearKeywordColors(): void;
/**
 * Removes all member keywords.
 */
  clearMemberKeywordColors(): void;
/**
 * Returns the color for a keyword.
 * @param keyword string
 * @returns Color
 */
  getKeywordColor(keyword: string): Color;
/**
 * Returns the color for a member keyword.
 * @param memberKeyword string
 * @returns Color
 */
  getMemberKeywordColor(memberKeyword: string): Color;
/**
 * Returns `true` if the start key exists, else `false`.
 * @param startKey string
 * @returns boolean
 */
  hasColorRegion(startKey: string): boolean;
/**
 * Returns `true` if the keyword exists, else `false`.
 * @param keyword string
 * @returns boolean
 */
  hasKeywordColor(keyword: string): boolean;
/**
 * Returns `true` if the member keyword exists, else `false`.
 * @param memberKeyword string
 * @returns boolean
 */
  hasMemberKeywordColor(memberKeyword: string): boolean;
/**
 * Removes the color region that uses that start key.
 * @param startKey string
 */
  removeColorRegion(startKey: string): void;
/**
 * Removes the keyword.
 * @param keyword string
 */
  removeKeywordColor(keyword: string): void;
/**
 * Removes the member keyword.
 * @param memberKeyword string
 */
  removeMemberKeywordColor(memberKeyword: string): void;
}
