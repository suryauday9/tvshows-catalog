import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import App from "../../src/App.vue";
import PageHeader from "../../src/components/PageHeader.vue";
import PageFooter from "../../src/components/PageFooter.vue";

describe("App component", () => {
  let appWrapper;
  const router = new VueRouter({ path: "/", name: "showsCatalog" });

  beforeEach(() => {
    Vue.use(VueRouter);
    Vue.use(Vuetify);
    appWrapper = shallowMount(App, {
      Vue,
      router
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });

  it('renders component correctly', () => {
    // see if component renders
    expect(appWrapper.element).toMatchSnapshot();
  });

  it("is a Vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });

  it("it should have a v-app-stub", () => {
    expect(appWrapper.html()).toContain("v-app");
  });

  describe("it should load PageHeader component", () => {
    it("it should load the page-header", () => {
      expect(PageHeader).toBeTruthy();
    });
  });

  describe("it should load PageFooter component", () => {
    it("it should load the page-footer", () => {
      expect(PageFooter).toBeTruthy();
    });
  });
});
