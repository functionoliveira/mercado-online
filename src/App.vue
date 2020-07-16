<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <home></home>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from 'Layout/Header';
import Home from 'Pages/Home';
import AppFooter from 'Layout/Footer';

export default {
  name: 'App',
  components: {
    AppHeader,
    Home,
    AppFooter
  },

  data: () => ({ }),
};
</script>
