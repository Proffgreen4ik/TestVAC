import styled from "styled-components";
import { IOrderCardStyledProps } from "./OrderCard.types";

export const OrderCardWrapper = styled.div<IOrderCardStyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px 16px 0px 0px;
  padding-top: 20px;
  padding-left: 16px;
  padding-right: 23px;
  position: absolute;
  transition: all 0.3s;
  transform: translateY(${({ isOpened }) => (isOpened ? 0 : "100vh")});
  height: 80vh;
  overflow: hidden auto;
`;

export const OrderCardWrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 31px;
`


export const OrderCardWrapperHeaderCol = styled.div`
  display: flex;
  justify-content: space-between;
`

export const OrderCardWrapperHeaderDate = styled.p`
  color: #5364FF;
  margin-left:31px;
`

export const OrderCardWrapperHeaderProduct = styled.h2`
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #000000;
`

export const OrderCardWrapperHeaderProductName = styled.p`
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.408px;
  color: #888E99;
  margin-bottom: 23px;
  margin-top: 4px;
`

export const OrderCardWrapperItem = styled.div`
  background: #ECEDEF;
  border-radius: 8px;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
  align-items: center;
`

export const OrderCardWrapperItemCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


export const OrderCardWrapperItemName = styled.h3`
  color: #000;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`


export const OrderCardWrapperItemCount = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #888E99;
`

export const OrderCardWrapperItemPrice = styled.p`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.1px;
  color: #5364FF;
  font-weight: bold;
`


export const OrderCardWrapperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

export const OrderCardWrapperFooterTopText = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.408px;
  color: #888E99;
  margin: 30px 0px;
`

export const OrderCardWrapperFooterBtn = styled.button`
  background: #5364FF;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.408px;
  text-transform: uppercase;
  padding: 16px 96px 15px 96px;
  border-radius: 8px;
  border: none;
`

export const OrderCardWrapperFooterBotText = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.408px;
  color: #999999;
  margin-top: 31px;
  margin-bottom: 50px;
`