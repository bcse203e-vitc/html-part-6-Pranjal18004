let a =0;
let b=1;
let c=a+b;
let n=parseInt(prompt("Enter the numbr of terms needed"));
if(n===1){
    console.log(a);
}
else if(n==2){
    console.log(a);
    console.log(b);
}
else if(n==3){
    console.log(a);
    console.log(b);
    console.log(c);
}
else{
    console.log(a);
    console.log(b);
    console.log(c);
    for(i=4;i<=n;i++){
        a=b;
        b=c;
        c=a+b;
        console.log(c);
    }
}
