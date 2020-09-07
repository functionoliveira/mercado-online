<template>
  <div class="cart-action">
        <v-btn color="error" tile text small @click="delItem({product: product, qtd: 1})">
            <v-icon>mdi-minus</v-icon>
        </v-btn>
        <span class="cart-action__label">{{ product.qtd }}</span>
        <v-btn color="primary" tile text small @click="addItem({product: product, qtd: 1})">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
  </div>
</template>

<script src="./cart-action.js"></script>
<style src="./cart-action.scss" lang="scss"></style>