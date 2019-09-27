import React from 'react'
class RadioStation extends React.Component{
    render(){
        return(
            <div>电台</div>
        )
    }
    componentDidMount(){
        alert("该功能暂未开放！")
        this.props.history.push("/")
    }
}
export default RadioStation