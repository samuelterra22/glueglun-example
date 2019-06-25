module.exports = {
  name: 'generate:component',
  description: 'Generate a new component inside src/components',
  alias: ['gc'],
  run: async toolbox => {
    const {
      parameters,
      createComponent
    } = toolbox

    const name = parameters.first

    await createComponent('src/components', name)
  }
}
