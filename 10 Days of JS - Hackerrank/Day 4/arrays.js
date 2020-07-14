
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let n=nums.length;
    var first=-21545;
    var second=-21545;

    for(var i=0;i<n;i++){
        if (nums[i]>first){
            second=first;
            first=nums[i];
        }
        else if (nums[i]<first && nums[i]>=second){
            second=nums[i];
        }
    }
    return second;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}