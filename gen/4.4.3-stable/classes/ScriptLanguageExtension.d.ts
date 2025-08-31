import type { Dictionary, GodotArray, GodotDictionary, Object, PackedStringArray, Script, ScriptLanguage, StringName, Variant, float, int } from "../index.d.ts";
export class ScriptLanguageExtension extends ScriptLanguage {
/**
 * @param name StringName
 * @param value Variant
 */
  private addGlobalConstant(name: StringName, value: Variant): void;
/**
 * @param name StringName
 * @param value Variant
 */
  private addNamedGlobalConstant(name: StringName, value: Variant): void;
/**
 * @param code string
 * @param fromLine int
 * @param toLine int
 * @returns string
 */
  private autoIndentCode(code: string, fromLine: int, toLine: int): string;
/**
 * @returns boolean
 */
  private canInheritFromFile(): boolean;
/**
 * @returns boolean
 */
  private canMakeFunction(): boolean;
/**
 * @param code string
 * @param path string
 * @param owner Object
 * @returns GodotDictionary<any>
 */
  private completeCode(code: string, path: string, owner: Object): GodotDictionary<any>;
/**
 * @returns Object
 */
  private createScript(): Object;
/**
 * @returns Dictionary[]
 */
  private debugGetCurrentStackInfo(): Dictionary[];
/**
 * @returns string
 */
  private debugGetError(): string;
/**
 * @param maxSubitems int
 * @param maxDepth int
 * @returns GodotDictionary<any>
 */
  private debugGetGlobals(maxSubitems: int, maxDepth: int): GodotDictionary<any>;
/**
 * @returns int
 */
  private debugGetStackLevelCount(): int;
/**
 * @param level int
 * @returns string
 */
  private debugGetStackLevelFunction(level: int): string;
/**
 * @param level int
 * @returns unknown
 */
  private debugGetStackLevelInstance(level: int): unknown;
/**
 * @param level int
 * @returns int
 */
  private debugGetStackLevelLine(level: int): int;
/**
 * @param level int
 * @param maxSubitems int
 * @param maxDepth int
 * @returns GodotDictionary<any>
 */
  private debugGetStackLevelLocals(level: int, maxSubitems: int, maxDepth: int): GodotDictionary<any>;
/**
 * @param level int
 * @param maxSubitems int
 * @param maxDepth int
 * @returns GodotDictionary<any>
 */
  private debugGetStackLevelMembers(level: int, maxSubitems: int, maxDepth: int): GodotDictionary<any>;
/**
 * Returns the source associated with a given debug stack position.
 * @param level int
 * @returns string
 */
  private debugGetStackLevelSource(level: int): string;
/**
 * @param level int
 * @param expression string
 * @param maxSubitems int
 * @param maxDepth int
 * @returns string
 */
  private debugParseStackLevelExpression(level: int, expression: string, maxSubitems: int, maxDepth: int): string;
/**
 * Returns the line where the function is defined in the code, or `-1` if the function is not present.
 * @param function_ string
 * @param code string
 * @returns int
 */
  private findFunction(function_: string, code: string): int;
  private finish(): void;
  private frame(): void;
/**
 * @param object StringName
 * @returns Dictionary[]
 */
  private getBuiltInTemplates(object: StringName): Dictionary[];
/**
 * @returns PackedStringArray
 */
  private getCommentDelimiters(): PackedStringArray;
/**
 * @returns PackedStringArray
 */
  private getDocCommentDelimiters(): PackedStringArray;
/**
 * @returns string
 */
  private getExtension(): string;
/**
 * @param path string
 * @returns GodotDictionary<any>
 */
  private getGlobalClassName(path: string): GodotDictionary<any>;
/**
 * @returns string
 */
  private getName(): string;
/**
 * @returns Dictionary[]
 */
  private getPublicAnnotations(): Dictionary[];
/**
 * @returns GodotDictionary<any>
 */
  private getPublicConstants(): GodotDictionary<any>;
/**
 * @returns Dictionary[]
 */
  private getPublicFunctions(): Dictionary[];
/**
 * @returns PackedStringArray
 */
  private getRecognizedExtensions(): PackedStringArray;
/**
 * @returns PackedStringArray
 */
  private getReservedWords(): PackedStringArray;
/**
 * @returns PackedStringArray
 */
  private getStringDelimiters(): PackedStringArray;
/**
 * @returns string
 */
  private getType(): string;
/**
 * @param type_ string
 * @returns boolean
 */
  private handlesGlobalClassType(type_: string): boolean;
/**
 * @returns boolean
 * @deprecated This method is not called by the engine.
 */
  private hasNamedClasses(): boolean;
  _init(): void;
/**
 * @param keyword string
 * @returns boolean
 */
  private isControlFlowKeyword(keyword: string): boolean;
/**
 * @returns boolean
 */
  private isUsingTemplates(): boolean;
/**
 * @param code string
 * @param symbol_ string
 * @param path string
 * @param owner Object
 * @returns GodotDictionary<any>
 */
  private lookupCode(code: string, symbol_: string, path: string, owner: Object): GodotDictionary<any>;
/**
 * @param className string
 * @param functionName string
 * @param functionArgs PackedStringArray
 * @returns string
 */
  private makeFunction(className: string, functionName: string, functionArgs: PackedStringArray): string;
/**
 * @param template string
 * @param className string
 * @param baseClassName string
 * @returns Script
 */
  private makeTemplate(template: string, className: string, baseClassName: string): Script;
/**
 * @param script Script
 * @param line int
 * @param column int
 * @returns int
 */
  private openInExternalEditor(script: Script, line: int, column: int): int;
/**
 * @returns boolean
 */
  private overridesExternalEditor(): boolean;
/**
 * @returns int
 */
  private preferredFileNameCasing(): int;
/**
 * @param infoArray unknown
 * @param infoMax int
 * @returns int
 */
  private profilingGetAccumulatedData(infoArray: unknown, infoMax: int): int;
/**
 * @param infoArray unknown
 * @param infoMax int
 * @returns int
 */
  private profilingGetFrameData(infoArray: unknown, infoMax: int): int;
/**
 * @param enable boolean
 */
  private profilingSetSaveNativeCalls(enable: boolean): void;
  private profilingStart(): void;
  private profilingStop(): void;
  private reloadAllScripts(): void;
/**
 * @param scripts GodotArray<any>
 * @param softReload boolean
 */
  private reloadScripts(scripts: GodotArray<any>, softReload: boolean): void;
/**
 * @param script Script
 * @param softReload boolean
 */
  private reloadToolScript(script: Script, softReload: boolean): void;
/**
 * @param name StringName
 */
  private removeNamedGlobalConstant(name: StringName): void;
/**
 * @returns boolean
 */
  private supportsBuiltinMode(): boolean;
/**
 * @returns boolean
 */
  private supportsDocumentation(): boolean;
  private threadEnter(): void;
  private threadExit(): void;
/**
 * @param script string
 * @param path string
 * @param validateFunctions boolean
 * @param validateErrors boolean
 * @param validateWarnings boolean
 * @param validateSafeLines boolean
 * @returns GodotDictionary<any>
 */
  private validate(script: string, path: string, validateFunctions: boolean, validateErrors: boolean, validateWarnings: boolean, validateSafeLines: boolean): GodotDictionary<any>;
/**
 * @param path string
 * @returns string
 */
  private validatePath(path: string): string;
  static readonly LOOKUP_RESULT_SCRIPT_LOCATION: int;
  static readonly LOOKUP_RESULT_CLASS: int;
  static readonly LOOKUP_RESULT_CLASS_CONSTANT: int;
  static readonly LOOKUP_RESULT_CLASS_PROPERTY: int;
  static readonly LOOKUP_RESULT_CLASS_METHOD: int;
  static readonly LOOKUP_RESULT_CLASS_SIGNAL: int;
  static readonly LOOKUP_RESULT_CLASS_ENUM: int;
  static readonly LOOKUP_RESULT_CLASS_TBD_GLOBALSCOPE: int;
  static readonly LOOKUP_RESULT_CLASS_ANNOTATION: int;
  static readonly LOOKUP_RESULT_LOCAL_CONSTANT: int;
  static readonly LOOKUP_RESULT_LOCAL_VARIABLE: int;
  static readonly LOOKUP_RESULT_MAX: int;
/**
 * The option is local to the location of the code completion query - e.g. a local variable. Subsequent value of location represent options from the outer class, the exact value represent how far they are (in terms of inner classes).
 */
  static readonly LOCATION_LOCAL: int;
/**
 * The option is from the containing class or a parent class, relative to the location of the code completion query. Perform a bitwise OR with the class depth (e.g. `0` for the local class, `1` for the parent, `2` for the grandparent, etc.) to store the depth of an option in the class or a parent class.
 */
  static readonly LOCATION_PARENT_MASK: int;
/**
 * The option is from user code which is not local and not in a derived class (e.g. Autoload Singletons).
 */
  static readonly LOCATION_OTHER_USER_CODE: int;
/**
 * The option is from other engine code, not covered by the other enum constants - e.g. built-in classes.
 */
  static readonly LOCATION_OTHER: int;
  static readonly CODE_COMPLETION_KIND_CLASS: int;
  static readonly CODE_COMPLETION_KIND_FUNCTION: int;
  static readonly CODE_COMPLETION_KIND_SIGNAL: int;
  static readonly CODE_COMPLETION_KIND_VARIABLE: int;
  static readonly CODE_COMPLETION_KIND_MEMBER: int;
  static readonly CODE_COMPLETION_KIND_ENUM: int;
  static readonly CODE_COMPLETION_KIND_CONSTANT: int;
  static readonly CODE_COMPLETION_KIND_NODE_PATH: int;
  static readonly CODE_COMPLETION_KIND_FILE_PATH: int;
  static readonly CODE_COMPLETION_KIND_PLAIN_TEXT: int;
  static readonly CODE_COMPLETION_KIND_MAX: int;
}
