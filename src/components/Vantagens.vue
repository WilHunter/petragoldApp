<template>
<div class="q-mt-xl q-mb-sm">
    <b class="text-left text-grey-7 q-pa-md" style="font-size:1.2em;">VANTAGENS</b>
</div>
<div class="q-pa-md">
    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      autoplay=""
      swipeable
      animated
      infinite
      padding
      height="150px"
      class="rounded-borders">
        <q-carousel-slide name= '1' class="column no-wrap flex-center"  style="width:100%">
            <img src="../assets/vantagens.png" alt="">
        </q-carousel-slide>
        <q-carousel-slide name= '2' class="column no-wrap flex-center"  style="width:100%">
            <img src="../assets/vantagens.png" alt="">
        </q-carousel-slide>
        <q-carousel-slide name= '3' class="column no-wrap flex-center"  style="width:100%">
            <img src="../assets/vantagens.png" alt="">
        </q-carousel-slide>
    </q-carousel>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Vantagens',
    setup() {
        return {
          slide: ref('1'),
        }
    }
}
</script>

<style>

</style>
