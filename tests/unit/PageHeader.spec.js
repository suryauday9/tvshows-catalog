import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import { initializeApp } from './initializeApp';
import PageHeader from '../../src/components/PageHeader.vue';
import { routes } from '../../src/router';

const vuetify = new Vuetify();
const localVue = initializeApp(createLocalVue());

describe('PageHeader component', () => {  
    let wrapper;
    const router = new VueRouter(routes);
    
    const store = new Vuex.Store({
        actions: {
            getSearchbarStatus: jest.fn()
        }
    });

    const mountComponent = (options) => {
        return shallowMount(PageHeader, {
            localVue,
            router,
            store,
            vuetify,
            ...options,
        })
    }

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

    it('should trigger onclick event of search button', () => {
        const headerWrapper = mount(PageHeader, {
            localVue,
            vuetify,
            router
        });
        expect(headerWrapper.find('button').trigger('click')).toStrictEqual(store.dispatch('getSearchbarStatus'));
    });

    it('showSearchbar should be instance of Function', () => {
        const actn = wrapper.vm.showSearchbar();
        expect(actn).toBeUndefined();
        expect(wrapper.vm.$nextTick()).toStrictEqual(store.dispatch('getSearchbarStatus'));
    });

});