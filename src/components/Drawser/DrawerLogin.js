import React from 'react'
import axios from 'axios'
class DrawerLogin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{}
        }
    }
    render(){
        //console.log(this.state.userInfo,111)
        return(
            <>
                <div className="Drawer_login_not" style={{display:localStorage.userId?"none":"block"}}>
                    <p>登陆网易云音乐</p>
                    <p>手机电脑多端同步，尽享海量高音质音乐</p>
                    <span onClick={()=>{
                        this.props.history.push("/login")
                    }}>立即登陆</span>
                </div>
                <div className="userInfo_s" style={{display:localStorage.userId?"block":"none"}}>
                    <p className="head_portrait">
                        <img src={this.state.userInfo.profile?this.state.userInfo.profile.avatarUrl:""} alt=""/>
                    </p>
                    <p className="userNick">
                        <span>{this.state.userInfo.profile?this.state.userInfo.profile.nickname:""}</span>
                        <span className="level_s">lv.{this.state.userInfo.level}</span>
                    </p>
                </div>
            </>

        )
    }
    async getUserInfo(){
        const uid = localStorage.userId;
        const data = await axios.get(`/user/detail?uid=${uid}`);
        //console.log(data);
        this.setState({
            userInfo:data
        })
    }
    componentDidMount(){
        if(localStorage.userId){
            this.getUserInfo();
        }
        //console.log(localStorage.userId);
    }
}
export default DrawerLogin;