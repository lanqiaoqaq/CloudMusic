//歌单列表页
import React from "react";
class List extends React.Component{
    constructor(){
        super();
        this.state={
            privileges:[]
        }
    }
    render(){
         return(
            <>
            {

            }
                <div className={"cy_ml_box"}>
                    <p className="cy_ml_num">1</p>
                    <div className={"cy_ml_r"}>
                         <div>
                             <p>
                                  <span>歌名</span>
                                <img className="cy_ml_mv" src={require("../../assets/mine_img/微信图片_20190917173616.jpg")}/>
                             </p>
                           <p>
                               <img  className="cy_ml_sq" src={require("../../assets/mine_img/微信图片_201909171736161.jpg")}/>
                                <span>描述</span>
                           </p>
                            
                        </div>
                        <span className={"iconfont icondiandiandian"} ></span>
                    </div>
                </div>
            </>
        )
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            privileges:[]
    })
  }
}
export default List;