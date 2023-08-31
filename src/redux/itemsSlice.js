import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: 'idle',
    items: [],
    itemInfo: {},
  
  };

  // fetch items 
  export const fetchItems = createAsyncThunk('items/fetchItems', 
    async () => {
    const response = await fetch('https://wanderpalbackend.onrender.com/api/v1/items');
    if (response.ok){
      const data = await response.json();
      return data;
    }
     throw new Error('Request failed!');
  });

  // fetch item info
  export const fetchItemInfo = createAsyncThunk('items/fetchItemInfo', 
    async (id) => {
    const response = await fetch(`https://wanderpalbackend.onrender.com/api/v1/items/${id}`);
    if (response.ok){
      const data = await response.json();
      return data;
    }
      throw new Error('Request failed!');
  });

  //create item
  export const createItem = createAsyncThunk(
    "reservationCreateItem/createReservationItem",
  
    async ({ user_id, name, image, price, description }) => {
      const payload = {
        user_id,
        name,
        image,
        price,
        description,
      };
  
      const response = await axios.post(
        `https://wanderpalbackend.onrender.com/api/v1/items`,
        payload
      );
      return response.data;
    }
  );

  //delete item 
  export const deleteItem = createAsyncThunk('items/deleteItem', async (itemId) => {
    const response = await axios.delete(`https://wanderpalbackend.onrender.com/api/v1/items/${itemId}`);
  
    if (response.status ) {
      return itemId; 
    }
  
    throw new Error('Delete request failed!');
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
      addItem: (state, action) => {
        const newItem = action.payload;
        state.items.push(newItem);
      },
      deleteItemReducer: (state, action) => {
        const itemId = action.payload;
        state.items = state.items.filter(item => item.id !== itemId);
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
        .addCase(fetchItemInfo.pending, (state) => {
          state.status = 'loading';
        })

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
  
  export const { selectedItem, addItem, deleteItemReducer} = itemsSlice.actions;
  export default itemsSlice.reducer;