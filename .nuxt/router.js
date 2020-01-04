import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5e087972 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _3d16f5d6 = () => interopDefault(import('../pages/Test/index.vue' /* webpackChunkName: "pages/Test/index" */))
const _37579dda = () => interopDefault(import('../pages/collections/_collection.vue' /* webpackChunkName: "pages/collections/_collection" */))
const _81d31f46 = () => interopDefault(import('../pages/products/_collection/_product.vue' /* webpackChunkName: "pages/products/_collection/_product" */))
const _e5516cbc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/products",
      component: _5e087972,
      name: "products"
    }, {
      path: "/Test",
      component: _3d16f5d6,
      name: "Test"
    }, {
      path: "/collections/:collection?",
      component: _37579dda,
      name: "collections-collection"
    }, {
      path: "/products/:collection/:product?",
      component: _81d31f46,
      name: "products-collection-product"
    }, {
      path: "/",
      component: _e5516cbc,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
