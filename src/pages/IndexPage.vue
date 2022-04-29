<template>
    <q-page class="corpo">
      <topo/>
      <vantagens />
      <movimentacoes/>
      <servicos />
      <foot/>
    </q-page>
</template>

<script>
import Foot from 'src/components/Foot.vue'
import Movimentacoes from 'src/components/Movimentacoes.vue'
import Servicos from 'src/components/Servicos.vue'
import Topo from 'src/components/Topo.vue'
import Vantagens from 'src/components/Vantagens.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Topo, Vantagens, Servicos, Foot, Movimentacoes },
  name: 'IndexPage'
})
</script>

<style scoped>
.corpo{
  background-color: rgb(255 250 238);
}
</style>
