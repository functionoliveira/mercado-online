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
        right="10px"
        bottom="10px"
      >
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-sheet class="text-center" height="200px">
      <v-btn
        class="mt-6"
        text
        color="error"
        @click="sheet = !sheet"
      >Fechar</v-btn>
      <div class="my-3">
        <div v-for="(product, index) in getItems" :key="index">
          {{product.price}} - {{product.title}} - {{product.qtd}}
        </div>

        <div>Valor total - {{ getTotal }}</div>
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
      'getTotal'
    ])
  }
}
</script>

<style>

</style>