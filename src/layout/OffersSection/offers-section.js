import ProductCard from 'Components/ProductCard';
import { offers } from '@/data';

export default {
    components: { ProductCard },
    data() {
        return {
            offers: offers
        }
    }
}