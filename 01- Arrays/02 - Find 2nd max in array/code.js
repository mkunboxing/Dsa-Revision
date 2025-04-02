
const findSecMax = function(a){
    let firstmax = Math.max(a[0],a[1]);
    let secMax = Math.min(a[0],a[1]);
    
    for(let i = 2; i < a.length; i++){
        if(a[i]>firstmax){
            if(firstmax>secMax){
                secMax =firstmax
            }
            firstmax= a[i];
        }else if (a[i]>secMax && a[i]<firstmax){
            secMax = a[i];
        }
    }
    return secMax;
}

let a = [4,8,9, 40,40,40];
console.log(findSecMax(a));


