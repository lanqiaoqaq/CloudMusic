import axios from 'axios'
import actionType from '../../actionType/search/index' //同步action的type值

//同步跟新热搜列表
export const ChangeHotList = function (payload) {
    return{
        type:actionType.CHANGE_HOT_LIST,
        payload
    }
}
//同步跟新模糊搜索列表
export const ChangeFuzzySearchList = function (payload) {
    return{
        type: actionType.CHANGE_FUZZY_SEARCH_LIST,
        payload
    }
}
export default {
    //获取热搜列表
    getHotList(){
        return async (dispatch) => {
            const {data} = await axios.get("/search/hot/detail?limit=20")
            dispatch(ChangeHotList(data))
        }
    },
    //获取模糊搜索列表
    getFuzzySearchList(value){
        return async (dispatch) => {
            const {result} = await axios.get(`/search?keywords=${value}&limit=10`)
            // console.log(result)
            dispatch(ChangeFuzzySearchList(result.songs))
        }
    }
}