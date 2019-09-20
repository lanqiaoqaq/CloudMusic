import React from 'react';
import axios from 'axios'
class NextName extends React.Component{
    render(){
        return(
            <div style={{position:"relative",height:"100%"}}>
                <div style={{width:"100%",height:"1.6rem",background:"#d33a31",display:"flex",flexDirection:"row",lineHeight:"1.6rem"}}>
                    <span style={{fontSize:".8rem",color:"white",padding:"0 .44rem",display:"inlineBlock"}} className={" iconfont iconzuojiantou"} onClick={()=>this.props.history.go(-1)} ></span>
                    <span style={{fontSize:".5rem",color:"white"}}>设置昵称</span>
                </div>
                <p style={{height:"1.68rem",borderBottom:"1px solid #e6e6e6",width:"9.88rem",marginLeft:".48rem"}}>
                    <input style={{outline:"medium",border:"none",marginTop:".9rem",fontSize:".46rem"}} ref="NextName" type="text" placeholder="请输入昵称"/>
                </p>
                <p style={{width:"9.84rem",height:"1.23rem",fontSize:".5rem",margin:"0 .46rem",lineHeight:"1.28rem",color:"white",textAlign:"center",borderRadius:".6rem",background:"#d33a31"}} onClick={this.register.bind(this)}>开启云音乐</p>
            </div>
        )
    }
    async register(){
        const {phone,password,code} = this.props.location.state;
        const nickname = this.refs.NextName.value;
        try {
            const data = await axios.get(`/register/cellphone?phone=${phone}&password=${password}&captcha=${code}&nickname=${nickname}`);
            if(data){
                alert("注册成功,开启你的云音乐~");
                const data = await axios.get(`/login/cellphone?phone=${phone}&password=${password}`);
                if(data.code === 200){
                    //alert("登陆成功")
                    localStorage.userId=data.account.id;
                    this.props.history.push("/")
                }else {
                    alert("登陆失败了呢...")
                }
            }else{
                alert("该昵称存在，注册失败！")
            }
        }catch (e){
            alert("该昵称存在，注册失败！")
        }
    }
}
export default NextName;