import { shallowMount } from '@vue/test-utils'
import Alert from '@/components/Alert/Alert.vue'

describe('Alert.vue', () => {
  it('renders the good type when passed', () => {
    const state = 'primary'
    const wrapper = shallowMount(Alert, {
      propsData: { state }
    })
    const alertDiv = wrapper.find(`.alert--${state}`)
    expect(alertDiv.is('div')).toBe(true)
  })
})
