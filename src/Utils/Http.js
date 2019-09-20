import axios from 'axios'
import qs from 'qs'

var params =new URLSearchParams()
params.append('url','123')
export default {
    post(opsition){
        return axios({
            ...opsition,
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            
        })
        .then((res)=>{
           return res
        })
    },
    get({url}){
        return axios({
            url,
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        .then((res)=>{
           return res
        })
    },
    detailPost({url}){
        return axios({
            url
        })
        .then((res)=>{
            return res
        })
    }
}