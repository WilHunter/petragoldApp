const state = {
    corretores: [],
    tasks: [],
    // variável corretor assumirá o corretor filtrado
    user: {},
    msgErrors: '',
    upCorretor: {},
    contatosTransf: []
};
const mutations = {
    setUser(state, payload) {
        state.user = payload
    },
    setMsgErros(state, payload) {
      state.msgErrors = payload
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
    },
    setContatoTransf(state, payload){
      state.contatosTransf.push(payload)
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
    // Cadastrar Usuário
    async register({commit}, dados){
      console.log(JSON.stringify(dados))
      try {
        const res = await fetch(`https://petragoldbankingappapi.azurewebsites.net/api/Auth/register`,

        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        //03707952000138 - SenhaForte@22"
        const db = res
        if(res.status == 204){
          console.log(res)
        }
        if(res.status == 400){
          console.log(db.errors)
        }
      } catch (error) {
          console.log(error)
      }
    },
    // Login do Usuario
    async login({commit}, dados){
      console.log(dados)
      try {
        const res = await fetch(`https://petragoldbankingappapi.azurewebsites.net/api/Auth/Login`,

        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        const cnpj = dados.user
        const db = await res.json()
        if(res.status == 200){
        actions.getBalance(cnpj)
        commit(`setUser`, db)
        this.$router.push(`Index`)
        }
        if(res.status == 400){
          commit('setMsgErros',db.errors.InvalidLogin[0])
        }
      } catch (error) {
          console.log(error)
      }
    },
    // Esqueci a senha
    async forgotPassToken({commit},dados){
      console.log(JSON.stringify(dados))
      try {
        const res = await fetch(`https://petragoldbankingappapi.azurewebsites.net/api/Auth/ForgotPasswordToken`,
        {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: {
            cnpj: JSON.stringify(dados)
          }
        }
        )
        const db = await res.json()
        console.log(db)
      } catch (error) {
        console.log(error)
      }
    },
    // Busca Saldo
    async getBalance({commit},dados){
      console.log('balance')
      try {
        const res = await fetch(`https://petragoldbankingappapi.azurewebsites.net/api/CheckingAccount/Balance`,
        {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
          body: {
            cnpj: dados
          }
        }
        )
        const db = await res.json()
        console.log(db)
      }
      catch(error){
        console.log(error)
      }
    },
    //Cadastrando contato transferência
    salvarContatoTransf({commit}, dados){
      commit('setContatoTransf', dados)
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
