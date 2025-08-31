import type { GodotArray, GodotDictionary, Object, StringName, Variant, float, int } from "../index.d.ts";
/**
 * A built-in type representing a method or a standalone function.
 * 
 * `Callable` is a built-in `Variant` type that represents a function. It can either be a method within an `Object` instance, or a custom callable used for different purposes (see `is_custom`). Like all `Variant` types, it can be stored in variables and passed to other functions. It is most commonly used for signal callbacks.
 * 
 * 		```gdscript
 * 
 * 		func print_args(arg1, arg2, arg3 = ""):
 * 		    prints(arg1, arg2, arg3)
 * 
 * 		func test():
 * 		    var callable = Callable(self, "print_args")
 * 		    callable.call("hello", "world")  # Prints "hello world ".
 * 		    callable.call(Vector2.UP, 42, callable)  # Prints "(0.0, -1.0) 42 Node(node.gd)::print_args"
 * 		    callable.call("invalid")  # Invalid call, should have at least 2 arguments.
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		// Default parameter values are not supported.
 * 		public void PrintArgs(Variant arg1, Variant arg2, Variant arg3 = default)
 * 		{
 * 		    GD.PrintS(arg1, arg2, arg3);
 * 		}
 * 
 * 		public void Test()
 * 		{
 * 		    // Invalid calls fail silently.
 * 		    Callable callable = new Callable(this, MethodName.PrintArgs);
 * 		    callable.Call("hello", "world"); // Default parameter values are not supported, should have 3 arguments.
 * 		    callable.Call(Vector2.Up, 42, callable); // Prints "(0, -1) 42 Node(Node.cs)::PrintArgs"
 * 		    callable.Call("invalid"); // Invalid call, should have 3 arguments.
 * 		}
 * 		
 * 
 * ```
 * 
 * In GDScript, it's possible to create lambda functions within a method. Lambda functions are custom callables that are not associated with an `Object` instance. Optionally, lambda functions can also be named. The name will be displayed in the debugger, or when calling `get_method`.
 * 
 * 		```gdscript
 * 
 * 		func _init():
 * 		    var my_lambda = func (message):
 * 		        print(message)
 * 
 * 		    # Prints "Hello everyone!"
 * 		    my_lambda.call("Hello everyone!")
 * 
 * 		    # Prints "Attack!", when the button_pressed signal is emitted.
 * 		    button_pressed.connect(func(): print("Attack!"))
 * 		
 * 
 * ```
 * In GDScript, you can access methods and global functions as `Callable`s:
 * 
 * 		```gdscript
 * 
 * 		tween.tween_callback(node.queue_free)  # Object methods.
 * 		tween.tween_callback(array.clear)  # Methods of built-in types.
 * 		tween.tween_callback(print.bind("Test"))  # Global functions.
 * 		
 * 
 * ```
 * 
 * **Note:** `Dictionary` does not support the above due to ambiguity with keys.
 * 
 * 		```gdscript
 * 
 * 		var dictionary = {"hello": "world"}
 * 
 * 		# This will not work, `clear` is treated as a key.
 * 		tween.tween_callback(dictionary.clear)
 * 
 * 		# This will work.
 * 		tween.tween_callback(Callable.create(dictionary, "clear"))
 * 		
 * 
 * ```
 */
