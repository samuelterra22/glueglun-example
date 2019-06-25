module.exports = {
  name: 'generate:page',
  description: 'Generate a new page inside src/pages',
  alias: ['gp'],
  run: async toolbox => {
    const {
      parameters,
      createComponent
    } = toolbox

    const name = parameters.first

    await createComponent('src/pages', name)
  }
}