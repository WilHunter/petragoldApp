<template>
  <div
    class="flex flex-center"
    style="background-color: #002455; height: 100vh"
  >
    <div class="row flex flex-center">
      <div class="col text-center">
        <img
          src="../assets/logo.png"
          alt="Logo PetraGold"
          style="width: 30%; margin-bottom: "
        />
      </div>
    </div>
    <div
      class="row flex flex-center"
      style="flex-direction: column; width: 100%"
    >
      <div class="col text-center">
        <q-input
          v-model="email"
          label="email"
          color="white"
          rounded
          filled
          :input-style="{ color: '#A89968' }"
          label-color="white"
        >
        </q-input>
      </div>
      <div class="col text-center q-mt-md">
        <q-input
          v-model="password"
          :input-style="{ color: '#A89968' }"
          rounded
          filled
          color="white"
          :type="isPwd ? 'password' : 'text'"
          label="Senha"
          label-color="white"
        >
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
      <div class="row flex flex-center q-mt-xl">
        <div class="col-4">
          <q-btn
            label="Entrar"
            size="1em"
            dense
            no-caps
            style="color: #002455; background-color: #a89968"
            to="Index"
          ></q-btn>
        </div>
      </div>
    </div>
    <div class="row flex flex-center">
      <div class="col" style="color: #d9d9d6">
        <q-btn
          flat
          label="Esqueci a Senha"
          icon-right="help_outline"
          no-caps
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
      password: ref(""),
      isPwd: ref(true),
    };
  },
};
</script>



<style>
* {
  font-family: Calibri;
}
</style>
