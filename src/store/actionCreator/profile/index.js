import axios from "axios";
import actionType from "../../actionType/profile"
import { getTime } from "../../../tools/date";
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
//歌曲详情
export function changeSonDetail(payload){
    return {
        type:actionType.CHANGE_SON_DETAIL,
        payload
    }
}
//获取音乐
export function changeMusic(payload){
    return {
        type:actionType.CHANGE_MUSIC,
        payload
    }
}
//歌词
export function changeLyric(payload){
    return {
        type:actionType.CHANGE_LYRIC,
        payload
    }
}
//电台
export function changeDj(payload){
    return {
        type:actionType.CHANGE_DJ,
        payload
    }
}
export function changeCreateDj(payload){
    return {
        type:actionType.CHANGE_CREATEDJ,
        payload
    }
}
export function changepaygift(payload){
    return {
        type:actionType.CHANGE_PAYGIFT,
        payload
    }
}
export function changeTime(payload){
    // console.log(payload,93274892738)
    return {
        type:actionType.CHANGE_TIME,
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
            if(data.code===200){
                dispatch(changePlayListDetail(data));
                let ids="";
                if( data.privileges){
                    data.privileges.map(v=>{
                            ids+=v.id+","
                        })
                        ids=ids.slice(0,ids.length-1);
                this.getSonDetail(ids)       
                }else{
                    dispatch(changeSonDetail({}));
                }
            }
            
        }
    },
    //歌曲详情
    getSonDetail(ids){
        return async (dispatch)=>{
            const data=await axios.get("/song/detail?ids="+ids);
            dispatch(changeSonDetail(data));
        }
    },
    //获取音乐
    getMusic(id){
        return async (dispatch)=>{
            const data=await axios.get("/song/url?id="+id);
            dispatch(changeMusic(data));
        }
    },
    //歌词
    getLyric(id){
        return async (dispatch)=>{
            const data=await axios.get("/lyric?id="+id);
            dispatch(changeLyric(data));
        }
    },
    //电台
    getDj(id){
        return async (dispatch)=>{
            const data=await axios.get("/dj/sublist");
            if(data.code===200){
                this.getCreateDj(id);
            }
            dispatch(changeDj(data));
        }
    },
    //创建的电台
    getCreateDj(id){
        return async (dispatch)=>{
            const data=await axios.get("/user/audio?uid="+id);
            dispatch(changeCreateDj(data));
        }
    },
    //精品电台
    getpaygift(){
        return async (dispatch)=>{
            const data=await axios.get("/dj/paygift?limit=3");
            dispatch(changepaygift(data));
        }
    },
    //歌曲时间
    getTime(time){
        return async (dispatch)=>
        dispatch(changeTime({time}));   
    }
}