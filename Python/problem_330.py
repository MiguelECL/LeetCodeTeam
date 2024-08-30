class Solution:
    def minPatches(self, nums: List[int], n: int) -> int:
 
        sums = []
        missNumber = 1
        patches = 0
        i = 0
 
        while(missNumber <= n):
            if(i < len(nums) and missNumber >= nums[i]):
                missNumber += nums[i]
                i+=1          
            else:
                sums.append(missNumber)
                missNumber += missNumber
                patches += 1   
 
        return patches