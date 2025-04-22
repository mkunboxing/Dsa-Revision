
 // this is brute force approach   
// var maxArea = function (height) {  
//     let max = 0;
//     const leng = height.length;

//     for (let i = 0; i < leng; i++) {
//         for (let j = i + 1; j < leng; j++) {
//             let min = Math.min(height[i], height[j])
//             // console.log(min)
//             let width = j - i;
//             let sum = min * width
//             // console.log(sum);
//              max = Math.max(sum, max)
//         }
//     }
//     return max
// }

// this is optimized approach
var maxArea = function (height) {
    let max = 0;
    const leng = height.length;
    let i =0;
    let j= leng-1;
    
    while(i<j){
        let min = Math.min(height[i], height[j]);
        let width = j - i;
        let sum = min * width;
        max = Math.max(sum, max)
        if(height[i]<height[j]){
            i++;
        }else{
            j--;
        }
    }
    return max;
};

let height = [1,5,8,1,3,6,1]
console.log(maxArea(height))