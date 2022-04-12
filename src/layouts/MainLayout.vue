<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: #002455">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <q-btn flat to="Index">
            <img
              class="q-pa-md"
              src="../assets/logodourado.png"
              alt=" Logo PetraGold"
              style="width: 15%"
            />
          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="background-color: #002455; color: white"
    >
      <q-list class="q-pl-md">
        <q-item-label header>
          <div class="row flex flex-start">
            <div class="col">
              <img
                class="q-mt-xl"
                src="../assets/dourado.png"
                style="width: 20%"
                alt=""
              />
            </div>
          </div>
          <div class="row flex q-mt-sm" style="flex-direction: column">
            <div class="col text-white">
              <b>Fulano de Tal</b>
            </div>
            <div class="col text-white text-caption">Assistent</div>
          </div>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Cadastro",
    caption: "Cadastro de usuários",
    icon: "description",
    link: "Cadastro",
  },
  {
    title: "Clientes",
    caption: "Lista de clientes do banco",
    icon: "people_alt",
    link: "",
  },
  {
    title: "Operações",
    caption: "Lista de operaões realizadas",
    icon: "receipt_long",
    link: "",
  },
  {
    title: "Relatórios",
    caption: "Relatórios Personalizados",
    icon: "bar_chart",
    link: "",
  }
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
