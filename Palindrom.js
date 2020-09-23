function palindromDetecting (str) {
    str=str.toLowerCase();
    let len=parseInt(str.length);
    let currLen=str.length;
    let result=[];

    for (let i=len; i > 1; i--) {
        for (let m=0; m<(len-currLen+1); m++){
            if (str.slice(m, (currLen+m))===(strReverse(str.slice(m, (currLen+m))))){
                result.push(str.slice(m, currLen+m), currLen);
                return console.log('Palindrom detected! The first longest palindrom is '+result[0]+' The lenght of the word: '+result[1]+' letters' )
            }
        }
        currLen--;
    }
        
    console.log('Palindroms are not detected!')
    
}

function strReverse (str) {return str.split('').reverse().join('')};


let string='Dsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sannadjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjhDsfhs;dkjhf;sdjhf;sdjhf;dsjhf;skdhfkjh';

palindromDetecting(string);

