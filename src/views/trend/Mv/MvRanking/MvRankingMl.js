import React from "react"
import MvRankingCom from "../../../../components/Trend/MvRankingCom";
class MvRankingMl extends React.Component{
    render() {
        return(
            <>
                <MvRankingCom {...this.props}></MvRankingCom>
            </>
        )
    }
}
export default MvRankingMl;