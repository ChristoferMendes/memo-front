export const tryCatch = async <TPromise>(promise: Promise<TPromise>) => {
  try {
    const result = await promise;
    return [result, null] as const;
  } catch (e) {
    return [null, e] as const;
  }
};
