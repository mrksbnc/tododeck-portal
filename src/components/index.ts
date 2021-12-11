'use strict';

import { App } from '@vue/runtime-core';

export const components = import.meta.globEager('./**/*.vue');

export function registerComponents(app: App): void {
  Object.entries(components).forEach(([path, definition]) => {
    const componentName = path
      .split('/')
      .pop()
      ?.replace(/\.\w+$/, '') as string;
    app.component(componentName, definition.default);
  });
}
