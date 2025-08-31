import type { GodotArray, GodotDictionary, RID, RefCounted, Resource, Transform2D, Vector2, float, int } from "../index.d.ts";
/**
 * Provides parameters for `PhysicsDirectSpaceState2D.intersect_shape`.
 * 
 * By changing various properties of this object, such as the shape, you can configure the parameters for `PhysicsDirectSpaceState2D.intersect_shape`.
 */
export class PhysicsShapeQueryParameters2D extends RefCounted {
/**
 * If `true`, the query will take `Area2D`s into account.
 */
  collideWithAreas: boolean;
/**
 * If `true`, the query will take `PhysicsBody2D`s into account.
 */
  collideWithBodies: boolean;
/**
 * The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See Collision layers and masks (https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks) in the documentation for more information.
 */
  collisionMask: int;
/**
 * The list of object `RID`s that will be excluded from collisions. Use `CollisionObject2D.get_rid` to get the `RID` associated with a `CollisionObject2D`-derived node.
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
  motion: Vector2;
/**
 * The `Shape2D` that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over `shape_rid`.
 */
  shape: Resource;
/**
 * The queried shape's `RID` that will be used for collision/intersection queries. Use this over `shape` if you want to optimize for performance using the Servers API:
 * 
 * 				```gdscript
 * 
 * 				var shape_rid = PhysicsServer2D.circle_shape_create()
 * 				var radius = 64
 * 				PhysicsServer2D.shape_set_data(shape_rid, radius)
 * 
 * 				var params = PhysicsShapeQueryParameters2D.new()
 * 				params.shape_rid = shape_rid
 * 
 * 				# Execute physics queries here...
 * 
 * 				# Release the shape when done with physics queries.
 * 				PhysicsServer2D.free_rid(shape_rid)
 * 				
 * 
 * ```
 * 
 * 				```csharp
 * 
 * 				RID shapeRid = PhysicsServer2D.CircleShapeCreate();
 * 				int radius = 64;
 * 				PhysicsServer2D.ShapeSetData(shapeRid, radius);
 * 
 * 				var params = new PhysicsShapeQueryParameters2D();
 * 				params.ShapeRid = shapeRid;
 * 
 * 				// Execute physics queries here...
 * 
 * 				// Release the shape when done with physics queries.
 * 				PhysicsServer2D.FreeRid(shapeRid);
 * 				
 * 
 * ```
 * 
 */
  shapeRid: RID;
/**
 * The queried shape's transform matrix.
 */
  transform: Transform2D;
}
