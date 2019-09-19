import React from 'react';
import axios from 'axios'
class Phone extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isDialog:false
        }
    }
    render() {
        return (
            <div style={{position: "relative", height: "100%"}} className={"login_container"}>

                <div style={{
                    width: "100%",
                    height: "1.6rem",
                    background: "#d33a31",
                    display: "flex",
                    flexDirection: "row",
                    lineHeight: "1.6rem"
                }}>
                    <span style={{fontSize: ".8rem", color: "white", padding: "0 .44rem", display: "inlineBlock"}}
                          className={" iconfont iconzuojiantou"} onClick={() => this.props.history.go(-1)}></span>
                    <span style={{fontSize: ".5rem", color: "white"}}>手机号登陆</span>
                </div>
                <p style={{
                    height: "1.68rem",
                    borderBottom: "1px solid #e6e6e6",
                    width: "9.88rem",
                    marginLeft: ".48rem"
                }}>
                    <input ref={"phone"} style={{border: "none", marginTop: ".9rem", fontSize: ".46rem"}} ref="phone" type="text"
                           placeholder="请输入手机号"/>
                </p>
                <p style={{
                    height: "1.68rem",
                    borderBottom: "1px solid #e6e6e6",
                    width: "9.88rem",
                    marginLeft: ".48rem",
                    marginBottom: ".94rem"
                }}>
                    <input ref={"password"} style={{border: "none", marginTop: ".9rem", fontSize: ".46rem"}} ref="password" type="password"
                           placeholder="请输入密码"/>
                </p>
                <p style={{
                    width: "9.84rem",
                    height: "1.23rem",
                    fontSize: ".5rem",
                    margin: "0 .46rem",
                    lineHeight: "1.28rem",
                    color: "white",
                    textAlign: "center",
                    borderRadius: ".6rem",
                    background: "#d33a31"
                }} onClick={this.phonelogin.bind(this)}>登录</p>
            </div>
        )
    }
    async phonelogin(){
        const phone = this.refs.phone.value
        const password = this.refs.password.value
        if((/^1[3456789]\d{9}$/.test(phone)) && password.length >= 6){
            try{
                const data = await axios.get(`/login/cellphone?phone=${phone}&password=${password}`);
                if(data.code === 200){
                    //alert("登陆成功")
                    localStorage.userId=data.account.id;
                    this.props.history.push("/")
                }
            }catch(err) {
               alert("账号或密码错误")
            }

        }else {
            alert("请正确输入手机号和密码")
        }
    }
}
export default Phone;