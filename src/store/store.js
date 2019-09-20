import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import cart from './modules/cart'


export default new Vuex.Store({
    modules:{
        cart
    },
    state:{
        position : {
            home : 0,
            category: 0
        }
    },
    mutations:{
        changePosition(state,{position,type}){
            state.position[type] = position
        }
    },
    actions:{
        changePosition({commit},options){
            commit('changePosition',options)
        }
    }

})