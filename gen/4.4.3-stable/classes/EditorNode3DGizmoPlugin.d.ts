import type { Camera3D, Color, EditorNode3DGizmo, GodotArray, GodotDictionary, Node3D, PackedInt32Array, Plane, Resource, StandardMaterial3D, Texture2D, Transform3D, Variant, Vector2, float, int } from "../index.d.ts";
/**
 * A class used by the editor to define Node3D gizmo types.
 * 
 * `EditorNode3DGizmoPlugin` allows you to define a new type of Gizmo. There are two main ways to do so: extending `EditorNode3DGizmoPlugin` for the simpler gizmos, or creating a new `EditorNode3DGizmo` type. See the tutorial in the documentation for more info.
 * To use `EditorNode3DGizmoPlugin`, register it using the `EditorPlugin.add_node_3d_gizmo_plugin` method first.
 */
export class EditorNode3DGizmoPlugin extends Resource {
/**
 * Adds a new material to the internal material list for the plugin. It can then be accessed with `get_material`. Should not be overridden.
 * @param name string
 * @param material StandardMaterial3D
 */
  addMaterial(name: string, material: StandardMaterial3D): void;
/**
 * @param gizmo EditorNode3DGizmo
 * @param handleId int
 * @param secondary boolean
 */
  private beginHandleAction(gizmo: EditorNode3DGizmo, handleId: int, secondary: boolean): void;
/**
 * Override this method to define whether the gizmos handled by this plugin can be hidden or not. Returns `true` if not overridden.
 * @returns boolean
 */
  private canBeHidden(): boolean;
/**
 * Override this method to commit a handle being edited (handles must have been previously added by `EditorNode3DGizmo.add_handles` during `_redraw`). This usually means creating an `UndoRedo` action for the change, using the current handle value as "do" and the `restore` argument as "undo".
 * If the `cancel` argument is `true`, the `restore` value should be directly set, without any `UndoRedo` action.
 * The `secondary` argument is `true` when the committed handle is secondary (see `EditorNode3DGizmo.add_handles` for more information).
 * Called for this plugin's active gizmos.
 * @param gizmo EditorNode3DGizmo
 * @param handleId int
 * @param secondary boolean
 * @param restore Variant
 * @param cancel boolean
 */
  private commitHandle(gizmo: EditorNode3DGizmo, handleId: int, secondary: boolean, restore: Variant, cancel: boolean): void;
/**
 * Override this method to commit a group of subgizmos being edited (see `_subgizmos_intersect_ray` and `_subgizmos_intersect_frustum`). This usually means creating an `UndoRedo` action for the change, using the current transforms as "do" and the `restores` transforms as "undo".
 * If the `cancel` argument is `true`, the `restores` transforms should be directly set, without any `UndoRedo` action. As with all subgizmo methods, transforms are given in local space respect to the gizmo's Node3D. Called for this plugin's active gizmos.
 * @param gizmo EditorNode3DGizmo
 * @param ids PackedInt32Array
 * @param restores Transform3D[]
 * @param cancel boolean
 */
  private commitSubgizmos(gizmo: EditorNode3DGizmo, ids: PackedInt32Array, restores: Transform3D[], cancel: boolean): void;
/**
 * Override this method to return a custom `EditorNode3DGizmo` for the 3D nodes of your choice, return `null` for the rest of nodes. See also `_has_gizmo`.
 * @param forNode3d Node3D
 * @returns EditorNode3DGizmo
 */
  private createGizmo(forNode3d: Node3D): EditorNode3DGizmo;
/**
 * Creates a handle material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with `get_material` and used in `EditorNode3DGizmo.add_handles`. Should not be overridden.
 * You can optionally provide a texture to use instead of the default icon.
 * @param name string
 * @param billboard boolean (optional, default: false)
 * @param texture Texture2D (optional, default: null)
 */
  createHandleMaterial(name: string, billboard?: boolean, texture?: Texture2D): void;
/**
 * Creates an icon material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with `get_material` and used in `EditorNode3DGizmo.add_unscaled_billboard`. Should not be overridden.
 * @param name string
 * @param texture Texture2D
 * @param onTop boolean (optional, default: false)
 * @param color Color (optional, default: Color(1, 1, 1, 1))
 */
  createIconMaterial(name: string, texture: Texture2D, onTop?: boolean, color?: Color): void;
/**
 * Creates an unshaded material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with `get_material` and used in `EditorNode3DGizmo.add_mesh` and `EditorNode3DGizmo.add_lines`. Should not be overridden.
 * @param name string
 * @param color Color
 * @param billboard boolean (optional, default: false)
 * @param onTop boolean (optional, default: false)
 * @param useVertexColor boolean (optional, default: false)
 */
  createMaterial(name: string, color: Color, billboard?: boolean, onTop?: boolean, useVertexColor?: boolean): void;
/**
 * Override this method to provide the name that will appear in the gizmo visibility menu.
 * @returns string
 */
  private getGizmoName(): string;
/**
 * Override this method to provide gizmo's handle names. The `secondary` argument is `true` when the requested handle is secondary (see `EditorNode3DGizmo.add_handles` for more information). Called for this plugin's active gizmos.
 * @param gizmo EditorNode3DGizmo
 * @param handleId int
 * @param secondary boolean
 * @returns string
 */
  private getHandleName(gizmo: EditorNode3DGizmo, handleId: int, secondary: boolean): string;
/**
 * Override this method to return the current value of a handle. This value will be requested at the start of an edit and used as the `restore` argument in `_commit_handle`.
 * The `secondary` argument is `true` when the requested handle is secondary (see `EditorNode3DGizmo.add_handles` for more information).
 * Called for this plugin's active gizmos.
 * @param gizmo EditorNode3DGizmo
 * @param handleId int
 * @param secondary boolean
 * @returns Variant
 */
  private getHandleValue(gizmo: EditorNode3DGizmo, handleId: int, secondary: boolean): Variant;
/**
 * Gets material from the internal list of materials. If an `EditorNode3DGizmo` is provided, it will try to get the corresponding variant (selected and/or editable).
 * @param name string
 * @param gizmo EditorNode3DGizmo (optional, default: null)
 * @returns StandardMaterial3D
 */
  getMaterial(name: string, gizmo?: EditorNode3DGizmo): StandardMaterial3D;
/**
 * Override this method to set the gizmo's priority. Gizmos with higher priority will have precedence when processing inputs like handles or subgizmos selection.
 * All built-in editor gizmos return a priority of `-1`. If not overridden, this method will return `0`, which means custom gizmos will automatically get higher priority than built-in gizmos.
 * @returns int
 */
  private getPriority(): int;
/**
 * Override this method to return the current transform of a subgizmo. As with all subgizmo methods, the transform should be in local space respect to the gizmo's Node3D. This transform will be requested at the start of an edit and used in the `restore` argument in `_commit_subgizmos`. Called for this plugin's active gizmos.
 * @param gizmo EditorNode3DGizmo
 * @param subgizmoId int
 * @returns Transform3D
 */
  private getSubgizmoTransform(gizmo: EditorNode3DGizmo, subgizmoId: int): Transform3D;
/**
 * Override this method to define which Node3D nodes have a gizmo from this plugin. Whenever a `Node3D` node is added to a scene this method is called, if it returns `true` the node gets a generic `EditorNode3DGizmo` assigned and is added to this plugin's list of active gizmos.
 * @param forNode3d Node3D
 * @returns boolean
 */
  private hasGizmo(forNode3d: Node3D): boolean;
/**
 * Override this method to return `true` whenever to given handle should be highlighted in the editor. The `secondary` argument is `true` when the requested handle is secondary (see `EditorNode3DGizmo.add_handles` for more information). Called for this plugin's active gizmos.
 * @param gizmo EditorNode3DGizmo
 * @param handleId int
 * @param secondary boolean
 * @returns boolean
 */
  private isHandleHighlighted(gizmo: EditorNode3DGizmo, handleId: int, secondary: boolean): boolean;
/**
 * Override this method to define whether Node3D with this gizmo should be selectable even when the gizmo is hidden.
 * @returns boolean
 */
  private isSelectableWhenHidden(): boolean;
/**
 * Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call `EditorNode3DGizmo.clear` at the beginning of this method and then add visual elements depending on the node's properties.
 * @param gizmo EditorNode3DGizmo
 */
  private redraw(gizmo: EditorNode3DGizmo): void;
/**
 * Override this method to update the node's properties when the user drags a gizmo handle (previously added with `EditorNode3DGizmo.add_handles`). The provided `screen_pos` is the mouse position in screen coordinates and the `camera` can be used to convert it to raycasts.
 * The `secondary` argument is `true` when the edited handle is secondary (see `EditorNode3DGizmo.add_handles` for more information).
 * Called for this plugin's active gizmos.
 * @param gizmo EditorNode3DGizmo
 * @param handleId int
 * @param secondary boolean
 * @param camera Camera3D
 * @param screenPos Vector2
 */
  private setHandle(gizmo: EditorNode3DGizmo, handleId: int, secondary: boolean, camera: Camera3D, screenPos: Vector2): void;
/**
 * Override this method to update the node properties during subgizmo editing (see `_subgizmos_intersect_ray` and `_subgizmos_intersect_frustum`). The `transform` is given in the Node3D's local coordinate system. Called for this plugin's active gizmos.
 * @param gizmo EditorNode3DGizmo
 * @param subgizmoId int
 * @param transform Transform3D
 */
  private setSubgizmoTransform(gizmo: EditorNode3DGizmo, subgizmoId: int, transform: Transform3D): void;
/**
 * Override this method to allow selecting subgizmos using mouse drag box selection. Given a `camera` and `frustum_planes`, this method should return which subgizmos are contained within the frustums. The `frustum_planes` argument consists of an array with all the `Plane`s that make up the selection frustum. The returned value should contain a list of unique subgizmo identifiers, these identifiers can have any non-negative value and will be used in other virtual methods like `_get_subgizmo_transform` or `_commit_subgizmos`. Called for this plugin's active gizmos.
 * @param gizmo EditorNode3DGizmo
 * @param camera Camera3D
 * @param frustumPlanes Plane[]
 * @returns PackedInt32Array
 */
  private subgizmosIntersectFrustum(gizmo: EditorNode3DGizmo, camera: Camera3D, frustumPlanes: Plane[]): PackedInt32Array;
/**
 * Override this method to allow selecting subgizmos using mouse clicks. Given a `camera` and a `screen_pos` in screen coordinates, this method should return which subgizmo should be selected. The returned value should be a unique subgizmo identifier, which can have any non-negative value and will be used in other virtual methods like `_get_subgizmo_transform` or `_commit_subgizmos`. Called for this plugin's active gizmos.
 * @param gizmo EditorNode3DGizmo
 * @param camera Camera3D
 * @param screenPos Vector2
 * @returns int
 */
  private subgizmosIntersectRay(gizmo: EditorNode3DGizmo, camera: Camera3D, screenPos: Vector2): int;
}
