// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  const { filesystem, print: { success, error }, template: { generate } } = toolbox

  async function isReactNative () {
    const packageFile = await filesystem.read('package.json', 'json')
    return !!packageFile.dependencies['react-native']
  }

  async function createComponent (folder, name) {
    if (!name) {
      error('Name must be specified')
      return
    }

    await generate({
      template: 'component.js.ejs',
      target: `${folder}/${name}/index.js`,
      props: { name: name }
    })

    const styleTemplate = (isReactNative()) ? 'styles-rn.js.ejs' : 'styles-react.js.ejs'

    await generate({
      template: styleTemplate,
      target: `${folder}/${name}/styles.js`
    })

    success(`Generated ${folder}/${name}.`)
  }

  toolbox.createComponent = createComponent
}
