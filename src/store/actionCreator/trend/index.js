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
export const changeSingerPic1 = function (payload) {//mv详情页的头像
    return {
        type:actionType.CHANGE_SINGER_PIC1,
        payload
    }
};
export const changeMvLike = function (payload) {
    return {
        type:actionType.CHANGE_MV_LIKE,
        payload
    }
};
export const changeMvComment = function (payload){//mv评论数
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
export const changeMvDetails = function (payload) {
    return {
        type:actionType.CHANGE_MV_DETAILS,
        payload
    }
};
export const changeMvBrs = function (payload) {
    return {
        type:actionType.CHANGE_MV_BRS,
        payload
    }
};

export const changeRelatedVideos = function (payload) {
    return {
        type:actionType.CHANGE_RELATED_VIDEOS,
        payload
    }
};


export const changeMvComments = function (payload) {
    return {
        type:actionType.CHANGE_MV_COMMENTS,
        payload
    }
};
export const changeVideoDetails = function (payload) {//改变视频详情
    return {
        type:actionType.CHANGE_VIDEO_DETAILS,
        payload
    }
};
export const changeFeaturedMv = function (payload) {//改变视频详情
    return {
        type:actionType.CHANGE_FEATURED_MV,
        payload
    }
};

export const changeTrend = function (payload) {//改变视频详情
    return {
        type:actionType.CHANGE_TREND,
        payload
    }
};

export default {

    getTrend(){//获取动态页数据
        const uid=localStorage.userId;
        return async (dispatch)=>{
            const data=await axios.get("/user/follows?uid="+uid);
            // console.log(data);
            if(data.code===200){
                const follow=data.follow;
                const trends=await this.getTrends();
                let urlArr=[],coverArr=[];
                trends.map((v,i)=>{
                    const json =JSON.parse(v.json);
                    if(json.video){
                        urlArr.push(json.video.videoId)
                    }else {
                        urlArr.push("89ADDE33C0AAE8EC14B99F6750DB954D")
                    }
                    if(json.song){
                        coverArr.push(json.song.id)
                    }else {
                        coverArr.push("347230")
                    }
                });
                console.log(urlArr,coverArr);
                let url=[];
                let cover=[];
                let url1= await Promise.all(urlArr.map(async (v,i)=>{
                    return  ( async ()=>{
                        const data=await axios.get("/video/url?id="+v);
                        url.push(data.urls[0].url);
                        return url
                    })()
                }));
                let cover1= await Promise.all(coverArr.map(async (v,i)=>{
                    return  ( async ()=>{
                        const data=await axios.get("/song/detail?ids="+v);
                        cover.push(data.songs[0].al.picUrl);
                        return cover
                    })()
                }));
                dispatch(changeTrend({
                    follow,
                    trends,
                    url,
                    cover
                }))
            }
        }
    },
    getTrends(){
        const date=Date.now()
        return async (dispatch)=>{
            const data =await axios.get("/event?pagesize=30&lasttime="+date);
            const data1=await axios.get("/user/event?uid=32953014")
            console.log(data1)
            // console.log(JSON.parse(data.event[0].json))
            return data.event
        }
    },

    getFeaturedMv(){
        return async (dispatch)=>{
            const data=await axios.get("/mv/exclusive/rcmd?limit=4");
            // console.log(data);
            if (data.code===200){
                const wyMv=data.data;//网易mv
                const mainland=await this.getMvrank("内地");
                const HKaT=await this.getMvrank("港台");
                const europe=await this.getMvrank("欧美");
                const Korea=await this.getMvrank("韩国");
                const japan=await this.getMvrank("日本");

                dispatch(changeFeaturedMv({
                    wyMv,
                    mainland,
                    HKaT,
                    europe,
                    Korea,
                    japan
                }))
            }
        }
    },
    getMvrank(area){//各地mv
        return async (dispatch)=>{
            const data=await axios.get("/top/mv?limit=4&area="+area);
            if (data.code===200){
                return data.data;
            }
        }
    },

    getVideoDetails(id){//获取视频数据
        return async (dispatch)=>{
            console.log(id)
            const data= await axios.get("/video/detail?id="+id);
            if(data.code===200){
                const pic=await  this.getVideoUserPic(data.data.creator.userId);//头像
                const related=await this.getVideoRelatedVideos(data.data.vid);//相关视频
                const comment=await this.getVideoComment(data.data.vid);//评论
                const vurl=await this.getVideoAdd(data.data.vid);//视频地址
                dispatch(changeVideoDetails({
                    videoDetails:data,
                    pic,
                    related,
                    comment,
                    vurl
                }))
            }
        }
    },
    getVideoAdd(id){
        return async (dispatch)=>{
            const data=await axios.get("/video/url?id="+id);
            if(data.code===200){
                return data.urls[0].url;
            }
        }
    },
    getVideoUserPic(id){//获取视频用户头像
        return async (dispatch)=>{
            const data=await axios.get("/user/detail?uid="+id);//用户详情
            if(data.code===200){
                return data.profile.avatarUrl;//头像地址
            }
        }
    },
    getVideoRelatedVideos(vid){//获取视频相关视频
        return async (dispatch)=>{
            const data= await axios.get("/related/allvideo?id="+vid);
            if(data.code===200){
                return data.data;//一个数组
            }
        }
    },
    getVideoComment(id){//获取视频评论
        return async (dispatch)=>{
            const data= await axios.get("/comment/video?id="+id);
            if(data.code===200){
                return data;//有热评和最新
            }
        }
    },
    getAllMv() {
        return async(dispatch)=>{
            const data=await axios.get("/mv/first?limit=10");
            if(data.code===200){
                const videoFeatured=await this.getVideoFeatured();
                const rank=await this.getMvRankListMl1("内地");
                // console.log(rank)
                dispatch(changeAllMv({
                    allMv:data.data,
                    videoFeatured,
                    rank
                }));
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
    getVideoFeatured(){//视频精选
        return async (dispatch)=>{
            const data=await axios.get("/personalized/mv");
            if(data.code===200){
                return data.result
            }
        }
    },

    getVideoSrc(id){//获取视频地址
        return async (dispatch)=>{
            const data=await axios.get("/mv/url?id="+id);
            if(data.code===200){
                // console.log(data,1)
                dispatch(changeMvUrlList(data.data.url))
                return data.data.url
            }
        }
    },
    getSingerPic(id){//获取歌手头像
        console.log("获取歌手头像",id)
        return async (dispatch)=>{
            const data=await axios.get("/artists?id="+id);
            console.log(data,2)
            if(data.code===200){
                dispatch(changeSingerPic(data.artist.img1v1Url))
                return data.artist.img1v1Url
            }
        }
    },
    getMvLike(id){//获取点赞和评论
        return async (dispatch)=>{
            const data=await axios.get("/mv/detail?mvid="+id);
            if(data.code===200){
                // console.log(data,3)
                // dispatch(changeMvLike(data.data))
                dispatch(changeMvLike({
                    likeCount: data.data.likeCount,
                    commentCount:data.data.commentCount
                }))
                return {
                    likeCount: data.data.likeCount,
                    commentCount:data.data.commentCount
                }
                // dispatch(changeMvLike(data.data.likeCount));
                // dispatch(changeMvComment(data.data.commentCount));
            }
        }
    },
    getMvRankListMl(area){//获取内地排行
        return async (dispatch)=>{
            const data=await axios.get("/top/mv?area="+area);
            if(data.code===200){
                dispatch(changeMvRankList(data));
                return data
            }
        }
    },
    getMvRankListMl1(area){//获取内地排行
        return async (dispatch)=>{
            const data=await axios.get("/top/mv?area="+area);
            if(data.code===200){
                return data
            }
        }
    },
    getMvDetails(id){//获取mv详细信息
        return async (dispatch)=>{
            const data=await axios.get("/mv/detail?mvid="+id);
            // console.log(data)
            if(data.code===200){
                dispatch(changeMvDetails(data));
                this.getSingerPic1(data.data.artists);
                this.getRelatedVideos(data.data.id);
                this.getMvComment(data.data.id);
            }
        }
    },
    changeMvBrs(id,e){//切换视频清晰度
        console.log(id,e.target.value,document.querySelector("video").currentTime);
        const currentTime=document.querySelector("video").currentTime;
        return  (dispatch)=>{
            switch (e.target.value) {
                case "240P":dispatch(changeMvBrs(["240",currentTime]));break;
                case "480P":dispatch(changeMvBrs(["480",currentTime]));break;
                case "720P":dispatch(changeMvBrs(["720",currentTime]));break;
                case "1080P":dispatch(changeMvBrs(["1080",currentTime]));break;
            }
        }
    },
    getSingerPic1(arr){//获取歌手头像mv
        // console.log("获取歌手头像",arr)
        return async (dispatch)=>{
            let newarr=[];
            let result= await Promise.all(arr.map(async (v,i)=>{
                return  ( async ()=>{
                    const data=await axios.get("/artists?id="+v.id);
                    console.log(data)
                    // console.log(data.artist.img1v1Url,"获取歌手头像")
                    newarr.push(data.artist.img1v1Url);
                    return newarr
                })()
            }))
            console.log(newarr,2222)

            dispatch(changeSingerPic1(newarr))
        }
    },
    getRelatedVideos(vid){//获取相关视频 type:1 视频 0：mv
        return async (dispatch)=>{
            const data= await axios.get("/related/allvideo?id="+vid);
            if(data.code===200){
                dispatch(changeRelatedVideos(data.data));
            }
        }
    },
    getMvComment(id){//获取mv评论
        return async (dispatch)=>{
            const data= await axios.get("/comment/mv?id="+id);
            if(data.code===200){
                dispatch(changeMvComments(data));
            }
        }
    },
    getInfo(urlId,picId,likeId){
        return async (disaptch)=>{
            // console.log(123)
            await axios.all([axios.get("/mv/url?id="+urlId),axios.get("/artists?id="+picId),axios.get("/mv/detail?mvid="+likeId)])
            axios.spread(function (acct,perms,last) {
            })
        }
    },

}