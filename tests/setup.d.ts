/// <reference types="vitest" />
import '@testing-library/jest-dom';

// расширение глобального типа expect
declare global {
  namespace Vi {
    interface Assertion<T = any> extends jest.Matchers<void, T> {}
  }
}
