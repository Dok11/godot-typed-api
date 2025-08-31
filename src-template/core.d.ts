export type int = number & { readonly __gd_int: unique symbol };
export type float = number & { readonly __gd_float: unique symbol };
export type GodotArray<T = unknown> = T[] & { readonly __gd_array?: true };
export type GodotDictionary<V = unknown> = Record<string, V>;
export const asInt: (n: number) => int;
export const asFloat: (n: number) => float;
