import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5821ca76 = () => interopDefault(import('..\\pages\\buscar.vue' /* webpackChunkName: "pages/buscar" */))
const _e3b5be3c = () => interopDefault(import('..\\pages\\correspondencia.vue' /* webpackChunkName: "pages/correspondencia" */))
const _3c6e89ba = () => interopDefault(import('..\\pages\\recuperarPassword.vue' /* webpackChunkName: "pages/recuperarPassword" */))
const _600d3293 = () => interopDefault(import('..\\pages\\resetearPassword.vue' /* webpackChunkName: "pages/resetearPassword" */))
const _c3777d9c = () => interopDefault(import('..\\pages\\rpasswordusuario.vue' /* webpackChunkName: "pages/rpasswordusuario" */))
const _524b20a6 = () => interopDefault(import('..\\pages\\salir.vue' /* webpackChunkName: "pages/salir" */))
const _205d6271 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/buscar",
    component: _5821ca76,
    name: "buscar"
  }, {
    path: "/correspondencia",
    component: _e3b5be3c,
    name: "correspondencia"
  }, {
    path: "/recuperarPassword",
    component: _3c6e89ba,
    name: "recuperarPassword"
  }, {
    path: "/resetearPassword",
    component: _600d3293,
    name: "resetearPassword"
  }, {
    path: "/rpasswordusuario",
    component: _c3777d9c,
    name: "rpasswordusuario"
  }, {
    path: "/salir",
    component: _524b20a6,
    name: "salir"
  }, {
    path: "/",
    component: _205d6271,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
