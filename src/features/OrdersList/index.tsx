import { FilterIcon } from "../../assets/icons/FilterIcon";
import {
  OrdersCardsWrapper,
  OrdersCardsWrapperInner,
  OrdersListHeader,
  OrdersListHeaderTitle,
  OrdersListWrapper,
} from "./OrdersList.styled";
import OrderListCard from "./OrderListCard";
import { useGetOrdersQuery } from "../../services/orders";
import { calcCount, calcPrice } from "../../utils";
import { useScrollHorizontal } from "../../hooks";
import { useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import { ordersListSelector } from "./ordersListSlice";

const OrdersList = () => {
  const { data, error, isLoading } = useGetOrdersQuery("");
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
          {data?.map(({ id, number, date, goods, sale }) => (
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
