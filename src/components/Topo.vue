<template>
<q-card flat bordered class="corpo">
    <q-card-section>
        <div class="row flex flex-center">
            <div class="col-3 q-py-md q-pl-sm q-ml-md">
                <img src="../assets/dourado.png" alt=" Logo PetraGold" style="width: 70%" />
            </div>
            <div class="col text-left text-white animate__animated animate__fadeIn" style="font-size:1.2em">
                Olá, <br />
                <b>Luiza</b>
            </div>
            <!--<div class="col-1 text-right">
               <q-btn icon="settings" dense flat style="color: rgb(255 250 238)"></q-btn>
            </div> -->
        </div>
    </q-card-section>
    <q-card-section horizontal class="text-left text-white q-pl-xl animate__animated animate__fadeIn" style="font-size:1em;margin-top:-1.5em; margin-bottom:8em">
        <q-card-section class="q-mt-md">
            SALDO DISPONÍVEL <br>
            <q-input disable v-model="saldo" filled :type="isPwd ? 'password' : 'text'" :input-style="{ color: 'white', fontWeight: 'bolder' }">
            </q-input>
        </q-card-section>
        <q-card-section>
            <q-btn dense flat style="color: rgb(255 250 238);margin-top:1.8em ">
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" style="font-size: 1.5em;"></q-icon>
            </q-btn>
        </q-card-section>
    </q-card-section>
</q-card>
<q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated class="bg-transparent" style="height:fit-content; margin-top:-6em">
    <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-center items-center q-col-gutter no-wrap">
            <router-link style="text-decoration: none" to="Transferir">
                <q-card class=" animate__animated animate__fadeIn" bordered style="min-width: 7em;min-height: 11em;border: solid 1px #A89968;background-color: rgb(255 250 238);border-radius: 10px;margin-right:2em">
                    <q-card-section>
                        <q-icon class="rounded-borders" name="compare_arrows" size="2.5em" style="background-color:rgb(255 250 238);color: #001F40;"></q-icon>
                    </q-card-section>
                    <q-card-section class="text-grey-9" style="font-weight: 500">
                        Transferir
                    </q-card-section>
                </q-card>
            </router-link>
            <router-link style="text-decoration: none" to="Transferir">
                <q-card class=" animate__animated animate__fadeIn" bordered style="min-width: 7em;min-height: 11em;border: solid 1px #A89968;background-color: rgb(255 250 238);border-radius: 10px;margin-right:2em">
                    <q-card-section>
                        <q-icon class="rounded-borders" name="pix" size="2.5em" style="background-color:rgb(255 250 238);color: #001F40;"></q-icon>
                    </q-card-section>
                    <q-card-section class="text-grey-9" style="font-weight: 500">
                        PIX
                    </q-card-section>
                </q-card>
            </router-link>
            <router-link style="text-decoration: none" to="Transferir">
                <q-card class="animate__animated animate__fadeIn" bordered style="min-width: 7em;min-height: 11em;border: solid 1px #A89968;background-color: rgb(255 250 238);border-radius: 10px;">
                    <q-card-section>
                        <q-icon class="rounded-borders" name="account_balance_wallet" size="2.5em" style="background-color:rgb(255 250 238);color: #001F40;"></q-icon>
                    </q-card-section>
                    <q-card-section class="text-grey-9" style="font-weight: 500">
                        Extrato
                    </q-card-section>
                </q-card>
            </router-link>
        </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-center items-center q-col-gutter no-wrap">
            <router-link style="text-decoration: none" to="Transferir">
                <q-card class="shadow-5" bordered style="min-width: 7em;min-height: 11em;border: solid 1px #A89968;background-color: rgb(255 250 238);border-radius: 10px;margin-right:2em">
                    <q-card-section>
                        <q-icon class="rounded-borders" name="receipt_long" size="2.5em" style="background-color:rgb(255 250 238);color: #001F40;"></q-icon>
                    </q-card-section>
                    <q-card-section class="text-grey-9" style="font-weight: 500;margin-left:-.6em">
                        Comprovantes
                    </q-card-section>
                </q-card>
            </router-link>
            <router-link style="text-decoration: none" to="Transferir">
                <q-card class="shadow-5" bordered style="min-width: 7em;min-height: 11em;border: solid 1px #A89968;background-color: rgb(255 250 238);border-radius: 10px;margin-right:2em">
                    <q-card-section>
                        <q-icon class="rounded-borders" name="price_check" size="2.5em" style="background-color:rgb(255 250 238);color: #001F40;"></q-icon>
                    </q-card-section>
                    <q-card-section class="text-grey-9" style="font-weight: 500;margin-left:-.6em">
                        Pagamentos
                    </q-card-section>
                </q-card>
            </router-link>
            <router-link style="text-decoration: none" to="Transferir">
                <q-card class="shadow-5" bordered style="min-width: 7em;min-height: 11em;border: solid 1px #A89968;background-color: rgb(255 250 238);border-radius: 10px;">
                    <q-card-section>
                        <q-icon class="rounded-borders" name="text_snippet" size="2.5em" style="background-color:rgb(255 250 238);color: #001F40;"></q-icon>
                    </q-card-section>
                    <q-card-section class="text-grey-9" style="font-weight: 500">
                        Gerar <br> Boletos
                    </q-card-section>
                </q-card>
            </router-link>
        </div>
    </q-carousel-slide>
</q-carousel>
</template>

<script>
import {
    ref
} from 'vue'
export default {
    name: "Topo",
    setup() {
        return {
            slide: ref(1),
            isPwd: ref(true),
            saldo: ref("9.350,00")
        };
    },
};
</script>

<style scoped>
*{
    animation-duration: 1s;
  }
  .botao{
    animation-delay: .2s;
  }
.corpo {
    background-image: url("../assets/topo.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: rgb(255 250 238);
    margin: 0 0 auto 0;
    padding: 0 !important;
}
</style>
