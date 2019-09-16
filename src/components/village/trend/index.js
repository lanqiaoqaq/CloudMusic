import React from "react";
export default class Trend extends React.Component{
    render() {
        return(
            <div>
                <input type="button" onClick={()=>{
                    this.props.history.push("/")
                }}/>
            </div>
        )
    }
}
