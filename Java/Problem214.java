class Solution {
    public String shortestPalindrome(String s) {
        int StringSize = s.length();
        String ReversedString = "";

        // Reverse the String
        for (int i = 0; i<StringSize ; i++){
            ReversedString = s.charAt(i) + ReversedString;
        }
        //System.out.println(ReversedString);
        // Works

        for (int i = 0 ; i<StringSize ; i++){
            String Prefix = s.substring(0,StringSize - i);
            String Suffix = ReversedString.substring(i);

            if (Prefix.equals(Suffix)){
                System.out.println("here");
                return ReversedString.substring(0,i) + s;
            }
        }
        return s;
    }
}