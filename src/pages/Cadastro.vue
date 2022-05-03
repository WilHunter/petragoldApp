<template>
<q-page class="corpo flex flex-center" style="flex-direction: column;">
    <!--<div class="col text-center q-mt-xl">
        <img src="../assets/logoazul.png" alt="" />
      </div>-->
    <q-carousel class="rounded-borders" v-model="slide" animated style="background-color: transparent; height: 100vh;">
        <q-carousel-slide :name="1">
            <q-card flat class="q-pa-sm" style="
                min-height: 590px;
                border-radius: 30px;
                background-color: transparent;
                margin-top: 8em;
              ">
                <q-card-section class="text-h6 " style="color: #75787b; font-weight: bold">
                    Para começar, nos informe sua identificação.
                </q-card-section>
                <q-card-section style="margin-top: 6em">
                    <span class="q-mt-md animate__animated animate__fadeInDown" style="color: #75787b; font-weight: 400">Informe seu CNPJ</span>
                    <q-input v-model="CNPJ" dense filled :input-style="{ color: '#001f40', marginTop: '.5em' }" mask="##.###.###/####-##" class="q-mt-md animate__animated animate__fadeInDown">
                    </q-input>
                    <span v-if="msgVazio" style="color: #001f40; font-weight: bold; margin-top: 0.5em">{{ msgVazio }}</span>
                </q-card-section>
                <q-card-actions align="around" style="margin-top: 18em">
                    <q-btn class="botao animate__animated animate__fadeIn" label="Sair" size="1em" padding=".5em" dense flat rounded no-caps style="color: #001f40; min-width: 8em; font-weight: bold" to="Login">
                    </q-btn>
                    <q-btn class="botao animate__animated animate__fadeIn" label="Continuar" size="1em" padding=".5em" dense rounded outlined no-caps style="
                    color: #b3b3b3;
                    background-color: #001f40;
                    min-width: 8em;
                  " @click="validaCNPJ(CNPJ)"></q-btn>
                </q-card-actions>
            </q-card>
        </q-carousel-slide>
        <q-carousel-slide :name="2">
            <q-card flat class="q-pa-md" style="
                min-height: 590px;
                border-radius: 30px;
                background-color: transparent;
                margin-top: 8em;
              ">
                <q-card-section class="text-h6" style="color: #75787b; font-weight: bold">
                    Informe a identidade da sua empresa.
                </q-card-section>
                <q-card-section style="margin-top: 2em">
                    <span class="q-mt-md animate__animated animate__fadeInDown" style="color: #75787b; font-weight: 400">Razão Social</span>
                    <q-input v-model="razaoSocial" dense filled :input-style="{ color: '#001f40', marginTop: '.5em' }" class="q-mt-md animate__animated animate__fadeInDown">
                    </q-input>
                </q-card-section>
                <q-card-section>
                    <span class="q-mt-md animate__animated animate__fadeInDown" style="color: #75787b; font-weight: 400">Nome Fantasia</span>
                    <q-input v-model="nomeFantasia" dense filled :input-style="{ color: '#001f40', marginTop: '.5em' }" class="q-mt-md animate__animated animate__fadeInDown">
                    </q-input>
                    <span v-if="msgSlide2" style="color: #001f40; font-weight: bold; margin-top: 0.5em">{{ msgSlide2 }}</span>
                </q-card-section>
                <q-card-actions align="around" style="margin-top: 14em">
                    <q-btn class="botao animate__animated animate__fadeIn" label="Voltar" size="1em" padding=".5em" dense flat rounded no-caps style="color: #001f40; min-width: 8em; font-weight: bold" @click="slide = 1">
                    </q-btn>
                    <q-btn class="botao animate__animated animate__fadeIn" label="Continuar" size="1em" padding=".5em" dense rounded outlined no-caps style="
                      color: #b3b3b3;
                      background-color: #001f40;
                      min-width: 8em;
                      " @click="()=>{
                        validaSlide2()
                      }"></q-btn>
                </q-card-actions>
            </q-card>
        </q-carousel-slide>
        <q-carousel-slide :name="3">
            <q-card flat class="q-pa-md" style="
                min-height: 590px;
                border-radius: 30px;
                background-color: transparent;
                margin-top: 8em;
              ">
                <q-card-section class="text-h6" style="color: #75787b; font-weight: bold">
                    Agora informe os dados da empresa.
                </q-card-section>
                <q-card-section style="margin-top: 2em">
                    <span class="q-mt-md animate__animated animate__fadeInDown" style="color: #75787b; font-weight: 400">Data da Abertura da Empresa</span>
                    <q-input v-model="dataAbertura" type="date" dense filled :input-style="{ color: '#001f40', marginTop: '.5em' }" class="q-mt-md animate__animated animate__fadeInDown">
                    </q-input>
                </q-card-section>
                <q-card-section>
                    <span class="q-mt-md animate__animated animate__fadeInDown" style="color: #75787b; font-weight: 400">Tipo de Empresa</span>
                    <q-select v-model="tpEmpresa" :options="empresa" dense filled :input-style="{ color: '#001f40', marginTop: '.5em' }" class="q-mt-md animate__animated animate__fadeInDown">
                    </q-select>
                </q-card-section>
                <q-card-section>
                    <span class="q-mt-md animate__animated animate__fadeInDown" style="color: #75787b; font-weight: 400">CNAE</span>
                    <q-select v-model="CNAE" :options="tpCNAE" use-input @filter="filterFn" dense filled :input-style="{ color: '#001f40', marginTop: '.5em' }" class="q-mt-md animate__animated animate__fadeInDown">
                    </q-select>
                    <span v-if="msgSlide3" style="color: #001f40; font-weight: bold; margin-top: 1em">{{ msgSlide3 }}</span>
                </q-card-section>
                <q-card-actions align="around" style="margin-top: 6em">
                    <q-btn class="botao animate__animated animate__fadeIn" label="Voltar" size="1em" padding=".5em" dense flat rounded no-caps style="color: #001f40; min-width: 8em; font-weight: bold" @click="slide = 2">
                    </q-btn>
                    <q-btn class="botao animate__animated animate__fadeIn" label="Continuar" size="1em" padding=".5em" dense rounded outlined no-caps style="
                    color: #b3b3b3;
                    background-color: #001f40;
                    min-width: 8em;
                  " @click="()=>{
                    validaSlide3()
                  }"></q-btn>
                </q-card-actions>
            </q-card>
        </q-carousel-slide>
        <q-carousel-slide :name="4">
            <q-card flat class="q-pa-sm" style="
                min-height: 590px;
                border-radius: 30px;
                background-color: transparent;
              ">
                <q-card-section class="text-h6 " style="color: #75787b; font-weight: bold">
                    Hora de saber os contatos da sua empresa.
                </q-card-section>
                <q-card-section>
                    <span class="q-mt-md animate__animated animate__fadeInDown" style="color: #75787b; font-weight: 400">Nome do Representante Legal</span>
                    <q-input v-model="repLegal" dense filled :input-style="{ color: '#001f40', marginTop: '.5em' }" class="q-mt-md animate__animated animate__fadeInDown">
                    </q-input>
                </q-card-section>
                <q-card-section>
                    <span class="q-mt-md animate__animated animate__fadeInDown" style="color: #75787b; font-weight: 400">CPF do Representante Legal</span>
                    <q-input v-model="repCPF" @change="validaCPF(repCPF)" dense filled :input-style="{ color: '#001f40', marginTop: '.5em' }" mask="###.###.###-##" class="q-mt-md animate__animated animate__fadeInDown">
                    </q-input>
                    <span v-if="msgCPF" style="color: #001f40; font-weight: bold; margin-top: 0.5em">{{ msgCPF }}</span>
                </q-card-section>
                <q-card-section>
                    <span class="q-mt-md animate__animated animate__fadeInDown" style="color: #75787b; font-weight: 400">E-mail do Representante Legal</span>
                    <q-input v-model="repEmail" type="email" dense filled :input-style="{ color: '#001f40', marginTop: '.5em' }" class="q-mt-md animate__animated animate__fadeInDown">
                    </q-input>
                </q-card-section>
                <q-card-section>
                    <span class="q-mt-md animate__animated animate__fadeInDown" style="color: #75787b; font-weight: 400">E-mail de Contato da Empresa</span>
                    <q-input v-model="contatoEmail" type="email" dense filled :input-style="{ color: '#001f40', marginTop: '.5em' }" class="q-mt-md animate__animated animate__fadeInDown">
                    </q-input>
                </q-card-section>
                <q-card-section>
                    <span class="q-mt-md animate__animated animate__fadeInDown" style="color: #75787b; font-weight: 400">Celular do Representante Legal</span>
                    <q-input v-model="repCel" dense filled :input-style="{ color: '#001f40', marginTop: '.5em' }" mask="(##) #####-####" class="q-mt-md animate__animated animate__fadeInDown" hint="(21) 9XXXX-XXXX">
                    </q-input>
                    <span v-if="msgSlide4" style="color: #001f40; font-weight: bold; margin-top: 1.5em">{{ msgSlide4 }}</span>
                </q-card-section>
                <q-card-actions align="around" style="margin-top: 6em">
                    <q-btn class="botao animate__animated animate__fadeIn" label="Voltar" size="1em" padding=".5em" dense flat rounded no-caps style="color: #001f40; min-width: 8em; font-weight: bold" @click="slide = 3">
                    </q-btn>
                    <q-btn class=" botao animate__animated animate__fadeIn" label="Continuar" size="1em" padding=".5em" dense rounded outlined no-caps style="
                    color: #b3b3b3;
                    background-color: #001f40;
                    min-width: 8em;
                  " @click="()=>{
                    validaSlide4()
                  }"></q-btn>
                </q-card-actions>
            </q-card>
        </q-carousel-slide>
        <q-carousel-slide :name="5">
            <q-card flat class="q-pa-sm" style="
                min-height: 590px;
                border-radius: 30px;
                background-color: transparent;
                margin-top: 8em;
              ">
                <q-card-section class="text-h6" style="color: #75787b; font-weight: bold">
                    Vamos criar uma senha para o seu acesso ao app.
                </q-card-section>
                <q-card-section style="margin-top: 6em">
                    <span class="q-mt-md" style="color: #75787b; font-weight: 400">Informe sua senha</span>
                    <q-input class="q-mt-md animate__animated animate__fadeInDown" v-model="pass" dense filled :type="isPwd ? 'password' : 'text'" :input-style="{ color: '#001f40', marginTop: '.5em' } " :rules="[val => !!val || 'Obrigatório preencher senha']">
                        <template v-slot:append>
                            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                        </template>
                    </q-input>
                    <q-input class="q-mt-md animate__animated animate__fadeInDown" v-model="passConfirm" dense filled :type="isPwd ? 'password' : 'text'" :input-style="{ color: '#001f40', marginTop: '.5em' }" :rules="[val => !!val || 'Obrigatório preencher confirmação de senha']">
                        <template v-slot:append>
                            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                        </template>
                    </q-input>
                    <span v-if="msgPass" style="color: #001f40; font-weight: bold; margin-top: 1em">{{ msgPass }}</span>
                </q-card-section>
                <q-card-actions align="around" style="margin-top: 18em">
                    <q-btn class="botao animate__animated animate__fadeIn" label="Voltar" size="1em" padding=".5em" dense flat rounded no-caps style="color: #001f40; min-width: 8em; font-weight: bold" @click="slide = 4">
                    </q-btn>
                    <q-btn class="botao animate__animated animate__fadeIn" label="Continuar" size="1em" padding=".5em" dense rounded outlined no-caps style="
                    color: #b3b3b3;
                    background-color: #001f40;
                    min-width: 8em;
                  " @click="validaPass()"></q-btn>
                </q-card-actions>
            </q-card>
        </q-carousel-slide>

        <q-carousel-slide :name="6">
            <q-card class="col-12 q-pa-xl q-mt-xl" flat style="background-color: transparent; width: 23em;margin-top: 10em;">
                <q-card-section class="text-h6 text-center animate__animated animate__fadeInDown" style="color: #75787b; margin-top: -1em">
                    <img src="../assets/checkmark.png" alt="">
                </q-card-section>
                <q-card-section class="text-center animate__animated animate__fadeInDown" style="color: #75787b; margin-top: -1em">
                    Cadastro realizado com sucesso. <br />
                    Você receberá um e-mail em <b>pXXXX@gmail.com</b> para a conclusão da abertura da sua
                    conta
                </q-card-section>
                <q-card-actions align="center" style="margin-top: 4em;">
                    <q-btn class="botao animate__animated animate__fadeIn" label="Sair" size="1em" padding=".5em" dense rounded outlined no-caps style="
                    color: #b3b3b3;
                    background-color: #001f40;
                    min-width: 8em;
                  " @click="
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
                  " to="Login"></q-btn>
                </q-card-actions>
            </q-card>
        </q-carousel-slide>
    </q-carousel>
