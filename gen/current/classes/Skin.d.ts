import type { GodotArray, GodotDictionary, Resource, StringName, Transform3D, float, int } from "../index.d.ts";
export class Skin extends Resource {
/**
 * @param bone int
 * @param pose Transform3D
 */
  addBind(bone: int, pose: Transform3D): void;
/**
 * @param name string
 * @param pose Transform3D
 */
  addNamedBind(name: string, pose: Transform3D): void;
  clearBinds(): void;
/**
 * @param bindIndex int
 * @returns int
 */
  getBindBone(bindIndex: int): int;
/**
 * @returns int
 */
  getBindCount(): int;
/**
 * @param bindIndex int
 * @returns StringName
 */
  getBindName(bindIndex: int): StringName;
/**
 * @param bindIndex int
 * @returns Transform3D
 */
  getBindPose(bindIndex: int): Transform3D;
/**
 * @param bindIndex int
 * @param bone int
 */
  setBindBone(bindIndex: int, bone: int): void;
/**
 * @param bindCount int
 */
  setBindCount(bindCount: int): void;
/**
 * @param bindIndex int
 * @param name StringName
 */
  setBindName(bindIndex: int, name: StringName): void;
/**
 * @param bindIndex int
 * @param pose Transform3D
 */
  setBindPose(bindIndex: int, pose: Transform3D): void;
}
