
// Write a function getMaxLessThanK which takes n and k as arguments and returns the max of bitwise & of sequence of n numbers such taht max value is less than k

function getMaxLessThanK(n,k){
    var max=0;
    var current=0;

    for(var i=0;i<n;i++){
        for(var j=i+1;j<=n;j++){
            current=i&j;
            if (current<k && current>max){
                max=current;
            }
        }
    }
    return max;
}



function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}