</q-page>
</template>

<script>
import {
    ref
} from "vue";
import { mapActions } from 'vuex';
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
            msgSlide2: ref(""),
            msgSlide3: ref(""),
            msgSlide4: ref(""),
            dataAbertura: ref(""),
            tpEmpresa: ref(""),
            pass: ref(""),
            passConfirm: ref(""),
            msgPass: ref(""),
            isPwd: ref(true),
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
        ...mapActions('comunications',['register']),
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
        validaPass(){
          const letrasMaiusculas = /[A-Z]/;
          const letrasMinusculas = /[a-z]/;
          const numeros = /[0-9]/;
          const caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_|.]/;
          if (!this.pass||!this.passConfirm){
            this.msgPass = "A senha e a confirmação são obrigatórias"
          }
          if (this.pass !== this.passConfirm){
            this.msgPass = "Senha informada é diferente da senha confirmada"
          }
          if (this.pass.length < 6){
            this.msgPass = "Senha informada deve conter ao menos 6 caracteres"
          }
          if(!letrasMaiusculas.test(this.pass)){
            this.msgPass = "Senha informada deve conter ao menos 1 caractere maiúsculo"
          }
          if(!letrasMinusculas.test(this.pass)){
            this.msgPass = "Senha informada deve conter ao menos 1 caractere minúsculo"
          }
          if(!numeros.test(this.pass)){
            this.msgPass = "Senha informada deve conter ao menos 1 número"
          }
          if(!caracteresEspeciais.test(this.pass)){
            this.msgPass = "Senha informada deve conter ao menos 1 caractere especial. (@ / # / ! / & / ˆ / %)"
          }
          else{
            this.msgPass = "",
            this.registrarUsuario(),
            this.slide = 6
          }
        },
        registrarUsuario(){
          this.register({
            user:{
              cnpj: this.CNPJ,
              password: this.pass,
              companyName: this.razaoSocial,
              tradingName: this.nomeFantasia,
              companyFoundingDate: this.dataAbertura,
              companyType: this.tpEmpresa,
              cnaeId: '1',
              //cnaeId: this.CNAE,
              representativeName: this.repLegal ,
              representativeCpf: this.repCPF,
              representativeCellphone: this.repCel,
              representativeEmail: this.repEmail
            }
          })
        },
        validaSlide2(){
          if(this.razaoSocial.length < 5 || this.nomeFantasia.length < 5){
            this.msgSlide2 = ' Razão Social e Nome Fantasia são obrigatórios (mínimo 5 caracteres)'
          }
          else{
            this.msgSlide2 = '',
            this.slide = 3
          }
        },
        validaSlide3(){
          if(!this.dataAbertura || !this.tpEmpresa || !this.CNAE){
            this.msgSlide3 = ' Todos os campos são obrigatórios'
          }
          this.slide = 4
        },
        validaSlide4(){
          if(!this.repLegal || !this.repCPF || !this.repEmail || !this.contatoEmail || this.repCel){
            this.msgSlide4 = ' Todos os dados do represente são obrigatórios'
          }
          this.slide = 5
        }
    },
};
</script>

<style scoped>
*{
    animation-duration: .5s;
  }
  .botao{
    animation-delay: .2s;
  }
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
