export default {
  bind: function (el, binding, vnode) {
    el.classList.add('waves')
  },
  unbind: function (el) {
    el.classList.remove('waves')
  }
}
