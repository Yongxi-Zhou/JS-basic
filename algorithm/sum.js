let arr = [4,5,34,23,1,86,54]

function sumMax(arr) {
    let max = 0
    let submax = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >max>submax) {
            max = arr[i]
            submax = max
        } else if(max > arr[i] > submax) {
            submax = arr[i]
        }
    }
    return max
}

let res = sumMax(arr)
console.log(res);