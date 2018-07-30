import { shallowMount } from '@vue/test-utils'
import CardDetails from '@/components/CardDetails.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const holder = 'AlayaCare'
    const wrapper = shallowMount(CardDetails, {
      propsData: { holder }
    })
    expect(wrapper.text()).toMatch(holder)
  })
})
