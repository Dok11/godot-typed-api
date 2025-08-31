import type { GodotArray, GodotDictionary, PhysicsDirectSpaceState3D, RID, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * Provides virtual methods that can be overridden to create custom `PhysicsDirectSpaceState3D` implementations.
 * 
 * This class extends `PhysicsDirectSpaceState3D` by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 * Intended for use with GDExtension to create custom implementations of `PhysicsDirectSpaceState3D`.
 */
export class PhysicsDirectSpaceState3DExtension extends PhysicsDirectSpaceState3D {
/**
 * @param shapeRid RID
 * @param transform Transform3D
 * @param motion Vector3
 * @param margin float
 * @param collisionMask int
 * @param collideWithBodies boolean
 * @param collideWithAreas boolean
 * @param closestSafe unknown
 * @param closestUnsafe unknown
 * @param info unknown
 * @returns boolean
 */
  private castMotion(shapeRid: RID, transform: Transform3D, motion: Vector3, margin: float, collisionMask: int, collideWithBodies: boolean, collideWithAreas: boolean, closestSafe: unknown, closestUnsafe: unknown, info: unknown): boolean;
/**
 * @param shapeRid RID
 * @param transform Transform3D
 * @param motion Vector3
 * @param margin float
 * @param collisionMask int
 * @param collideWithBodies boolean
 * @param collideWithAreas boolean
 * @param results unknown
 * @param maxResults int
 * @param resultCount unknown
 * @returns boolean
 */
  private collideShape(shapeRid: RID, transform: Transform3D, motion: Vector3, margin: float, collisionMask: int, collideWithBodies: boolean, collideWithAreas: boolean, results: unknown, maxResults: int, resultCount: unknown): boolean;
/**
 * @param object RID
 * @param point Vector3
 * @returns Vector3
 */
  private getClosestPointToObjectVolume(object: RID, point: Vector3): Vector3;
/**
 * @param position Vector3
 * @param collisionMask int
 * @param collideWithBodies boolean
 * @param collideWithAreas boolean
 * @param results unknown
 * @param maxResults int
 * @returns int
 */
  private intersectPoint(position: Vector3, collisionMask: int, collideWithBodies: boolean, collideWithAreas: boolean, results: unknown, maxResults: int): int;
/**
 * @param from_ Vector3
 * @param to Vector3
 * @param collisionMask int
 * @param collideWithBodies boolean
 * @param collideWithAreas boolean
 * @param hitFromInside boolean
 * @param hitBackFaces boolean
 * @param pickRay boolean
 * @param result unknown
 * @returns boolean
 */
  private intersectRay(from_: Vector3, to: Vector3, collisionMask: int, collideWithBodies: boolean, collideWithAreas: boolean, hitFromInside: boolean, hitBackFaces: boolean, pickRay: boolean, result: unknown): boolean;
/**
 * @param shapeRid RID
 * @param transform Transform3D
 * @param motion Vector3
 * @param margin float
 * @param collisionMask int
 * @param collideWithBodies boolean
 * @param collideWithAreas boolean
 * @param resultCount unknown
 * @param maxResults int
 * @returns int
 */
  private intersectShape(shapeRid: RID, transform: Transform3D, motion: Vector3, margin: float, collisionMask: int, collideWithBodies: boolean, collideWithAreas: boolean, resultCount: unknown, maxResults: int): int;
/**
 * @param body RID
 * @returns boolean
 */
  isBodyExcludedFromQuery(body: RID): boolean;
/**
 * @param shapeRid RID
 * @param transform Transform3D
 * @param motion Vector3
 * @param margin float
 * @param collisionMask int
 * @param collideWithBodies boolean
 * @param collideWithAreas boolean
 * @param restInfo unknown
 * @returns boolean
 */
  private restInfo(shapeRid: RID, transform: Transform3D, motion: Vector3, margin: float, collisionMask: int, collideWithBodies: boolean, collideWithAreas: boolean, restInfo: unknown): boolean;
}
