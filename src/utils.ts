export const calcPrice = (prices: number[], saleValue: number) => {
  const totalPrice = prices.reduce((accumulator, el) => accumulator + el);
  return Number((totalPrice - totalPrice * (saleValue / 100)).toFixed(0));
};

export const calcCount = (counts: number[]) =>
  counts.reduce((accumulator, el) => accumulator + el);
