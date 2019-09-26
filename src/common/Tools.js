class Tools {
    static date(v) {
        const time = new Date(v);
        return time.getFullYear() + "." +
            (time.getMonth() + 1).toString().padStart(2,) + "." +
            (time.getDate()).toString().padStart(2,);
    }

    static date2(v){
        const time = new Date(v);
        return time.getFullYear()+"年"+
            (time.getMonth()+1).toString().padStart(2,"0")+"月"
    }
    static date3(v){
        const time = new Date(v);
        return time.getFullYear()
    }

    static currency(v, n = 2) {
        return "$" + v.toFixed(n);
    }

    static getVideoLong(time) {//视频时长
        const mint=(time/1000).toFixed(0);
        return (Math.floor(mint/60)).toString().padStart(2,"0")+":"+((mint-Math.floor(mint/60)*60)).toString().padStart(2,"0")
    }

    static tranNumber(num, point) {
        let numStr = num.toString();
        // 十万以内直接返回
        if (numStr.length < 6) {
            return numStr;
        }
        //大于8位数是亿
        else if (numStr.length > 8) {
            let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
            return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿';
        }
        //大于6位数是十万 (以10W分割 10W以下全部显示)
        else if (numStr.length > 5) {
            let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
            return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
        }
    }
}

export default Tools;