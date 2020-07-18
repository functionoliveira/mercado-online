<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <home></home>
    </v-main>
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
