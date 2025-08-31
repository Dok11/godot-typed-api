import type { CameraAttributes, Environment, GodotArray, GodotDictionary, PhysicsDirectSpaceState3D, RID, Resource, float, int } from "../index.d.ts";
/**
 * A resource that holds all components of a 3D world, such as a visual scenario and a physics space.
 * 
 * Class that has everything pertaining to a world: A physics space, a visual scenario, and a sound space. 3D nodes register their resources into the current 3D world.
 */
export class World3D extends Resource {
/**
 * The default `CameraAttributes` resource to use if none set on the `Camera3D`.
 */
  cameraAttributes: CameraAttributes;
/**
 * Direct access to the world's physics 3D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to `Node._physics_process` in the main thread.
 */
  directSpaceState: PhysicsDirectSpaceState3D;
/**
 * The World3D's `Environment`.
 */
  environment: Environment;
/**
 * The World3D's fallback environment will be used if `environment` fails or is missing.
 */
  fallbackEnvironment: Environment;
/**
 * The `RID` of this world's navigation map. Used by the `NavigationServer3D`.
 */
  navigationMap: RID;
/**
 * The World3D's visual scenario.
 */
  scenario: RID;
/**
 * The World3D's physics space.
 */
  space: RID;
}
