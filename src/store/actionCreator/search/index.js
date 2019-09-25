import axios from 'axios'
import actionType from '../../actionType/search/index' //同步action的type值

//同步跟新热搜列表
export const ChangeHotList = function (payload) {
    return{
        type:actionType.CHANGE_HOT_LIST,
        payload
    }
};
//同步跟新模糊搜索列表
export const ChangeFuzzySearchList = function (payload) {
    return{
        type: actionType.CHANGE_FUZZY_SEARCH_LIST,
        payload
    }
};
//同步跟新综合搜索列表
export const ChangeCompositeList = function (payload) {
    return{
        type: actionType.CHANGE_COMPOSITE_LIST,
        payload
    }
};
// 同步更新单曲搜索列表
export const ChangeSingleList = function (payload) {
    return{
        type: actionType.CHANGE_SINGLE_LIST,
        payload
    }
};
// 同步跟新视频搜索列表
export const ChangeVideoList = function (payload) {
    return{
        type: actionType.CHANGE_VIDEO_LIST,
        payload
    }
};
//同步跟新视频搜索列表
export const ChangeSongWriterList = function (payload) {
    return{
        type: actionType.CHANGE_SONG_WRITER_LIST,
        payload
    }
};
//同步跟新专辑列表
export const ChangeAlbumList = function (payload) {
    return{
        type: actionType.CHANGE_ALBUM_LIST,
        payload
    }
};
//同步跟新歌单列表
export const ChangePlayList = function (payload) {
    return{
        type: actionType.CHANGE_PLAY_LIST,
        payload
    }
};
//同步跟新电台列表
export const ChangeRadioStation = function (payload) {
    return{
        type: actionType.CHANGE_RADIO_STATION_LIST,
        payload
    }
};
//同步跟新用户列表
export const ChangeUserHomeList = function (payload) {
    return{
        type: actionType.CHANGE_USER_HOME_LIST,
        payload
    }
};
//同步跟新用户详情列表
export const ChangeUserInfoList = function (payload) {
    return{
        type: actionType.CHANGE_USER_INFO_LIST,
        payload
    }
};
//同步跟新用户收藏歌单详情列表
export const ChangeUserPlayList = function (payload) {
    return{
        type: actionType.CHANGE_USER_PLAY_LIST,
        payload
    }
};
//同步跟新用户创建歌单详情列表
export const ChangeUserPlayListTwo = function (payload) {
    return{
        type: actionType.CHANGE_USER_PLAY_LIST_TWO,
        payload
    }
};
//同步跟新用户动态详情列表
export const ChangeUserDynamicList = function (payload) {
    return{
        type: actionType.CHANGE_USER_DYNAMIC_LIST,
        payload
    }
};
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
            try {
                const {result} = await axios.get(`/search?keywords=${value}&limit=10`)
                // console.log(result)
                dispatch(ChangeFuzzySearchList(result.songs))
            }catch (e) {

            }
        }
    },
    //获取综合搜索列表
    getCompositeList(value){
        return async (dispatch) => {
            // console.log(value)
            const data = await axios.get(`/search?keywords= ${value}&type=1018`);
            // console.log(data)
            dispatch(ChangeCompositeList(data))
        }
    },
    // 获取单曲搜索列表
    getSingleList(value){
        return async (dispatch) => {
            const data = await axios.get(`/search?keywords= ${value}&type=1`);
            // console.log(data)
            dispatch(ChangeSingleList(data))
        }
    },
    //获取视频搜索列表
    getVideoList(value){
        return async (dispatch) => {
            const data = await axios.get(`/search?keywords= ${value}&type=1014`);
            // console.log(data)
            dispatch(ChangeVideoList(data))
        }
    },
    //获取歌手搜索列表
    getSongWriterList(value){
        return async (dispatch) => {
            const data = await axios.get(`/search?keywords= ${value}&type=100`);
            // console.log(data)
            dispatch(ChangeSongWriterList(data))
        }
    },
    //获取专辑搜索列表
    getAlbumList(value){
        return async (dispatch) => {
            const data = await axios.get(`/search?keywords= ${value}&type=10`);
            // console.log(data)
            dispatch(ChangeAlbumList(data))
        }
    },
    //获取歌单搜索列表
    getPlayList(value){
        return async (dispatch) => {
            const data = await axios.get(`/search?keywords= ${value}&type=1000`);
            // console.log(data)
            dispatch(ChangePlayList(data))
        }
    },
    //获取电台搜索列表
    getRadioStationList(value){
        return async (dispatch) => {
                const data = await axios.get(`/search?keywords= ${value}&type=1009`);
            // console.log(data)
            dispatch(ChangeRadioStation(data))
        }
    },
    //获取用户搜索列表
    getUserHomeList(value){
        return async (dispatch) => {
            const data = await axios.get(`/search?keywords= ${value}&type=1002`);
            //console.log(data)
            dispatch(ChangeUserHomeList(data))
        }
    },
    //获取用户详情
    getFlow(_id){
        return async (dispatch) => {
            const data = await axios.get(`/user/detail?uid=${_id}`);
            // console.log(data)
            dispatch(ChangeUserInfoList(data))
        }
    },
    //获取用户收藏歌单详情
    getUserPlayList(_id){
        return async (dispatch) => {
            const {playlist} = await axios.get(`/user/playlist?uid=${_id}`);
            playlist.splice(0,1);
            for (let i=0;i<playlist.length;i++){
                if (_id == playlist[i].userId){
                        playlist.splice(i,1);
                        i--;
                }
            }
            dispatch(ChangeUserPlayList(playlist))
        }
    },
    //获取用户创建歌单详情
    getUserPlayListTwo(_id){
        return async (dispatch) => {
            const {playlist} = await axios.get(`/user/playlist?uid=${_id}`);
            // playlist.splice(0,1);
            for (let i=0;i<playlist.length;i++){
                if (_id != playlist[i].userId){
                    playlist.splice(i,1);
                    i--;
                }
            }
            dispatch(ChangeUserPlayListTwo(playlist))
        }
    },
    //获取用户动态列表详情
    getUserDynamicList(id){
        return async (dispatch) => {
            const data = await axios.get(`/user/event?uid=${id}`);
            //console.log(data)
            dispatch(ChangeUserDynamicList(data))
        }
    },
}