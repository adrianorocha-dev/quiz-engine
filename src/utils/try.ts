export function tryResult<T>(fn: () => T): [T, null] | [null, Error] {
  try {
    const result = fn();
    return [result, null];
  } catch (e) {
    const error =
      e instanceof Error ? e : new Error("Unknown error", { cause: e });

    return [null, error];
  }
}
