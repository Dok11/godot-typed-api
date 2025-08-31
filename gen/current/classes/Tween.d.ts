import type { Callable, CallbackTweener, GodotArray, GodotDictionary, IntervalTweener, MethodTweener, Node, NodePath, Object, PropertyTweener, RefCounted, Signal, SubtweenTweener, Variant, float, int } from "../index.d.ts";
/**
 * Lightweight object used for general-purpose animation via script, using `Tweener`s.
 * 
 * Tweens are mostly useful for animations requiring a numerical property to be interpolated over a range of values. The name *tween* comes from *in-betweening*, an animation technique where you specify *keyframes* and the computer interpolates the frames that appear between them. Animating something with a `Tween` is called tweening.
 * `Tween` is more suited than `AnimationPlayer` for animations where you don't know the final values in advance. For example, interpolating a dynamically-chosen camera zoom value is best done with a `Tween`; it would be difficult to do the same thing with an `AnimationPlayer` node. Tweens are also more light-weight than `AnimationPlayer`, so they are very much suited for simple animations or general tasks that don't require visual tweaking provided by the editor. They can be used in a "fire-and-forget" manner for some logic that normally would be done by code. You can e.g. make something shoot periodically by using a looped `CallbackTweener` with a delay.
 * A `Tween` can be created by using either `SceneTree.create_tween` or `Node.create_tween`. `Tween`s created manually (i.e. by using `Tween.new()`) are invalid and can't be used for tweening values.
 * A tween animation is created by adding `Tweener`s to the `Tween` object, using `tween_property`, `tween_interval`, `tween_callback` or `tween_method`:
 * 
 * 		```gdscript
 * 
 * 		var tween = get_tree().create_tween()
 * 		tween.tween_property($Sprite, "modulate", Color.RED, 1)
 * 		tween.tween_property($Sprite, "scale", Vector2(), 1)
 * 		tween.tween_callback($Sprite.queue_free)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		Tween tween = GetTree().CreateTween();
 * 		tween.TweenProperty(GetNode("Sprite"), "modulate", Colors.Red, 1.0f);
 * 		tween.TweenProperty(GetNode("Sprite"), "scale", Vector2.Zero, 1.0f);
 * 		tween.TweenCallback(Callable.From(GetNode("Sprite").QueueFree));
 * 		
 * 
 * ```
 * 
 * This sequence will make the `$Sprite` node turn red, then shrink, before finally calling `Node.queue_free` to free the sprite. `Tweener`s are executed one after another by default. This behavior can be changed using `parallel` and `set_parallel`.
 * When a `Tweener` is created with one of the `tween_*` methods, a chained method call can be used to tweak the properties of this `Tweener`. For example, if you want to set a different transition type in the above example, you can use `set_trans`:
 * 
 * 		```gdscript
 * 
 * 		var tween = get_tree().create_tween()
 * 		tween.tween_property($Sprite, "modulate", Color.RED, 1).set_trans(Tween.TRANS_SINE)
 * 		tween.tween_property($Sprite, "scale", Vector2(), 1).set_trans(Tween.TRANS_BOUNCE)
 * 		tween.tween_callback($Sprite.queue_free)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		Tween tween = GetTree().CreateTween();
 * 		tween.TweenProperty(GetNode("Sprite"), "modulate", Colors.Red, 1.0f).SetTrans(Tween.TransitionType.Sine);
 * 		tween.TweenProperty(GetNode("Sprite"), "scale", Vector2.Zero, 1.0f).SetTrans(Tween.TransitionType.Bounce);
 * 		tween.TweenCallback(Callable.From(GetNode("Sprite").QueueFree));
 * 		
 * 
 * ```
 * 
 * Most of the `Tween` methods can be chained this way too. In the following example the `Tween` is bound to the running script's node and a default transition is set for its `Tweener`s:
 * 
 * 		```gdscript
 * 
 * 		var tween = get_tree().create_tween().bind_node(self).set_trans(Tween.TRANS_ELASTIC)
 * 		tween.tween_property($Sprite, "modulate", Color.RED, 1)
 * 		tween.tween_property($Sprite, "scale", Vector2(), 1)
 * 		tween.tween_callback($Sprite.queue_free)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		var tween = GetTree().CreateTween().BindNode(this).SetTrans(Tween.TransitionType.Elastic);
 * 		tween.TweenProperty(GetNode("Sprite"), "modulate", Colors.Red, 1.0f);
 * 		tween.TweenProperty(GetNode("Sprite"), "scale", Vector2.Zero, 1.0f);
 * 		tween.TweenCallback(Callable.From(GetNode("Sprite").QueueFree));
 * 		
 * 
 * ```
 * 
 * Another interesting use for `Tween`s is animating arbitrary sets of objects:
 * 
 * 		```gdscript
 * 
 * 		var tween = create_tween()
 * 		for sprite in get_children():
 * 		    tween.tween_property(sprite, "position", Vector2(0, 0), 1)
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		Tween tween = CreateTween();
 * 		foreach (Node sprite in GetChildren())
 * 		    tween.TweenProperty(sprite, "position", Vector2.Zero, 1.0f);
 * 		
 * 
 * ```
 * 
 * In the example above, all children of a node are moved one after another to position (0, 0).
 * You should avoid using more than one `Tween` per object's property. If two or more tweens animate one property at the same time, the last one created will take priority and assign the final value. If you want to interrupt and restart an animation, consider assigning the `Tween` to a variable:
 * 
 * 		```gdscript
 * 
 * 		var tween
 * 		func animate():
 * 		    if tween:
 * 		        tween.kill() # Abort the previous animation.
 * 		    tween = create_tween()
 * 		
 * 
 * ```
 * 
 * 		```csharp
 * 
 * 		private Tween _tween;
 * 
 * 		public void Animate()
 * 		{
 * 		    if (_tween != null)
 * 		        _tween.Kill(); // Abort the previous animation
 * 		    _tween = CreateTween();
 * 		}
 * 		
 * 
 * ```
 * 
 * Some `Tweener`s use transitions and eases. The first accepts a `TransitionType` constant, and refers to the way the timing of the animation is handled (see easings.net (https://easings.net/) for some examples). The second accepts an `EaseType` constant, and controls where the `trans_type` is applied to the interpolation (in the beginning, the end, or both). If you don't know which transition and easing to pick, you can try different `TransitionType` constants with `EASE_IN_OUT`, and use the one that looks best.
 * Tween easing and transition types cheatsheet (https://raw.githubusercontent.com/godotengine/godot-docs/master/img/tween_cheatsheet.webp)
 * 
 * **Note:** Tweens are not designed to be reused and trying to do so results in an undefined behavior. Create a new Tween for each animation and every time you replay an animation from start. Keep in mind that Tweens start immediately, so only create a Tween when you want to start animating.
 * 
 * **Note:** The tween is processed after all of the nodes in the current frame, i.e. node's `Node._process` method would be called before the tween (or `Node._physics_process` depending on the value passed to `set_process_mode`).
 */
