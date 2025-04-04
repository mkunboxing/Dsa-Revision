let arr = [0, 1, 1, 1, 1, 1];

const moveZerosToLeft = (a)=>{
    for (let i = 0, j = 0; i < a.length; i++) {
        if(a[i]===0){
            let temp = a[i];
            a[i]=a[j];
            a[j]= temp;
            j++;
        }
    }
    return a;
}

console.log(moveZerosToLeft(arr));


