import type { EditorDebuggerSession, GodotArray, GodotDictionary, RefCounted, Script, float, int } from "../index.d.ts";
/**
 * A base class to implement debugger plugins.
 * 
 * `EditorDebuggerPlugin` provides functions related to the editor side of the debugger.
 * To interact with the debugger, an instance of this class must be added to the editor via `EditorPlugin.add_debugger_plugin`.
 * Once added, the `_setup_session` callback will be called for every `EditorDebuggerSession` available to the plugin, and when new ones are created (the sessions may be inactive during this stage).
 * You can retrieve the available `EditorDebuggerSession`s via `get_sessions` or get a specific one via `get_session`.
 * 
 * 		```gdscript
 * 
 * 		@tool
 * 		extends EditorPlugin
 * 
 * 		class ExampleEditorDebugger extends EditorDebuggerPlugin:
 * 
 * 		    func _has_capture(capture):
 * 		        # Return true if you wish to handle messages with the prefix "my_plugin:".
 * 		        return capture == "my_plugin"
 * 
 * 		    func _capture(message, data, session_id):
 * 		        if message == "my_plugin:ping":
 * 		            get_session(session_id).send_message("my_plugin:echo", data)
 * 		            return true
 * 		        return false
 * 
 * 		    func _setup_session(session_id):
 * 		        # Add a new tab in the debugger session UI containing a label.
 * 		        var label = Label.new()
 * 		        label.name = "Example plugin" # Will be used as the tab title.
 * 		        label.text = "Example plugin"
 * 		        var session = get_session(session_id)
 * 		        # Listens to the session started and stopped signals.
 * 		        session.started.connect(func (): print("Session started"))
 * 		        session.stopped.connect(func (): print("Session stopped"))
 * 		        session.add_session_tab(label)
 * 
 * 		var debugger = ExampleEditorDebugger.new()
 * 
 * 		func _enter_tree():
 * 		    add_debugger_plugin(debugger)
 * 
 * 		func _exit_tree():
 * 		    remove_debugger_plugin(debugger)
 * 		
 * 
 * ```
 * 
 * To connect on the running game side, use the `EngineDebugger` singleton:
 * 
 * 		```gdscript
 * 
 * 		extends Node
 * 
 * 		func _ready():
 * 		    EngineDebugger.register_message_capture("my_plugin", _capture)
 * 		    EngineDebugger.send_message("my_plugin:ping", ["test"])
 * 
 * 		func _capture(message, data):
 * 		    # Note that the "my_plugin:" prefix is not used here.
 * 		    if message == "echo":
 * 		        prints("Echo received:", data)
 * 		        return true
 * 		    return false
 * 		
 * 
 * ```
 * 
 * **Note:** While the game is running, `@GlobalScope.print` and similar functions *called in the editor* do not print anything, the Output Log prints only game messages.
 */
export class EditorDebuggerPlugin extends RefCounted {
/**
 * Override this method to be notified when all breakpoints are cleared in the editor.
 */
  private breakpointsClearedInTree(): void;
/**
 * Override this method to be notified when a breakpoint is set in the editor.
 * @param script Script
 * @param line int
 * @param enabled boolean
 */
  private breakpointSetInTree(script: Script, line: int, enabled: boolean): void;
/**
 * Override this method to process incoming messages. The `session_id` is the ID of the `EditorDebuggerSession` that received the `message`. Use `get_session` to retrieve the session. This method should return `true` if the message is recognized.
 * @param message string
 * @param data GodotArray<any>
 * @param sessionId int
 * @returns boolean
 */
  private capture(message: string, data: GodotArray<any>, sessionId: int): boolean;
/**
 * Returns the `EditorDebuggerSession` with the given `id`.
 * @param id int
 * @returns EditorDebuggerSession
 */
  getSession(id: int): EditorDebuggerSession;
/**
 * Returns an array of `EditorDebuggerSession` currently available to this debugger plugin.
 * 
 * **Note:** Sessions in the array may be inactive, check their state via `EditorDebuggerSession.is_active`.
 * @returns GodotArray<any>
 */
  getSessions(): GodotArray<any>;
/**
 * Override this method to be notified when a breakpoint line has been clicked in the debugger breakpoint panel.
 * @param script Script
 * @param line int
 */
  private gotoScriptLine(script: Script, line: int): void;
/**
 * Override this method to enable receiving messages from the debugger. If `capture` is "my_message" then messages starting with "my_message:" will be passed to the `_capture` method.
 * @param capture string
 * @returns boolean
 */
  private hasCapture(capture: string): boolean;
/**
 * Override this method to be notified whenever a new `EditorDebuggerSession` is created. Note that the session may be inactive during this stage.
 * @param sessionId int
 */
  private setupSession(sessionId: int): void;
}
