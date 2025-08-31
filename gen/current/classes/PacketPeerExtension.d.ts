import type { GodotArray, GodotDictionary, PacketPeer, float, int } from "../index.d.ts";
export class PacketPeerExtension extends PacketPeer {
/**
 * @returns int
 */
  private getAvailablePacketCount(): int;
/**
 * @returns int
 */
  private getMaxPacketSize(): int;
/**
 * @param rBuffer unknown
 * @param rBufferSize unknown
 * @returns int
 */
  private getPacket(rBuffer: unknown, rBufferSize: unknown): int;
/**
 * @param pBuffer unknown
 * @param pBufferSize int
 * @returns int
 */
  private putPacket(pBuffer: unknown, pBufferSize: int): int;
}
