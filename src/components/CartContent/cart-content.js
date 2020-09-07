import CartItem from "@/components/CartItem/CartItem";
import { mapGetters } from 'vuex';

export default {
    components: {
      CartItem
    },
    computed: {
        ...mapGetters([
          'getItems',
          'getTotal',
          'getTotalWithDiscount'
        ])
    }
}