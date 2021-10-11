let arr = [44,3,23,86,44,75,55,45,98,67]


function mergeSort(nums) {
    let temp = new Array(nums.length)
    sort(nums, 0, nums.length - 1, temp)
    return nums
}

function sort(nums, start, end, temp) {
    let mid = Math.floor(start + (end - start) / 2)
    //不能取等号，会无限loop
    if (start < end) {
        //如果start == mid，到达最底层，不会再次递归
        sort(nums, start, mid, temp)
        sort(nums, mid + 1, end, temp)
        merge(nums, start, end, temp)
    }
}

function merge(nums, start, end, temp) {
    let mid = Math.floor(start + (end - start) / 2)
    let l = start //nums1 从 start～mid
    let r = mid + 1 //num2从mid+1 ～ end
    let idx = 0
    while (l <= mid && r <= end) {
        if (nums[l] < nums[r]) {
            temp[idx++] = nums[l++]
        } else {
            temp[idx++] = nums[r++]
        }
    }

    //如果其中一个数组到底了，把另一个数组加到后面去
    while (l <= mid) {
        temp[idx++] = nums[l++]
    }
    while (r <= end) {
        temp[idx++] = nums[r++]
    }

    //把temp拷贝给nums,范围是start～end
    idx = 0
    while(start <= end) {
        nums[start++] = temp[idx++]
    }
}

console.log(mergeSort(arr));
