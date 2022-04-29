<template>
  <q-page class="corpo flex flex-center" style="flex-direction: column;">
      <!--<div class="col text-center q-mt-xl">
        <img src="../assets/logoazul.png" alt="" />
      </div>-->
        <q-carousel
          class="rounded-borders"
          v-model="slide"
          animated
          style="background-color: transparent; height: 100vh;"
        >
          <q-carousel-slide :name="1">
            <q-card
              flat
              class="q-pa-sm"
              style="
                min-height: 590px;
                border-radius: 30px;
                background-color: transparent;
                margin-top: 8em;
              "
            >
              <q-card-section
                class="text-h6"
                style="color: #75787b; font-weight: bold"
              >
                Para começar, nos informe sua identificação.
              </q-card-section>
              <q-card-section style="margin-top: 6em">
                <span class="q-mt-md" style="color: #75787b; font-weight: 400"
                  >Informe seu CNPJ</span
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
              <q-card-actions align="around" style="margin-top: 18em">
                <q-btn
                  label="Sair"
                  size="1em"
                  padding=".5em"
                  dense
                  flat
                  rounded
                  no-caps
                  style="color: #001f40; min-width: 8em; font-weight: bold"
                  to="Login"
                >
                </q-btn>
                <q-btn
                  label="Continuar"
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
                  @click="validaCNPJ(CNPJ)"
                ></q-btn>
              </q-card-actions>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide :name="2">
            <q-card
              flat
              class="q-pa-md"
              style="
                min-height: 590px;
                border-radius: 30px;
                background-color: transparent;
                margin-top: 8em;
              "
            >
              <q-card-section
                class="text-h6"
                style="color: #75787b; font-weight: bold"
              >
                Informe a identidade da sua empresa.
              </q-card-section>
              <q-card-section style="margin-top: 2em">
                <span class="q-mt-md" style="color: #75787b; font-weight: 400"
                  >Razão Social</span
                >
                <q-input
                  v-model="razaoSocial"
                  dense
                  filled
                  :input-style="{ color: '#001f40', marginTop: '.5em' }"
                  class="q-mt-md"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                <span class="q-mt-md" style="color: #75787b; font-weight: 400"
                  >Nome Fantasia</span
                >
                <q-input
                  v-model="nomeFantasia"
                  dense
                  filled
                  :input-style="{ color: '#001f40', marginTop: '.5em' }"
                  class="q-mt-md"
                >
                </q-input>
              </q-card-section>
              <q-card-actions align="around" style="margin-top: 14em">
                <q-btn
                  label="Voltar"
                  size="1em"
                  padding=".5em"
                  dense
                  flat
                  rounded
                  no-caps
                  style="color: #001f40; min-width: 8em; font-weight: bold"
                  @click="slide = 1"
                >
                </q-btn>
                <q-btn
                  label="Continuar"
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
                  @click="slide = 3"
                ></q-btn>
              </q-card-actions>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide :name="3">
            <q-card
              flat
              class="q-pa-md"
              style="
                min-height: 590px;
                border-radius: 30px;
                background-color: transparent;
                margin-top: 8em;
              "
            >
              <q-card-section
                class="text-h6"
                style="color: #75787b; font-weight: bold"
              >
                Agora informe os dados da empresa.
              </q-card-section>
              <q-card-section style="margin-top: 2em">
                <span class="q-mt-md" style="color: #75787b; font-weight: 400"
                  >Data da Abertura da Empresa</span
                >
                <q-input
                  v-model="dataAbertura"
                  type="date"
                  dense
                  filled
                  :input-style="{ color: '#001f40', marginTop: '.5em' }"
                  class="q-mt-md"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                <span class="q-mt-md" style="color: #75787b; font-weight: 400"
                  >Tipo de Empresa</span
                >
                <q-select
                  v-model="tpEmpresa"
                  :options="empresa"
                  dense
                  filled
                  :input-style="{ color: '#001f40', marginTop: '.5em' }"
                  class="q-mt-md"
                >
                </q-select>
              </q-card-section>
              <q-card-section>
                <span class="q-mt-md" style="color: #75787b; font-weight: 400"
                  >CNAE</span
                >
                <q-select
                  v-model="CNAE"
                  :options="tpCNAE"
                  use-input
                  @filter="filterFn"
                  dense
                  filled
                  :input-style="{ color: '#001f40', marginTop: '.5em' }"
                  class="q-mt-md"
                >
                </q-select>
              </q-card-section>
              <q-card-actions align="around" style="margin-top: 6em">
                <q-btn
                  label="Voltar"
                  size="1em"
                  padding=".5em"
                  dense
                  flat
                  rounded
                  no-caps
                  style="color: #001f40; min-width: 8em; font-weight: bold"
                  @click="slide = 2"
                >
                </q-btn>
                <q-btn
                  label="Continuar"
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
                  @click="slide = 4"
                ></q-btn>
              </q-card-actions>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide :name="4">
            <q-card
              flat
              class="q-pa-sm"
              style="
                min-height: 590px;
                border-radius: 30px;
                background-color: transparent;
              "
            >
              <q-card-section
                class="text-h6"
                style="color: #75787b; font-weight: bold"
              >
                Hora de saber os contatos da sua empresa.
              </q-card-section>
              <q-card-section>
                <span class="q-mt-md" style="color: #75787b; font-weight: 400"
                  >Nome do Representante Legal</span
                >
                <q-input
                  v-model="repLegal"
                  dense
                  filled
                  :input-style="{ color: '#001f40', marginTop: '.5em' }"
                  class="q-mt-md"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                <span class="q-mt-md" style="color: #75787b; font-weight: 400"
                  >CPF do Representante Legal</span
                >
                <q-input
                  v-model="repCPF"
                  dense
                  filled
                  :input-style="{ color: '#001f40', marginTop: '.5em' }"
                  mask="###.###.###-##"
                  class="q-mt-md"
                >
                </q-input>
                <span
                  v-if="msgCPF"
                  style="color: #001f40; font-weight: bold; margin-top: 0.5em"
                  >{{ msgCPF }}</span
                >
              </q-card-section>
              <q-card-section>
                <span class="q-mt-md" style="color: #75787b; font-weight: 400"
                  >E-mail do Representante Legal</span
                >
                <q-input
                  v-model="repEmail"
                  type="email"
                  dense
                  filled
                  :input-style="{ color: '#001f40', marginTop: '.5em' }"
                  class="q-mt-md"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                <span class="q-mt-md" style="color: #75787b; font-weight: 400"
                  >E-mail de Contato da Empresa</span
                >
                <q-input
                  v-model="contatoEmail"
                  type="email"
                  dense
                  filled
                  :input-style="{ color: '#001f40', marginTop: '.5em' }"
                  class="q-mt-md"
                >
                </q-input>
              </q-card-section>
              <q-card-section>
                <span class="q-mt-md" style="color: #75787b; font-weight: 400"
                  >Celular do Representante Legal</span
                >
                <q-input
                  v-model="repCel"
                  dense
                  filled
                  :input-style="{ color: '#001f40', marginTop: '.5em' }"
                  mask="(##) #####-####"
                  class="q-mt-md"
                  hint="(21) 9XXXX-XXXX"
                >
                </q-input>
              </q-card-section>
              <q-card-actions align="around" style="margin-top: 6em">
                <q-btn
                  label="Voltar"
                  size="1em"
                  padding=".5em"
                  dense
                  flat
                  rounded
                  no-caps
                  style="color: #001f40; min-width: 8em; font-weight: bold"
                  @click="slide = 3"
                >
                </q-btn>
                <q-btn
                  label="Continuar"
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
                  @click="validaCPF(repCPF)"
                ></q-btn>
              </q-card-actions>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide :name="5">
            <q-card
              class="col-12 q-pa-xl q-mt-xl"
              flat
              style="background-color: transparent; width: 23em;margin-top: 10em;"
            >
              <q-card-section
                class="text-h6 text-center"
                style="color: #75787b; margin-top: -1em"
              >
                <img src="../assets/checkmark.png" alt="">
              </q-card-section>
              <q-card-section
                class="text-center"
                style="color: #75787b; margin-top: -1em"
              >
                Cadastro realizado com sucesso. <br />
                Você receberá um e-mail em <b>pXXXX@gmail.com</b> para a conclusão da abertura da sua
                conta
              </q-card-section>
              <q-card-actions align="center" style="margin-top: 4em;">
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
                  @click="
                    () => {
                      (CNPJ = ''),
                        (razaoSocial = ''),
                        (nomeFantasia = ''),
                        (dataAbertura = ''),
                        (tpEmpresa = ''),
                        (CNAE = ''),
                        (repLegal = ''),
                        (repCPF = ''),
                        (repEmail = ''),
                        (contatoEmail = ''),
                        (repCel = '');
                    }
                  "
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
const stringOptions = [
  "MEI",
  "EIRELI",
  "Empresário Individual",
  "Sociedade Empresária Limitada",
  "Sociedade Simples",
  "Sociedade Anônima (SA)",
  "Sociedade Limitada Unipessoal (SLU)",
  "ME (Microempresa)",
  "EPP (Empresa de Pequeno Porte",
];
export default {
  name: "Cadastro",
  setup() {
    const tpCNAE = ref(stringOptions);
    return {
      CNPJ: ref(""),
      razaoSocial: ref(""),
      nomeFantasia: ref(""),
      dataAbertura: ref(""),
      tpEmpresa: ref(""),
      empresa: ref([
        "MEI",
        "EIRELI",
        "Empresário Individual",
        "Sociedade Empresária Limitada",
        "Sociedade Simples",
        "Sociedade Anônima (SA)",
        "Sociedade Limitada Unipessoal (SLU)",
        "ME (Microempresa)",
        "EPP (Empresa de Pequeno Porte",
      ]),
      tpCNAE,
      CNAE: ref(""),
      filterFn(val, update) {
        if (val === "") {
          update(() => {
            tpCNAE.value = stringOptions;
          });
          return;
        }

        update(() => {
          const needle = val.toLowerCase();
          tpCNAE.value = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
      repLegal: ref(""),
      repCPF: ref(""),
      msgCPF: ref(""),
      repEmail: ref(""),
      contatoEmail: ref(""),
      repCel: ref(""),
      slide: ref(1),
      msgVazio: ref(""),
    };
  },
  methods: {
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
      return (this.msgVazio = ""), this.slide = 2;
    },
    validaCPF(CPF) {
      CPF = CPF.replace(/[^\d]+/g, "");
      var Soma;
      var Resto;
      Soma = 0;
      if (CPF == "00000000000") return (this.msgCPF = "CPF Inválido");
      for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(CPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(CPF.substring(9, 10)))
        return (this.msgCPF = "CPF Inválido");
      Soma = 0;
      for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(CPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(CPF.substring(10, 11)))
        return (this.msgCPF = "CPF Inválido");
      return (this.msgCPF = "", this.slide = 5);
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
.maxcard {
  background-image: url("../assets/maxcard.png");
  background-repeat: no-repeat;
}
</style>