export class Callable {
/**
 * Returns a copy of this `Callable` with one or more arguments bound. When called, the bound arguments are passed *after* the arguments supplied by `call`. See also `unbind`.
 * 
 * **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.
 * @returns Callable
 */
  bind(): Callable;
/**
 * Returns a copy of this `Callable` with one or more arguments bound, reading them from an array. When called, the bound arguments are passed *after* the arguments supplied by `call`. See also `unbind`.
 * 
 * **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.
 * @param arguments GodotArray<any>
 * @returns Callable
 */
  bindv(arguments: GodotArray<any>): Callable;
/**
 * Calls the method represented by this `Callable`. Arguments can be passed and should match the method's signature.
 * @returns Variant
 */
  call(): Variant;
/**
 * Calls the method represented by this `Callable` in deferred mode, i.e. at the end of the current frame. Arguments can be passed and should match the method's signature.
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    grab_focus.call_deferred()
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override void _Ready()
 * 				{
 * 				    Callable.From(GrabFocus).CallDeferred();
 * 				}
 * 				
 * 
 * ```
 * 
 * **Note:** Deferred calls are processed at idle time. Idle time happens mainly at the end of process and physics frames. In it, deferred calls will be run until there are none left, which means you can defer calls from other deferred calls and they'll still be run in the current idle time cycle. This means you should not call a method deferred from itself (or from a method called by it), as this causes infinite recursion the same way as if you had called the method directly.
 * See also `Object.call_deferred`.
 */
  callDeferred(): void;
/**
 * Calls the method represented by this `Callable`. Unlike `call`, this method expects all arguments to be contained inside the `arguments` `Array`.
 * @param arguments GodotArray<any>
 * @returns Variant
 */
  callv(arguments: GodotArray<any>): Variant;
/**
 * Creates a new `Callable` for the method named `method` in the specified `variant`. To represent a method of a built-in `Variant` type, a custom callable is used (see `is_custom`). If `variant` is `Object`, then a standard callable will be created instead.
 * 
 * **Note:** This method is always necessary for the `Dictionary` type, as property syntax is used to access its entries. You may also use this method when `variant`'s type is not known in advance (for polymorphism).
 * @param variant Variant
 * @param method StringName
 * @returns Callable
 */
  create(variant: Variant, method: StringName): Callable;
/**
 * Returns the total number of arguments this `Callable` should take, including optional arguments. This means that any arguments bound with `bind` are *subtracted* from the result, and any arguments unbound with `unbind` are *added* to the result.
 * @returns int
 */
  getArgumentCount(): int;
/**
 * Returns the array of arguments bound via successive `bind` or `unbind` calls. These arguments will be added *after* the arguments passed to the call, from which `get_unbound_arguments_count` arguments on the right have been previously excluded.
 * 
 * 				```gdscript
 * 
 * 				func get_effective_arguments(callable, call_args):
 * 				    assert(call_args.size() - callable.get_unbound_arguments_count() >= 0)
 * 				    var result = call_args.slice(0, call_args.size() - callable.get_unbound_arguments_count())
 * 				    result.append_array(callable.get_bound_arguments())
 * 				    return result
 * 				
 * 
 * ```
 * @returns GodotArray<any>
 */
  getBoundArguments(): GodotArray<any>;
/**
 * Returns the total amount of arguments bound via successive `bind` or `unbind` calls. This is the same as the size of the array returned by `get_bound_arguments`. See `get_bound_arguments` for details.
 * 
 * **Note:** The `get_bound_arguments_count` and `get_unbound_arguments_count` methods can both return positive values.
 * @returns int
 */
  getBoundArgumentsCount(): int;
/**
 * Returns the name of the method represented by this `Callable`. If the callable is a GDScript lambda function, returns the function's name or `"<anonymous lambda>"`.
 * @returns StringName
 */
  getMethod(): StringName;
/**
 * Returns the object on which this `Callable` is called.
 * @returns Object
 */
  getObject(): Object;
/**
 * Returns the ID of this `Callable`'s object (see `Object.get_instance_id`).
 * @returns int
 */
  getObjectId(): int;
/**
 * Returns the total amount of arguments unbound via successive `bind` or `unbind` calls. See `get_bound_arguments` for details.
 * 
 * **Note:** The `get_bound_arguments_count` and `get_unbound_arguments_count` methods can both return positive values.
 * @returns int
 */
  getUnboundArgumentsCount(): int;
/**
 * Returns the 32-bit hash value of this `Callable`'s object.
 * 
 * **Note:** `Callable`s with equal content will always produce identical hash values. However, the reverse is not true. Returning identical hash values does *not* imply the callables are equal, because different callables can have identical hash values due to hash collisions. The engine uses a 32-bit hash algorithm for `hash`.
 * @returns int
 */
  hash(): int;
/**
 * Returns `true` if this `Callable` is a custom callable. Custom callables are used:
 * - for binding/unbinding arguments (see `bind` and `unbind`);
 * - for representing methods of built-in `Variant` types (see `create`);
 * - for representing global, lambda, and RPC functions in GDScript;
 * - for other purposes in the core, GDExtension, and C#.
 * @returns boolean
 */
  isCustom(): boolean;
/**
 * Returns `true` if this `Callable` has no target to call the method on. Equivalent to `callable == Callable()`.
 * 
 * **Note:** This is *not* the same as `not is_valid()` and using `not is_null()` will *not* guarantee that this callable can be called. Use `is_valid` instead.
 * @returns boolean
 */
  isNull(): boolean;
/**
 * Returns `true` if this `Callable` is a standard callable. This method is the opposite of `is_custom`. Returns `false` if this callable is a lambda function.
 * @returns boolean
 */
  isStandard(): boolean;
/**
 * Returns `true` if the callable's object exists and has a valid method name assigned, or is a custom callable.
 * @returns boolean
 */
  isValid(): boolean;
/**
 * Perform an RPC (Remote Procedure Call) on all connected peers. This is used for multiplayer and is normally not available, unless the function being called has been marked as *RPC* (using [annotation @GDScript.@rpc] or `Node.rpc_config`). Calling this method on unsupported functions will result in an error. See `Node.rpc`.
 */
  rpc(): void;
/**
 * Perform an RPC (Remote Procedure Call) on a specific peer ID (see multiplayer documentation for reference). This is used for multiplayer and is normally not available unless the function being called has been marked as *RPC* (using [annotation @GDScript.@rpc] or `Node.rpc_config`). Calling this method on unsupported functions will result in an error. See `Node.rpc_id`.
 * @param peerId int
 */
  rpcId(peerId: int): void;
/**
 * Returns a copy of this `Callable` with a number of arguments unbound. In other words, when the new callable is called the last few arguments supplied by the user are ignored, according to `argcount`. The remaining arguments are passed to the callable. This allows to use the original callable in a context that attempts to pass more arguments than this callable can handle, e.g. a signal with a fixed number of arguments. See also `bind`.
 * 
 * **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    foo.unbind(1).call(1, 2) # Calls foo(1).
 * 				    foo.bind(3, 4).unbind(1).call(1, 2) # Calls foo(1, 3, 4), note that it does not change the arguments from bind.
 * 				
 * 
 * ```
 * @param argcount int
 * @returns Callable
 */
  unbind(argcount: int): Callable;
}
