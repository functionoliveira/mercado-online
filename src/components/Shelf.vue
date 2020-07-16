<template>
  <v-expansion-panels
    :accordion="true"
    :popout="true"
    :multiple="true"
    :flat="true"
    :hover="true"
  >
    <v-expansion-panel
      v-for="category in categoriesWithProducts"
      :key="category.id"
    >
      <v-expansion-panel-header style="padding: 0">
        <div style="display: flex; width: 100%">
          <div class="liner" :style="{ background: category.color }"></div>
          <v-img
            class="pad-4 align-end"
            style="padding: 100px 50px;"
            width="calc(100% - 40px)"
            height="200px"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            :src="category.image || imageFallback"
          >
            <h3 class="gray--text" style="font-size: 32px">{{ category.name }}</h3>
          </v-img>
        </div>
      </v-expansion-panel-header>
      <v-divider horizontal></v-divider>
      <v-expansion-panel-content>
        <v-slide-group
          class="pa-4"
          center-active
          show-arrows
        >
          <v-slide-item
            v-for="product in category.products"
            :key="product.id"
            class="mx-3 my-3"
          >
            <product-card
              :cod="product.cod"
              :categoryID="product.categoryID"
              :image="product.image"
              :title="product.title"
              :price="product.price"
              :priceWithDiscount="product.priceWithDiscount"
              :discount="product.discount"
            ></product-card>
          </v-slide-item>
        </v-slide-group>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import fallback from '../assets/product-fallback.jpg';
import { categoriesWithProducts } from '../data';
import ProductCard from 'Components/ProductCard';

export default {
  components: { ProductCard },
  data: () => ({ 
    imageFallback: fallback,
    categoriesWithProducts: categoriesWithProducts
  }),
};
</script>

<style>
.liner {
  width: 40px;
  height: 200px;
  border-radius: 4px;
  margin-right: -4px;
}
</style>