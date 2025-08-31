import type { int } from "./core.d.ts";

export type Signal<TArgs extends any[] = []> = {
  connect(cb: (...args: TArgs) => void, flags?: int): void;
  once(cb: (...args: TArgs) => void): void;
  emit(...args: TArgs): void;
};
