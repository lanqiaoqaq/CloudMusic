import initState from '../../state/search'
import actionType from '../../actionType/search/index'
export default function (state = initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state)) //深拷贝
    if (type === actionType.CHANGE_HOT_LIST){
        // console.log("CHANGE_HOT_LIST")
        state.hotList = payload
    }
    if (type === actionType.CHANGE_FUZZY_SEARCH_LIST){
        state.fuzzySearchList = payload
    }
    return state
}