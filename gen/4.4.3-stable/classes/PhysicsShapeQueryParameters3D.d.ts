import type { GodotArray, GodotDictionary, RID, RefCounted, Resource, Transform3D, Vector3, float, int } from "../index.d.ts";
/**
 * Provides parameters for `PhysicsDirectSpaceState3D.intersect_shape`.
 * 
 * By changing various properties of this object, such as the shape, you can configure the parameters for `PhysicsDirectSpaceState3D.intersect_shape`.
 */
export class PhysicsShapeQueryParameters3D extends RefCounted {
/**
 * If `true`, the query will take `Area3D`s into account.
 */
  collideWithAreas: boolean;
/**
 * If `true`, the query will take `PhysicsBody3D`s into account.
 */
  collideWithBodies: boolean;
/**
 * The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See Collision layers and masks (https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks) in the documentation for more information.
 */
  collisionMask: int;
/**
 * The list of object `RID`s that will be excluded from collisions. Use `CollisionObject3D.get_rid` to get the `RID` associated with a `CollisionObject3D`-derived node.
 * 
 * **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.
 */
  exclude: RID[];
/**
 * The collision margin for the shape.
 */
  margin: float;
/**
 * The motion of the shape being queried for.
 */
  motion: Vector3;
/**
 * The `Shape3D` that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over `shape_rid`.
 */
  shape: Resource;
/**
 * The queried shape's `RID` that will be used for collision/intersection queries. Use this over `shape` if you want to optimize for performance using the Servers API:
 * 
 * 				```gdscript
 * 
 * 				var shape_rid = PhysicsServer3D.shape_create(PhysicsServer3D.SHAPE_SPHERE)
 * 				var radius = 2.0
 * 				PhysicsServer3D.shape_set_data(shape_rid, radius)
 * 
 * 				var params = PhysicsShapeQueryParameters3D.new()
 * 				params.shape_rid = shape_rid
 * 
 * 				# Execute physics queries here...
 * 
 * 				# Release the shape when done with physics queries.
 * 				PhysicsServer3D.free_rid(shape_rid)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				RID shapeRid = PhysicsServer3D.ShapeCreate(PhysicsServer3D.ShapeType.Sphere);
 * 				float radius = 2.0f;
 * 				PhysicsServer3D.ShapeSetData(shapeRid, radius);
 * 
 * 				var params = new PhysicsShapeQueryParameters3D();
 * 				params.ShapeRid = shapeRid;
 * 
 * 				// Execute physics queries here...
 * 
 * 				// Release the shape when done with physics queries.
 * 				PhysicsServer3D.FreeRid(shapeRid);
 * 				
 * 
 * ```
 * 
 */
  shapeRid: RID;
/**
 * The queried shape's transform matrix.
 */
  transform: Transform3D;
}
