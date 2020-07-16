<template>
  <v-card max-width="300">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="fallbackImage"
    >
    </v-img>
    <v-card-text class="text--primary">
      <v-row align="center">
          <v-col lg="12">
            <label class="font-weight-bold">{{ title }}</label>
          </v-col>
      </v-row>
      <v-row align="center">
          <v-col cols="auto" class="pa-0">
            <v-chip 
              class="ma-2" 
              label 
              :style="{ background: getCategoryByID(categoryID).color, color: 'white', borderColor: getCategoryByID(categoryID).color  }"
            >
              {{ getCategoryByID(categoryID).name }}
            </v-chip>
          </v-col>
          <v-col cols="auto" class="pa-0">
            <v-chip
            v-if="discount"
              color="success" 
              label 
            >
              {{ discount }} de desconto
            </v-chip>
          </v-col>
      </v-row>
      <v-row v-if="priceWithDiscount" align="center" class="discount">
          <v-col cols="auto" class="discount__from">
            <label>De: R$ {{ price }}</label>
          </v-col>
          <v-col cols="auto" class="discount__to pa-0">
            <label>Por: R$ {{ priceWithDiscount }}</label>
          </v-col>
      </v-row>
      <v-row v-else align="center">
          <v-col lg="6">
            <label class="price">R$ {{ price }}</label>
          </v-col>
      </v-row>
      <label>Itens no carrinho {{ getItems[cod] ? getItems[cod].qtd : 0 }}</label>
      <v-row align="center">
        <v-col cols="6" class="pr-0">
          <v-select
            v-model="qtdAdd"
            :items="select"
            item-text="text"
            item-value="value"
            value="1"
          ></v-select>
        </v-col>
        <v-col cols="6" class="pl-0">
          <v-btn color="error" tile outlined small @click="delItem({product: $props, qtd: qtdAdd})">-</v-btn>
          <v-btn color="primary" tile outlined small @click="addItem({product: $props, qtd: qtdAdd})">+</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { getCategoryByID } from '../data';
import fallback from '../assets/product-fallback.jpg';

export default {
  components: {},
  props: {
    cod: String,
    categoryID: Number,
    image: String,
    title: String,
    price: String,
    priceWithDiscount: String,
    discount: String
  },
  data: () => ({
    select: [{
      text: '1 item', 
      value: 1
    },
    {
      text: '2 itens', 
      value: 2
    },
    {
      text: '3 itens', 
      value: 3
    },
    {
      text: '4 itens', 
      value: 4
    },
    {
      text: '5 itens', 
      value: 5
    },
    {
      text: '10 itens', 
      value: 10
    }],
    fallbackImage: fallback,
    qtdAdd: 1,
    inCar: 0
  }),
  computed: {
    ...mapGetters([
      'getItems'
    ])
  },
  methods: {
    ...mapActions([
      'addItem',
      'delItem'
    ]),
    getCategoryByID: getCategoryByID
  }
};
</script>

<style>
.discount .discount__from  {
  color: gray;
  font-weight: bold;
  text-decoration: line-through;
}

.discount .discount__to, .price {
  color: #4caf50;
  font-weight: bold;
}
</style>