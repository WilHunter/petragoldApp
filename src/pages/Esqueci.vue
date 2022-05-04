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
                unmasked-value
                class="q-mt-md"
              >
              </q-input>
              <span
                v-if="msgVazio"
                style="color: #001f40; font-weight: bold; margin-top: 0.5em"
                >{{ msgVazio }}</span
              >
            </q-card-section>
            <q-card-actions align="center" style="margin-top:6em">
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
                @click="validaCNPJ(CNPJ) "
              ></q-btn>
            </q-card-actions>
          </q-card>
        </q-carousel-slide>
        <q-carousel-slide :name="2">
          <q-card
            class="col-12 q-pa-sm"
            flat
            style="background-color: transparent; width: 23em"
          >
            <q-card-section class="text-h6 text-center" style="color: #75787b">
              <img src="../assets/checkmark.png" alt="">
            </q-card-section>
            <q-card-section class="text-center q-mb-sm" style="color: #75787b">
              Sua senha de recuperação foi enviada para o e-mail <b>pXXXX@gmail.com</b>
            </q-card-section>
            <q-card-actions align="center" style="margin-top:4em">
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
import { mapActions } from 'vuex';
export default {
  setup() {
    return {
      CNPJ: ref(""),
      slide: ref(1),
      msgVazio: ref(""),
    };
  },
  methods: {
    ...mapActions('comunications',['forgotPassToken']),
    validaCNPJ(cnpj) {
      cnpj = cnpj.replace(/[^\d]+/g, "");
            if (cnpj == "") return (this.msgVazio = "Favor informar CNPJ!");
            if (cnpj.length != 14) return (this.msgVazio = "CNPJ Incompleto");
            // Elimina CNPJs invalidos conhecidos
            if (
                cnpj == "00000000000000" ||
                cnpj == "11111111111111" ||
                cnpj == "22222222222222" ||
                cnpj == "33333333333333" ||
                cnpj == "44444444444444" ||
                cnpj == "55555555555555" ||
                cnpj == "66666666666666" ||
                cnpj == "77777777777777" ||
                cnpj == "88888888888888" ||
                cnpj == "99999999999999"
            )
                return (this.msgVazio = "CNPJ Incorreto!");
            // Valida DVs
            var tamanho = cnpj.length - 2;
            var numeros = cnpj.substring(0, tamanho);
            var digitos = cnpj.substring(tamanho);
            var soma = 0;
            var pos = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2) pos = 9;
            }
            var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            if (resultado != digitos.charAt(0)) return (this.msgVazio = "CNPJ Incorreto!");
            var tamanho = tamanho + 1;
            var numeros = cnpj.substring(0, tamanho);
            var soma = 0;
            var pos = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2) pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            if (resultado != digitos.charAt(1)) return (this.msgVazio = "CNPJ Incorreto!");
            return (this.msgVazio = ""),this.enviarEmail(), this.slide = 2;
    },
    enviarEmail(){
      this.forgotPassToken({
        cnpj: this.CNPJ
        })
    }
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
