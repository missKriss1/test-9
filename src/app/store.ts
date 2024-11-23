import {configureStore} from "@reduxjs/toolkit";
import {categoriesReduser} from "../store/slice/CategorySlice.ts";
import {transactionReducer} from "../store/slice/TransactionSlice.ts";

export const store = configureStore({
    reducer: {
        categories: categoriesReduser,
        transactions: transactionReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;