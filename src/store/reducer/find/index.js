import initState from '../../state/find'
import actionType from '../../actionType/find/index'
export default function (state = initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state)) //深拷贝
    if(type === actionType.CHANGE_BANNERS){
        //console.log("CHANGE_BANNERS")
        state.banners=payload;
    }
    if(type === actionType.CHANGE_INTRO_PLAY_LIST){
        state.introPlaylist=payload;
    }
    if(type === actionType.CHANGE_NEW_SONG){
        state.newSong=payload;
    }
    if(type === actionType.CHANGE_SEL_MV){
        state.selMv=payload;
    }
    if(type === actionType.CHANGE_MV_LIST){
        state.mvList=payload;
    }
    if(type === actionType.CHANGE_RECOMMEND_SONGS){
        state.recommendSongs=payload;
    }
    if(type === actionType.CHANGE_SONG_LIST_BANNER){
        state.songListBanner=payload;
    }
    if(type === actionType.CHANGE_SONG_LIST_INTRO){
        state.songListIntro=payload;
    }
    if(type === actionType.CHANGE_SONG_LIST_OTHER){
        state.songListOther=payload;
    }
    return state
}