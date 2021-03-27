module.exports = async ({ config }) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      mainFields: ['source', 'module', 'main'],
    }
}}
