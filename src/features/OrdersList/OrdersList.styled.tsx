import styled from "styled-components";
import { IOrdersListState } from "./ordersListSlice";

export const OrdersListWrapper = styled.div<IOrdersListState>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 251px;
  background: #ecedef;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px 16px 0px 0px;
  padding-top: 20px;
  padding-left: 16px;
  position: absolute;
  transition: all 0.3s;
  transform: translateY(${({ isOpened }) => (isOpened ? 0 : "251px")});
`;

export const OrdersListHeader = styled.div`
  display: flex;
  margin-bottom: 21px;
  width: 100%;
  justify-content: space-between;
  padding-right: 20px;
  align-items: center;
`;

export const OrdersListHeaderTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #000;
`;

export const OrdersCardsWrapper = styled.div`
  width: 100%;
  overflow: auto hidden;
  overscroll-behavior: contain;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export const OrdersCardsWrapperInner = styled.div`
  display: flex;
  width: max-content;
  justify-content: flex-start;
  align-items: center;
  overflow: auto hidden;
`;
