const state = {
    corretores: [],
    tasks: [],
    // variável corretor assumirá o corretor filtrado
    corretor: {},
    upCorretor: {}
};
const mutations = {
    setCorretor(state, payload) {
        state.corretores.push(payload)
    },
    setImagem(state, payload) {
        state.imagens = (payload)
    },
    carregar(state, payload) {
        state.corretores.push(payload)
    },
    carregarTask(state, payload) {
        state.tasks.push(payload)
    },
    carregarSelecionado(state, payload) {
        state.corretor = (payload)
    },
    updateCorretor(state, payload) {
        state.upCorretor = state.corretores.find(item => item.id === payload.id)
    },
    updateStatusCorretor(state, payload) {
        state.upCorretor = state.corretores.find(item => item.id === payload.id)
    }

};

const actions = {
    async carregarListaCorretores({ commit }) {
        try {
            const res = await fetch('https://selletiva-38340-default-rtdb.firebaseio.com/corretores.json')
            const db = await res.json()

            const arrayCorretores = []

            for (let id in db) {
                arrayCorretores.push(db[id])
            }

            commit('carregar', arrayCorretores)

        } catch (error) {
            console.log(error)
        }
    },
    async carregarCorretorSelecionado({ commit }, id) {
        try {
            const res = await fetch(`https://selletiva-38340-default-rtdb.firebaseio.com/corretores/${id}.json`)
            const db = await res.json()
            commit('carregarSelecionado', db)
        } catch (error) {
            console.log(error)
        }
    },
    // Login do Usuario
    async login({commit}, dados){
      console.log(JSON.stringify(dados))
      try {
        const res = await fetch(`https://petragoldbankingappapi.azurewebsites.net/api/Auth/Login`,

        {
            method: 'POST',
            mode: `no-cors`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: dados
        })
        //03707952000138 - SenhaForte@22"
        console.log(res.json())
      } catch (error) {

      }
    }
};
const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
