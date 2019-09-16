import find from './find'
import profile from './profile'
import search from './search'
import video from './video'
import village from './village'
import {
    combineReducers
} from 'redux'
export default combineReducers({
    find,
    profile,
    search,
    video,
    village
})