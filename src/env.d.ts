/// <reference types="vite/client" />

declare module "*.css?url" {
  const src: string;
  export default src;
}

declare module "@tanstack/react-start/server-entry" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export default value;
}

declare module "*.mpeg" {
  const src: string;
  export default src;
}

declare module "*.ogg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}
