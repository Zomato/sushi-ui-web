module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/**/*.stories.mdx',
    '../src/**/**/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
    'storybook-readme/register',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
