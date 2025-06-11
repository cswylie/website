// src/vite-env.d.ts
// This file declares modules for image files so that
// TypeScript can understand imports of these types.
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}

/// <reference types="vite/client" />