import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    status: 'idle',
    items: [],
    itemInfo: {},
  
  };

  // fetch items 
  export const fetchItems = createAsyncThunk('items/fetchItems', 
    async () => {
    const response = await fetch('http://[::1]:3001/api/v1/items');
    if (response.ok){
      const data = await response.json();
      return data;
    }
     throw new Error('Request failed!');
  });

  // fetch item info
  export const fetchItemInfo = createAsyncThunk('items/fetchItemInfo', 
    async (id) => {
    const response = await fetch(`http://[::1]:3001/api/v1/items/${id}`);
    if (response.ok){
      const data = await response.json();
      return data;
    }
      throw new Error('Request failed!');
  });
  
  export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
      selectedItem: (state, action) => {
        const selectedItem = action.payload;
        return {
          ...state,
          itemInfo: selectedItem,
        };
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchItems.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchItems.fulfilled, (state, action) => ({
          ...state,
          status: 'succeeded',
          items: action.payload,
        }))
        .addCase(fetchItems.rejected, (state, action) => ({
          ...state,
          status: 'failed',
          error: action.error.message,
        }))
        .addCase(fetchItemInfo.fulfilled, (state, action) => ({
          ...state,
          status: 'succeeded',
          itemInfo: action.payload,
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