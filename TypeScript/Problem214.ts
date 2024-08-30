function shortestPalindrome(s: string): string {
    let reversed = '';
    
    for(let i = s.length-1; i >= 0; i--){
        reversed += s[i];
    }

    for(let i = 0; i < s.length; i++){
        let prefix = s.substring(0, s.length - i);
        let suffix = reversed.substring(i);

        if (prefix == suffix){
            return reversed.substring(0, i) + s;
        }
    }

    return s;
};