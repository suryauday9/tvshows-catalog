import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';

import { initializeApp } from './initializeApp';
import ShowsList from '../../src/components/ShowsList.vue';
import { genres } from './response';

const vuetify = new Vuetify();
const localVue = initializeApp(createLocalVue());

describe('PageHeader component', () => {  
    let wrapper;
    // const router = new VueRouter(routes);
    
    // const store = new Vuex.Store({
    //     state: {
    //         shows: showsData,
    //         genres: [],
    //         showDetails: [],
    //         showThumbnails: [],
    //         showSearchbar: false
    //     },
    //     actions: {
    //         getShowsBySearch: jest.fn(),
    //         getShowslist: jest.fn()
    //     }
    // });

    const mountComponent = (options) => {
        return shallowMount(ShowsList, {
            localVue,
            // router,
            // store,
            propsData: { 'genresData' : genres },
            // data() {
            //     return {
            //         genres: this.propsData
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

    it('rendered component data should match with store', () => {
        // see if data loads
        expect(wrapper.vm.genres).toEqual(genres);
    });

    it('should handle empty props without breaking', () => {
        const sltWrapper = mount(ShowsList, {
            localVue,
            vuetify,
            propsData: { },
        });
        expect(sltWrapper.vm.genres).toEqual([]);
    });

});