// Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
// al posto dei multipli di 3, deve stampare "Fizz"
// al posto dei multipli di 5, deve stampare "Buzz"
// al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"

var multiplo_3 = "Fizz";
var multiplo_5 = "Buzz";
var multiplo_3_e_5 = "FizzBuzz";

for (var i = 1; i <= 100; i++) {
    if ( (i % 5 == 0) && (i % 3 == 0) ){
        console.log(multiplo_3_e_5);
    }else if (i % 3 == 0){
        console.log(multiplo_3);
    } else if (i % 5 == 0){
        console.log(multiplo_5);
    } else{
        console.log(i);
    }
}
