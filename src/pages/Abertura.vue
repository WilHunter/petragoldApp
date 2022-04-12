<template>
  <div
    class="flex flex-center"
    style="background-color: #002455; height: 100vh"
  >
    <div class="row flex flex-center" style="flex-direction: column">
      <div class="col text-center">
        <img
          class="contorno"
          src="../assets/dourado.png"
          alt="PetraGold"
          title="PetraGold"
          style="width: 30%"
        />
      </div>
      <div
        class="
          col
          text-center
          conteudo
          animate__animated animate__flash animate__infinite
        "
      >
        <h4>
          PetraGold <br />
          Bank
        </h4>
      </div>
      <div class="col text-center">
        <q-btn
          flat
          label="Entrar"
          style="color: #a89968;"
          to="Login">
          </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Abertura",
  setup() {},
};
</script>

<style scoped>
.conteudo {
  animation-duration: 10s;
  font-family: DIN Next Slab Pro;
  font-weight: lighter;
  color: #a89968;
}
</style>
