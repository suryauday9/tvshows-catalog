// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

function initializeApp(VueInstance) {
  Vue.use(Vuetify)
  VueInstance.use(VueRouter)
  VueInstance.use(Vuex)
  VueInstance.use(Vuetify)
  VueInstance.config.productionTip = false

  return VueInstance
}

export { initializeApp }
