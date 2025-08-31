import type { GodotArray, GodotDictionary, Object, Variant, float, int } from "../index.d.ts";
/**
 * A helper to handle dictionaries which look like JSONRPC documents.
 * 
 * JSON-RPC (https://www.jsonrpc.org/) is a standard which wraps a method call in a `JSON` object. The object has a particular structure and identifies which method is called, the parameters to that function, and carries an ID to keep track of responses. This class implements that standard on top of `Dictionary`; you will have to convert between a `Dictionary` and `JSON` with other functions.
 */
export class JSONRPC extends Object {
/**
 * Returns a dictionary in the form of a JSON-RPC notification. Notifications are one-shot messages which do not expect a response.
 * - `method`: Name of the method being called.
 * - `params`: An array or dictionary of parameters being passed to the method.
 * @param method string
 * @param params Variant
 * @returns GodotDictionary<any>
 */
  makeNotification(method: string, params: Variant): GodotDictionary<any>;
/**
 * Returns a dictionary in the form of a JSON-RPC request. Requests are sent to a server with the expectation of a response. The ID field is used for the server to specify which exact request it is responding to.
 * - `method`: Name of the method being called.
 * - `params`: An array or dictionary of parameters being passed to the method.
 * - `id`: Uniquely identifies this request. The server is expected to send a response with the same ID.
 * @param method string
 * @param params Variant
 * @param id Variant
 * @returns GodotDictionary<any>
 */
  makeRequest(method: string, params: Variant, id: Variant): GodotDictionary<any>;
/**
 * When a server has received and processed a request, it is expected to send a response. If you did not want a response then you need to have sent a Notification instead.
 * - `result`: The return value of the function which was called.
 * - `id`: The ID of the request this response is targeted to.
 * @param result Variant
 * @param id Variant
 * @returns GodotDictionary<any>
 */
  makeResponse(result: Variant, id: Variant): GodotDictionary<any>;
/**
 * Creates a response which indicates a previous reply has failed in some way.
 * - `code`: The error code corresponding to what kind of error this is. See the `ErrorCode` constants.
 * - `message`: A custom message about this error.
 * - `id`: The request this error is a response to.
 * @param code int
 * @param message string
 * @param id Variant (optional, default: null)
 * @returns GodotDictionary<any>
 */
  makeResponseError(code: int, message: string, id?: Variant): GodotDictionary<any>;
/**
 * Given a Dictionary which takes the form of a JSON-RPC request: unpack the request and run it. Methods are resolved by looking at the field called "method" and looking for an equivalently named function in the JSONRPC object. If one is found that method is called.
 * To add new supported methods extend the JSONRPC class and call `process_action` on your subclass.
 * `action`: The action to be run, as a Dictionary in the form of a JSON-RPC request or notification.
 * @param action Variant
 * @param recurse boolean (optional, default: false)
 * @returns Variant
 */
  processAction(action: Variant, recurse?: boolean): Variant;
/**
 * @param action string
 * @returns string
 */
  processString(action: string): string;
/**
 * @param scope string
 * @param target Object
 */
  setScope(scope: string, target: Object): void;
/**
 * The request could not be parsed as it was not valid by JSON standard (`JSON.parse` failed).
 */
  static readonly PARSE_ERROR: int;
/**
 * A method call was requested but the request's format is not valid.
 */
  static readonly INVALID_REQUEST: int;
/**
 * A method call was requested but no function of that name existed in the JSONRPC subclass.
 */
  static readonly METHOD_NOT_FOUND: int;
/**
 * A method call was requested but the given method parameters are not valid. Not used by the built-in JSONRPC.
 */
  static readonly INVALID_PARAMS: int;
/**
 * An internal error occurred while processing the request. Not used by the built-in JSONRPC.
 */
  static readonly INTERNAL_ERROR: int;
}
