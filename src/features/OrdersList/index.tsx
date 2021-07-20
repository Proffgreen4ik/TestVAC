import { useRef } from "react";

import { FilterIcon } from "../../assets/icons/FilterIcon";
import OrderListCard from "./frames/OrderListCard";
import { calcCount, calcPrice } from "../../utils";
import { useScrollHorizontal } from "../../hooks";
import { useAppSelector } from "../../app/hooks";
import { ordersListSelector } from "./ordersListSlice";
import { IOrdersList } from "./OrdersList.types";
import {
  OrdersCardsWrapper,
  OrdersCardsWrapperInner,
  OrdersListHeader,
  OrdersListHeaderTitle,
  OrdersListWrapper,
} from "./OrdersList.styled";

const OrdersList = ({ orders }: IOrdersList) => {
  const scrollerRef = useRef<HTMLDivElement>(null!);
  const onScrollerWheel = useScrollHorizontal(scrollerRef);
  const { isOpened } = useAppSelector(ordersListSelector);

  return (
    <OrdersListWrapper isOpened={isOpened}>
      <OrdersListHeader>
        <OrdersListHeaderTitle>Список заказов</OrdersListHeaderTitle>
        <FilterIcon />
      </OrdersListHeader>
      <OrdersCardsWrapper ref={scrollerRef} onWheel={onScrollerWheel}>
        <OrdersCardsWrapperInner>
          {orders?.map(({ id, number, date, goods, sale }) => (
            <OrderListCard
              key={id}
              orderId={id}
              number={number}
              date={date}
              price={calcPrice(
                goods.map(({ price, count }) => price * count),
                sale
              )}
              count={calcCount(goods.map(({ count }) => count))}
              amount={goods.length}
            />
          ))}
        </OrdersCardsWrapperInner>
      </OrdersCardsWrapper>
    </OrdersListWrapper>
  );
};

export default OrdersList;
