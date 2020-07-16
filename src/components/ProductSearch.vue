<template>
  <v-card>
    <v-card-text class="text--primary">
      <v-form>
        <v-row>
          <v-col cols="12" lg="12" sm="12" class="mx-auto">
            <v-text-field
              v-model="search"
              label="Buscar produto"
              hint="Busque aqui pelo produto que você deseja"
              append-icon="mdi-map-marker"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-chip
              v-for="category in categories" 
              v-bind:class="inList(category.id) ? 'active' : ''"
              @click="chip(category.id)"
              :key="category.id"
              v-bind:style="inList(category.id) ? { background: category.color, borderColor: category.color } : { color: category.color, borderColor: category.color }"
            >
              {{ category.name }}
            </v-chip>
          </v-col>
        </v-row>
      </v-form>

      <v-row>
        <v-col v-if="productsFilter.length === 0">
          Não encontramos nenhum resultado.
        </v-col>
        <v-col v-for="product in productsFilter" :key="product.id">
          <product-card
            :cod="product.cod"
            :categoryID="product.categoryID"
            :image="product.image"
            :title="product.title"
            :price="product.price"
            :priceWithDiscount="product.priceWithDiscount"
            :discount="product.discount"
          ></product-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { products, categories } from '../data';
import ProductCard from 'Components/ProductCard';

export default {
  components: { ProductCard },
  data: () => ({
    search: '',
    categories: categories,
    products: products,
    categoryFilter: [],
    productsFilter: []
  }),
  methods: {
    chip(category) {
      if(this.inList(category)) {
        this.categoryFilter = this.categoryFilter.filter(cat => cat !== category);
      }else{
        this.categoryFilter.push(category);
      }
    },
    inList(cat) {
      return this.categoryFilter.includes(cat);
    }
  },
  watch: {
    search(val) {
      let length = val.length;
      if(length > 0 && length % 3 === 0) {
        this.productsFilter = this.products.filter(p => {
          if((this.categoryFilter.length === 0 || this.categoryFilter.includes(p.categoryID)) && p.title.toLowerCase().includes(val.toLowerCase())) {
            return true;
          }else{
            return false;
          }
        });
      }
    },
    categoryFilter(val) {
      if(val.length > 0 || this.search.length > 0) {
        this.productsFilter = this.products.filter(p => {
          if((val.length === 0 || val.includes(p.categoryID)) && p.title.toLowerCase().includes(this.search.toLowerCase())) {
            return true;
          }else{
            return false;
          }
        });
      }else{
        this.productsFilter = [];
      }
    }
  }
};
</script>

<style>
.v-chip.v-size--default {
  border-radius: 2px;
  margin-right: 10px;
  cursor: pointer;
  border: 1px solid blue;
  font-weight: bold;
  color: blue;
}
.v-chip.v-size--default.active {
  /* background: red; */
  color: white;
}
</style>