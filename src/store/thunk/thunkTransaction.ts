import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITransicrionApi, ITransicrionsApi,} from "../../types.ts";
import axiosApi from "../../axiosApi.ts";

export const fetchAllGetTransactions = createAsyncThunk<ITransicrionsApi, void>('transactions/fetchAllGetTransactions', async () =>{
    const response = await  axiosApi.get<ITransicrionsApi>('transactions.json');
    return response.data;
}
);

export const fetchAddNewTransaction = createAsyncThunk('transactions/fetchAddNewTransaction', async (trans: ITransicrionApi) => {
   const response =  await axiosApi.post('transactions.json', trans);
   const newTrans = {...trans, id: response.data}
    return newTrans
});