const args = process.argv.slice(2);

arg1 = Number(args[0]);
arg2 = Number(args[1]);

const result = add(arg1, arg2);
console.log(result);

function add(a, b){
    return a + b
}