export class Tween extends RefCounted {
/**
 * Binds this `Tween` with the given `node`. `Tween`s are processed directly by the `SceneTree`, so they run independently of the animated nodes. When you bind a `Node` with the `Tween`, the `Tween` will halt the animation when the object is not inside tree and the `Tween` will be automatically killed when the bound object is freed. Also `TWEEN_PAUSE_BOUND` will make the pausing behavior dependent on the bound node.
 * For a shorter way to create and bind a `Tween`, you can use `Node.create_tween`.
 * @param node Node
 * @returns Tween
 */
  bindNode(node: Node): Tween;
/**
 * Used to chain two `Tweener`s after `set_parallel` is called with `true`.
 * 
 * 				```gdscript
 * 
 * 				var tween = create_tween().set_parallel(true)
 * 				tween.tween_property(...)
 * 				tween.tween_property(...) # Will run parallelly with above.
 * 				tween.chain().tween_property(...) # Will run after two above are finished.
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				Tween tween = CreateTween().SetParallel(true);
 * 				tween.TweenProperty(...);
 * 				tween.TweenProperty(...); // Will run parallelly with above.
 * 				tween.Chain().TweenProperty(...); // Will run after two above are finished.
 * 				
 * 
 * ```
 * 
 * @returns Tween
 */
  chain(): Tween;
/**
 * Processes the `Tween` by the given `delta` value, in seconds. This is mostly useful for manual control when the `Tween` is paused. It can also be used to end the `Tween` animation immediately, by setting `delta` longer than the whole duration of the `Tween` animation.
 * Returns `true` if the `Tween` still has `Tweener`s that haven't finished.
 * @param delta float
 * @returns boolean
 */
  customStep(delta: float): boolean;
/**
 * Returns the number of remaining loops for this `Tween` (see `set_loops`). A return value of `-1` indicates an infinitely looping `Tween`, and a return value of `0` indicates that the `Tween` has already finished.
 * @returns int
 */
  getLoopsLeft(): int;
/**
 * Returns the total time in seconds the `Tween` has been animating (i.e. the time since it started, not counting pauses etc.). The time is affected by `set_speed_scale`, and `stop` will reset it to `0`.
 * 
 * **Note:** As it results from accumulating frame deltas, the time returned after the `Tween` has finished animating will be slightly greater than the actual `Tween` duration.
 * @returns float
 */
  getTotalElapsedTime(): float;
/**
 * This method can be used for manual interpolation of a value, when you don't want `Tween` to do animating for you. It's similar to `@GlobalScope.lerp`, but with support for custom transition and easing.
 * `initial_value` is the starting value of the interpolation.
 * `delta_value` is the change of the value in the interpolation, i.e. it's equal to `final_value - initial_value`.
 * `elapsed_time` is the time in seconds that passed after the interpolation started and it's used to control the position of the interpolation. E.g. when it's equal to half of the `duration`, the interpolated value will be halfway between initial and final values. This value can also be greater than `duration` or lower than 0, which will extrapolate the value.
 * `duration` is the total time of the interpolation.
 * 
 * **Note:** If `duration` is equal to `0`, the method will always return the final value, regardless of `elapsed_time` provided.
 * @param initialValue Variant
 * @param deltaValue Variant
 * @param elapsedTime float
 * @param duration float
 * @param transType int
 * @param easeType int
 * @returns Variant
 */
  interpolateValue(initialValue: Variant, deltaValue: Variant, elapsedTime: float, duration: float, transType: int, easeType: int): Variant;
/**
 * Returns whether the `Tween` is currently running, i.e. it wasn't paused and it's not finished.
 * @returns boolean
 */
  isRunning(): boolean;
/**
 * Returns whether the `Tween` is valid. A valid `Tween` is a `Tween` contained by the scene tree (i.e. the array from `SceneTree.get_processed_tweens` will contain this `Tween`). A `Tween` might become invalid when it has finished tweening, is killed, or when created with `Tween.new()`. Invalid `Tween`s can't have `Tweener`s appended.
 * @returns boolean
 */
  isValid(): boolean;
/**
 * Aborts all tweening operations and invalidates the `Tween`.
 */
  kill(): void;
/**
 * Makes the next `Tweener` run parallelly to the previous one.
 * 
 * 				```gdscript
 * 
 * 				var tween = create_tween()
 * 				tween.tween_property(...)
 * 				tween.parallel().tween_property(...)
 * 				tween.parallel().tween_property(...)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				Tween tween = CreateTween();
 * 				tween.TweenProperty(...);
 * 				tween.Parallel().TweenProperty(...);
 * 				tween.Parallel().TweenProperty(...);
 * 				
 * 
 * ```
 * 
 * All `Tweener`s in the example will run at the same time.
 * You can make the `Tween` parallel by default by using `set_parallel`.
 * @returns Tween
 */
  parallel(): Tween;
/**
 * Pauses the tweening. The animation can be resumed by using `play`.
 * 
 * **Note:** If a Tween is paused and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using `SceneTree.get_processed_tweens`.
 */
  pause(): void;
/**
 * Resumes a paused or stopped `Tween`.
 */
  play(): void;
/**
 * Sets the default ease type for `PropertyTweener`s and `MethodTweener`s appended after this method.
 * Before this method is called, the default ease type is `EASE_IN_OUT`.
 * 
 * 				```gdscript
 * 
 * 				var tween = create_tween()
 * 				tween.tween_property(self, "position", Vector2(300, 0), 0.5) # Uses EASE_IN_OUT.
 * 				tween.set_ease(Tween.EASE_IN)
 * 				tween.tween_property(self, "rotation_degrees", 45.0, 0.5) # Uses EASE_IN.
 * 				
 * 
 * ```
 * @param ease int
 * @returns Tween
 */
  setEase(ease: int): Tween;
/**
 * If `ignore` is `true`, the tween will ignore `Engine.time_scale` and update with the real, elapsed time. This affects all `Tweener`s and their delays. Default value is `false`.
 * @param ignore boolean (optional, default: true)
 * @returns Tween
 */
  setIgnoreTimeScale(ignore?: boolean): Tween;
/**
 * Sets the number of times the tweening sequence will be repeated, i.e. `set_loops(2)` will run the animation twice.
 * Calling this method without arguments will make the `Tween` run infinitely, until either it is killed with `kill`, the `Tween`'s bound node is freed, or all the animated objects have been freed (which makes further animation impossible).
 * 
 * **Warning:** Make sure to always add some duration/delay when using infinite loops. To prevent the game freezing, 0-duration looped animations (e.g. a single `CallbackTweener` with no delay) are stopped after a small number of loops, which may produce unexpected results. If a `Tween`'s lifetime depends on some node, always use `bind_node`.
 * @param loops int (optional, default: 0)
 * @returns Tween
 */
  setLoops(loops?: int): Tween;
/**
 * If `parallel` is `true`, the `Tweener`s appended after this method will by default run simultaneously, as opposed to sequentially.
 * 
 * **Note:** Just like with `parallel`, the tweener added right before this method will also be part of the parallel step.
 * 
 * 				```gdscript
 * 
 * 				tween.tween_property(self, "position", Vector2(300, 0), 0.5)
 * 				tween.set_parallel()
 * 				tween.tween_property(self, "modulate", Color.GREEN, 0.5) # Runs together with the position tweener.
 * 				
 * 
 * ```
 * @param parallel boolean (optional, default: true)
 * @returns Tween
 */
  setParallel(parallel?: boolean): Tween;
/**
 * Determines the behavior of the `Tween` when the `SceneTree` is paused. Check `TweenPauseMode` for options.
 * Default value is `TWEEN_PAUSE_BOUND`.
 * @param mode int
 * @returns Tween
 */
  setPauseMode(mode: int): Tween;
/**
 * Determines whether the `Tween` should run after process frames (see `Node._process`) or physics frames (see `Node._physics_process`).
 * Default value is `TWEEN_PROCESS_IDLE`.
 * @param mode int
 * @returns Tween
 */
  setProcessMode(mode: int): Tween;
/**
 * Scales the speed of tweening. This affects all `Tweener`s and their delays.
 * @param speed float
 * @returns Tween
 */
  setSpeedScale(speed: float): Tween;
/**
 * Sets the default transition type for `PropertyTweener`s and `MethodTweener`s appended after this method.
 * Before this method is called, the default transition type is `TRANS_LINEAR`.
 * 
 * 				```gdscript
 * 
 * 				var tween = create_tween()
 * 				tween.tween_property(self, "position", Vector2(300, 0), 0.5) # Uses TRANS_LINEAR.
 * 				tween.set_trans(Tween.TRANS_SINE)
 * 				tween.tween_property(self, "rotation_degrees", 45.0, 0.5) # Uses TRANS_SINE.
 * 				
 * 
 * ```
 * @param trans int
 * @returns Tween
 */
  setTrans(trans: int): Tween;
/**
 * Stops the tweening and resets the `Tween` to its initial state. This will not remove any appended `Tweener`s.
 * 
 * **Note:** This does *not* reset targets of `PropertyTweener`s to their values when the `Tween` first started.
 * 
 * 				```gdscript
 * 
 * 				var tween = create_tween()
 * 
 * 				# Will move from 0 to 500 over 1 second.
 * 				position.x = 0.0
 * 				tween.tween_property(self, "position:x", 500, 1.0)
 * 
 * 				# Will be at (about) 250 when the timer finishes.
 * 				await get_tree().create_timer(0.5).timeout
 * 
 * 				# Will now move from (about) 250 to 500 over 1 second,
 * 				# thus at half the speed as before.
 * 				tween.stop()
 * 				tween.play()
 * 				
 * 
 * ```
 * 
 * **Note:** If a Tween is stopped and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using `SceneTree.get_processed_tweens`.
 */
  stop(): void;
/**
 * Creates and appends a `CallbackTweener`. This method can be used to call an arbitrary method in any object. Use `Callable.bind` to bind additional arguments for the call.
 * 
 * **Example:** Object that keeps shooting every 1 second:
 * 
 * 				```gdscript
 * 
 * 				var tween = get_tree().create_tween().set_loops()
 * 				tween.tween_callback(shoot).set_delay(1)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				Tween tween = GetTree().CreateTween().SetLoops();
 * 				tween.TweenCallback(Callable.From(Shoot)).SetDelay(1.0f);
 * 				
 * 
 * ```
 * 
 * **Example:** Turning a sprite red and then blue, with 2 second delay:
 * 
 * 				```gdscript
 * 
 * 				var tween = get_tree().create_tween()
 * 				tween.tween_callback($Sprite.set_modulate.bind(Color.RED)).set_delay(2)
 * 				tween.tween_callback($Sprite.set_modulate.bind(Color.BLUE)).set_delay(2)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				Tween tween = GetTree().CreateTween();
 * 				Sprite2D sprite = GetNode<Sprite2D>("Sprite");
 * 				tween.TweenCallback(Callable.From(() => sprite.Modulate = Colors.Red)).SetDelay(2.0f);
 * 				tween.TweenCallback(Callable.From(() => sprite.Modulate = Colors.Blue)).SetDelay(2.0f);
 * 				
 * 
 * ```
 * 
 * @param callback Callable
 * @returns CallbackTweener
 */
  tweenCallback(callback: Callable): CallbackTweener;
/**
 * Creates and appends an `IntervalTweener`. This method can be used to create delays in the tween animation, as an alternative to using the delay in other `Tweener`s, or when there's no animation (in which case the `Tween` acts as a timer). `time` is the length of the interval, in seconds.
 * 
 * **Example:** Creating an interval in code execution:
 * 
 * 				```gdscript
 * 
 * 				# ... some code
 * 				await create_tween().tween_interval(2).finished
 * 				# ... more code
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				// ... some code
 * 				await ToSignal(CreateTween().TweenInterval(2.0f), Tween.SignalName.Finished);
 * 				// ... more code
 * 				
 * 
 * ```
 * 
 * **Example:** Creating an object that moves back and forth and jumps every few seconds:
 * 
 * 				```gdscript
 * 
 * 				var tween = create_tween().set_loops()
 * 				tween.tween_property($Sprite, "position:x", 200.0, 1).as_relative()
 * 				tween.tween_callback(jump)
 * 				tween.tween_interval(2)
 * 				tween.tween_property($Sprite, "position:x", -200.0, 1).as_relative()
 * 				tween.tween_callback(jump)
 * 				tween.tween_interval(2)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				Tween tween = CreateTween().SetLoops();
 * 				tween.TweenProperty(GetNode("Sprite"), "position:x", 200.0f, 1.0f).AsRelative();
 * 				tween.TweenCallback(Callable.From(Jump));
 * 				tween.TweenInterval(2.0f);
 * 				tween.TweenProperty(GetNode("Sprite"), "position:x", -200.0f, 1.0f).AsRelative();
 * 				tween.TweenCallback(Callable.From(Jump));
 * 				tween.TweenInterval(2.0f);
 * 				
 * 
 * ```
 * 
 * @param time float
 * @returns IntervalTweener
 */
  tweenInterval(time: float): IntervalTweener;
/**
 * Creates and appends a `MethodTweener`. This method is similar to a combination of `tween_callback` and `tween_property`. It calls a method over time with a tweened value provided as an argument. The value is tweened between `from` and `to` over the time specified by `duration`, in seconds. Use `Callable.bind` to bind additional arguments for the call. You can use `MethodTweener.set_ease` and `MethodTweener.set_trans` to tweak the easing and transition of the value or `MethodTweener.set_delay` to delay the tweening.
 * 
 * **Example:** Making a 3D object look from one point to another point:
 * 
 * 				```gdscript
 * 
 * 				var tween = create_tween()
 * 				tween.tween_method(look_at.bind(Vector3.UP), Vector3(-1, 0, -1), Vector3(1, 0, -1), 1) # The look_at() method takes up vector as second argument.
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				Tween tween = CreateTween();
 * 				tween.TweenMethod(Callable.From((Vector3 target) => LookAt(target, Vector3.Up)), new Vector3(-1.0f, 0.0f, -1.0f), new Vector3(1.0f, 0.0f, -1.0f), 1.0f); // Use lambdas to bind additional arguments for the call.
 * 				
 * 
 * ```
 * 
 * **Example:** Setting the text of a `Label`, using an intermediate method and after a delay:
 * 
 * 				```gdscript
 * 
 * 				func _ready():
 * 				    var tween = create_tween()
 * 				    tween.tween_method(set_label_text, 0, 10, 1).set_delay(1)
 * 
 * 				func set_label_text(value: int):
 * 				    $Label.text = "Counting " + str(value)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				public override void _Ready()
 * 				{
 * 				    base._Ready();
 * 
 * 				    Tween tween = CreateTween();
 * 				    tween.TweenMethod(Callable.From<int>(SetLabelText), 0.0f, 10.0f, 1.0f).SetDelay(1.0f);
 * 				}
 * 
 * 				private void SetLabelText(int value)
 * 				{
 * 				    GetNode<Label>("Label").Text = $"Counting {value}";
 * 				}
 * 				
 * 
 * ```
 * 
 * @param method Callable
 * @param from_ Variant
 * @param to Variant
 * @param duration float
 * @returns MethodTweener
 */
  tweenMethod(method: Callable, from_: Variant, to: Variant, duration: float): MethodTweener;
/**
 * Creates and appends a `PropertyTweener`. This method tweens a `property` of an `object` between an initial value and `final_val` in a span of time equal to `duration`, in seconds. The initial value by default is the property's value at the time the tweening of the `PropertyTweener` starts.
 * 
 * 				```gdscript
 * 
 * 				var tween = create_tween()
 * 				tween.tween_property($Sprite, "position", Vector2(100, 200), 1)
 * 				tween.tween_property($Sprite, "position", Vector2(200, 300), 1)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				Tween tween = CreateTween();
 * 				tween.TweenProperty(GetNode("Sprite"), "position", new Vector2(100.0f, 200.0f), 1.0f);
 * 				tween.TweenProperty(GetNode("Sprite"), "position", new Vector2(200.0f, 300.0f), 1.0f);
 * 				
 * 
 * ```
 * 
 * will move the sprite to position (100, 200) and then to (200, 300). If you use `PropertyTweener.from` or `PropertyTweener.from_current`, the starting position will be overwritten by the given value instead. See other methods in `PropertyTweener` to see how the tweening can be tweaked further.
 * 
 * **Note:** You can find the correct property name by hovering over the property in the Inspector. You can also provide the components of a property directly by using `"property:component"` (eg. `position:x`), where it would only apply to that particular component.
 * 
 * **Example:** Moving an object twice from the same position, with different transition types:
 * 
 * 				```gdscript
 * 
 * 				var tween = create_tween()
 * 				tween.tween_property($Sprite, "position", Vector2.RIGHT * 300, 1).as_relative().set_trans(Tween.TRANS_SINE)
 * 				tween.tween_property($Sprite, "position", Vector2.RIGHT * 300, 1).as_relative().from_current().set_trans(Tween.TRANS_EXPO)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				Tween tween = CreateTween();
 * 				tween.TweenProperty(GetNode("Sprite"), "position", Vector2.Right * 300.0f, 1.0f).AsRelative().SetTrans(Tween.TransitionType.Sine);
 * 				tween.TweenProperty(GetNode("Sprite"), "position", Vector2.Right * 300.0f, 1.0f).AsRelative().FromCurrent().SetTrans(Tween.TransitionType.Expo);
 * 				
 * 
 * ```
 * 
 * @param object Object
 * @param property NodePath
 * @param finalVal Variant
 * @param duration float
 * @returns PropertyTweener
 */
  tweenProperty(object: Object, property: NodePath, finalVal: Variant, duration: float): PropertyTweener;
/**
 * Creates and appends a `SubtweenTweener`. This method can be used to nest `subtween` within this `Tween`, allowing for the creation of more complex and composable sequences.
 * 
 * 				```gdscript
 * 
 * 				# Subtween will rotate the object.
 * 				var subtween = create_tween()
 * 				subtween.tween_property(self, "rotation_degrees", 45.0, 1.0)
 * 				subtween.tween_property(self, "rotation_degrees", 0.0, 1.0)
 * 
 * 				# Parent tween will execute the subtween as one of its steps.
 * 				var tween = create_tween()
 * 				tween.tween_property(self, "position:x", 500, 3.0)
 * 				tween.tween_subtween(subtween)
 * 				tween.tween_property(self, "position:x", 300, 2.0)
 * 				
 * 
 * ```
 * 
 * **Note:** The methods `pause`, `stop`, and `set_loops` can cause the parent `Tween` to get stuck on the subtween step; see the documentation for those methods for more information.
 * 
 * **Note:** The pause and process modes set by `set_pause_mode` and `set_process_mode` on `subtween` will be overridden by the parent `Tween`'s settings.
 * @param subtween Tween
 * @returns SubtweenTweener
 */
  tweenSubtween(subtween: Tween): SubtweenTweener;
/**
 * Emitted when the `Tween` has finished all tweening. Never emitted when the `Tween` is set to infinite looping (see `set_loops`).
 */
  finished: Signal<[]>;
/**
 * Emitted when a full loop is complete (see `set_loops`), providing the loop index. This signal is not emitted after the final loop, use `finished` instead for this case.
 */
  loopFinished: Signal<[loopCount: int]>;
/**
 * Emitted when one step of the `Tween` is complete, providing the step index. One step is either a single `Tweener` or a group of `Tweener`s running in parallel.
 */
  stepFinished: Signal<[idx: int]>;
/**
 * The `Tween` updates after each physics frame (see `Node._physics_process`).
 */
  static readonly TWEEN_PROCESS_PHYSICS: int;
/**
 * The `Tween` updates after each process frame (see `Node._process`).
 */
  static readonly TWEEN_PROCESS_IDLE: int;
/**
 * If the `Tween` has a bound node, it will process when that node can process (see `Node.process_mode`). Otherwise it's the same as `TWEEN_PAUSE_STOP`.
 */
  static readonly TWEEN_PAUSE_BOUND: int;
/**
 * If `SceneTree` is paused, the `Tween` will also pause.
 */
  static readonly TWEEN_PAUSE_STOP: int;
/**
 * The `Tween` will process regardless of whether `SceneTree` is paused.
 */
  static readonly TWEEN_PAUSE_PROCESS: int;
/**
 * The animation is interpolated linearly.
 */
  static readonly TRANS_LINEAR: int;
/**
 * The animation is interpolated using a sine function.
 */
  static readonly TRANS_SINE: int;
/**
 * The animation is interpolated with a quintic (to the power of 5) function.
 */
  static readonly TRANS_QUINT: int;
/**
 * The animation is interpolated with a quartic (to the power of 4) function.
 */
  static readonly TRANS_QUART: int;
/**
 * The animation is interpolated with a quadratic (to the power of 2) function.
 */
  static readonly TRANS_QUAD: int;
/**
 * The animation is interpolated with an exponential (to the power of x) function.
 */
  static readonly TRANS_EXPO: int;
/**
 * The animation is interpolated with elasticity, wiggling around the edges.
 */
  static readonly TRANS_ELASTIC: int;
/**
 * The animation is interpolated with a cubic (to the power of 3) function.
 */
  static readonly TRANS_CUBIC: int;
/**
 * The animation is interpolated with a function using square roots.
 */
  static readonly TRANS_CIRC: int;
/**
 * The animation is interpolated by bouncing at the end.
 */
  static readonly TRANS_BOUNCE: int;
/**
 * The animation is interpolated backing out at ends.
 */
  static readonly TRANS_BACK: int;
/**
 * The animation is interpolated like a spring towards the end.
 */
  static readonly TRANS_SPRING: int;
/**
 * The interpolation starts slowly and speeds up towards the end.
 */
  static readonly EASE_IN: int;
/**
 * The interpolation starts quickly and slows down towards the end.
 */
  static readonly EASE_OUT: int;
/**
 * A combination of `EASE_IN` and `EASE_OUT`. The interpolation is slowest at both ends.
 */
  static readonly EASE_IN_OUT: int;
/**
 * A combination of `EASE_IN` and `EASE_OUT`. The interpolation is fastest at both ends.
 */
  static readonly EASE_OUT_IN: int;
}
