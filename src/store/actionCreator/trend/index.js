import axios from "axios";
import actionType from "../../actionType/trend/index";
export const changeAllMv = function (payload) {
    return {
        type:actionType.CHANGE_ALL_MV,
        payload
    }
};
export const changeMvUrlList = function (payload) {
    return {
        type:actionType.CHANGE_MV_URL_LIST,
        payload
    }
};
export const changeSingerPic = function (payload) {
    return {
        type:actionType.CHANGE_SINGER_PIC,
        payload
    }
};
export const changeMvLike = function (payload) {
    return {
        type:actionType.CHANGE_MV_LIKE,
        payload
    }
};
export const changeMvComment = function (payload) {
    return {
        type:actionType.CHANGE_MV_COMMENT,
        payload
    }
};
export const changeMvRankList = function (payload) {
    return {
        type:actionType.CHANGE_MV_RANK_LIST,
        payload
    }
};

export default {
    getAllMv() {
        return async(dispatch)=>{
            const data=await axios.get("/mv/first?limit=10");
            if(data.code===200){
                dispatch(changeAllMv(data.data));
                // data.data.map((v)=>{
                //     this.getVideoSrc(v.id);this.getSingerPic(v.artists[0].id);this.getMvLike(v.id);
                // });
                // data.data.map((v)=>{
                //
                // });
                // data.data.map((v)=>{
                //
                // });
            }
        }
    },
    getInfo(urlId,picId,likeId){
        return async (disaptch)=>{
            // console.log(123)
            await axios.all([axios.get("/mv/url?id="+urlId),axios.get("/artists?id="+picId),axios.get("/mv/detail?mvid="+likeId)])
                axios.spread(function (acct,perms,last) {
                    // console.log(acct,perms,last,123456);
                    // dispatch(changeMvUrlList(acct.data.url));
                    // dispatch(changeSingerPic(perms.artist.img1v1Url));
                    // dispatch(changeMvLike({
                    //     likeCount: last.data.likeCount,
                    //     commentCount:last.data.commentCount
                    // }))
                    // return function fn() {
                    //
                    // }
                })
        }
    },
    getVideoSrc(id){//获取视频地址
        return async (dispatch)=>{
            const data=await axios.get("/mv/url?id="+id);
            if(data.code===200){
                // console.log(data,1)
                dispatch(changeMvUrlList(data.data.url))
            }
        }
    },
    getSingerPic(id){//获取歌手头像
        return async (dispatch)=>{
            const data=await axios.get("/artists?id="+id);
            if(data.code===200){
                // console.log(data,2)
                dispatch(changeSingerPic(data.artist.img1v1Url))
            }
        }
    },
    getMvLike(id){//获取点赞和评论
        return async (dispatch)=>{
            const data=await axios.get("/mv/detail?mvid="+id);
            if(data.code===200){
                // console.log(data,3)
                // dispatch(changeMvLike(data.data))
                dispatch(changeMvLike(data.data.likeCount));
                dispatch(changeMvComment(data.data.commentCount));
            }
        }
    },
    getMvRankListMl(area){//获取内地排行
        return async (dispatch)=>{
            const data=await axios.get("/top/mv?limit=10&area="+area);
            if(data.code===200){
                dispatch(changeMvRankList(data));
            }
        }
    }
}