import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import { initializeApp } from './initializeApp';
import ListContainer from '../../src/components/ListContainer.vue';
import { showsData } from './response';
import ShowPreview from '../../src/components/ShowPreview.vue';

const vuetify = new Vuetify();
const localVue = initializeApp(createLocalVue());

describe('ListContainer component', () => {  
    let wrapper;
    
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
        return shallowMount(ListContainer, {
            localVue,
            store,
            // computed: {
            //     shows() {
            //         return store.state.shows;
            //     }
            // },
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

    it('should get 3 results for Action genre', () => {
        const results = wrapper.vm.showsByGenre(store.state.shows, 'Action');
        expect(results.length).toEqual(3);
    });

    it('rendered component data should match with store', () => {
        // see if data loads
        expect(wrapper.vm.shows).toBe(store.state.shows);
    });

    it('it should load ShowPreview component', () => {
        expect(ShowPreview).toBeTruthy();
    });

});