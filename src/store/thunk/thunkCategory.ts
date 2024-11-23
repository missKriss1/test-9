import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {CategoryApi, ICategory, ICatigoriesApi} from "../../types.ts";

export const fetchCategoriesAll = createAsyncThunk<ICategory[], undefined>('categories/fetchCategoriesAll', async () =>{
    const {data: categories} = await axiosApi<ICatigoriesApi| null>('/categories.json');
    let CategoriesNew: ICategory[]=[];
    if(categories){
        CategoriesNew = Object.keys(categories).map((key: string) =>{
            const category = categories[key];
            return{
                id: key,
                ...category
            };
        });
    }
    return CategoriesNew;
});

export const fetchAddCategory = createAsyncThunk<void, CategoryApi>('categories/fetchAddCategory', async (category) =>{
    await axiosApi.post('/categories.json', category);
});

export const fetchGetCategoryType = createAsyncThunk<CategoryApi, string>('categories/fetchGetCategoryType', async (type: string) =>{
    const {data:response} = await axiosApi(`/categories${type}.json`);
    return response;
})