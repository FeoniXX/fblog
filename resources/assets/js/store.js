/**
 * Adds the promise polyfill for IE 11
 */
require('es6-promise').polyfill();

/**
 * Import Vue and Vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Initializes Vuex on Vue.
 */
Vue.use(Vuex);

import { cates } from './modules/admin/categories';
import { tags } from './modules/admin/tags';
import { links } from './modules/admin/links';
import { articles } from './modules/admin/articles';

/**
 * Export our data store.
 */
export default new Vuex.Store({
    modules: {
        cates,
        tags,
        links,
        articles
    }
});