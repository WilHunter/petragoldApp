<template>
    <q-page class="corpo">
      <topo/>
      <vantagens />
      <servicos />
      <foot/>
    </q-page>
</template>

<script>
import Foot from 'src/components/Foot.vue'
import Servicos from 'src/components/Servicos.vue'
import Topo from 'src/components/Topo.vue'
import Vantagens from 'src/components/Vantagens.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Topo, Vantagens, Servicos, Foot },
  name: 'IndexPage'
})
</script>

<style scoped>
.corpo{
  background-color: rgb(255 250 238);
}
</style>
