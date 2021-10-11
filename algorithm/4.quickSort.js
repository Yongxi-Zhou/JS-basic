let arr = [44,3,23,86,44,75,55,45,98,67]

function quickSort(nums, start, end) {
    let low = start
    let high = end
    let temp = nums[low]
    while (low < high) {
        //当与temp相等时，也一起跳过，只让low high最终指向比他大或者小的值
        while (low < high && nums[high] >= temp) {
            high--;
        }
        //现在high指向的数比temp小，让这个小数移到左边去
        nums[low] = nums[high]

        while(low < high && nums[low] <= temp) {
            low++;
        }
        //现在low指向的数比temp大，移到右面high那里去
        nums[high] = nums[low]

    }
    //此时low == high && nums[low]空了,要用temp补回来
    nums[low] = temp

    if (start < low - 1) {
        quickSort(nums, start, low - 1)
    }
    if (low + 1 < end) {
        quickSort(nums, low + 1, end)
    }
    return nums
}

let res = quickSort(arr, 0, arr.length - 1)
console.log(res);