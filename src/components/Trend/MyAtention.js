import React from "react";
import "../../assets/style/trend/MyAtention.css";
class MyAtention extends React.Component{
    render() {
        console.log(this.props);
        return(
            <>
                <div className={"ra_box"} onClick={()=>{
                    this.props.history.push("/allFollow")
                }}>
                    <p>我关注的他们 ></p>
                    <ul>
                        <li>
                            <div><img src={require("../../assets/img/TrendImg/1.jpg")}/></div>
                            <h2>泛电音</h2>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
export default MyAtention;