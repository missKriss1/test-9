import {ITransaction} from "../../types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchAddNewTransaction} from "../thunk/thunkTransaction.ts";

interface TransactionState {
    transacrions : ITransaction[];
    total: number;
    loading: boolean;
    error: boolean;
}

const initialState: TransactionState = {
    transacrions: [],
    total: 0,
    loading: false,
    error: false,
};

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddNewTransaction.pending, (state: TransactionState) =>{
                state.loading = true;
                state.error =false;
            })
            .addCase(fetchAddNewTransaction.fulfilled, (state: TransactionState) =>{
                state.loading = false;
            })
            .addCase(fetchAddNewTransaction.rejected, (state: TransactionState) =>{
               state.error = true;
            });
    }
});

export const transactionReducer = transactionSlice.reducer;

export const {} = transactionSlice.actions;