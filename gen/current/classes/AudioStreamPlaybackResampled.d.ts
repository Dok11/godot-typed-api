import type { AudioStreamPlayback, GodotArray, GodotDictionary, float, int } from "../index.d.ts";
export class AudioStreamPlaybackResampled extends AudioStreamPlayback {
  beginResample(): void;
/**
 * @returns float
 */
  private getStreamSamplingRate(): float;
/**
 * @param dstBuffer unknown
 * @param frameCount int
 * @returns int
 */
  private mixResampled(dstBuffer: unknown, frameCount: int): int;
}
