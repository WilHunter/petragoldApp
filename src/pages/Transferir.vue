<template>
<q-page style="background-color:#FEFAEE">
    <div class="row flex q-pa-sm" style="background-color:#091F40">
        <div class="col-1">
            <q-btn flat icon="west" color="white" to="Index"></q-btn>
        </div>
        <div class="col text-center text-white" style="font-weight:bolder">
            <b style="margin-left: -3em">Transferências</b>
        </div>
    </div>
    <div class="row flex q-pa-xl" style="background-color:#091F40; flex-direction:column">
        <div class="col text-white text-center">
            SALDO DISPONÍVEL
        </div>
        <div class="col text-center text-white  q-pa-md" style="font-weight:bolder; font-size:1.7em">
            R$ {{saldo}}
        </div>
    </div>
    <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" animated style="margin-top:-.7em;border-radius: 25px;height:840px" class="bg-transparent">
        <q-carousel-slide :name=1 class=" no-wrap flex-center">
            <q-card flat style="background-color:#FEFAEE;">
                <q-card-section class="text-grey-9" style="font-weight:bolder; font-size:1.2em">
                    De: <br>
                    Magazine Luiza S/A
                </q-card-section>
                <q-card-section class="text-grey-9" style="font-weight:bolder; font-size:1.2em">
                    Para: <br>
                    <q-input v-model="contato" label="Pesquisar contato" color="grey-9">
                        <template v-slot:append>
                            <q-icon name="search"></q-icon>
                        </template>
                    </q-input>
                </q-card-section>
                <q-card-section style="margin-top:-1.5em;margin-left:-1.5em">
                    <q-btn flat color="grey-9" icon="add_box" @click="dialogContato = true"> </q-btn> Adicionar Contato
                    <q-dialog v-model="dialogContato">
                        <q-card class="flex flex-start q-pa-md" style="flex-direction: column;background-color:#FEFAEE;width: 300px;">
                            <q-card-section>
                                <q-btn flat color="grey-5" icon="close" @click="dialogContato = false"></q-btn>
                            </q-card-section>
                            <q-card-section>
                                <div class="text-left">
                                    <q-toggle v-model="tpPessoa" :label="tpPessoa" false-value="PF" true-value="PJ" dense color="grey-5" />
                                </div>
                            </q-card-section>
                            <q-card-section>
                                <div class="text-grey-9">
                                    <span class="text-weight-thin">
                                        Nome Completo
                                    </span>
                                    <q-input dense v-model="nomeContato" color="grey-9" label-color="grey-9" style="margin-top:-.5em">
                                    </q-input>
                                </div>
                            </q-card-section>
                            <q-card-section style="margin-top:-1em">
                                <div class="text-grey-9">
                                    <span class="text-weight-thin" v-if="tpPessoa == 'PF'">
                                        CPF
                                    </span>
                                    <span class="text-weight-thin" v-if="tpPessoa == 'PJ'">
                                        CNPJ
                                    </span>
                                    <q-input dense :v-model="CPFContato" v-if="tpPessoa == 'PF'" color="grey-9" label-color="grey-9" style="margin-top:-.5em" mask="###.###.###-##">
                                    </q-input>
                                    <q-input dense v-model="CNPJContato" v-if="tpPessoa == 'PJ'" color="grey-9" label-color="grey-9" style="margin-top:-.5em" mask="##.###.###/####-##">
                                    </q-input>
                                </div>
                            </q-card-section>
                            <q-card-section style="margin-top:-1em">
                                <div class="text-grey-9">
                                    <span>
                                        Banco
                                    </span>
                                    <q-select dense hide-selected v-model="bancoContato" use-input @filter="filterFn" color="grey-9" label-color="grey-9" style="margin-top:-.5em" :options="bancos" />
                                </div>
                            </q-card-section>
                            <q-card-section style="margin-top:-1em">
                                <div class="text-grey-9">
                                    <span>
                                        Agência
                                    </span>
                                    <q-input dense v-model="agenciaContato" color="grey-9" label-color="grey-9" style="margin-top:-.5em">
                                    </q-input>
                                </div>
                            </q-card-section>
                            <q-card-section style="margin-top:-1em">
                                <div class="text-grey-9">
                                    <span>
                                        Conta
                                    </span>
                                    <q-input dense v-model="contaContato" color="grey-9" label-color="grey-9" style="margin-top:-.5em" mask="AAAAAAAAA-A" reverse-fill-mask>
                                    </q-input>
                                </div>
                            </q-card-section>
                            <q-card-actions>
                                <q-btn class="full-width" label="próximo" style="background-color:#091F40;color:whitesmoke" @click="dialogContato = false"></q-btn>
                            </q-card-actions>
                        </q-card>
                    </q-dialog>
                </q-card-section>
                <q-card-section class="q-mt-md">
                    <q-table :rows="rows" :columns="columns" row-key="name" color="grey-9" style="background-color:#FEFAEE" flat selection="multiple" v-model:selected="selected" :filter="filter" no-data-label="Nenhum contato cadastrado" hide-header>
                    </q-table>
                </q-card-section>
                <q-card-actions style="margin-top:3em">
                    <q-btn class="full-width" label="próximo" style="background-color:#091F40;color:whitesmoke" @click="slide = 2"></q-btn>
                </q-card-actions>
            </q-card>
        </q-carousel-slide>
        <q-carousel-slide :name=2 class=" no-wrap flex-center">
            <q-card flat style="background-color:#FEFAEE;">
                <q-card-section class="text-grey-9" style="font-weight:bolder; font-size:1.2em">
                    Transferência para: <br> <br>
                    {{contatoTransf}}
                </q-card-section>
                <q-card-section style="color: #5d6a7e;margin-top: -2em;s">
                    Bco: Itaú AG: 4548 C/c: 213456-2
                </q-card-section>
                <q-card-section>
                    Valor
                    <q-input v-model="valor" prefix="R$" color="grey-9" label-color="grey-9" placeholder="0,00" reverse-fill-mask mask="###.###.###,##" :input-style="{ fontWeight: 'bold', fontSize: '2em' }"></q-input>
                </q-card-section>
                <q-card-actions style="margin-top:3em">
                    <q-btn class="full-width" label="próximo" style="background-color:#091F40;color:whitesmoke" @click="slide = 3"></q-btn>
                </q-card-actions>
            </q-card>
        </q-carousel-slide>
        <q-carousel-slide :name=3 class=" no-wrap flex-center">
            <q-card flat style="background-color:#FEFAEE;">
                <q-card-section class="text-grey-9" style="font-weight:bolder; font-size:1.2em">
                    Confirmar Transferência
                </q-card-section>
                <q-card-section class="text-grey-9" style="font-weight:bolder; font-size:1.2em">
                    De: <br>
                    Magazine Luiza S/A
                </q-card-section>
                <q-card-section class="text-grey-9" style="font-weight:bolder; font-size:1.2em">
                    Para: <br> <br>
                    {{contatoTransf}}
                </q-card-section>
                <q-card-section style="color: #5d6a7e;margin-top: -2em;s">
                    Bco: Itaú AG: 4548 C/c: 213456-2
                </q-card-section>
                <q-card-section class="text-grey-9" style="font-weight:bolder; font-size:1.2em">
                    Valor: <br>
                    {{valor}}
                </q-card-section>
                <q-card-actions style="margin-top:3em">
                    <q-btn class="full-width" label="próximo" style="background-color:#091F40;color:whitesmoke" @click="slide = 4"></q-btn>
                </q-card-actions>
            </q-card>
        </q-carousel-slide>
        <q-carousel-slide :name=4 class=" no-wrap flex-center">
            <q-card flat style="background-color:#FEFAEE;">
                <q-card-section class="text-grey-9" style="font-weight:bolder; font-size:1.2em">
                    Confirmar Transferência
                </q-card-section>
                <q-card-section class="text-grey-9" style="font-weight:bolder; font-size:1.2em">
                    De: <br>
                    Magazine Luiza S/A
                </q-card-section>
                <q-card-section class="text-grey-9" style="font-weight:bolder; font-size:1.2em">
                    Para: <br> <br>
                    {{contatoTransf}}
                </q-card-section>
                <q-card-section style="color: #5d6a7e;margin-top: -2em;s">
                    Bco: Itaú AG: 4548 C/c: 213456-2
                </q-card-section>
                <q-card-section class="text-grey-9" style="font-weight:bolder; font-size:1.2em">
                    Valor: <br>
                    {{valor}}
                </q-card-section>
                <q-card-actions style="margin-top:3em">
                    <q-btn class="full-width" label="próximo" style="background-color:#091F40;color:whitesmoke" @click="slide = 4"></q-btn>
                </q-card-actions>
            </q-card>
        </q-carousel-slide>
    </q-carousel>
</q-page>
</template>

<script>
import {
    ref
} from 'vue'
const bancosOptions = ['Itau','Bradesco']
export default {
    name: 'Transferir',
    setup() {
      const bancos = ref(bancosOptions)
        return {
            saldo: ref("9.350,00"),
            contato: ref(""),
            dialogContato: ref(false),
            tpPessoa: ref("PF"),
            CPFContato: ref(""),
            CNPJContato: ref(""),
            bancoContato: ref(""),
            agenciaContato: ref(""),
            contaContato: ref(""),
            bancos,
            filterFn(val, update) {
                if (val === '') {
                    update(() => {
                        bancos.value = bancosOptions
                    })
                    return
                }
                update(() => {
                    const needle = val.toLowerCase()
                    bancos.value = bancosOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
                })
            },
            filter: ref(''),
            selected: ref([]),
            slide: ref(1),
            contatoTransf: ref("José Ambrósio "),
            valor: ref("")
        }
    }
}
</script>

<style>

</style>
