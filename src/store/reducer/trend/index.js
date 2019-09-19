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
    if(type===actionType.CHANGE_MV_LIKE){
        state.mvLike.push(payload)
    }
    if(type===actionType.CHANGE_MV_COMMENT){
        state.mvComment.push(payload)
    }
    if(type===actionType.CHANGE_MV_RANK_LIST){
        state.mvRankList=payload
    }
    return state
}