import type { Dictionary, GodotArray, GodotDictionary, Object, Script, ScriptLanguage, StringName, Variant, float, int } from "../index.d.ts";
export class ScriptExtension extends Script {
/**
 * @returns boolean
 */
  private canInstantiate(): boolean;
/**
 * @returns boolean
 */
  private editorCanReloadFromFile(): boolean;
/**
 * @returns Script
 */
  private getBaseScript(): Script;
/**
 * @returns string
 */
  private getClassIconPath(): string;
/**
 * @returns GodotDictionary<any>
 */
  private getConstants(): GodotDictionary<any>;
/**
 * @returns StringName
 */
  private getDocClassName(): StringName;
/**
 * @returns Dictionary[]
 */
  private getDocumentation(): Dictionary[];
/**
 * @returns StringName
 */
  private getGlobalName(): StringName;
/**
 * @returns StringName
 */
  private getInstanceBaseType(): StringName;
/**
 * @returns ScriptLanguage
 */
  private getLanguage(): ScriptLanguage;
/**
 * @param member StringName
 * @returns int
 */
  private getMemberLine(member: StringName): int;
/**
 * @returns StringName[]
 */
  private getMembers(): StringName[];
/**
 * @param method StringName
 * @returns GodotDictionary<any>
 */
  private getMethodInfo(method: StringName): GodotDictionary<any>;
/**
 * @param property StringName
 * @returns Variant
 */
  private getPropertyDefaultValue(property: StringName): Variant;
/**
 * @returns Variant
 */
  private getRpcConfig(): Variant;
/**
 * Return the expected argument count for the given `method`, or `null` if it can't be determined (which will then fall back to the default behavior).
 * @param method StringName
 * @returns Variant
 */
  private getScriptMethodArgumentCount(method: StringName): Variant;
/**
 * @returns Dictionary[]
 */
  private getScriptMethodList(): Dictionary[];
/**
 * @returns Dictionary[]
 */
  private getScriptPropertyList(): Dictionary[];
/**
 * @returns Dictionary[]
 */
  private getScriptSignalList(): Dictionary[];
/**
 * @returns string
 */
  private getSourceCode(): string;
/**
 * @param method StringName
 * @returns boolean
 */
  private hasMethod(method: StringName): boolean;
/**
 * @param property StringName
 * @returns boolean
 */
  private hasPropertyDefaultValue(property: StringName): boolean;
/**
 * @param signal StringName
 * @returns boolean
 */
  private hasScriptSignal(signal: StringName): boolean;
/**
 * @returns boolean
 */
  private hasSourceCode(): boolean;
/**
 * @param method StringName
 * @returns boolean
 */
  private hasStaticMethod(method: StringName): boolean;
/**
 * @param script Script
 * @returns boolean
 */
  private inheritsScript(script: Script): boolean;
/**
 * @param forObject Object
 * @returns unknown
 */
  private instanceCreate(forObject: Object): unknown;
/**
 * @param object Object
 * @returns boolean
 */
  private instanceHas(object: Object): boolean;
/**
 * Returns `true` if the script is an abstract script. An abstract script does not have a constructor and cannot be instantiated.
 * @returns boolean
 */
  private isAbstract(): boolean;
/**
 * @returns boolean
 */
  private isPlaceholderFallbackEnabled(): boolean;
/**
 * @returns boolean
 */
  private isTool(): boolean;
/**
 * @returns boolean
 */
  private isValid(): boolean;
/**
 * @param placeholder unknown
 */
  private placeholderErased(placeholder: unknown): void;
/**
 * @param forObject Object
 * @returns unknown
 */
  private placeholderInstanceCreate(forObject: Object): unknown;
/**
 * @param keepState boolean
 * @returns int
 */
  private reload(keepState: boolean): int;
/**
 * @param code string
 */
  private setSourceCode(code: string): void;
  private updateExports(): void;
}
