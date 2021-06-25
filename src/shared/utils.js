function replaceTpl(source, replaceObject) {
  return source.replace(/\{\{(.*?)\}\}/g, (node, key) => {
    return replaceObject[key]
  })
}
module.exports = {
  replaceTpl
}
