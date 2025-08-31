import type { GodotArray, GodotDictionary, Object, PackedStringArray, RefCounted, Variant, float, int } from "../index.d.ts";
/**
 * A class that stores an expression you can execute.
 * 
 * An expression can be made of any arithmetic operation, built-in math function call, method call of a passed instance, or built-in type construction call.
 * An example expression text using the built-in math functions could be `sqrt(pow(3, 2) + pow(4, 2))`.
 * In the following example we use a `LineEdit` node to write our expression and show the result.
 * 
 * 		```gdscript
 * 
 * 		var expression = Expression.new()
 * 
 * 		func _ready():
 * 		    $LineEdit.text_submitted.connect(self._on_text_submitted)
 * 
 * 		func _on_text_submitted(command):
 * 		    var error = expression.parse(command)
 * 		    if error != OK:
 * 		        print(expression.get_error_text())
 * 		        return
 * 		    var result = expression.execute()
 * 		    if not expression.has_execute_failed():
 * 		        $LineEdit.text = str(result)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		private Expression _expression = new Expression();
 * 
 * 		public override void _Ready()
 * 		{
 * 		    GetNode<LineEdit>("LineEdit").TextSubmitted += OnTextEntered;
 * 		}
 * 
 * 		private void OnTextEntered(string command)
 * 		{
 * 		    Error error = _expression.Parse(command);
 * 		    if (error != Error.Ok)
 * 		    {
 * 		        GD.Print(_expression.GetErrorText());
 * 		        return;
 * 		    }
 * 		    Variant result = _expression.Execute();
 * 		    if (!_expression.HasExecuteFailed())
 * 		    {
 * 		        GetNode<LineEdit>("LineEdit").Text = result.ToString();
 * 		    }
 * 		}
 * 		
 * 
 * ```
 * 
 */
export class Expression extends RefCounted {
/**
 * Executes the expression that was previously parsed by `parse` and returns the result. Before you use the returned object, you should check if the method failed by calling `has_execute_failed`.
 * If you defined input variables in `parse`, you can specify their values in the inputs array, in the same order.
 * @param inputs GodotArray<any> (optional, default: [])
 * @param baseInstance Object (optional, default: null)
 * @param showError boolean (optional, default: true)
 * @param constCallsOnly boolean (optional, default: false)
 * @returns Variant
 */
  execute(inputs?: GodotArray<any>, baseInstance?: Object, showError?: boolean, constCallsOnly?: boolean): Variant;
/**
 * Returns the error text if `parse` or `execute` has failed.
 * @returns string
 */
  getErrorText(): string;
/**
 * Returns `true` if `execute` has failed.
 * @returns boolean
 */
  hasExecuteFailed(): boolean;
/**
 * Parses the expression and returns an `Error` code.
 * You can optionally specify names of variables that may appear in the expression with `input_names`, so that you can bind them when it gets executed.
 * @param expression string
 * @param inputNames PackedStringArray (optional, default: PackedStringArray())
 * @returns int
 */
  parse(expression: string, inputNames?: PackedStringArray): int;
}
