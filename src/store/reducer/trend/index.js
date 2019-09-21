import initState from '../../state/trend/trendIn/index';
import actionType from "../../actionType/trend/index";
export default function (state = initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state)) //深拷贝
    if(type===actionType.CHANGE_ALL_MV){//更新全部mv
        state.allMv=payload
    }
    if(type===actionType.CHANGE_MV_URL_LIST){
        state.mvUrlList.push(payload)
    }
    if(type===actionType.CHANGE_SINGER_PIC){
        state.singerPic.push(payload)
    }
    if(type===actionType.CHANGE_SINGER_PIC1){//mv详情页的
        state.singerPic1=payload
    }
    if(type===actionType.CHANGE_MV_LIKE){
        state.mvLike.push(payload)
    }
    if(type===actionType.CHANGE_MV_COMMENT){
        state.mvComment.push(payload)
    }
    if(type===actionType.CHANGE_MV_RANK_LIST){
        state.mvRankList=payload
    }
    if(type===actionType.CHANGE_MV_DETAILS){
        state.mvDetails=payload
    }
    if(type===actionType.CHANGE_MV_BRS){
        state.mvBrs=payload
    }
    if(type===actionType.CHANGE_RELATED_VIDEOS){
        state.relatedVideos=payload
    }
    if(type===actionType.CHANGE_MV_COMMENTS){
        state.mvComments=payload
    }
    if(type===actionType.CHANGE_VIDEO_DETAILS){
        state.videoDetails=payload
    }
    if(type===actionType.CHANGE_FEATURED_MV){
        state.featuredMv=payload
    }
    if(type===actionType.CHANGE_TREND){
        state.trend=payload
    }

    return state
}