<template>
  <q-page class="corpo">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      style="height:100%;background-color:transparent;"
    >
      <q-carousel-slide :name="1" style="padding:0" >
        <img src="../assets/digital1.png" style="width:100%;">
      </q-carousel-slide>
      <q-carousel-slide :name="2" style="padding:0">
        <img src="../assets/digital2.png" style="width:100%">
      </q-carousel-slide>
      <q-carousel-slide :name="3" style="padding:0">
        <img src="../assets/digital3.png" style="width:100%">
      </q-carousel-slide>
    </q-carousel>
    <div class="row" style="margin: 1em auto 0em auto">
      <div class="col text-center" style="border-right: solid 2px grey;">
        <q-btn  to="Cadastro" class="full-width" style="font-size:1.5em" flat color="grey-9" label="Abrir Conta" no-caps></q-btn>
      </div>
      <div class="col text-center">
        <q-btn to="Login" class="full-width" style="font-size:1.5em" flat color="grey-9" label="Entrar" no-caps></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "Abertura",
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    };
  },
};
</script>

<style scoped>
.corpo {
  animation-name: abrir;
  animation-duration: 8s;
  background-color: #F0EFEA;
  padding: 0!important;
  margin: 0!important;
}
@keyframes abrir {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
