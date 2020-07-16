<template>
  <header v-bind:class="position">
      <v-row align="center" justify="space-between">
          <v-col cols="auto">
            <img src="" alt="o bairro - mercado online" />
          </v-col>
          <nav @click="activate">
            <a href="javascript:void()" data-scroll-to="#inicio" class="font-weight-bold">Início</a>
            <a href="javascript:void()" data-scroll-to="#ofertas" class="font-weight-bold">Ofertas</a>
            <a href="javascript:void()" data-scroll-to="#mais-procurados" class="font-weight-bold">Mais procurados</a>
            <a href="javascript:void()" data-scroll-to="#prateleiras" class="font-weight-bold">Prateleiras</a>
            <a href="javascript:void()" class="font-weight-bold">Contato</a>
          </nav>
          <v-col cols="auto">
            <v-icon large color="green darken-2">cart</v-icon>
          </v-col>
      </v-row>
  </header>
</template>

<script>
import goTo from 'vuetify/es5/services/goto';

export default {
  data: () => ({
    position: '',
    menuItemActive: null
  }),
  mounted(){
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50) {
        this.position = 'fixed';
      }else{
        this.position = '';
      }
    });
  },
  methods: {
    activate(evt) {
      if(evt.target.dataset.scrollTo) {
        console.log(evt.target.dataset.scrollTo);
        let target = document.querySelector(evt.target.dataset.scrollTo);
        this.desactivate();
        evt.target.classList.add('active');
        this.menuItemActive = evt.target;
        goTo(target);
      }
    },
    desactivate() {
      if(this.menuItemActive) {
        this.menuItemActive.classList.remove('active');
      }
    }

  },
};
</script>

<style>
  header {
    padding: 15px 20px;
    border-bottom: 1px solid #ddd;
  }

  header.fixed {
    width: 100%;
    background: white;
    position: fixed;
    box-shadow: 2px 2px 2px 1px #ddd;
    z-index: 10;
  }

  header nav a {
    display: inline-block;
    padding: 10px;
    text-transform: capitalize;
    text-decoration: none;
  }

  header nav a::after {
    display: block;
    content: '';
    width: 0px;
    height: 2px;
    background: black;
    transition: 0.4s width ease-in-out;
  }

  header nav a.active::after {
    width: 100%;
  }

  header nav a:hover::after {
    width: 100%;
  }
</style>