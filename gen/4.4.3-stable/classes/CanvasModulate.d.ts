import type { Color, GodotArray, GodotDictionary, Node2D, float, int } from "../index.d.ts";
/**
 * A node that applies a color tint to a canvas.
 * 
 * `CanvasModulate` applies a color tint to all nodes on a canvas. Only one can be used to tint a canvas, but `CanvasLayer`s can be used to render things independently.
 */
export class CanvasModulate extends Node2D {
/**
 * The tint color to apply.
 */
  color: Color;
}
