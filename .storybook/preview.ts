import type { Preview } from "@storybook/react";
import "../src/styles/constants.css";
import "../src/styles/fonts.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: ["Design", "Components"],
        locales: '',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    exportedParameter: "exportedParameter",
    darkMode: {
      current: "light",
    },
  },

  tags: ["autodocs"]
};

export default preview;
