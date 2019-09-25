import React from "react";
export default class Spin extends React.Component{
    render(){
        return(
            <>
                加载中...
            </>
        )
    }
    componentDidMount() {
        setTimeout(()=>{
            this.props.history.push("/trends");
        },50)

    }
}