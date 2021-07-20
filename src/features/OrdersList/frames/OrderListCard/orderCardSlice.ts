import { RootState } from "../../../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IOrderCard {
  isOpened: boolean;
  activeOrder: string;
}

const initialState = { isOpened: false } as IOrderCard;

const orderCardSlice = createSlice({
  name: "orderCard",
  initialState,
  reducers: {
    openOrderCard(state) {
      state.isOpened = true;
    },
    closeOrderCard(state) {
      state.isOpened = false;
    },
    selectActiveOrder(state, action: PayloadAction<string>) {
      state.activeOrder = action.payload;
    },
  },
});

export const orderCardSelector = (state: RootState) => state.orderCard;

export const { closeOrderCard, openOrderCard, selectActiveOrder } =
  orderCardSlice.actions;
export default orderCardSlice.reducer;
