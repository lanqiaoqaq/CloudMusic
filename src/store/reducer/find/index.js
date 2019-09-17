import initState from '../../state/find'
import actionType from '../../actionType/find/index'
export default function (state = initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state)) //深拷贝
    if(type === actionType.CHANGE_BANNERS){
        //console.log("CHANGE_BANNERS")
        state.banners=payload;
    }
    return state
}