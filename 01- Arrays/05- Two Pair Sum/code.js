

const TwoSum = function(arr , target){
    let res = []; // this is O(N^2) solution 
    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === target){
                res.push(i);
                res.push(j);
                // break;
            }
        }
    }
    console.log(res[0],res[1]);

    // this is optimized solution O(N) with two pointer check Question.md file
    // let i = 0, j = arr.length - 1;
    // while (i < j){
    //     let sum = arr[i] + arr[j];
    //     if (sum === target) {
    //         console.log(i , j);
    //         return;
    //     } else if (sum < target) {
    //         i++;
    //     } else {
    //         j--;
    //     }
    // }
}


let a = [1,2,2,4,5,7,10]
let b = 12;
TwoSum(a,b);

