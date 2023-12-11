import {configureStore} from '@reduxjs/toolkit'
import UISlice from './UISlice'
import cartSlice from './CartSlice';

const store=configureStore({
    reducer: { ui:UISlice.reducer , cart:cartSlice.reducer}
})

export default store;