import type { Node, Vector3, int, float, Signal } from "../index.d.ts";

// This file is a type-only playground. Declare the class to avoid
// generating runtime code and to allow extending a type-only base.
declare class Foo extends Node {
  speed: float;
  hit: Signal<[int, Vector3]>;
  _ready(): void;
  takeDamage(amount: int): void;
}
