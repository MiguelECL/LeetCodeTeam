class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy_1 = buy_2 = float('inf')
        profit_1 = profit_2 = 0

        for price in prices:
            buy_1 = buy_1 if buy_1 < price else price
            profit_1 = profit_1 if profit_1 > price - buy_1 else price - buy_1

            buy_2 = buy_2 if buy_2 < price - profit_1 else price - profit_1
            profit_2 = profit_2 if profit_2 > price - buy_2 else price - buy_2
        
        return profit_2