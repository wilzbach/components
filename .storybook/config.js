import Vue from 'vue'
import { configure, setAddon, addDecorator } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'
import JSXAddon from 'storybook-addon-jsx'

import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../src/styles/index.scss'

import AsyncSuite from '../src/main'
Vue.use(AsyncSuite)

setAddon(JSXAddon)

setOptions({
  name: 'Asyncy',
  url: 'asyncy.com',
  addonPanelInRight: true,
  sortStoriesByKind: true
})

const PaddingDecoration = () => ({
  template: `<div style="padding: 30px 30px 30px 30px">
    <story/>
  </div>`
})

addDecorator(PaddingDecoration)

const req = require.context('../stories', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
