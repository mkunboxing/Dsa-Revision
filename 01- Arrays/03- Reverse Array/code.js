let a = [4,8,9, 40,5,40];

const Reverse = (a)=>{
    let i = 0;
    let j = a.length-1;

    while(i < j){
        let temp = a[i]; // this is reversing technique 
        a[i]=a[j];
        a[j]=temp;
        i++;
        j--;
    }
    return a;
}

console.log(Reverse(a));
