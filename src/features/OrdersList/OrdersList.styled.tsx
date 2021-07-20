import styled from "styled-components";

export const OrdersListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 251px;
    background: #ECEDEF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 16px 16px 0px 0px;
    padding-top: 20px;
    padding-left: 16px;
`

export const OrdersListHeader = styled.div`
    display: flex;
    margin-bottom: 21px;
    width: 100%;
    justify-content: space-between;
    padding-right: 20px;
    align-items: center;
`

export const OrdersListHeaderTitle= styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #000;
`