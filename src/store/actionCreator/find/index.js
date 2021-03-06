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
//同步云村精选模块mv
export const ChangeSelMv=function (payload) {
    return{
        type:actionType.CHANGE_SEL_MV,
        payload
    }
}
//同步find模块下方 Mv列表
export const ChangeMvList=function (payload) {
    return{
        type:actionType.CHANGE_MV_LIST,
        payload
    }
}
//同步每日推荐歌曲
export const ChangeRecommend=function (payload) {
    return{
        type:actionType.CHANGE_RECOMMEND_SONGS,
        payload
    }
}

//同步歌单模块banner
export const ChangeSongListBanner=function (payload) {
    return{
        type:actionType.CHANGE_SONG_LIST_BANNER,
        payload
    }
}

//推荐歌单
export const ChangeSonglistIntro=function (payload) {
    return{
        type:actionType.CHANGE_SONG_LIST_INTRO,
        payload
    }
}
//其他歌单
export const ChangeSonglistOther=function (payload) {
    return{
        type:actionType.CHANGE_SONG_LIST_OTHER,
        payload
    }
}
//rewardToplist 音乐赞赏榜
export const ChangeRewardToplist=function (payload) {
    return{
        type:actionType.CHANGE_REWARD_TOP_LIST,
        payload
    }
}
//官方排行榜 list 前四
export const ChangeToplist=function (payload) {
    return{
        type:actionType.CHANGE_TOP_LIST,
        payload
    }
}
//其他榜单 后22
export const ChangeListOthers=function (payload) {
    return{
        type:actionType.CHANGE_LIST_OTHERS,
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
                const data = await axios.get("/top/album?offset=1&limit=3");
                //console.log(data.albums)
                dispatch(ChangeNewSong(data.albums))
        }
    },
    //请求新歌
    getNewSong(){
        return async (dispatch)=>{
            const data = await axios.get("/top/album?offset=2&limit=3");
            //console.log(data.albums)
            dispatch(ChangeNewSong(data.albums))
        }
    },
    //请求云村精选 调用网易出品mv接口 offset limit
    getSelMv(_offset){
        return async (dispatch)=>{
            const data = await axios.get(`/mv/all?limit=1&offset=${_offset}`);
            dispatch(ChangeSelMv(data.data[0]))
        }
    },
    //获取MvList 接口同上
    getMvList(){
        return async (dispatch)=>{
            const data = await axios.get(`/mv/all?limit=30&offset=20`);
            dispatch(ChangeMvList(data.data))
        }
    },
    //获取每日推荐歌曲
    getRecommendSongs(){
        return async (dispatch)=>{
            const data = await axios.get("/recommend/songs");
            dispatch(ChangeRecommend(data.recommend))
        }
    },
    //推荐歌单banner图 调用浪漫歌单接口取前三
    getSonglist_intro_banner(){
        return async (dispatch)=>{
            const data = await axios.get("/top/playlist?limit=3&order=new&cat=浪漫");
            dispatch(ChangeSongListBanner(data.playlists));
        }
    },
    //推荐歌单 调用推荐歌单接口 去除前6个
    getSonglist_intro(){
        return async (dispatch)=>{
           const data = await axios.get("/personalized?limit=36");
           const result = data.result.splice(6,36);
            dispatch(ChangeSonglistIntro(result));
        }
    },
    //古风 精品 华语 流行 轻音乐 摇滚 民谣 共同异步actions 接受一个关键字keyword
    getSonglist_other(keyword){
        return async (dispatch)=>{
            const data = await axios.get(`/top/playlist?limit=30&order=new&cat=${keyword}`);
            dispatch(ChangeSonglistOther(data.playlists))
        }
    },
    //获取音乐赞赏榜 rewardToplist
    getRankingRewardToplist(){
        return async (dispatch)=>{
            const data = await axios.get("/toplist/detail");
            //console.log(data.rewardToplist)
            dispatch(ChangeRewardToplist(data.rewardToplist))
        }
    },
    //获取官方排行
    getRankingList(){
        return async (dispatch)=>{
            const data = await axios.get("/toplist/detail");
            //console.log(data.list)
            dispatch(ChangeToplist(data.list.splice(0,4)))
        }
    },
    //获取其他排行
    getRankingListOthers(){
        return async (dispatch)=>{
            const data = await axios.get("/toplist/detail");
            //console.log(data.list.splice(4,22))
            dispatch(ChangeListOthers(data.list.splice(4,22)))
        }
    }
}