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
        <v-icon dark>mdi-cart</v-icon>
      </v-btn>
    </template>
    <v-sheet class="text-center" height="">
      <v-btn class="mt-6" text color="error" @click="sheet = !sheet">Fechar</v-btn>
      <v-stepper :value="step" class="pb-5">
        <v-stepper-header>
          <v-stepper-step 
            :key="1"
            :complete="step > 1"
            :step="1"
            :editable="true"
          >Carrinho</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step
            :key="2"
            :complete="step > 2"
            :step="2"
            :editable="true"
          >Agendar Entraga</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step
            :key="3"
            :complete="step > 3"
            :step="3"
            :editable="true"
          >Pagamento</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content :key="1" :step="1">
            <cart-content />
          </v-stepper-content>
          <v-stepper-content :key="2" :step="2">
            <schedule></schedule>
          </v-stepper-content>
          <v-stepper-content :key="3" :step="3">
            Pagamento
          </v-stepper-content>
          <v-btn 
            class="mx-2" 
            color="error"
            @click="step--"
            :disabled="step===1"
          >Voltar</v-btn>
          <v-btn 
            class="mx-2"
            color="primary"
            @click="step++"
            :disabled="step===3"
          >Prosseguir</v-btn>
        </v-stepper-items>
      </v-stepper>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import CartContent from './CartContent/CartContent';
import Schedule from './Schedule/Schedule.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    CartContent,
    Schedule
  },
  data: () => ({
    step: 1,
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