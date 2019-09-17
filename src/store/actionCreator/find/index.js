import axios from 'axios'
import actionType from '../../actionType/find'
export const ChangeBanners =function (payload) {
    return{
        type:actionType.CHANGE_BANNERS,
        payload
    }
}
export default {
    getBannerPic() {
        return async (dispatch) => {
            const data = await axios.get("/banner?type=1");
            //console.log(data.banners)
            dispatch(ChangeBanners(data.banners))
        }
    }
}