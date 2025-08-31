import type { Callable, GodotArray, GodotDictionary, JavaScriptObject, Object, PackedByteArray, Signal, Variant, float, int } from "../index.d.ts";
/**
 * Singleton that connects the engine with the browser's JavaScript context in Web export.
 * 
 * The JavaScriptBridge singleton is implemented only in the Web export. It's used to access the browser's JavaScript context. This allows interaction with embedding pages or calling third-party JavaScript APIs.
 * 
 * **Note:** This singleton can be disabled at build-time to improve security. By default, the JavaScriptBridge singleton is enabled. Official export templates also have the JavaScriptBridge singleton enabled. See Compiling for the Web (https://docs.godotengine.org/en/stable/contributing/development/compiling/compiling_for_web.html) in the documentation for more information.
 */
export class JavaScriptBridge extends Object {
/**
 * Creates a reference to a `Callable` that can be used as a callback by JavaScript. The reference must be kept until the callback happens, or it won't be called at all. See `JavaScriptObject` for usage.
 * 
 * **Note:** The callback function must take exactly one `Array` argument, which is going to be the JavaScript arguments object (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) converted to an array.
 * @param callable Callable
 * @returns JavaScriptObject
 */
  createCallback(callable: Callable): JavaScriptObject;
/**
 * Creates a new JavaScript object using the `new` constructor. The `object` must a valid property of the JavaScript `window`. See `JavaScriptObject` for usage.
 * @param object string
 * @returns Variant
 */
  createObject(object: string): Variant;
/**
 * Prompts the user to download a file containing the specified `buffer`. The file will have the given `name` and `mime` type.
 * 
 * **Note:** The browser may override the MIME type (https://en.wikipedia.org/wiki/Media_type) provided based on the file `name`'s extension.
 * 
 * **Note:** Browsers might block the download if `download_buffer` is not being called from a user interaction (e.g. button click).
 * 
 * **Note:** Browsers might ask the user for permission or block the download if multiple download requests are made in a quick succession.
 * @param buffer PackedByteArray
 * @param name string
 * @param mime string (optional, default: "application/octet-stream")
 */
  downloadBuffer(buffer: PackedByteArray, name: string, mime?: string): void;
/**
 * Execute the string `code` as JavaScript code within the browser window. This is a call to the actual global JavaScript function [code skip-lint]eval()[/code].
 * If `use_global_execution_context` is `true`, the code will be evaluated in the global execution context. Otherwise, it is evaluated in the execution context of a function within the engine's runtime environment.
 * @param code string
 * @param useGlobalExecutionContext boolean (optional, default: false)
 * @returns Variant
 */
  eval(code: string, useGlobalExecutionContext?: boolean): Variant;
/**
 * Force synchronization of the persistent file system (when enabled).
 * 
 * **Note:** This is only useful for modules or extensions that can't use `FileAccess` to write files.
 */
  forceFsSync(): void;
/**
 * Returns an interface to a JavaScript object that can be used by scripts. The `interface` must be a valid property of the JavaScript `window`. The callback must accept a single `Array` argument, which will contain the JavaScript `arguments`. See `JavaScriptObject` for usage.
 * @param interface_ string
 * @returns JavaScriptObject
 */
  getInterface(interface_: string): JavaScriptObject;
/**
 * Returns `true` if the given `javascript_object` is of type `ArrayBuffer` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), `DataView` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView), or one of the many typed array objects (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray).
 * @param javascriptObject JavaScriptObject
 * @returns boolean
 */
  isJsBuffer(javascriptObject: JavaScriptObject): boolean;
/**
 * Returns a copy of `javascript_buffer`'s contents as a `PackedByteArray`. See also `is_js_buffer`.
 * @param javascriptBuffer JavaScriptObject
 * @returns PackedByteArray
 */
  jsBufferToPackedByteArray(javascriptBuffer: JavaScriptObject): PackedByteArray;
/**
 * Returns `true` if a new version of the progressive web app is waiting to be activated.
 * 
 * **Note:** Only relevant when exported as a Progressive Web App.
 * @returns boolean
 */
  pwaNeedsUpdate(): boolean;
/**
 * Performs the live update of the progressive web app. Forcing the new version to be installed and the page to be reloaded.
 * 
 * **Note:** Your application will be **reloaded in all browser tabs**.
 * 
 * **Note:** Only relevant when exported as a Progressive Web App and `pwa_needs_update` returns `true`.
 * @returns int
 */
  pwaUpdate(): int;
/**
 * Emitted when an update for this progressive web app has been detected but is waiting to be activated because a previous version is active. See `pwa_update` to force the update to take place immediately.
 */
  pwaUpdateAvailable: Signal<[]>;
}
