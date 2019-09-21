export function getTime() {
    const data = new Date();
    return data.getFullYear()+"-"+
        (data.getMonth()+1).toString().padStart(2,"0")+"-"+
        (data.getDate()).toString().padStart(2,"0")+" "+
        (data.getHours()).toString().padStart(2,"0")+":"+
        (data.getMinutes()).toString().padStart(2,"0")+":"+
        (data.getSeconds()).toString().padStart(2,"0");
}

export function getNowDate() {
    const data = new Date();
    return (data.getMonth()+1).toString()+"月"+
        (data.getDate()).toString()+"日";
}

export function getDate(date) {
    const data = new Date(date);
    console.log(data,date)
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