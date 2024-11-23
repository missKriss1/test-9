import {ICategory} from "../../types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {fetchCategoriesAll} from "../thunk/thunkCategory.ts";

interface CategoryState {
    categories: ICategory[];
    loading: boolean;
    error: boolean
}

const initialState: CategoryState = {
    categories: [],
    loading: false,
    error: false,
};

export const carigoriesSelector = (state: RootState) => state.categories.categories;

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
            .addCase(fetchCategoriesAll.pending,(state: CategoryState) =>{
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchCategoriesAll.fulfilled,(state: CategoryState, action) =>{
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategoriesAll.rejected,(state: CategoryState) =>{
                state.loading = false;
                state.error = true;
            })
    }
});

export const categoriesReduser = categorySlice.reducer;
export  const {} = categorySlice.actions;

