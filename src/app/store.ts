import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import orderCardSlice from "../features/OrdersList/OrderListCard/orderCardSlice";
import ordersListSlice from "../features/OrdersList/ordersListSlice";
import { ordersApi } from "../services/orders";

export const store = configureStore({
  reducer: {
    [ordersApi.reducerPath]: ordersApi.reducer,
    ordersList: ordersListSlice,
    orderCard: orderCardSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ordersApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
