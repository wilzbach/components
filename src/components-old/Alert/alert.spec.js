import Vue from 'vue'
import Alert from './Alert.vue'
import { mount } from '@vue/test-utils'

describe('Test suite for Alert', () => {
  it('Test Alert props', () => {
    const wrapper = mount(Alert, {
      propsData: {
        type: 'warn',
        dismissible: true
      }
    })
    expect(wrapper.props().type).toBe('warn')
    expect(wrapper.props().dismissible).toBe(true)
    expect(wrapper.props().icon).toBe('')
  })
})
