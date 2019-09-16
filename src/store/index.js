import rootReducer from './reducer'
import {
    createStore,
    applyMiddleware
} from 'redux'   //创建仓库，允许中间件
import thunk from 'redux-thunk' //引入中间件 thunk
export default createStore(rootReducer,applyMiddleware(thunk))
