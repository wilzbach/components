import { shallowMount } from '@vue/test-utils'
import Alert from '@/components/Alert/Alert'

describe('Alert.vue', () => {
  it('renders the good type when passed', () => {
    const type = 'primary'
    const wrapper = shallowMount(Alert, {
      propsData: { type }
    })
    const alertDiv = wrapper.find('.alert-primary')
    expect(alertDiv.is('div')).toBe(true)
  })
})
