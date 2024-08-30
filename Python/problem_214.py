class Solution:
    def shortestPalindrome(self, s:str) -> str:
        reversed_s = s[::-1]

        for i in range(StringSize):
            Prefix = s[:StringSize - i]
            Suffix = reverses_s[i:]

            if Prefix == Suffix:
                return ReversedString[:i] + s

        return reversed_s + s