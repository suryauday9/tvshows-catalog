// Components
import PageFooter from '@/components/PageFooter.vue';

// Utilities
import { initializeApp } from './initializeApp';
import { createLocalVue, shallowMount } from '@vue/test-utils';

const localVue = initializeApp(createLocalVue())

describe('PageFooter view', () => {
  let wrapper;
  const mountComponent = (options) => {
    return shallowMount(PageFooter, {
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
