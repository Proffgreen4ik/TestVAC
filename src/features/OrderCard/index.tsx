import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { orderCardSelector } from "../OrdersList/frames/OrderListCard/orderCardSlice";
import { IOrderCardProps } from "./OrderCard.types";
import { closeOrderCard } from "../OrdersList/frames/OrderListCard/orderCardSlice";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { calcPrice } from "../../utils";
import {
  OrderCardWrapper,
  OrderCardWrapperFooter,
  OrderCardWrapperFooterBotText,
  OrderCardWrapperFooterBtn,
  OrderCardWrapperFooterTopText,
  OrderCardWrapperHeader,
  OrderCardWrapperHeaderCol,
  OrderCardWrapperHeaderDate,
  OrderCardWrapperHeaderProduct,
  OrderCardWrapperHeaderProductName,
  OrderCardWrapperItem,
  OrderCardWrapperItemCol,
  OrderCardWrapperItemCount,
  OrderCardWrapperItemName,
  OrderCardWrapperItemPrice,
} from "./OrderCard.styled";

import moment from "moment";

const OrderCard = ({ orders }: IOrderCardProps) => {
  const { activeOrder, isOpened } = useAppSelector(orderCardSelector);
  const dispatch = useAppDispatch();

  const closeOrder = () => dispatch(closeOrderCard());

  const currentOrder = orders?.find(({ id }) => id === activeOrder);

  return (
    <OrderCardWrapper isOpened={isOpened}>
      <OrderCardWrapperHeader>
        <OrderCardWrapperHeaderCol>
          <h1>Заказ №{currentOrder?.number}</h1>
          <CloseIcon onClick={closeOrder} />
        </OrderCardWrapperHeaderCol>

        <OrderCardWrapperHeaderDate>
          {moment(currentOrder?.date || new Date())
            .add(1, "days")
            .calendar({
              sameDay: "[Сегодня] HH:MM",
              nextDay: "[Завтра] HH:MM",
              sameElse: "DD.MM.YYYY",
            })}
        </OrderCardWrapperHeaderDate>
      </OrderCardWrapperHeader>
      <OrderCardWrapperHeaderProduct>Товар</OrderCardWrapperHeaderProduct>
      <OrderCardWrapperHeaderProductName>
        Название наименование товара
      </OrderCardWrapperHeaderProductName>
      {currentOrder?.goods.map(({ name, count, price }) => (
        <OrderCardWrapperItem>
          <OrderCardWrapperItemCol>
            <OrderCardWrapperItemName>{name}</OrderCardWrapperItemName>
            <OrderCardWrapperItemCount>
              Количество {count} шт
            </OrderCardWrapperItemCount>
          </OrderCardWrapperItemCol>
          <OrderCardWrapperItemCol>
            <OrderCardWrapperItemPrice>
              {Math.floor(price)} Р
            </OrderCardWrapperItemPrice>
          </OrderCardWrapperItemCol>
        </OrderCardWrapperItem>
      ))}
      <OrderCardWrapperFooter>
        <OrderCardWrapperFooterTopText>
          Скидка по заказу составила {currentOrder?.sale}%
        </OrderCardWrapperFooterTopText>
        <OrderCardWrapperFooterBtn onClick={closeOrder}>
          Итого : {""}
          {calcPrice(
            currentOrder?.goods.map(({ price, count }) => price * count) || [0],
            currentOrder?.sale || 0
          )}{" "}
          Р
        </OrderCardWrapperFooterBtn>
        <OrderCardWrapperFooterBotText>
          Дата выдачи заказа 10 дней с момента оплаты
        </OrderCardWrapperFooterBotText>
      </OrderCardWrapperFooter>
    </OrderCardWrapper>
  );
};

export default OrderCard;
