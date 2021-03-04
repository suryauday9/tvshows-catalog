import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import { initializeApp } from './initializeApp';
import { showsData, showDetails, showThumbnails } from './response';
import ShowDetails from '../../src/views/ShowDetails.vue';
import { routes } from '../../src/router';

const vuetify = new Vuetify();
const localVue = initializeApp(createLocalVue());

describe('ShowDetails component', () => {  
    let wrapper;
    const router = new VueRouter(routes);
    
    const store = new Vuex.Store({
        state: {
            shows: showsData,
            genres: [],
            showDetails: showDetails,
            showThumbnails: showThumbnails,
            showSearchbar: false
        },
        actions: {
            getShowDetails: jest.fn(),
            getShowThumbnails: jest.fn()
        }
    });

    const mountComponent = (options) => {
        return shallowMount(ShowDetails, {
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

    it('rendered component data should match with store', () => {
        expect(wrapper.vm.showDetails).toBe(store.state.showDetails);
        expect(wrapper.vm.showThumbnails).toBe(store.state.showThumbnails);
    });

    it('background image data should match with store', () => {
        const bgImg = store.state.showThumbnails.filter(
            image => image.type === 'background',
        );
        expect(wrapper.vm.backgroundImage).toBe(bgImg[0].resolutions.original.url);
    });

    it('background image & poster image should match with store values', () => {
        const store = new Vuex.Store({
            state: {
                shows: showsData,
                genres: [],
                showDetails: showDetails,
                showThumbnails: [],
                showSearchbar: false
            },
            actions: {
                getShowDetails: jest.fn(),
                getShowThumbnails: jest.fn()
            }
        });
        const dummyWrapper = shallowMount(ShowDetails, {
            localVue,
            router,
            store,
            vuetify
        });
        let bgImg = (store.state.showThumbnails.length) ? store.state.showThumbnails.filter(
            image => image.type === 'background',
        ) : '';

        if(bgImg !== '') {
            expect(dummyWrapper.vm.backgroundImage).toBe(bgImg[0].resolutions.original.url);
        } else {
            expect(dummyWrapper.vm.backgroundImage).toBe(bgImg);
        }
    });

    it('should validate the background image value', () => {
        const store = new Vuex.Store({
            state: {
                shows: showsData,
                genres: [],
                showDetails: showDetails,
                showThumbnails: [{
                    "id": 808,
                    "type": "poster",
                    "main": true,
                    "resolutions": {
                      "original": {
                        "url": "https://static.tvmaze.com/uploads/images/original_untouched/0/808.jpg"
                      },
                      "medium": {
                        "url": "https://static.tvmaze.com/uploads/images/medium_portrait/0/808.jpg"
                      }
                    }
                  }],
                showSearchbar: false
            },
            actions: {
                getShowDetails: jest.fn(),
                getShowThumbnails: jest.fn()
            }
        });
        const dummyWrapper = shallowMount(ShowDetails, {
            localVue,
            router,
            store,
            vuetify
        });
        let bgImg = (store.state.showThumbnails.length) ? store.state.showThumbnails.filter(
            image => image.type === 'background',
        ) : '';

        if(bgImg.length) {
            expect(dummyWrapper.vm.backgroundImage).toBe(bgImg[0].resolutions.original.url);
        } else {
            expect(dummyWrapper.vm.backgroundImage).toBe('');
        }
    });

    it('should validate the poster image value', () => {
        const store = new Vuex.Store({
            state: {
                shows: showsData,
                genres: [],
                showDetails: showDetails,
                showThumbnails: [{
                    "id": 546133,
                    "type": "background",
                    "main": false,
                    "resolutions": {
                      "original": {
                        "url": "https://static.tvmaze.com/uploads/images/original_untouched/219/549687.jpg"
                      }
                    }
                  }],
                showSearchbar: false
            },
            actions: {
                getShowDetails: jest.fn(),
                getShowThumbnails: jest.fn()
            }
        });
        const dummyWrapper = shallowMount(ShowDetails, {
            localVue,
            router,
            store,
            vuetify
        });
        let psImg = (store.state.showThumbnails.length) ? store.state.showThumbnails.filter(
            image => image.type === 'poster',
        ) : '';

        if(psImg.length) {
            expect(dummyWrapper.vm.posterImage).toBe(psImg[0].resolutions.original.url);
        } else {
            expect(dummyWrapper.vm.posterImage).toBe('');
        }
    });

    it('poster image data should match with store', () => {
        const pstImg = store.state.showThumbnails.filter(
            image => image.type === 'poster',
        );
        expect(wrapper.vm.posterImage).toBe(pstImg[0].resolutions.original.url);
    });

    it('goback method should redirect to home', () => {
        wrapper.vm.goBack();
        expect(wrapper.vm.$router.history.pending.name).toBe('showsCatalog');
    });

});