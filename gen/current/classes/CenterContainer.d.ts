import type { Container, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
/**
 * A container that keeps child controls in its center.
 * 
 * `CenterContainer` is a container that keeps all of its child controls in its center at their minimum size.
 */
export class CenterContainer extends Container {
/**
 * If `true`, centers children relative to the `CenterContainer`'s top left corner.
 */
  useTopLeft: boolean;
}
