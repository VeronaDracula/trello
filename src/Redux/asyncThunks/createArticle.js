import { createAsyncThunk } from "@reduxjs/toolkit";
import { postOptions } from "../../conf";
import { blogActions } from "../slice/slice";


export const createArticle = createAsyncThunk(
    'blog/createArticle',
    async( newData, ThunkApi) => {
    try { 
        console.log(newData)

        const url = 'http://localhost:3004/articles';

        const response = await fetch(url, postOptions(JSON.stringify(newData)));

        const data = await response.json();

        // console.log(data)
        ThunkApi.dispatch(blogActions.addCountry(data));

        return data
    }
    catch (e) {
        console.log(e);
        return ThunkApi.rejectWithValue('Произошла непредвиденная ошибка');
    }
    } 
) 

