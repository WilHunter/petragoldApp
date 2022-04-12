<template>
  <q-page class="flex flex-center" style="background-color: #002455">
    <div class="row flex flex-center" style="width: 100%">
      <div class="col-12 text-center text-white">
        <h3>CADASTRO</h3>
      </div>
    </div>
    <div class="row flex flex-center" style="width: 80%">
      <div class="col-12 text-left">
        <q-card style="width: 80%">
          <q-card-section>
            <span
              class="q-ml-sm"
              style="color: #002455; margin-bottom: 1em"
              >
              <b>E-mail:</b>
            </span>
            <q-input
              class="q-mt-sm"
              v-model="email"
              label="Digite o e-mail do usuário"
              color="white"
              rounded
              filled
              :input-style="{ color: '#A89968' }"
              label-color="indigo-10"
            >
            </q-input>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    name: "Cadastro";
    return {};
  },
};
</script>
