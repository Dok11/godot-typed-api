import type { GodotArray, GodotDictionary, NodePath, Resource, Signal, StringName, Variant, float, int } from "../index.d.ts";
/**
 * Base class for `AnimationTree` nodes. Not related to scene nodes.
 * 
 * Base resource for `AnimationTree` nodes. In general, it's not used directly, but you can create custom ones with custom blending formulas.
 * Inherit this when creating animation nodes mainly for use in `AnimationNodeBlendTree`, otherwise `AnimationRootNode` should be used instead.
 * You can access the time information as read-only parameter which is processed and stored in the previous frame for all nodes except `AnimationNodeOutput`.
 * 
 * **Note:** If multiple inputs exist in the `AnimationNode`, which time information takes precedence depends on the type of `AnimationNode`.
 * 
 * 		```gdscript
 * 
 * 		var current_length = $AnimationTree[parameters/AnimationNodeName/current_length]
 * 		var current_position = $AnimationTree[parameters/AnimationNodeName/current_position]
 * 		var current_delta = $AnimationTree[parameters/AnimationNodeName/current_delta]
 * 		
 * 
 * ```
 */
export class AnimationNode extends Resource {
/**
 * If `true`, filtering is enabled.
 */
  filterEnabled: boolean;
/**
 * Adds an input to the animation node. This is only useful for animation nodes created for use in an `AnimationNodeBlendTree`. If the addition fails, returns `false`.
 * @param name string
 * @returns boolean
 */
  addInput(name: string): boolean;
/**
 * Blend an animation by `blend` amount (name must be valid in the linked `AnimationPlayer`). A `time` and `delta` may be passed, as well as whether `seeked` happened.
 * A `looped_flag` is used by internal processing immediately after the loop. See also `Animation.LoopedFlag`.
 * @param animation StringName
 * @param time float
 * @param delta float
 * @param seeked boolean
 * @param isExternalSeeking boolean
 * @param blend float
 * @param loopedFlag int (optional, default: 0)
 */
  blendAnimation(animation: StringName, time: float, delta: float, seeked: boolean, isExternalSeeking: boolean, blend: float, loopedFlag?: int): void;
/**
 * Blend an input. This is only useful for animation nodes created for an `AnimationNodeBlendTree`. The `time` parameter is a relative delta, unless `seek` is `true`, in which case it is absolute. A filter mode may be optionally passed (see `FilterAction` for options).
 * @param inputIndex int
 * @param time float
 * @param seek boolean
 * @param isExternalSeeking boolean
 * @param blend float
 * @param filter int (optional, default: 0)
 * @param sync boolean (optional, default: true)
 * @param testOnly boolean (optional, default: false)
 * @returns float
 */
  blendInput(inputIndex: int, time: float, seek: boolean, isExternalSeeking: boolean, blend: float, filter?: int, sync?: boolean, testOnly?: boolean): float;
/**
 * Blend another animation node (in case this animation node contains child animation nodes). This function is only useful if you inherit from `AnimationRootNode` instead, otherwise editors will not display your animation node for addition.
 * @param name StringName
 * @param node AnimationNode
 * @param time float
 * @param seek boolean
 * @param isExternalSeeking boolean
 * @param blend float
 * @param filter int (optional, default: 0)
 * @param sync boolean (optional, default: true)
 * @param testOnly boolean (optional, default: false)
 * @returns float
 */
  blendNode(name: StringName, node: AnimationNode, time: float, seek: boolean, isExternalSeeking: boolean, blend: float, filter?: int, sync?: boolean, testOnly?: boolean): float;
/**
 * Returns the input index which corresponds to `name`. If not found, returns `-1`.
 * @param name string
 * @returns int
 */
  findInput(name: string): int;
/**
 * When inheriting from `AnimationRootNode`, implement this virtual method to override the text caption for this animation node.
 * @returns string
 */
  private getCaption(): string;
/**
 * When inheriting from `AnimationRootNode`, implement this virtual method to return a child animation node by its `name`.
 * @param name StringName
 * @returns AnimationNode
 */
  private getChildByName(name: StringName): AnimationNode;
/**
 * When inheriting from `AnimationRootNode`, implement this virtual method to return all child animation nodes in order as a `name: node` dictionary.
 * @returns GodotDictionary<any>
 */
  private getChildNodes(): GodotDictionary<any>;
/**
 * Amount of inputs in this animation node, only useful for animation nodes that go into `AnimationNodeBlendTree`.
 * @returns int
 */
  getInputCount(): int;
/**
 * Gets the name of an input by index.
 * @param input int
 * @returns string
 */
  getInputName(input: int): string;
/**
 * Gets the value of a parameter. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees.
 * @param name StringName
 * @returns Variant
 */
  getParameter(name: StringName): Variant;
/**
 * When inheriting from `AnimationRootNode`, implement this virtual method to return the default value of a `parameter`. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees.
 * @param parameter StringName
 * @returns Variant
 */
  private getParameterDefaultValue(parameter: StringName): Variant;
/**
 * When inheriting from `AnimationRootNode`, implement this virtual method to return a list of the properties on this animation node. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. Format is similar to `Object.get_property_list`.
 * @returns GodotArray<any>
 */
  private getParameterList(): GodotArray<any>;
/**
 * Returns the object id of the `AnimationTree` that owns this node.
 * 
 * **Note:** This method should only be called from within the `AnimationNodeExtension._process_animation_node` method, and will return an invalid id otherwise.
 * @returns int
 */
  getProcessingAnimationTreeInstanceId(): int;
/**
 * When inheriting from `AnimationRootNode`, implement this virtual method to return whether the blend tree editor should display filter editing on this animation node.
 * @returns boolean
 */
  private hasFilter(): boolean;
/**
 * When inheriting from `AnimationRootNode`, implement this virtual method to return whether the `parameter` is read-only. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees.
 * @param parameter StringName
 * @returns boolean
 */
  private isParameterReadOnly(parameter: StringName): boolean;
/**
 * Returns `true` if the given path is filtered.
 * @param path NodePath
 * @returns boolean
 */
  isPathFiltered(path: NodePath): boolean;
/**
 * Returns `true` if this animation node is being processed in test-only mode.
 * @returns boolean
 */
  isProcessTesting(): boolean;
/**
 * When inheriting from `AnimationRootNode`, implement this virtual method to run some code when this animation node is processed. The `time` parameter is a relative delta, unless `seek` is `true`, in which case it is absolute.
 * Here, call the `blend_input`, `blend_node` or `blend_animation` functions. You can also use `get_parameter` and `set_parameter` to modify local memory.
 * This function should return the delta.
 * @param time float
 * @param seek boolean
 * @param isExternalSeeking boolean
 * @param testOnly boolean
 * @returns float
 * @deprecated Currently this is mostly useless as there is a lack of many APIs to extend AnimationNode by GDScript. It is planned that a more flexible API using structures will be provided in the future.
 */
  _process(time: float, seek: boolean, isExternalSeeking: boolean, testOnly: boolean): float;
/**
 * Removes an input, call this only when inactive.
 * @param index int
 */
  removeInput(index: int): void;
/**
 * Adds or removes a path for the filter.
 * @param path NodePath
 * @param enable boolean
 */
  setFilterPath(path: NodePath, enable: boolean): void;
/**
 * Sets the name of the input at the given `input` index. If the setting fails, returns `false`.
 * @param input int
 * @param name string
 * @returns boolean
 */
  setInputName(input: int, name: string): boolean;
/**
 * Sets a custom parameter. These are used as local memory, because resources can be reused across the tree or scenes.
 * @param name StringName
 * @param value Variant
 */
  setParameter(name: StringName, value: Variant): void;
/**
 * Emitted by nodes that inherit from this class and that have an internal tree when one of their animation nodes removes. The animation nodes that emit this signal are `AnimationNodeBlendSpace1D`, `AnimationNodeBlendSpace2D`, `AnimationNodeStateMachine`, and `AnimationNodeBlendTree`.
 */
  animationNodeRemoved: Signal<[objectId: int, name: string]>;
/**
 * Emitted by nodes that inherit from this class and that have an internal tree when one of their animation node names changes. The animation nodes that emit this signal are `AnimationNodeBlendSpace1D`, `AnimationNodeBlendSpace2D`, `AnimationNodeStateMachine`, and `AnimationNodeBlendTree`.
 */
  animationNodeRenamed: Signal<[objectId: int, oldName: string, newName: string]>;
/**
 * Emitted by nodes that inherit from this class and that have an internal tree when one of their animation nodes changes. The animation nodes that emit this signal are `AnimationNodeBlendSpace1D`, `AnimationNodeBlendSpace2D`, `AnimationNodeStateMachine`, `AnimationNodeBlendTree` and `AnimationNodeTransition`.
 */
  treeChanged: Signal<[]>;
/**
 * Do not use filtering.
 */
  static readonly FILTER_IGNORE: int;
/**
 * Paths matching the filter will be allowed to pass.
 */
  static readonly FILTER_PASS: int;
/**
 * Paths matching the filter will be discarded.
 */
  static readonly FILTER_STOP: int;
/**
 * Paths matching the filter will be blended (by the blend value).
 */
  static readonly FILTER_BLEND: int;
}
