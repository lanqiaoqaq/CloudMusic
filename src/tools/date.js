export function getTime() {
    const data = new Date();
    return data.getFullYear()+"-"+
        (data.getMonth()+1).toString().padStart(2,"0")+"-"+
        (data.getDate()).toString().padStart(2,"0")+" "+
        (data.getHours()).toString().padStart(2,"0")+":"+
        (data.getMinutes()).toString().padStart(2,"0")+":"+
        (data.getSeconds()).toString().padStart(2,"0");
}


export function  getTrendTime(o){//计算动态发布时间
    const n=Date.now();//当前时间戳
    let data=new Date(o)//发布时间（时间格式）
    let f=n-o;//时间戳差值
    const minute=1000*60;
    const hour=1000*60*60;
    const day=1000*60*60*24;
    const year=1000*60*60*24*365;
    if(f<minute){//小于一分钟
        return Math.floor(f/1000)+"秒前";
    }else if(f<hour){
        return Math.floor(f/1000/60)+"分钟前";
    }else if(f<day){
        return (data.getHours()).toString().padStart(2,"0")+":"+
            (data.getMinutes()).toString().padStart(2,"0");
    }else if(f<year){
        return (data.getMonth()+1).toString().padStart(2,"0")+"-"+
            (data.getDate()).toString().padStart(2,"0");
    }else{
        return data.getFullYear()+"-"+
            (data.getMonth()+1).toString().padStart(2,"0")+"-"+
            (data.getDate()).toString().padStart(2,"0");
    }
}

export function getNowDate() {
    const data = new Date();
    return (data.getMonth()+1).toString()+"月"+
        (data.getDate()).toString()+"日";
}

export function getDate(date) {
    const data = new Date(date);
    // console.log(data,date)
    return (data.getMonth()+1).toString()+"月"+
        (data.getDate()).toString()+"日";
}

export function getpubDate(date) {
    const data = new Date(date);
    return (data.getFullYear()).toString()+"-"+
    (data.getMonth()+1).toString()+"-"+
        (data.getDate()).toString()+"-";
}

export function getPlayerTime(time){
    if(time>99999){
        return (time/10000).toFixed(0)+"万"
    }else{
        return time
    }
}

export function getVideoLong(time) {//视频时长
    const mint=(time/1000).toFixed(0);
    return (Math.floor(mint/60)).toString().padStart(2,"0")+":"+((mint-Math.floor(mint/60)*60)).toString().padStart(2,"0")

}