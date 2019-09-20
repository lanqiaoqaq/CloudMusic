import React from 'react';
import axios from 'axios'
class SignUp extends React.Component{
    render(){
        return(
            <div style={{position:"relative",height:"100%"}}>
                <div style={{width:"100%",height:"1.6rem",background:"#d33a31",display:"flex",flexDirection:"row",lineHeight:"1.6rem"}}>
                    <span style={{fontSize:".8rem",color:"white",padding:"0 .44rem",display:"inlineBlock"}} className={" iconfont iconzuojiantou"} onClick={()=>this.props.history.go(-1)} ></span>
                    <span style={{fontSize:".5rem",color:"white"}}>手机号注册</span>
                </div>
                <p style={{height:"1.68rem",borderBottom:"1px solid #e6e6e6",width:"9.88rem",marginLeft:".48rem"}}>
                    <input style={{outline:"medium",border:"none",marginTop:".9rem",fontSize:".46rem"}} ref="SignUp" type="text" placeholder="请输入手机号"/>
                </p>
                <p  style={{height:"1.68rem",borderBottom:"1px solid #e6e6e6",width:"9.88rem",marginLeft:".48rem",marginBottom:".94rem"}}>
                    <input style={{outline:"medium",border:"none",marginTop:".9rem",fontSize:".46rem"}} ref="password" type="text" placeholder="设置登陆密码，不少于6位"/>
                </p>
                <p style={{width:"9.84rem",height:"1.23rem",fontSize:".5rem",margin:"0 .46rem",lineHeight:"1.28rem",color:"white",textAlign:"center",borderRadius:".6rem",background:"#d33a31"}} onClick={this.phoneSignUp.bind(this)}>下一步</p>
            </div>
        )
    }
    async phoneSignUp(){
        //console.log(this.refs.SignUp.value,this.refs.password.value)
        const phone = this.refs.SignUp.value;
        const password = this.refs.password.value;
        if((/^1[3456789]\d{9}$/.test(phone) && password.length >= 6)){
               const data = await axios.get(`/cellphone/existence/check?phone=${phone}`);
               if(data.exist === 1){
                   alert("该手机号已经注册，请登陆");
                   this.props.history.push("/phone");
               }else {
                   const data = await axios.get(`/captcha/sent?phone=${phone}`);
                   //console.log(data);
                   if(data.code === 200){
                       this.props.history.push("/NextCode",{
                           phone,
                           password
                       })
                   }
               }
        }else {
            alert("请正确输入手机号和密码")
        }
    }
}
export default SignUp;