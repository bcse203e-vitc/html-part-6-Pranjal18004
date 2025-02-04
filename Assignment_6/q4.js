let a = parseInt(prompt("Enter the number"));
let rev=0;
while(a>0){
    let r=a%10;
    rev=rev*10+r;
    a=a/10;
}
console.log(rev);
