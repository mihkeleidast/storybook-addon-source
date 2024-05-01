# @mihkeleidast/storybook-addon-source

## Installation

First, install the package.

```sh
npm install --save-dev @mihkeleidast/storybook-addon-source
```

Then, register it as an addon in `.storybook/main.js`.

```js
// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  // ...rest of config
  addons: [
    '@storybook/addon-essentials'
    '@mihkeleidast/storybook-addon-source', // 👈 register the addon here
  ],
};

export default config;
```

Then, add the decorator in `.storybook/preview.js`.

```js
// .storybook/preview.ts
import { Preview } from "@storybook/react";

import { withJsx } from '../dist/index.js'

const preview: Preview = {
  decorators: [
    withJsx, // 👈 add the decorator as the first one
    // ... rest of decorators
  ],
};

export default preview;
```
