<template>
  <v-container>
    <cart></cart>

      <product-search id="inicio"></product-search>
      <section id="ofertas" class="mt-4">
        <v-row>
          <v-col>
            <h2>Ofertas da semana</h2>
            <v-divider
              class="my-4"
              horizontal
            ></v-divider>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-slide-group
              class="pa-4"
              center-active
              show-arrows
            >
              <v-slide-item
                v-for="product in offers"
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
          </v-col>  
        </v-row>    
      </section>

      <section id="mais-procurados" class="mt-4">
        <v-row>
          <v-col>
            <h2>Produtos</h2>
            <v-divider
              class="my-4"
              horizontal
            ></v-divider>
          </v-col>
        </v-row> 
        <v-row>
          <v-col cols="auto">
            <v-slide-group
              class="pa-4"
              center-active
              show-arrows
            >
              <v-slide-item
                v-for="product in products"
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
          </v-col>  
        </v-row>         
      </section>

      <section id="prateleiras" class="mt-4">
        <v-row>
          <v-col>
            <h2>Prateleiras</h2>
            <v-divider
              class="my-4"
              horizontal
            ></v-divider>
          </v-col>
        </v-row> 
        <v-row>
          <v-col cols="12">
            <shelf></shelf>
          </v-col>  
        </v-row>         
      </section>
  </v-container>
</template>

<script>
import { offers, products } from '../data';
import ProductSearch from 'Components/ProductSearch';
import ProductCard from 'Components/ProductCard';
import Shelf from 'Components/Shelf';
import Cart from 'Components/Cart';

export default {
  components: {
    ProductSearch,
    ProductCard,
    Shelf,
    Cart
  },
  data: () => ({
    offers: offers,
    products: products
  }),
};
</script>