import CartAction from '@/components/CartAction/CartAction';
export default {
    components: { CartAction },
    props: {
        product: Object,
        title: String,
        price: String,
        qtd: String
    }
}