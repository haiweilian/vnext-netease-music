import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Tabs from '../Tabs.vue'
import { localPlaylistTabs } from '~/utils/local'

describe('Tabs', () => {
  test('should tabs props', async () => {
    // first
    const first = localPlaylistTabs[0].value
    const wrapper = mount(Tabs, {
      props: {
        tabs: localPlaylistTabs,
        modelValue: first,
      },
    })
    await nextTick()
    const firstElement = wrapper.findAll('li')[0]

    expect(firstElement.exists()).toBeTruthy()
    expect(firstElement.classes('is-active')).toBeTruthy()
    expect(firstElement.html()).toContain(first)
    expect(wrapper.html()).toMatchSnapshot()

    // change last
    const last = localPlaylistTabs[localPlaylistTabs.length - 1].value
    wrapper.setProps({
      modelValue: last,
    })
    await nextTick()
    const lastElement = wrapper.findAll('li')[localPlaylistTabs.length - 1]

    expect(lastElement.exists()).toBeTruthy()
    expect(lastElement.classes('is-active')).toBeTruthy()
    expect(lastElement.html()).toContain(last)

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should tabs emits', async () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: localPlaylistTabs,
      },
    })

    wrapper.findAll('li')[0].trigger('click')
    await nextTick()

    // change event
    const changeEvent = wrapper.emitted('change') as any[]
    expect(changeEvent).toHaveLength(1)
    expect(changeEvent[0]).toEqual([localPlaylistTabs[0].value])

    // update event
    const updateEvent = wrapper.emitted('update:modelValue') as any[]
    expect(updateEvent).toHaveLength(1)
    expect(updateEvent[0]).toEqual([localPlaylistTabs[0].value])

    expect(wrapper.html()).toMatchSnapshot()
  })
})
