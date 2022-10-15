/*const fibonacci = function(n) {
    const fib = [0,1];
    for (i = 2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }return fib.reduce((total,num)=>(total+=num));
};
*/
const fibonacci = function(n){
    if (n<=0) return "OOPS";
    let fib0 = 0;
    let fib1 = 1;
    for (i=1;i<n;i++){
        const temp = fib1; // temp = 1     1     1
        fib1 = fib0+fib1   // fib1 = 0+1   1+1   1+2
        fib0 = temp;       // fib0 = 1     1
    }
    return fib1;          
}
// Do not edit below this line
module.exports = fibonacci;
