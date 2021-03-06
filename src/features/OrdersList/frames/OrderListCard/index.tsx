import { useAppDispatch } from "../../../../app/hooks";
import { closeOrdersList } from "../../ordersListSlice";
import { openOrderCard, selectActiveOrder } from "./orderCardSlice";
import { IOrderListCard } from "./OrderListCard.types";
import {
  CardWrapper,
  CardWrapperCounts,
  CardWrapperCountsItem,
  CardWrapperDate,
  CardWrapperHeader,
  CardWrapperHeaderPrice,
  CardWrapperHeaderTitle,
} from "./OrderListCard.styled";

import moment from "moment";

const OrderListCard = ({
  number,
  date,
  price,
  count,
  amount,
  orderId,
}: IOrderListCard) => {
  const dispatch = useAppDispatch();

  const onOrderSelect = () => {
    dispatch(closeOrdersList());
    dispatch(selectActiveOrder(orderId));
    dispatch(openOrderCard());
  };

  return (
    <CardWrapper onClick={onOrderSelect}>
      <CardWrapperHeader>
        <CardWrapperHeaderTitle>Заказ {number}</CardWrapperHeaderTitle>
        <CardWrapperHeaderPrice>{price} Р</CardWrapperHeaderPrice>
      </CardWrapperHeader>
      <CardWrapperDate>
        {moment(date).add(1, "days").calendar({
          sameDay: "[Сегодня] HH:MM",
          nextDay: "[Завтра] HH:MM",
          sameElse: "DD.MM.YYYY",
        })}
      </CardWrapperDate>
      <CardWrapperCounts>
        <CardWrapperCountsItem>товаров {count} шт.</CardWrapperCountsItem>
        <CardWrapperCountsItem>наименований {amount} шт.</CardWrapperCountsItem>
      </CardWrapperCounts>
    </CardWrapper>
  );
};

export default OrderListCard;
