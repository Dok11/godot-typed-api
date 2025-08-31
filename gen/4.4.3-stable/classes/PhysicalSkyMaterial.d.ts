import type { Color, GodotArray, GodotDictionary, Material, Texture2D, float, int } from "../index.d.ts";
/**
 * A material that defines a sky for a `Sky` resource by a set of physical properties.
 * 
 * The `PhysicalSkyMaterial` uses the Preetham analytic daylight model to draw a sky based on physical properties. This results in a substantially more realistic sky than the `ProceduralSkyMaterial`, but it is slightly slower and less flexible.
 * The `PhysicalSkyMaterial` only supports one sun. The color, energy, and direction of the sun are taken from the first `DirectionalLight3D` in the scene tree.
 */
export class PhysicalSkyMaterial extends Material {
/**
 * The sky's overall brightness multiplier. Higher values result in a brighter sky.
 */
  energyMultiplier: float;
/**
 * Modulates the `Color` on the bottom half of the sky to represent the ground.
 */
  groundColor: Color;
/**
 * Controls the strength of Mie scattering (https://en.wikipedia.org/wiki/Mie_scattering) for the sky. Mie scattering results from light colliding with larger particles (like water). On earth, Mie scattering results in a whitish color around the sun and horizon.
 */
  mieCoefficient: float;
/**
 * Controls the `Color` of the Mie scattering (https://en.wikipedia.org/wiki/Mie_scattering) effect. While not physically accurate, this allows for the creation of alien-looking planets.
 */
  mieColor: Color;
/**
 * Controls the direction of the Mie scattering (https://en.wikipedia.org/wiki/Mie_scattering). A value of `1` means that when light hits a particle it's passing through straight forward. A value of `-1` means that all light is scatter backwards.
 */
  mieEccentricity: float;
/**
 * `Texture2D` for the night sky. This is added to the sky, so if it is bright enough, it may be visible during the day.
 */
  nightSky: Texture2D;
/**
 * Controls the strength of the Rayleigh scattering (https://en.wikipedia.org/wiki/Rayleigh_scattering). Rayleigh scattering results from light colliding with small particles. It is responsible for the blue color of the sky.
 */
  rayleighCoefficient: float;
/**
 * Controls the `Color` of the Rayleigh scattering (https://en.wikipedia.org/wiki/Rayleigh_scattering). While not physically accurate, this allows for the creation of alien-looking planets. For example, setting this to a red `Color` results in a Mars-looking atmosphere with a corresponding blue sunset.
 */
  rayleighColor: Color;
/**
 * Sets the size of the sun disk. Default value is based on Sol's perceived size from Earth.
 */
  sunDiskScale: float;
/**
 * Sets the thickness of the atmosphere. High turbidity creates a foggy-looking atmosphere, while a low turbidity results in a clearer atmosphere.
 */
  turbidity: float;
/**
 * If `true`, enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky.
 */
  useDebanding: boolean;
}
