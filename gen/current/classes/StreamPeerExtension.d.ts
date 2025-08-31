import type { GodotArray, GodotDictionary, StreamPeer, float, int } from "../index.d.ts";
export class StreamPeerExtension extends StreamPeer {
/**
 * @returns int
 */
  private getAvailableBytes(): int;
/**
 * @param rBuffer unknown
 * @param rBytes int
 * @param rReceived unknown
 * @returns int
 */
  private getData(rBuffer: unknown, rBytes: int, rReceived: unknown): int;
/**
 * @param rBuffer unknown
 * @param rBytes int
 * @param rReceived unknown
 * @returns int
 */
  private getPartialData(rBuffer: unknown, rBytes: int, rReceived: unknown): int;
/**
 * @param pData unknown
 * @param pBytes int
 * @param rSent unknown
 * @returns int
 */
  private putData(pData: unknown, pBytes: int, rSent: unknown): int;
/**
 * @param pData unknown
 * @param pBytes int
 * @param rSent unknown
 * @returns int
 */
  private putPartialData(pData: unknown, pBytes: int, rSent: unknown): int;
}
