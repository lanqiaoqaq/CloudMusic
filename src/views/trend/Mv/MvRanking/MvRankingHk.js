import React from "react"
import {getDate} from "../../../../tools/date";
import MvRankingCom from "../../../../components/Trend/MvRankingCom";
class MvRankingHk extends React.Component{
    render() {
        return(
            <>
                <MvRankingCom {...this.props}></MvRankingCom>
            </>
        )
    }
}
export default MvRankingHk;