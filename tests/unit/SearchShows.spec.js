import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import { initializeApp } from './initializeApp';
import SearchShows from '../../src/components/SearchShows.vue';
import { showsData } from './response';
import { routes } from '../../src/router';

const vuetify = new Vuetify();
const localVue = initializeApp(createLocalVue());

describe('PageHeader component', () => {  
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
        actions: {
            getShowsBySearch: jest.fn(),
            getShowslist: jest.fn()
        }
    });

    const mountComponent = (options) => {
        return shallowMount(SearchShows, {
            localVue,
            router,
            store,
            data() {
                return {
                    searchText: 'game'
                }
            },
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
        expect(wrapper.vm.showSearchbar).toBe(store.state.showSearchbar);
    });

    it('should dispatch getShowslist method', () => {
        const searchWrapper = mount(SearchShows, {
            localVue,
            vuetify,
            store,
            router,
            data() {
                return {
                    searchText: ''
                }
            },
        });
        const actn = searchWrapper.vm.searchShows();
        expect(actn).toBeUndefined();
        expect(searchWrapper.vm.$nextTick()).toStrictEqual(store.dispatch('getShowslist'));
    });

    it('should dispatch getShowsBySearch method', () => {
        const searchWrapper = mount(SearchShows, {
            localVue,
            vuetify,
            store,
            router,
            data() {
                return {
                    searchText: 'game'
                }
            },
        });
        const actn = searchWrapper.vm.searchShows();
        expect(actn).toBeUndefined();
        expect(searchWrapper.vm.$nextTick()).toStrictEqual(store.dispatch('getShowsBySearch'));
    });

    it('should trigger clearSearch method', () => {
        const searchWrapper = mount(SearchShows, {
            localVue,
            vuetify,
            store,
            router,
            data() {
                return {
                    searchText: 'game'
                }
            },
        });
        const actn = searchWrapper.vm.clearSearch();
        expect(actn).toBeUndefined();
        expect(searchWrapper.vm.$nextTick()).toStrictEqual(store.dispatch('getShowsBySearch'));
    });

    it('should trigger the watch service for showSearchbar', () => {
        expect(wrapper.vm.$options.watch.showSearchbar.call(wrapper.vm)).toBeUndefined();
        expect(wrapper.vm.$options.watch.showSearchbar.call(wrapper.vm, true)).toBeUndefined();
    });

});