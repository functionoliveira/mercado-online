<template>
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
</template>

<script src="./offers-section.js"></script>
<style src="./offers-section.scss" lang="scss"></style>