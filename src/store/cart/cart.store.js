import Vue from 'vue';
import { parseReal2Float } from '../../helpers/helpers';

const state = {
    items: {},
    total: 0
}

// getters
const getters = {
    // Getters de Sucesso 
    getTotal: state => { 
        let list = Object.values(state.items);
        if(list.length > 0){
            return list.reduce((sum, item) => sum + (item.qtd * parseReal2Float(item.price)), 0);
        }else{
            return 0.0;
        }
    },
    getTotalWithDiscount: state => { 
        let list = Object.values(state.items);
        if(list.length > 0){
            return list.reduce((sum, item) => {
                if(item.priceWithDiscount) {
                    return sum + (item.qtd * parseReal2Float(item.priceWithDiscount));
                }else{
                    return sum + (item.qtd * parseReal2Float(item.price));
                }
            }, 0);
        }else{
            return 0.0;
        }
    },
    getItems: state => Object.values(state.items)
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
