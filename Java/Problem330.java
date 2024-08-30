class Solution {
    public int minPatches(int[] nums, int n) {
        List<Long> Sumas = new ArrayList<Long>();
        long Sum = 1;
        int Patches = 0;
        int i = 0;
        int size = nums.length;

        while(Sum <= n){
            if ((i < size) && (Sum >= nums[i])){
                Sum += nums[i];
                i++;
            }
            else{
                Sumas.add(Sum);
                Sum += Sum;
                Patches++;
            }
        }
        return Patches;
    }
}