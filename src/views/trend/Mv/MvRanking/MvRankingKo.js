import React from "react"
import MvRankingCom from "../../../../components/Trend/MvRankingCom";
class MvRankingKo extends React.Component{
    render() {
        return(
            <>
                <MvRankingCom {...this.props}></MvRankingCom>
            </>
        )
    }
}
export default MvRankingKo;