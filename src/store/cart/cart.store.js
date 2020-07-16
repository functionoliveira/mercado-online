import Vue from 'vue';

const state = {
    items: {},
    total: 0
}

// getters
const getters = {
    // Getters de Sucesso 
    getTotal: state => state.items.values().reduce(item => (item.qtd * item.price)),
    getItems: state => state.items
}

// actions
const actions = {
    addItem(context, { product, qtd }) {
        context.commit('addItem', { product, qtd });
    },
    delItem(context, { product, qtd }) {
        context.commit('delItem', { product, qtd });
    }
}

// mutations
const mutations = {
    addItem(state, { product, qtd }) {
        if(state.items[product.cod]) {
            let sumQtd = state.items[product.cod].qtd + qtd
            let data = { ...product, qtd : sumQtd };
            Vue.set(state.items, data.cod, data);
        }else{
            Vue.set(state.items, product.cod, { ...product, qtd : qtd });
        }
    },
    delItem(state, { product, qtd }) {
        if(state.items[product.cod] && state.items[product.cod].qtd > 0) {
            let newQtd = state.items[product.cod].qtd - qtd;
            newQtd = newQtd < 0 ? 0 : newQtd;
            let data = { ...product, qtd : newQtd };

            if(newQtd === 0){
                Vue.set(state.items, data.cod, data);
                delete state.items[product.cod];
            }else{
                Vue.set(state.items, data.cod, data);
            }
        }
    }
}

export default {
	state,
	getters,
	actions,
	mutations
}
