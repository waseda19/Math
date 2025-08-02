export function assert(condition: boolean, message?: string): void {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

export function assertEqual<T>(a: T, b: T, message?: string): void {
  assert(a === b, message || `${a} !== ${b}`);
}

export function assertArrayEqual<T>(a: T[], b: T[], message?: string): void {
  assert(a.length === b.length, message || 'Array length mismatch');
  for (let i = 0; i < a.length; i++) {
    assert(a[i] === b[i], message || `Array element mismatch at index ${i}`);
  }
}
