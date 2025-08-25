import "tweakpane";

declare module "tweakpane" {
  interface Pane {
    addBinding<T extends object, K extends keyof T>(
      obj: T,
      key: K,
      params?: Record<string, any>
    ): any;
  }
}
