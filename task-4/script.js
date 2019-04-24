function getFriendlyNumbers(start, end) {
    if (typeof(start) != 'number' || typeof(end) != 'number' || start<0 || end<0 || start>end || parseInt(start) != start || parseInt(end) != end) {
        return false;
    }
    let res = {};
    let newRes = [];
    for(let j=start; j<=end; j++){
        res[j] = getDivisorsSum(j);
        for (let key in res){
            if (res[key]==j && key==res[j] && res[key] !=key){
                newRes.push([+key,j]);
            
            }
        }
    }
    console.log(newRes);
}
// getFriendlyNumbers(1, 1000);

function getDivisors(num) {
    let arr = [];
    for (let i=1; i<num; i++) {
        if (num % i ==0) {
            arr.push(i);
        }
    }

    return arr;
}

function getSum(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum+=arr[i];
    }

    return sum;
}

function getDivisorsSum(num) {
    return getSum(getDivisors(num));
}
