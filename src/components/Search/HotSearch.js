import React from 'react'
class HotSearch extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className={"hot"}>
                <h5 >热搜榜</h5>
                <ul>
                    <li onClick={()=>{
                        this.props.history.push("/SearchDetails")
                    }}>
                        <span className={"_red"}>1</span>
                        <span>
                            <p>
                                <i>野狼disco</i>
                                <i>2189902</i>
                                <i className={"red"}>HoT</i>
                            </p>
                            <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                        </span>
                    </li>
                    <li onClick={()=>{
                        this.props.history.push("/SearchDetails")
                    }}>
                        <span className={"_red"}>2</span>
                        <span>
                            <p>
                                <i>野狼disco</i>
                                <i>2189902</i>
                                <i className={"green"}>NEW</i>
                            </p>
                            <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                        </span>
                    </li>
                    <li onClick={()=>{
                        this.props.history.push("/SearchDetails")
                    }}>
                        <span className={"_red"}>3</span>
                        <span>
                            <p>
                                <i>野狼disco</i>
                                <i>2189902</i>
                                <i className={"red"}>HoT</i>
                            </p>
                            <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                        </span>
                    </li>
                    <li onClick={()=>{
                        this.props.history.push("/SearchDetails")
                    }}>
                        <span>4</span>
                        <span>
                            <p>
                                <i>野狼disco</i>
                                <i>2189902</i>
                                <i className={"red"}>HoT</i>
                            </p>
                            <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                        </span>
                    </li>
                    <li onClick={()=>{
                        this.props.history.push("/SearchDetails")
                    }}>
                        <span>5</span>
                        <span>
                            <p>
                                <i>野狼disco</i>
                                <i>2189902</i>
                                <i className={"green"}>NEW</i>
                            </p>
                            <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                        </span>
                    </li>
                    <li onClick={()=>{
                        this.props.history.push("/SearchDetails")
                    }}>
                        <span>6</span>
                        <span>
                            <p>
                                <i>野狼disco</i>
                                <i>2189902</i>
                                <i className={"green"}>NEW</i>
                            </p>
                            <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                        </span>
                    </li>
                    <li onClick={()=>{
                        this.props.history.push("/SearchDetails")
                    }}>
                        <span>7</span>
                        <span>
                            <p>
                                <i>野狼disco</i>
                                <i>2189902</i>
                                <i className={"green"}>NEW</i>
                            </p>
                            <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                        </span>
                    </li>
                    <li onClick={()=>{
                        this.props.history.push("/SearchDetails")
                    }}>
                        <span>8</span>
                        <span>
                            <p>
                                <i>野狼disco</i>
                                <i>2189902</i>
                                <i className={"green"}>NEW</i>
                            </p>
                            <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                        </span>
                    </li>
                    <li onClick={()=>{
                        this.props.history.push("/SearchDetails")
                    }}>
                        <span>9</span>
                        <span>
                            <p>
                                <i>野狼disco</i>
                                <i>2189902</i>
                                <i className={"green"}>NEW</i>
                            </p>
                            <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                        </span>
                    </li>
                    <li onClick={()=>{
                        this.props.history.push("/SearchDetails")
                    }}>
                        <span>10</span>
                        <span>
                            <p>
                                <i>野狼disco</i>
                                <i>2189902</i>
                                <i className={"green"}>NEW</i>
                            </p>
                            <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default HotSearch