export function tryResult<T>(fn: () => T): Readonly<[T, null] | [null, Error]> {
  try {
    const result = fn();
    return [result, null];
  } catch (e) {
    const error =
      e instanceof Error ? e : new Error("Unknown error", { cause: e });

    return [null, error];
  }
}

export function tryPromise<T>(
  promiseOrFn: Promise<T> | (() => Promise<T>),
): Promise<Readonly<[T, null] | [null, Error]>> {
  const promise = promiseOrFn instanceof Promise ? promiseOrFn : promiseOrFn();

  return promise
    .then((result) => [result, null] as const)
    .catch((e) => {
      const error =
        e instanceof Error ? e : new Error("Unknown error", { cause: e });

      return [null, error] as const;
    });
}
