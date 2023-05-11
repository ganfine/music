import type { RouteRecordRaw } from 'vue-router'
import { getRandomString } from '@/utils/random'

const HomePage = () => import('@/views/homePage/HomePage.vue')
const DetailPage = () => import('@/views/detailPage/DetailPage.vue')
const MiddlePage = () => import('@/views/middlePage/MiddlePage.vue')

const ContactPage = () => import('@/views/contact/ContactPage.vue')
const PrivacyPage = () => import('@/views/privacy/PrivacyPage.vue')
const TermsPage = () => import('@/views/terms/TermsPage.vue')
const Dmca = () => import('@/views/DMCA/DMCAPage.vue')

export const routes: readonly RouteRecordRaw[] = [
  {
    path: '/',
    redirect: `/category/home/${getRandomString(8)}1`
  },
  {
    path: '/category/:value/:page',
    name: 'category',
    component: HomePage,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/search-keyword/:value/:page',
    name: 'search-keyword',
    component: HomePage,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/detail/:slug',
    name: 'detail',
    component: DetailPage,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Middle/:slug',
    name: 'Middle',
    component: MiddlePage,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyPage
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsPage
  },
  {
    path: '/dmca',
    name: 'dmca',
    component: Dmca
  }
]
