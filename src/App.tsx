import "./App.css";
import { useGetOrdersQuery } from "./services/orders";
import OrdersList from "./features/OrdersList";
import { AppWrapper } from "./App.styled";
import { AppBackdrop } from "./App.styled";
import { Burger } from "./components/Burger";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  closeOrdersList,
  openOrdersList,
  ordersListSelector,
} from "./features/OrdersList/ordersListSlice";
import OrderCard from "./features/OrderCard";
import { closeOrderCard } from "./features/OrdersList/frames/OrderListCard/orderCardSlice";

function App() {
  const { data } = useGetOrdersQuery("");
  const { isOpened } = useAppSelector(ordersListSelector);
  const dispatch = useAppDispatch();

  const toggleOrdersList = () => {
    dispatch(closeOrderCard());
    isOpened ? dispatch(closeOrdersList()) : dispatch(openOrdersList());
  };

  return (
    <AppBackdrop>
      <AppWrapper>
        <Burger onClick={toggleOrdersList} />
        <OrdersList orders={data} />
        <OrderCard orders={data} />
      </AppWrapper>
    </AppBackdrop>
  );
}

export default App;
