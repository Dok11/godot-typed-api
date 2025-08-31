import type { GodotArray, GodotDictionary, PackedFloat32Array, RefCounted, float, int } from "../index.d.ts";
/**
 * Provides methods for generating pseudo-random numbers.
 * 
 * RandomNumberGenerator is a class for generating pseudo-random numbers. It currently uses PCG32 (https://www.pcg-random.org/).
 * 
 * **Note:** The underlying algorithm is an implementation detail and should not be depended upon.
 * To generate a random float number (within a given range) based on a time-dependent seed:
 * 
 * 		```gdscript
 * 
 * 		var rng = RandomNumberGenerator.new()
 * 		func _ready():
 * 		    var my_random_number = rng.randf_range(-10.0, 10.0)
 * 		
 * 
 * ```
 */
export class RandomNumberGenerator extends RefCounted {
/**
 * Initializes the random number generator state based on the given seed value. A given seed will give a reproducible sequence of pseudo-random numbers.
 * 
 * **Note:** The RNG does not have an avalanche effect, and can output similar random streams given similar seeds. Consider using a hash function to improve your seed quality if they're sourced externally.
 * 
 * **Note:** Setting this property produces a side effect of changing the internal `state`, so make sure to initialize the seed *before* modifying the `state`:
 * 
 * **Note:** The default value of this property is pseudo-random, and changes when calling `randomize`. The `0` value documented here is a placeholder, and not the actual default seed.
 * 
 * 			```gdscript
 * 
 * 			var rng = RandomNumberGenerator.new()
 * 			rng.seed = hash("Godot")
 * 			rng.state = 100 # Restore to some previously saved state.
 * 			
 * 
 * ```
 */
  seed: int;
/**
 * The current state of the random number generator. Save and restore this property to restore the generator to a previous state:
 * 
 * 			```gdscript
 * 
 * 			var rng = RandomNumberGenerator.new()
 * 			print(rng.randf())
 * 			var saved_state = rng.state # Store current state.
 * 			print(rng.randf()) # Advance internal state.
 * 			rng.state = saved_state # Restore the state.
 * 			print(rng.randf()) # Prints the same value as previously.
 * 			
 * 
 * ```
 * 
 * **Note:** Do not set state to arbitrary values, since the random number generator requires the state to have certain qualities to behave properly. It should only be set to values that came from the state property itself. To initialize the random number generator with arbitrary input, use `seed` instead.
 * 
 * **Note:** The default value of this property is pseudo-random, and changes when calling `randomize`. The `0` value documented here is a placeholder, and not the actual default seed.
 */
  state: int;
/**
 * Returns a pseudo-random float between `0.0` and `1.0` (inclusive).
 * @returns float
 */
  randf(): float;
/**
 * Returns a normally-distributed (https://en.wikipedia.org/wiki/Normal_distribution), pseudo-random floating-point number from the specified `mean` and a standard `deviation`. This is also known as a Gaussian distribution.
 * 
 * **Note:** This method uses the Box-Muller transform (https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform) algorithm.
 * @param mean float (optional, default: 0.0)
 * @param deviation float (optional, default: 1.0)
 * @returns float
 */
  randfn(mean?: float, deviation?: float): float;
/**
 * Returns a pseudo-random float between `from` and `to` (inclusive).
 * @param from_ float
 * @param to float
 * @returns float
 */
  randfRange(from_: float, to: float): float;
/**
 * Returns a pseudo-random 32-bit unsigned integer between `0` and `4294967295` (inclusive).
 * @returns int
 */
  randi(): int;
/**
 * Returns a pseudo-random 32-bit signed integer between `from` and `to` (inclusive).
 * @param from_ int
 * @param to int
 * @returns int
 */
  randiRange(from_: int, to: int): int;
/**
 * Sets up a time-based seed for this `RandomNumberGenerator` instance. Unlike the [@GlobalScope] random number generation functions, different `RandomNumberGenerator` instances can use different seeds.
 */
  randomize(): void;
/**
 * Returns a random index with non-uniform weights. Prints an error and returns `-1` if the array is empty.
 * 
 * 				```gdscript
 * 
 * 				var rng = RandomNumberGenerator.new()
 * 
 * 				var my_array = ["one", "two", "three", "four"]
 * 				var weights = PackedFloat32Array([0.5, 1, 1, 2])
 * 
 * 				# Prints one of the four elements in `my_array`.
 * 				# It is more likely to print "four", and less likely to print "one".
 * 				print(my_array[rng.rand_weighted(weights)])
 * 				
 * 
 * ```
 * 
 * @param weights PackedFloat32Array
 * @returns int
 */
  randWeighted(weights: PackedFloat32Array): int;
}
