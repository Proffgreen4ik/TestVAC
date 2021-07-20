import {CardWrapper, CardWrapperCounts, CardWrapperCountsItem, CardWrapperDate, CardWrapperHeader, CardWrapperHeaderPrice, CardWrapperHeaderTitle} from "./OrderListCard.styled";
import { IOrderListCard } from "./OrderListCard.types";
const OrderListCard = ({number,date,price,count,amount}:IOrderListCard) => {
    return (
    <CardWrapper>
        <CardWrapperHeader>
            <CardWrapperHeaderTitle>
            Заказ {number}       
            </CardWrapperHeaderTitle>
            <CardWrapperHeaderPrice>
            {price}  
            </CardWrapperHeaderPrice>
        </CardWrapperHeader>
        <CardWrapperDate>
        {date} 
        </CardWrapperDate>
        <CardWrapperCounts>
            <CardWrapperCountsItem>
                товаров {count}
            </CardWrapperCountsItem>
            <CardWrapperCountsItem>
                наименований {amount}
            </CardWrapperCountsItem>
        </CardWrapperCounts>
    </CardWrapper>
    )
}

export default OrderListCard