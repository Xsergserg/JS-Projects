function palindromDetecting (str) {
    str=str.toLowerCase();
    let revStr=str.split('').reverse().join('');
    let strLen=str.length;
    for (let currLen=strLen; currLen > 1; currLen--) {
        for (let m=0; m<(strLen-currLen+1); m++){
            if (str.slice(m, (currLen+m))===revStr.slice((strLen-m-currLen), (strLen-m))){
                return console.log('Palindrom detected! The first longest palindrom is '+str.slice(m, currLen+m)+' The lenght of the word: '+currLen+' letters' );
            }
        }
    } 
    console.log('Palindroms are not detected!');
}
palindromDetecting('Dsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sannadjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjh');