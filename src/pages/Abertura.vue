<template>
  <div class="flex flex-center corpo" style="height: 100vh">
    <img src="../assets/logotipo.png" alt="">
  </div>
</template>

<script>
export default {
  name: "Abertura",
  setup() {
    return {};
  },
  methods: {
    nextPage() {
      setInterval(() => {
        this.$router.push("Login");
      }, 7000);
    },
  },
  created() {
    this.nextPage();
  },
};
</script>

<style scoped>
.corpo {
  background-image: url("../assets/fundo.png");
  background-repeat: no-repeat;
  background-color: black;
  animation-name: abrir;
  animation-duration: 8s;
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
