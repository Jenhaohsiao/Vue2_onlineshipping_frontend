import Vue from 'vue'
import VueRouter from 'vue-router';
import CartPage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

  {
    path: '/products',
    name: 'Products',
    component: ProductsPage
  },
  {
    path: '/products/:id',
    name: 'ProductsDetail',
    component: ProductDetailPage
  }, {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  },
  {
    path: '/',
    redirect: '/products',

  },
  {
    path: '*',
    component: NotFoundPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router