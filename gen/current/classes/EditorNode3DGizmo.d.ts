import type { Camera3D, Color, EditorNode3DGizmoPlugin, GodotArray, GodotDictionary, Material, Mesh, Node, Node3D, Node3DGizmo, PackedInt32Array, PackedVector3Array, Plane, SkinReference, Transform3D, TriangleMesh, Variant, Vector2, float, int } from "../index.d.ts";
/**
 * Gizmo for editing `Node3D` objects.
 * 
 * Gizmo that is used for providing custom visualization and editing (handles and subgizmos) for `Node3D` objects. Can be overridden to create custom gizmos, but for simple gizmos creating a `EditorNode3DGizmoPlugin` is usually recommended.
 */
export class EditorNode3DGizmo extends Node3DGizmo {
/**
 * Adds the specified `segments` to the gizmo's collision shape for picking. Call this method during `_redraw`.
 * @param segments PackedVector3Array
 */
  addCollisionSegments(segments: PackedVector3Array): void;
/**
 * Adds collision triangles to the gizmo for picking. A `TriangleMesh` can be generated from a regular `Mesh` too. Call this method during `_redraw`.
 * @param triangles TriangleMesh
 */
  addCollisionTriangles(triangles: TriangleMesh): void;
/**
 * Adds a list of handles (points) which can be used to edit the properties of the gizmo's `Node3D`. The `ids` argument can be used to specify a custom identifier for each handle, if an empty array is passed, the ids will be assigned automatically from the `handles` argument order.
 * The `secondary` argument marks the added handles as secondary, meaning they will normally have lower selection priority than regular handles. When the user is holding the shift key secondary handles will switch to have higher priority than regular handles. This change in priority can be used to place multiple handles at the same point while still giving the user control on their selection.
 * There are virtual methods which will be called upon editing of these handles. Call this method during `_redraw`.
 * @param handles PackedVector3Array
 * @param material Material
 * @param ids PackedInt32Array
 * @param billboard boolean (optional, default: false)
 * @param secondary boolean (optional, default: false)
 */
  addHandles(handles: PackedVector3Array, material: Material, ids: PackedInt32Array, billboard?: boolean, secondary?: boolean): void;
/**
 * Adds lines to the gizmo (as sets of 2 points), with a given material. The lines are used for visualizing the gizmo. Call this method during `_redraw`.
 * @param lines PackedVector3Array
 * @param material Material
 * @param billboard boolean (optional, default: false)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 */
  addLines(lines: PackedVector3Array, material: Material, billboard?: boolean, modulate?: Color): void;
/**
 * Adds a mesh to the gizmo with the specified `material`, local `transform` and `skeleton`. Call this method during `_redraw`.
 * @param mesh Mesh
 * @param material Material (optional, default: null)
 * @param transform Transform3D (optional, default: Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0))
 * @param skeleton SkinReference (optional, default: null)
 */
  addMesh(mesh: Mesh, material?: Material, transform?: Transform3D, skeleton?: SkinReference): void;
/**
 * Adds an unscaled billboard for visualization and selection. Call this method during `_redraw`.
 * @param material Material
 * @param defaultScale float (optional, default: 1)
 * @param modulate Color (optional, default: Color(1, 1, 1, 1))
 */
  addUnscaledBillboard(material: Material, defaultScale?: float, modulate?: Color): void;
/**
 * @param id int
 * @param secondary boolean
 */
  private beginHandleAction(id: int, secondary: boolean): void;
/**
 * Removes everything in the gizmo including meshes, collisions and handles.
 */
  clear(): void;
/**
 * Override this method to commit a handle being edited (handles must have been previously added by `add_handles`). This usually means creating an `UndoRedo` action for the change, using the current handle value as "do" and the `restore` argument as "undo".
 * If the `cancel` argument is `true`, the `restore` value should be directly set, without any `UndoRedo` action.
 * The `secondary` argument is `true` when the committed handle is secondary (see `add_handles` for more information).
 * @param id int
 * @param secondary boolean
 * @param restore Variant
 * @param cancel boolean
 */
  private commitHandle(id: int, secondary: boolean, restore: Variant, cancel: boolean): void;
/**
 * Override this method to commit a group of subgizmos being edited (see `_subgizmos_intersect_ray` and `_subgizmos_intersect_frustum`). This usually means creating an `UndoRedo` action for the change, using the current transforms as "do" and the `restores` transforms as "undo".
 * If the `cancel` argument is `true`, the `restores` transforms should be directly set, without any `UndoRedo` action.
 * @param ids PackedInt32Array
 * @param restores Transform3D[]
 * @param cancel boolean
 */
  private commitSubgizmos(ids: PackedInt32Array, restores: Transform3D[], cancel: boolean): void;
/**
 * Override this method to return the name of an edited handle (handles must have been previously added by `add_handles`). Handles can be named for reference to the user when editing.
 * The `secondary` argument is `true` when the requested handle is secondary (see `add_handles` for more information).
 * @param id int
 * @param secondary boolean
 * @returns string
 */
  private getHandleName(id: int, secondary: boolean): string;
/**
 * Override this method to return the current value of a handle. This value will be requested at the start of an edit and used as the `restore` argument in `_commit_handle`.
 * The `secondary` argument is `true` when the requested handle is secondary (see `add_handles` for more information).
 * @param id int
 * @param secondary boolean
 * @returns Variant
 */
  private getHandleValue(id: int, secondary: boolean): Variant;
/**
 * Returns the `Node3D` node associated with this gizmo.
 * @returns Node3D
 */
  getNode3d(): Node3D;
/**
 * Returns the `EditorNode3DGizmoPlugin` that owns this gizmo. It's useful to retrieve materials using `EditorNode3DGizmoPlugin.get_material`.
 * @returns EditorNode3DGizmoPlugin
 */
  getPlugin(): EditorNode3DGizmoPlugin;
/**
 * Returns a list of the currently selected subgizmos. Can be used to highlight selected elements during `_redraw`.
 * @returns PackedInt32Array
 */
  getSubgizmoSelection(): PackedInt32Array;
/**
 * Override this method to return the current transform of a subgizmo. This transform will be requested at the start of an edit and used as the `restore` argument in `_commit_subgizmos`.
 * @param id int
 * @returns Transform3D
 */
  private getSubgizmoTransform(id: int): Transform3D;
/**
 * Override this method to return `true` whenever the given handle should be highlighted in the editor.
 * The `secondary` argument is `true` when the requested handle is secondary (see `add_handles` for more information).
 * @param id int
 * @param secondary boolean
 * @returns boolean
 */
  private isHandleHighlighted(id: int, secondary: boolean): boolean;
/**
 * Returns `true` if the given subgizmo is currently selected. Can be used to highlight selected elements during `_redraw`.
 * @param id int
 * @returns boolean
 */
  isSubgizmoSelected(id: int): boolean;
/**
 * Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call `clear` at the beginning of this method and then add visual elements depending on the node's properties.
 */
  private redraw(): void;
/**
 * Override this method to update the node properties when the user drags a gizmo handle (previously added with `add_handles`). The provided `point` is the mouse position in screen coordinates and the `camera` can be used to convert it to raycasts.
 * The `secondary` argument is `true` when the edited handle is secondary (see `add_handles` for more information).
 * @param id int
 * @param secondary boolean
 * @param camera Camera3D
 * @param point Vector2
 */
  private setHandle(id: int, secondary: boolean, camera: Camera3D, point: Vector2): void;
/**
 * Sets the gizmo's hidden state. If `true`, the gizmo will be hidden. If `false`, it will be shown.
 * @param hidden boolean
 */
  setHidden(hidden: boolean): void;
/**
 * Sets the reference `Node3D` node for the gizmo. `node` must inherit from `Node3D`.
 * @param node Node
 */
  setNode3d(node: Node): void;
/**
 * Override this method to update the node properties during subgizmo editing (see `_subgizmos_intersect_ray` and `_subgizmos_intersect_frustum`). The `transform` is given in the `Node3D`'s local coordinate system.
 * @param id int
 * @param transform Transform3D
 */
  private setSubgizmoTransform(id: int, transform: Transform3D): void;
/**
 * Override this method to allow selecting subgizmos using mouse drag box selection. Given a `camera` and a `frustum`, this method should return which subgizmos are contained within the frustum. The `frustum` argument consists of an array with all the `Plane`s that make up the selection frustum. The returned value should contain a list of unique subgizmo identifiers, which can have any non-negative value and will be used in other virtual methods like `_get_subgizmo_transform` or `_commit_subgizmos`.
 * @param camera Camera3D
 * @param frustum Plane[]
 * @returns PackedInt32Array
 */
  private subgizmosIntersectFrustum(camera: Camera3D, frustum: Plane[]): PackedInt32Array;
/**
 * Override this method to allow selecting subgizmos using mouse clicks. Given a `camera` and a `point` in screen coordinates, this method should return which subgizmo should be selected. The returned value should be a unique subgizmo identifier, which can have any non-negative value and will be used in other virtual methods like `_get_subgizmo_transform` or `_commit_subgizmos`.
 * @param camera Camera3D
 * @param point Vector2
 * @returns int
 */
  private subgizmosIntersectRay(camera: Camera3D, point: Vector2): int;
}
