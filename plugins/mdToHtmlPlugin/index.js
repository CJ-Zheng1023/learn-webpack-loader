const { readFileSync } = require('fs')
const { resolve } = require('path')
class MdToHtmlPlugin {
  constructor({ template, filename = 'md.html' }) {
    if (!template) {
      throw new Error('must have template!')
    }
    this.template = template
    this.filename = filename
  }
  apply(compiler) {
    compiler.hooks.emit.tap('mdToHtmlPlugin', compilation => {
      const _assets = compilation.assets
      const _mdContent = readFileSync(this.template, 'utf8')
      const _indexHtml = readFileSync(resolve(__dirname, 'template.html'), 'utf8')
      // _mdContent转成html，然后把转换内容放到_indexHtml指定位置替换赋值给result
      const result = ''
      _assets[this.filename] = {
        source() {
          return result
        },
        size() {
          return result.length
        }
      }
    })
  }
}
module.exports = MdToHtmlPlugin
