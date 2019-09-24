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
    if (type === actionType.CHANGE_COMPOSITE_LIST){
        state.compositeList = payload
    }
    if (type === actionType.CHANGE_SINGLE_LIST){
        state.singleList = payload
    }
    if (type === actionType.CHANGE_VIDEO_LIST){
        state.videoList = payload
    }
    if (type === actionType.CHANGE_SONG_WRITER_LIST){
        state.songWriterList = payload
    }
    if (type === actionType.CHANGE_ALBUM_LIST){
        state.albumList = payload
    }
    if (type === actionType.CHANGE_PLAY_LIST){
        state.playList = payload
    }
    if (type === actionType.CHANGE_RADIO_STATION_LIST){
        state.radioStationList = payload
    }
    if (type === actionType.CHANGE_USER_HOME_LIST){
        state.userHomeList = payload
    }
    if (type === actionType.CHANGE_USER_INFO_LIST){
        state.userInfoList = payload
    }
    if (type === actionType.CHANGE_USER_PLAY_LIST){
        state.userPlayList = payload
    }
    if (type === actionType.CHANGE_USER_PLAY_LIST_TWO){
        state.userPlayListTwo = payload
    }
    return state
}