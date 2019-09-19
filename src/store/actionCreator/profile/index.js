import axios from "axios";
import actionType from "../../actionType/profile"
//获取用户歌单
export  function changePlayList(payload){
    return {
        type:actionType.CHANGE_CYPLAY_LIST,
        payload
    }
    
}
 //最近播放
export  function changeRecord(payload){
    return {
        type:actionType.CHANGE_CYRECORD,
        payload
    }
}
 //数量
 export  function changeSubcount(payload){
    return {
        type:actionType.CHANGE_CYSUBCOUNT,
        payload
    }
}
//歌单详情
export  function changePlayListDetail(payload){
    return {
        type:actionType.CHANGE_CYPLAY_LIST_DETAIL,
        payload
    }
}
export default {
    //获取用户歌单
    getPlayList(){//异步action
        return async (dispatch)=>{
            const {playlist}=await axios.get("/user/playlist?uid="+localStorage.userId);
            dispatch(changePlayList(playlist));
        }
    },
    //最近播放
    getRecord(){
        return async (dispatch)=>{
            const data=await axios.get("/user/record?uid="+localStorage.userId+"&type=0");
           
            dispatch(changeRecord(data.allData));
        }
    },
    //数量
    getSubcount(){
        return async (dispatch)=>{
            const data=await axios.post("/user/subcount");
            dispatch(changeSubcount(data));
        }
    },
    //歌单详情
    getPlayListDetail(id){
        return async (dispatch)=>{
            const data=await axios.get("/playlist/detail?id="+id);
           
            dispatch(changePlayListDetail(data));
        }
    },
}