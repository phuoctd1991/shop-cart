import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import RootReducer from '../reducer/RootReducer'
export const store = createStore(RootReducer, devToolsEnhancer({}))
export const persist = persistStore(store)
export default store
