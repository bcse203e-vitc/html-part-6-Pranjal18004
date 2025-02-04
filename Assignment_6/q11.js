let str=prompt("Enter a word");
let ctr=0;
for(i in str){
    if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
        ctr++;
    }
}
console.log(ctr);
