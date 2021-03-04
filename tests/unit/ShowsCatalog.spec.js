import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import { initializeApp } from './initializeApp';
import { showsData, genres } from './response';
import ShowsCatalog from '../../src/views/ShowsCatalog.vue';
import ListContainer from '../../src/components/ListContainer.vue';

const vuetify = new Vuetify();
const localVue = initializeApp(createLocalVue());

describe('ShowsCatalog component', () => {  
    let wrapper;
    
    const store = new Vuex.Store({
        state: {
            shows: showsData,
            genres: genres,
            showDetails: [],
            showThumbnails: [],
            showSearchbar: false
        },
        actions: {
            getShowslist: jest.fn()
        }
    });

    const mountComponent = (options) => {
        return shallowMount(ShowsCatalog, {
            localVue,
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

    it('should trigger initialize method', () => {
        const actn = wrapper.vm.initialize();
        expect(actn).toBeUndefined();
        expect(wrapper.vm.$nextTick()).toStrictEqual(store.dispatch('getShowslist'));
    });

    it('rendered component data should match with store', () => {
        // see if data loads
        expect(wrapper.vm.genres).toBe(store.state.genres);
    });

    it('it should load ListContainer component', () => {
        expect(ListContainer).toBeTruthy();
    });

});