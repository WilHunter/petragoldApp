<template>
  <q-page class="corpo flex flex-center" style="width: 100%; height: 100vh">
    <div class="row flex flex-center">
      <!--<div class="col text-center">
        <img src="../assets/logoazul.png" alt="" />
      </div>-->
    </div>
      <q-carousel
        class="rounded-borders"
        v-model="slide"
        animated
        style="background-color: transparent"
      >
        <q-carousel-slide :name="1">
          <q-card
            class="col-12 q-pa-xl"
            flat
            style="background-color: transparent; width: 23em"
          >
            <q-card-section class="text-h6" style="color: #75787b">
              Vamos te ajudar
            </q-card-section>
            <q-card-section>
              <span class="q-mt-md" style="color: #75787b"
                >Informe seu CNPJ:</span
              >
              <q-input
                v-model="CNPJ"
                dense
                filled
                :input-style="{ color: '#001f40', marginTop: '.5em' }"
                mask="##.###.###/####-##"
                class="q-mt-md"
              >
              </q-input>
              <span
                v-if="msgVazio"
                style="color: #001f40; font-weight: bold; margin-top: 0.5em"
                >{{ msgVazio }}</span
              >
            </q-card-section>
            <q-card-actions align="center" style="margin-top:8em">
              <q-btn
                label="Enviar"
                size="1em"
                padding=".5em"
                dense
                rounded
                outlined
                no-caps
                style="
                  color: #b3b3b3;
                  background-color: #001f40;
                  min-width: 8em;
                "
                @click="validaCNPJ()"
              ></q-btn>
            </q-card-actions>
          </q-card>
        </q-carousel-slide>
        <q-carousel-slide :name="2">
          <q-card
            class="col-12 q-pa-xl"
            flat
            style="background-color: transparent; width: 23em"
          >
            <q-card-section class="text-h6 text-center" style="color: #75787b">
              Feito!
            </q-card-section>
            <q-card-section class="text-center q-mb-sm" style="color: #75787b">
              Sua senha de recuperação foi enviada para o e-mail pXXXX@gmail.com
            </q-card-section>
            <q-card-actions align="center" style="margin-top:8em">
              <q-btn
                label="Sair"
                size="1em"
                padding=".5em"
                dense
                rounded
                outlined
                no-caps
                style="
                  color: #b3b3b3;
                  background-color: #001f40;
                  min-width: 8em;
                "
                @click="CNPJ = ''"
                to="Login"
              ></q-btn>
            </q-card-actions>
          </q-card>
        </q-carousel-slide>
      </q-carousel>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      CNPJ: ref(""),
      slide: ref(1),
      msgVazio: ref(""),
    };
  },
  methods: {
    validaCNPJ() {
      if (!this.CNPJ) {
        this.msgVazio = "Favor informar CNPJ!";
      } else {
        (this.msgVazio = ""), (this.slide = 2);
      }
    },
  },
};
</script>

<style scoped>
.corpo {
  background-color: #DCD6C2;
  font-family: Roboto !important;
}
.minicard {
  background-image: url("../assets/minicard.png");
  background-repeat: no-repeat;
}
</style>
