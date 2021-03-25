import {combineReducers} from 'redux';
import userReducer from './User/userReducer';
import cartReducer from './Cart/cartReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key:'root',
    storage:storage,
    whiteList:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer
});

export default persistReducer(persistConfig,rootReducer);
