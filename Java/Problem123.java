class Solution {
    public int maxProfit(int[] prices) {
        int Buy1 = 9999999;
        int Sell1 = 0;
        int Buy2 = 9999999;
        int Sell2 = 0;

        for(int i = 0 ; i<prices.length ; i++){
            if (Buy1 < prices[i]){
                Buy1 = Buy1;
            } else {
                Buy1 = prices[i];
            }

            if (Sell1 > prices[i]-Buy1){
                Sell1 = Sell1;
            } else {
                Sell1 = prices[i]-Buy1;
            }

            if (Buy2 < prices[i]-Sell1){
                Buy2 = Buy2;
            }  else {
                Buy2 = prices[i]-Sell1;
            }

            if (Sell2 > prices[i]-Buy2){
                Sell2 = Sell2;
            } else {
                Sell2 = prices[i]-Buy2;
            }

        }
        return Sell2;
    }
}