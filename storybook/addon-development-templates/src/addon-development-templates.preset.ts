export const managerEntries = (entry = []) => [
  ...entry,
  require.resolve('@atls/storybook-addon-development-templates/register'),
]
