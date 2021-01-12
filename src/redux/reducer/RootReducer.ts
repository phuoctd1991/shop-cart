import { combineReducers } from 'redux'
import CartReducer from './CartReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
}

const RootReducer = combineReducers({
	cart: CartReducer,
})

export type AppState = ReturnType<typeof RootReducer>
export default persistReducer(persistConfig, RootReducer)
