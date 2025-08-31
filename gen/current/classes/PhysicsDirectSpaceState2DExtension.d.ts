import type { GodotArray, GodotDictionary, PhysicsDirectSpaceState2D, RID, Transform2D, Vector2, float, int } from "../index.d.ts";
/**
 * Provides virtual methods that can be overridden to create custom `PhysicsDirectSpaceState2D` implementations.
 * 
 * This class extends `PhysicsDirectSpaceState2D` by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 * Intended for use with GDExtension to create custom implementations of `PhysicsDirectSpaceState2D`.
 */
export class PhysicsDirectSpaceState2DExtension extends PhysicsDirectSpaceState2D {
/**
 * @param shapeRid RID
 * @param transform Transform2D
 * @param motion Vector2
 * @param margin float
 * @param collisionMask int
 * @param collideWithBodies boolean
 * @param collideWithAreas boolean
 * @param closestSafe unknown
 * @param closestUnsafe unknown
 * @returns boolean
 */
  private castMotion(shapeRid: RID, transform: Transform2D, motion: Vector2, margin: float, collisionMask: int, collideWithBodies: boolean, collideWithAreas: boolean, closestSafe: unknown, closestUnsafe: unknown): boolean;
/**
 * @param shapeRid RID
 * @param transform Transform2D
 * @param motion Vector2
 * @param margin float
 * @param collisionMask int
 * @param collideWithBodies boolean
 * @param collideWithAreas boolean
 * @param results unknown
 * @param maxResults int
 * @param resultCount unknown
 * @returns boolean
 */
  private collideShape(shapeRid: RID, transform: Transform2D, motion: Vector2, margin: float, collisionMask: int, collideWithBodies: boolean, collideWithAreas: boolean, results: unknown, maxResults: int, resultCount: unknown): boolean;
/**
 * @param position Vector2
 * @param canvasInstanceId int
 * @param collisionMask int
 * @param collideWithBodies boolean
 * @param collideWithAreas boolean
 * @param results unknown
 * @param maxResults int
 * @returns int
 */
  private intersectPoint(position: Vector2, canvasInstanceId: int, collisionMask: int, collideWithBodies: boolean, collideWithAreas: boolean, results: unknown, maxResults: int): int;
/**
 * @param from_ Vector2
 * @param to Vector2
 * @param collisionMask int
 * @param collideWithBodies boolean
 * @param collideWithAreas boolean
 * @param hitFromInside boolean
 * @param result unknown
 * @returns boolean
 */
  private intersectRay(from_: Vector2, to: Vector2, collisionMask: int, collideWithBodies: boolean, collideWithAreas: boolean, hitFromInside: boolean, result: unknown): boolean;
/**
 * @param shapeRid RID
 * @param transform Transform2D
 * @param motion Vector2
 * @param margin float
 * @param collisionMask int
 * @param collideWithBodies boolean
 * @param collideWithAreas boolean
 * @param result unknown
 * @param maxResults int
 * @returns int
 */
  private intersectShape(shapeRid: RID, transform: Transform2D, motion: Vector2, margin: float, collisionMask: int, collideWithBodies: boolean, collideWithAreas: boolean, result: unknown, maxResults: int): int;
/**
 * @param body RID
 * @returns boolean
 */
  isBodyExcludedFromQuery(body: RID): boolean;
/**
 * @param shapeRid RID
 * @param transform Transform2D
 * @param motion Vector2
 * @param margin float
 * @param collisionMask int
 * @param collideWithBodies boolean
 * @param collideWithAreas boolean
 * @param restInfo unknown
 * @returns boolean
 */
  private restInfo(shapeRid: RID, transform: Transform2D, motion: Vector2, margin: float, collisionMask: int, collideWithBodies: boolean, collideWithAreas: boolean, restInfo: unknown): boolean;
}
