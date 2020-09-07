import ProductCard from 'Components/ProductCard';
import { products } from '@/data';

export default {
    components: { ProductCard },
    data() {
        return {
            products: products
        }
    }
}