import { Preview } from "@storybook/react";

import { withJsx } from '../dist/index.js'

const preview: Preview = {
  decorators: [
    withJsx,
  ],
  parameters: {
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
