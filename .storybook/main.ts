export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
