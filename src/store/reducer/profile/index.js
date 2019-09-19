import initState from '../../state/profile'
import actionType from "../../actionType/profile";
export default function (state = initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state)) //深拷贝
    if(type===actionType.CHANGE_CYPLAY_LIST){
        state.cyPlaylist=payload;
    }
    if(type===actionType.CHANGE_CYRECORD){
        state.cyRecord=payload;
    }
    if(type===actionType.CHANGE_CYSUBCOUNT){
        state.cySubcount=payload;
    }
    if(type===actionType.CHANGE_CYPLAY_LIST_DETAIL){
        state.cyPlaylistDetail=payload;
        console.log(546546456456,payload)
    }
    return state
}