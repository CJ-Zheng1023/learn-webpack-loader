import tpl from './info.tpl'
const user = {
  name: 'z',
  age: 18,
  gender: 'male'
}
const str = tpl(user)
document.querySelector('#app').innerHTML = str
