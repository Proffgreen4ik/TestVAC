import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Orders = {
    id: string,
    number: number,
    sale: number,
    date: Date,
    goods: {
        id: string,
        name: string,
        price: number,
        count: number,
    }[]
}[]



export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://u38027.netangels.ru/api/orders.php' }),
    endpoints: (builder) => ({
        getOrders: builder.query<Orders, string>({
            query: () => ``,
        }),
    }),
})

export const {useGetOrdersQuery} = ordersApi