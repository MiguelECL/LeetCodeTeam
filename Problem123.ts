function maxProfit(prices: number[]): number {
    let buy_1 : number = 9999999;
    let buy_2 : number = 9999999;
    let profit_1 : number = 0;
    let profit_2 : number = 0;

    prices.forEach((price) => {
        buy_1 = buy_1 < price ? buy_1 : price;
        profit_1 = profit_1 > price - buy_1 ? profit_1 : price - buy_1;

        buy_2 = buy_2 < price - profit_1 ? buy_2 : price - profit_1;
        profit_2 = profit_2 > price - buy_2 ? profit_2 : price - buy_2;
    });

    return profit_2;
};
