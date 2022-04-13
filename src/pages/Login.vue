<template>
  <div
    class="corpo flex flex-center"
    style="background-color: #f1efea; height: 100vh"
  >
    <div class="row flex flex-center q-mt-xl">
      <div class="col text-center">
        <img src="../assets/logodourado.png" alt="Logo PetraGold" />
      </div>
    </div>
    <div
      class="row flex flex-center"
      style="flex-direction: column; width: 100%"
    >
      <div class="col text-center" style="min-width: 16em">
        <q-input
          v-model="CNPJ"
          dense
          label="CNPJ"
          label-slot
          rounded
          :input-style="{ color: '#b3b3b3',marginTop: '.5em' }"
          mask="##.###.###/####-##"
          filled>
          <template v-slot:label>
            <div style="color: #a89968;font-weight: 600;">CNPJ</div>
          </template>
        </q-input>
      </div>
      <div class="col text-center q-mt-md">
        <q-input
          v-model="password"
          dense
          rounded
          :input-style="{ color: '#b3b3b3',marginTop: '.5em' }"
          label-slot
          filled
          :type="isPwd ? 'password' : 'text'"
        >
          <template v-slot:label>
            <div style="color: #a89968;font-weight: 600;">SENHA</div>
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
              style="color: #a89968"
            />
          </template>
        </q-input>
      </div>
      <div class="row flex flex-center q-mt-md" style="flex-direction: column">
        <div class="col-12 text-center q-mt-md">
          <q-btn
            label="Acessar Conta"
            size="1em"
            padding=".5em"
            dense
            rounded
            outlined
            no-caps
            class="full-width"
            style="color: #b3b3b3; background-color: #001f40"
          ></q-btn>
        </div>
        <div class="col q-mt-xl">
          <q-btn flat dense size="1em" to="Cadastro" no-caps style="color: #a89968">
            <u>Abrir Conta</u>
          </q-btn>
        </div>
      </div>
    </div>
    <div class="row flex flex-center">
      <div class="col" style="color: #75787b">
        <q-btn
          flat
          label="Esqueci a Senha"
          icon-right="help_outline"
          no-caps
          to="Esqueci"
        ></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Login",
  setup() {
    return {
      CNPJ: ref(""),
      password: ref(""),
      isPwd: ref(true),
    };
  },
};
</script>
<style scoped>
.corpo {
  background-image: url("../assets/fundo.png");
  background-repeat: no-repeat;
  background-color: black;
  font-family: Roboto;
}
</style>



<style>
* {
  font-family: Roboto;
}
</style>
