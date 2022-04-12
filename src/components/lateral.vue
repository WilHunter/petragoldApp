<template>
  <div
    class="row flex flex-start q-pl-md"
    style="flex-direction: column; width: 15%;"
  >
    <div class="col q-ml-md">
      <img
        class="q-mt-xl"
        src="../assets/dourado.png"
        style="width: 20%"
        alt=""
      />
    </div>
    <div class="col q-mt-sm q-ml-md text-white">
      <b>Fulano de Tal</b>
    </div>
    <div class="col q-ml-md text-white text-caption">Assistent</div>
    <div class="col q-mt-md" style="border-right: 3px solid white">
      <q-list separator class="text-white">
        <q-item v-for="(item,i) in items" :key="i" clickable :to="item.to" v-ripple>
          <q-item-section avatar>
            <q-icon :name="item.icon"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.name}}</q-item-label>
            <q-item-label class="text-white text-overline" caption>{{item.desc}}</q-item-label>
          </q-item-section>

        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lateral",
  setup() {
    return {
      items: [
        { to: "", name: "Cadastro", icon: "description", desc:"Cadstro de usuários" },
        { to: "", name: "Clientes", icon: "people_alt", desc:"Lista de clientes do banco" },
        { to: "", name: "Operações", icon: "receipt_long", desc:"Lista de operaões realizadas" },
        { to: "", name: "Relatórios", icon: "bar_chart", desc:"Relatórios Personalizados" },
      ],
    };
  },
};
</script>
