import React from 'react'
class Live extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:1
        }
    }
    render(){
        return(
            <div>
                {/*<div>*/}
                    {/*<header></header>*/}
                    {/*<section className="ads" >*/}
                        {/*<ul onClick={()=>{*/}
                            {/*console.log(111)*/}
                        {/*}}>*/}
                            {/*<li ref="ada" style={{height:"10rem",fontSize:"1rem"}}>{this.state.a}</li>*/}
                            {/*<li style={{height:"10rem",fontSize:"1rem"}}>2</li>*/}
                            {/*<li style={{height:"10rem",fontSize:"1rem"}}>3</li>*/}
                            {/*<li style={{height:"10rem",fontSize:"1rem"}}>4</li>*/}
                            {/*<li style={{height:"10rem",fontSize:"1rem"}}>5</li>*/}
                        {/*</ul>*/}
                    {/*</section>*/}
                    {/*<footer></footer>*/}
                {/*</div>*/}
            </div>
        )
    }
    componentWillMount(){
        alert("该功能暂未开放！")
        this.props.history.push("/")
    }
    // componentDidMount(){
    //     let scroll = new BScroll('.wrapper_s',{
    //         scrollY: true,
    //         click:true,
    //         probeType: 3,
    //         pullDownRefresh: {
    //             //下拉到一百的位置才会触发
    //             threshold: 100,
    //             //然后松手后返回50的位置
    //             stop: 0,
    //         },
    //         pullUpLoad:{
    //             threshold: 0,
    //             stop:0
    //         }
    //     })
    //     scroll.on('pullingDown', this.pullingDownHandler.bind(scroll))
    //     scroll.on('pullingUp', this.pullingUpHandler.bind(scroll))
    //     //scroll.on('scroll', this.scrollHandler)
    // }
    // pullingDownHandler(){
    //     console.log(2222);
    //     this.finishPullDown()
    // }
    // pullingUpHandler(){
    //     console.log(3333);
    //     this.finishPullUp()
    // }
}
export default Live