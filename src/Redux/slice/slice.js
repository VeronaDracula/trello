import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    tasks: [
        {
            id: 1,
            text: '123',
            status: 'start'
        },
        {
            id: 2,
            text: 'sdf',
            status: 'start'
        },
        {
            id: 3,
            text: 'fgh',
            status: 'stop'
        }
    ]
};

export const blogSlice = createSlice({ 
    name: 'blog',
    initialState,
    reducers: {
        setInfo: (state, action) => {
            state.info = action.payload;
        },


        editInfo: (state, action) => {
            if(action.payload.type === 'removeDataClose') {
                state.info = initialState.info;
                // localStorage.removeItem('testTaskData'); 
            }
            else {
                state.info[action.payload.type] = action.payload.value;
                // localStorage.setItem('testTaskData', JSON.stringify(state?.testData));
            }
        },
    }, 
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(getCompanyInfo.pending, (state) => {
    //       state.isLoading = true;
    //     })
    //     .addCase(getCompanyInfo.fulfilled, (state) => {
    //       state.isLoading = false;
    //     })
    //     .addCase(getCompanyInfo.rejected, (state) => {
    //       state.isLoading = false;
    //     })
    // }
})

export const { actions: blogActions } = blogSlice;
export const { reducer: blogReducer } = blogSlice;
