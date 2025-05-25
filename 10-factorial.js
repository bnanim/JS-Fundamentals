const args = process.argv.slice(2);

let num  = Number(args[0]);

factorial(num);


function factorial(a){
    let result = 1;
    for (let i = a; i >= 1; i--){
        result = result * i;
    }
    console.log(result);
}