import type { GodotArray, GodotDictionary, PhysicsDirectSpaceState2D, RID, Resource, float, int } from "../index.d.ts";
/**
 * A resource that holds all components of a 2D world, such as a canvas and a physics space.
 * 
 * Class that has everything pertaining to a 2D world: A physics space, a canvas, and a sound space. 2D nodes register their resources into the current 2D world.
 */
export class World2D extends Resource {
/**
 * The `RID` of this world's canvas resource. Used by the `RenderingServer` for 2D drawing.
 */
  canvas: RID;
/**
 * Direct access to the world's physics 2D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to `Node._physics_process` in the main thread.
 */
  directSpaceState: PhysicsDirectSpaceState2D;
/**
 * The `RID` of this world's navigation map. Used by the `NavigationServer2D`.
 */
  navigationMap: RID;
/**
 * The `RID` of this world's physics space resource. Used by the `PhysicsServer2D` for 2D physics, treating it as both a space and an area.
 */
  space: RID;
}
