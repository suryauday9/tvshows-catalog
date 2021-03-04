// Components
import Page404 from '@/views/Page404.vue';

// Utilities
import { initializeApp } from './initializeApp';
import { createLocalVue, shallowMount } from '@vue/test-utils';

const localVue = initializeApp(createLocalVue())

describe('Page404 view', () => {
  let wrapper;
  const mountComponent = (options) => {
    return shallowMount(Page404, {
        localVue,
        ...options,
    })
  };

  beforeEach(() => {
      wrapper = mountComponent();
  })

  afterEach(() => {
      wrapper.destroy();
  })

  it('renders component correctly', () => {
      // see if component renders
      expect(wrapper.element).toMatchSnapshot();
  });

  it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance).toBeTruthy();
  });

})
