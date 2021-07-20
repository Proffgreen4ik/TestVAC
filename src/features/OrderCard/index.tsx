import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { orderCardSelector } from "../OrdersList/OrderListCard/orderCardSlice";
import { OrderCardWrapper } from "./OrderCard.styled";
import { IOrderCardProps } from "./OrderCard.types";
import { closeOrderCard } from "../OrdersList/OrderListCard/orderCardSlice";

const OrderCard = ({ orders }: IOrderCardProps) => {
  const { activeOrder, isOpened } = useAppSelector(orderCardSelector);
  const dispatch = useAppDispatch();

  const closeOrder = () => dispatch(closeOrderCard());

  return (
    <OrderCardWrapper isOpened={isOpened}>
      <h1>
        {orders
          ? JSON.stringify(orders.find(({ id }) => id === activeOrder))
          : "No data"}
      </h1>
    </OrderCardWrapper>
  );
};

export default OrderCard;
