import React from 'react';
class Login extends React.Component {
    render() {
        return (
            <div style={{position: "relative", height: "100%"}}>
                <img style={{width: "100%", height: "8rem"}} src={require("../../assets/mine_img/login_02.jpg")}/>
                <p style={{
                    width: "8.8rem",
                    height: "1.28rem",
                    fontSize: ".5rem",
                    margin: "0 1rem",
                    lineHeight: "1.28rem",
                    color: "#b75457",
                    textAlign: "center",
                    border: "1px solid #b75457",
                    borderRadius: ".6rem",
                    marginBottom: ".5rem"
                }} onClick={()=>{
                    this.props.history.push("/phone")
                }}>手机号登录</p>
                <p style={{
                    width: "8.8rem",
                    height: "1.28rem",
                    fontSize: ".5rem",
                    margin: "0 1rem",
                    lineHeight: "1.28rem",
                    color: "#b75457",
                    textAlign: "center",
                    border: "1px solid #b75457",
                    borderRadius: ".6rem"
                }} onClick={() => this.props.history.push("/signup")}>注册</p>
                <img style={{width: "100%", height: "3.9rem", position: "absolute", bottom: 0}}
                     src={require("../../assets/mine_img/loginb_04.jpg")}/>
            </div>
        )
    }
}

export default Login;