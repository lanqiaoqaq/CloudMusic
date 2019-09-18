import axios from 'axios'
import actionType from '../../actionType/find' //同步action的type值
//同步改变banner图
export const ChangeBanners =function (payload) {
    return{
        type:actionType.CHANGE_BANNERS,
        payload
    }
}
//同步改变歌单推荐
export const ChangeIntroPlaylist =function (payload) {
    return{
        type:actionType.CHANGE_INTRO_PLAY_LIST,
        payload
    }
}

//同步改变新碟/新歌
export const ChangeNewSong=function (payload) {
    return{
        type:actionType.CHANGE_NEW_SONG,
        payload
    }
}
export default {
    //请求banner图
    getBannerPic() {
        return async (dispatch) => {
            const data = await axios.get("/banner?type=1");
            //console.log(data.banners)
            dispatch(ChangeBanners(data.banners))
        }
    },
    //请求推荐歌单
    getIntroPlaylist(){
        return async (dispatch)=>{
           const data = await axios.get("/personalized?limit=6");
           //console.log(data.result)
            dispatch(ChangeIntroPlaylist(data.result))
        }
    },
    //请求新碟
    getNewDisc(){
        return async (dispatch)=>{
                const data = await axios.get("/top/album?offset=5&limit=3");
                //console.log(data.albums)
                dispatch(ChangeNewSong(data.albums))
        }
    },
    //请求新歌
    getNewSong(){
        return async (dispatch)=>{
            const data = await axios.get("/top/song?type=0");
            const res = data.data.splice(0,3);
            //console.log(res,"getNewSong")
            dispatch(ChangeNewSong(res))
        }
    }
}