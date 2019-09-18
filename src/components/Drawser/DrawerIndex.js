import React from 'react'

import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import '../../assets/style/drawer/drawerIndex.css'

import DrawerNav from './DrawerNav'
import DrawerLogin from './DrawerLogin'
const useStyles = makeStyles({
    list: {
        width: "9rem",
        height: "100%"
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer(props) {
    function getProps() {
        return props;
    }
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [side]: open});
    };

    const sideList = (side) => (
        <div
            className={classes.list}
            role="presentation"
            // onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <div className={"drawer_container"}>

                <div className="drawer_content">
                    <DrawerLogin {...getProps()}></DrawerLogin>
                    <div className="membersInfo">
                        <img src={require("../../assets/img/DrawerImg/drawer_03.jpg")} alt=""/>
                    </div>
                    <ul className="personal_info">
                        <li>
                            <i className="iconfont iconxiaoxi"></i><span>我的消息</span>
                        </li>
                        <li>
                            <i className="iconfont iconwodehaoyou"></i><span>我的好友</span>
                        </li>
                        <li>
                            <i className="iconfont icontinggeshiqu"></i><span>听歌识曲</span>
                        </li>
                        <li>
                            <i className="iconfont icongexingzhuangban"></i><span>个性装扮</span>
                        </li>
                    </ul>
                    <ul className="show_tickets">
                        <li>
                            <div>
                                <i className="iconfont iconyanchu"></i>
                                <b>演出</b>
                            </div>
                            <span>花粥巡演</span>
                        </li>
                        <li>
                            <div>
                                <i className="iconfont iconshangcheng"></i>
                                <b>商城</b>
                            </div>
                            <span>9.9元抢耳机</span>
                        </li>
                        <li>
                            <div>
                                <i className="iconfont iconfujinderen"></i>
                                <b>附近的人</b>
                            </div>
                            <span></span>
                        </li>
                        <li>
                            <div>
                                <i className="iconfont iconlingsheng"></i>
                                <b>口袋铃声</b>
                            </div>
                            <span></span>
                        </li>
                        <li>
                            <div>
                                <i className="iconfont iconwodedingdan"></i>
                                <b>我的订单</b>
                            </div>
                            <span></span>
                        </li>
                    </ul>
                    <ul className="show_tickets">
                        <li>
                            <div>
                                <i className="iconfont icondingshitingzhibofang"></i>
                                <b>定时停止播放</b>
                            </div>
                            <span></span>
                        </li>
                        <li>
                            <div>
                                <i className="iconfont iconsaoyisao"></i>
                                <b>扫一扫</b>
                            </div>
                            <span></span>
                        </li>
                        <li>
                            <div>
                                <i className="iconfont iconyinlenaozhong"></i>
                                <b>音乐闹钟</b>
                            </div>
                            <span></span>
                        </li>
                        <li>
                            <div>
                                <i className="iconfont iconzaixiantinggemianliuliang"></i>
                                <b>在线听歌免流量</b>
                            </div>
                            <span></span>
                        </li>
                        <li>
                            <div>
                                <i className="iconfont iconyouxituijian"></i>
                                <b>游戏推荐</b>
                            </div>
                            <span></span>
                        </li>
                        <li>
                            <div>
                                <i className="iconfont iconyouhuiquan"></i>
                                <b>优惠券</b>
                            </div>
                            <span></span>
                        </li>
                        <li>
                            <div>
                                <i className="iconfont icondunpai"></i>
                                <b>青少年模式</b>
                            </div>
                            <span>未开启</span>
                        </li>
                    </ul>
                </div>
                <DrawerNav></DrawerNav>
            </div>
        </div>
    );
    return (

        <span>
            <i className={"iconfont iconsangeheng"} onClick={toggleDrawer('left', true)}></i>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </span>
    );
}