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
            const data = await axios.get(`/search?keywords= ${value}&type=1018`);
            // console.log(data)
            dispatch(ChangeCompositeList(data))
        }
    },
    // 获取单曲搜索列表
    getSingleList(){
        return async (dispatch) => {
            const data = await axios.get("/search?keywords= 那个女孩&type=1");
            // console.log(data)
            dispatch(ChangeSingleList(data))
        }
    },
    //获取视频搜索列表
    getVideoList(){
        return async (dispatch) => {
            const data = await axios.get("/search?keywords= 那个女孩&type=1014");
            // console.log(data)
            dispatch(ChangeVideoList(data))
        }
    },
    //获取歌手搜索列表
    getSongWriterList(){
        return async (dispatch) => {
            const data = await axios.get("/search?keywords= 那个女孩&type=100");
            // console.log(data)
            dispatch(ChangeSongWriterList(data))
        }
    },
    //获取专辑搜索列表
    getAlbumList(){
        return async (dispatch) => {
            const data = await axios.get("/search?keywords= 那个女孩&type=10");
            // console.log(data)
            dispatch(ChangeAlbumList(data))
        }
    },
    //获取歌单搜索列表
    getPlayList(){
        return async (dispatch) => {
            const data = await axios.get("/search?keywords= 那个女孩&type=1000");
            // console.log(data)
            dispatch(ChangePlayList(data))
        }
    },
    //获取电台搜索列表
    getRadioStationList(){
        return async (dispatch) => {
            const data = await axios.get("/search?keywords= 那个女孩&type=1009");
            // console.log(data)
            dispatch(ChangeRadioStation(data))
        }
    },
    //获取用户搜索列表
    getUserHomeList(){
        return async (dispatch) => {
            const data = await axios.get("/search?keywords= 那个女孩&type=1002");
            //console.log(data)
            dispatch(ChangeUserHomeList(data))
        }
    }
}