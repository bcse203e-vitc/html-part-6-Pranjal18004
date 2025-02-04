function findSecondSmallestLargest(arr) {
    if (arr.length < 2) return "Array must have at least two elements";

    let uniqueArr = [...new Set(arr)]; 
    uniqueArr.sort((a, b) => a - b); 

    return {
        secondSmallest: uniqueArr[1],
        secondLargest: uniqueArr[uniqueArr.length - 2]
    };
}


let result = findSecondSmallestLargest([4, 2, 9, 1, 5, 6]);
console.log("Second Smallest:", result.secondSmallest); 
console.log("Second Largest:", result.secondLargest);  
