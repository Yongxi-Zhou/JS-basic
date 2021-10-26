let arr = [44,3,23,86,44,75,55,45,98,67]

function insertSort(arr) {
    let len = arr.length

    for (let i = 1; i < len; i++) {
        let insertVal = arr[i]
        // j represent the last index of the first sorted array
        let j = i - 1
        while (j >= 0 && arr[j] > insertVal) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = insertVal
    }
    return arr
}

console.log(JSON.stringify(insertSort(arr)));