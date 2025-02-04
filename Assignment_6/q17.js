function decimalToBinary(num) {
    let binary = "";
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary || "0";
}

function binaryToDecimal(binary) {
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
        decimal = decimal * 2 + (binary[i] === "1" ? 1 : 0);
    }
    return decimal;
}

console.log(decimalToBinary(10));  
console.log(binaryToDecimal("1010"));
