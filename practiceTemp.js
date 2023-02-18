function factorial(num) {
    if (typeof num== 'number' && Number.isInteger (num)){
    if (num==1 || num<=0) {
        return 1;
    } else {
       return  num*factorial(num-1);
    }} else  {
        console.log ('Это не целое число');
    }
}

factorial (2.1);