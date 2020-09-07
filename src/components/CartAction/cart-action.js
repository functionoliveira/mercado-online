import { mapActions } from 'vuex';

export default {
    props: {
        product: Object,
        qtd: Number
    },
    methods: {
        ...mapActions([
            'addItem',
            'delItem'
        ]),
    }
}