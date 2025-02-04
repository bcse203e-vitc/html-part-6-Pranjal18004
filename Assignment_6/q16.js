function bubbleSort(arr, order = "asc") {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if ((order === "asc" && arr[j] > arr[j + 1]) || (order === "desc" && arr[j] < arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4, 2, 9, 1, 5, 6]));     
console.log(bubbleSort([4, 2, 9, 1, 5, 6], "desc")); 
