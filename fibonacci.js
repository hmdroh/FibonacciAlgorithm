//Fibonacci Algorithm [0,1,1,2,3,5,8....]
//Coded by Sayed Hamed Rohani


function fibo(n){
    if (n<2){
        return n;
    }
    else {
        return fibo(n-1) + fibo(n-2);
    }
}

console.log(fibo(10)) // should display 55