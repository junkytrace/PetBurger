import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type FetchBurgerArgs = Record<string, string>;
export const fetchBurger = createAsyncThunk(
  "burger/fetchBurgerStatus",
  async (params: FetchBurgerArgs) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://63a8b915100b7737b98443a7.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

type Burger = {
  id: string;
  title: string;
  price: number;
  image: string;
  types: string[];
  sizes: string[];
};

interface BurgerSliceState {
  items: Burger[];
  status: "loading" | "success" | "error";
}
const initialState: BurgerSliceState = {
  items: [],
  status: "loading",
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBurger.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });

    builder.addCase(fetchBurger.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchBurger.rejected, (state) => {
      state.status = "error";
      state.items = [];
      console.log("backEnd - pzdts");
    });
  },
});

export const { setItems } = burgerSlice.actions;

export default burgerSlice.reducer;
