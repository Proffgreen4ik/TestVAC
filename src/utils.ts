export const calcPrice = (prices:number[],saleVal:number) => {
    return prices.reduce((accumulator,el) => accumulator+el) * (saleVal/100)
}

export const calcCount = (counts:number[]) => {
    return counts.reduce((accumulator,el) => accumulator+el)
}

export const calcAmount = (amounts:number[]) => {
    return amounts.reduce((accumulator,el) => accumulator+el)
}