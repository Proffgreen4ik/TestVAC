import { FilterIcon } from "../../assets/icons/FilterIcon";
import { OrdersListHeader, OrdersListHeaderTitle, OrdersListWrapper } from "./OrdersList.styled";
import OrderListCard from "./OrderListCard";
import { useGetOrdersQuery } from "../../services/orders";
import { calcAmount, calcCount, calcPrice } from "../../utils";
const OrdersList = () => {
    const {data, error, isLoading} = useGetOrdersQuery("")
    return <OrdersListWrapper>
        <OrdersListHeader>
            <OrdersListHeaderTitle>
                Список заказов
            </OrdersListHeaderTitle>
            <FilterIcon/>
        </OrdersListHeader>
        {data?.map(({goods}) => calcCount(goods.map(({count})=>count)))}

        {data?.map(({id,number,date,goods,sale}) =>
        <OrderListCard key={id} number={number} date={date} price={calcPrice(goods.map(({price})=>price),sale)} 
        count={calcCount(goods.map(({count})=>count))} 
        amount={calcAmount(goods.map(({goods})=>goods))}/>
        )};
    

    </OrdersListWrapper>;
}

export default OrdersList