import {combineReducers} from 'redux';
import userReducer from './User/userReducer';
import cartReducer from './Cart/cartReducer';
import directoryReducer from './Directory/directoryReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from './Shop/shopReducer';

const persistConfig = {
    key:'root',
    storage:storage,
    whiteList:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
});

export default persistReducer(persistConfig,rootReducer);
