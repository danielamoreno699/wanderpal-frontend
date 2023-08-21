import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    status: 'idle',
    item: [],
    stockInfo: {},
  
  };
  
  export const stockSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
      selectItem: (state, action) => {
        const selectedItem = action.payload;
        return {
          ...state,
          stockInfo: selectedItem,
        };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchItem.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchItem.fulfilled, (state, action) => ({
          ...state,
          status: 'succeeded',
          data: action.payload,
        }))
        .addCase(fetchItem.rejected, (state, action) => ({
          ...state,
          status: 'failed',
          error: action.error.message,
        }))
        .addCase(fetchItemInfo.fulfilled, (state, action) => ({
          ...state,
          status: 'succeeded',
          stockInfo: action.payload,
        }))
        .addCase(fetchItemInfo.rejected, (state, action) => ({
  
          ...state,
          status: 'failed',
          error: action.error.message,
        }));
    },
  });
  
  export const { selectedItem} = itemsSlice.actions;
  export default itemsSlice.reducer;