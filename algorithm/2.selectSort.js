let arr = [44,3,23,86,44,75,55,45,98,67]

function selectSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let minIdx = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIdx]) {
                minIdx = j
            }
        }
        let temp = nums[i]
        nums[i] = nums[minIdx]
        nums[minIdx] = temp
    }
    return nums
}

console.log(selectSort(arr));