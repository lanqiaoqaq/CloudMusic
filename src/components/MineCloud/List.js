//歌单列表页
import React from "react";
import { withRouter, Link } from "react-router-dom";
import pubsub from "pubsub-js"
class List extends React.Component {
    constructor() {
        super();
        this.state = {
            songDetail: []
        }
    }
    render() {
        const { songDetail } = this.state;
        return (
            <div>
                {
                    songDetail.length > 0 ?
                        songDetail.map((v, i) => (
                            <div className={"cy_ml_box"} key={i} onClick={(e) => {
                                e.preventDefault();
                                return this.props.history.push({ pathname: '/musicplaying', state: { id: v.id, song: songDetail } })
                            }}>
                                <p className="cy_ml_num">{i + 1}</p>
                                <div className={"cy_ml_r"}>
                                    <div>
                                        <p>
                                            <span className={"cy_song_width"}>{v.name}</span>
                                            <img onClick={(e) => {
                                                e.stopPropagation();
                                                return this.props.history.push('/mvDetails/' + v.mv);
                                            }} style={{ display: v.mv ? "inline-block" : "none" }} className="cy_ml_mv" src={require("../../assets/mine_img/微信图片_20190917173616.jpg")} />
                                        </p>
                                        <p>
                                            <img className="cy_ml_sq" src={require("../../assets/mine_img/微信图片_201909171736161.jpg")} />
                                            <span className="cy-name-width">{v.ar[0].name} - {v.al.name}</span>
                                        </p>

                                    </div>
                                    <span className={"iconfont icondiandiandian"} ></span>
                                </div>
                            </div>
                        )) : (<></>)


                }

            </div>
        )
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            songDetail: nextProps.songDetail.songs ? nextProps.songDetail.songs : []
        })
    }
}

export default withRouter(List);