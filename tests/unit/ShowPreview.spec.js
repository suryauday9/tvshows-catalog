import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import { initializeApp } from './initializeApp';
import { showsData } from './response';
import ShowPreview from '../../src/components/ShowPreview.vue';
import { routes } from '../../src/router';

const vuetify = new Vuetify();
const localVue = initializeApp(createLocalVue());

describe('ShowPreview component', () => {  
    let wrapper;
    const router = new VueRouter(routes);

    const store = new Vuex.Store({
        state: {
            shows: showsData,
            genres: [],
            showDetails: [],
            showThumbnails: [],
            showSearchbar: false
        },
        actions: {}
    });

    const mountComponent = (options) => {
        return shallowMount(ShowPreview, {
            localVue,
            router,
            store,
            propsData: { 'show' : showsData[0] },
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

    it('should display show name', () => {
        expect(wrapper.find("div.show-name").text()).toEqual(showsData[0].name);
    });

    it('it should navigate to ShowDetails page', () => {
        wrapper.vm.viewDetails(2);
        expect(wrapper.vm.$router.history.pending.name).toBe('show');
    });

});