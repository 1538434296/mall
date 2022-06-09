import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.store({
  state: {
    token: '',
    cartList: []
  },
    mutations: {
      SetToken: (state, token) => {
        state.token = token
        localStorage.setItem("token", token)
      },
      addCart: (state, payload) => {
        let oldProduct = null;
        for(let item of state.cartList) {
          if(item.iid === state.cartList.iid) {
            oldProduct = item
          }
        }
      }
    },
    getters: {
      getToken: state => {
        if (!state.token) {
          state.token = localStorage.getItem('token')
        }
        return state.token
      }
    },
  })