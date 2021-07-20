import styled from "styled-components";
import { IOrderCardStyledProps } from "./OrderCard.types";

export const OrderCardWrapper = styled.div<IOrderCardStyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  background: #ecedef;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px 16px 0px 0px;
  padding-top: 20px;
  padding-left: 16px;
  position: absolute;
  transition: all 0.3s;
  transform: translateY(${({ isOpened }) => (isOpened ? 0 : "251px")});
`;
