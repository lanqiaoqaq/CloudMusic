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
    }
    if(type===actionType.CHANGE_SON_DETAIL){
        state.cySongDetail=payload;
    }
    if(type===actionType.CHANGE_MUSIC){
        state.cyMusic=payload;
    }
    if(type===actionType.CHANGE_LYRIC){
        state.cylyric=payload;
    }
    if(type===actionType.CHANGE_DJ){
        state.cydj=payload;
    }
    if(type===actionType.CHANGE_CREATEDJ){
        state.cyCreateDj=payload;
    }
    if(type===actionType.CHANGE_PAYGIFT){
        state.cypaygift=payload;
    }
    
    if(type===actionType.CHANGE_TIME){
        state.cyCurrentTime=payload;
    }
    return state
}