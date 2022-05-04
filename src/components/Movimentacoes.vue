<template>
  <div class="q-mt-xl q-mb-sm animate__animated animate__fadeIn">
      <b class="text-left text-grey-8 q-pa-md" style="font-size:1.1em;">Últimas Transações</b>
  </div>
  <div class="q-mt-xl q-mb-sm animate__animated animate__fadeIn">
    <b class="text-left text-grey-6 q-pa-md" style="font-size:1em;"> HOJE</b>
  </div>
  <div class="row flex flex-center q-pl-md q-mb-sm">
    <div class="col-1 text-center">
      <q-icon name="pix" color="grey-6" style="font-size:1.8em"></q-icon>
    </div>
    <div class="col-5 text-left q-pa-md">
      Você pagou para <br>
      <b>Jonas Figueiredo</b>
    </div>
    <div class="col text-center">
      <b>R$ -1.300,00</b>
    </div>
  </div>
  <div class="q-mt-sm">
    <b class="text-left text-grey-6 q-pa-md" style="font-size:1em;"> 8 ABR</b>
  </div>
  <div class="row flex flex-center q-pl-md">
    <div class="col-1 text-center">
      <q-icon name="pix" color="grey-6" style="font-size:1.8em"></q-icon>
    </div>
    <div class="col-5 text-left q-pa-md">
      Você recebeu de<br>
      <b>Renata Mendonça</b>
    </div>
    <div class="col text-center text-green">
      <b>R$ 750,38</b>
    </div>
  </div>
  <div class="row flex flex-center q-pl-md q-mb-sm">
    <div class="col-1 text-center">
      <q-icon name="receipt" color="grey-6" style="font-size:1.8em"></q-icon>
    </div>
    <div class="col-5 text-left q-pa-md">
      Pagamento<br>
      <b>Amazon Prime</b>
    </div>
    <div class="col text-center">
      <b>R$ -19,90</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movimentacoes',
}
</script>

<style scoped>
*{
    animation-duration: 1s;
  }
</style>
