import store from 'store'
export default {
    namespaced:true,
    state:{
        goodsList:store.get('goodsList') || []
    },
    mutations:{
        changeGoodsList(state,dataList){
            state.goodsList.push(dataList)
            store.set('goodsList',state.goodsList)
        },
        changeDelete(state,index){
            state.goodsList.splice(index,1)
            store.set('goodsList',state.goodsList)
        },
        chnageStatus(state,index){
            state.goodsList[index].status = !state.goodsList[index].status
            store.set('goodsList',state.goodsList)
        },
        changeAllStatus(state,type){
           state.goodsList.map((item,index)=>{
                if(type){
                    return item.status = true
                }else{
                    return item.status = false
                }
            })
            store.set('goodsList',state.goodsList)
        }
    },
    actions:{
        changeGoodsList({commit},dataList){
            commit('changeGoodsList',dataList)
        },
        changeDelete({commit},index){
            commit('changeDelete',index)
        },
        chnageStatus({commit},index){
            commit('chnageStatus',index)
        },
        changeAllStatus({commit},type){
            commit('changeAllStatus',type)
        }  
    }
}