const { replaceTpl } = require('../../src/shared/utils')
const { getOptions } = require('loader-utils')
function tplLoader(template) {
  let source = template.replace(/\s+/g, '')
  const { log } = getOptions(this)
  const _log = log ? `console.log('tpl from ${this.resourcePath}')` : ''
  return `export default function(replaceObject) {
          ${replaceTpl.toString()}
          ${_log.toString()}
          return replaceTpl('${source}', replaceObject)
        }`
}
module.exports = tplLoader
