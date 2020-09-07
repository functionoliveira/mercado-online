<template>
  <v-container>
    <cart></cart>
    <product-search id="inicio"></product-search>
    <offers-section />
    <most-popular />

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

    <section id="contatos" class="mt-4">
      <h2>Contato</h2>
      <p>Whatsapp - (51) 99988-7766 - (51) 99988-7766 - (51) 99988-7766</p>
      <p>SAC - (51) 3030-3030</p>
      <p><a href="mailto:silver.becker.sac@gmail.com" >SilverBeckerSAC@gmail.com</a></p>
      <p>Endereço - Viamão, rua 13 de maio número 290, Esmeralda.</p>
    </section>
  </v-container>
</template>

<script>
import { offers, products } from '../data';
import ProductSearch from 'Components/ProductSearch';
import Shelf from 'Components/Shelf';
import Cart from 'Components/Cart';

import OffersSection from '@/layout/OffersSection/OffersSection';
import MostPopular from '@/layout/MostPopular/MostPopular';

export default {
  components: {
    MostPopular,
    OffersSection,
    ProductSearch,
    Shelf,
    Cart
  },
  data: () => ({
    offers: offers,
    products: products
  }),
};
</script>