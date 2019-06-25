module.exports = {
  name: 'teste',
  run: async toolbox => {
    const { print, parameters } = toolbox

    // toolbox api: https://infinitered.github.io/gluegun/#/toolbox-api

    // print.info('info')
    // print.success('success')
    // print.error('error')
    // print.fancy('fancy')
    // print.warning('warning')

    // print.info(parameters)

    if (parameters.options.funcao === 'soma') {
      print.success(`A soma é ${parameters.first + parameters.second}`)
    }
  }
}
