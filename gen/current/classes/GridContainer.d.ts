import type { Container, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A container that arranges its child controls in a grid layout.
 * 
 * `GridContainer` arranges its child controls in a grid layout. The number of columns is specified by the `columns` property, whereas the number of rows depends on how many are needed for the child controls. The number of rows and columns is preserved for every size of the container.
 * 
 * **Note:** `GridContainer` only works with child nodes inheriting from `Control`. It won't rearrange child nodes inheriting from `Node2D`.
 */
export class GridContainer extends Container {
/**
 * The number of columns in the `GridContainer`. If modified, `GridContainer` reorders its Control-derived children to accommodate the new layout.
 */
  columns: int;
}
