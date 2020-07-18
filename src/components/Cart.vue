<template>
  <v-bottom-sheet v-model="sheet" inset>
    <template v-slot:activator="{ on, attrs }">
      <v-btn 
        class="mx-2" 
        fab 
        dark 
        color="indigo"
        v-bind="attrs"
        v-on="on"
        fixed
        :right="true"
        :bottom="true"
      >
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-sheet class="text-center" height="">
      <v-btn
        class="mt-6"
        text
        color="error"
        @click="sheet = !sheet"
      >Fechar</v-btn>
      <div class="pb-5">
        <div v-for="(product, index) in getItems" :key="index">
          {{product.price}} - {{product.title}} - {{product.qtd}}
        </div>
        <div v-if="Object.keys(getItems).length > 0">
          <div>Valor total - {{ getTotal.toFixed(2) }}</div>
          <div>Valor total com desconto - {{ getTotalWithDiscount.toFixed(2) }}</div>
          <v-btn 
            class="mx-2" 
            color="error"
          >Limpar carrinho</v-btn>
          <v-btn 
            class="mx-2" 
            color="primary"
          >Prosseguir com a compra</v-btn>
        </div>
        <div v-else>Não há compras no carrinho</div>
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    sheet: false,
  }),
  computed: {
    ...mapGetters([
      'getItems',
      'getTotal',
      'getTotalWithDiscount'
    ])
  }
}
</script>

<style>

</style>