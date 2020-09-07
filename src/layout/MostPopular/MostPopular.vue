<template>
 <section id="mais-procurados" class="mt-4">
    <v-row>
      <v-col>
        <h2>Produtos Mais Populares</h2>
        <v-divider
          class="my-4"
          horizontal
        ></v-divider>
      </v-col>
    </v-row> 
    <v-row>
      <v-col cols="auto">
        <v-slide-group
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
</template>

<script src="./most-popular.js"></script>
<style src="./most-popular.scss" lang="scss"></style>