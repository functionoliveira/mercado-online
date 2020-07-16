import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart/cart.store';
// modules

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        cart
    }
})