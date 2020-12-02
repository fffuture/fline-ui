import FlineButton from './src/button.vue'

FlineButton.install = function (Vue) {
  Vue.component(FlineButton.name, FlineButton)
}

export default FlineButton