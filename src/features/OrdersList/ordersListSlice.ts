import { RootState } from "./../../app/store";
import { createSlice } from "@reduxjs/toolkit";

export interface IOrdersListState {
  isOpened: boolean;
}

const initialState = { isOpened: false } as IOrdersListState;

const ordersListSlice = createSlice({
  name: "ordersList",
  initialState,
  reducers: {
    openOrdersList(state) {
      state.isOpened = true;
    },
    closeOrdersList(state) {
      state.isOpened = false;
    },
  },
});

export const ordersListSelector = (state: RootState) => state.ordersList;

export const { openOrdersList, closeOrdersList } = ordersListSlice.actions;
export default ordersListSlice.reducer;
