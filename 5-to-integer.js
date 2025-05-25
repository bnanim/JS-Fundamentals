const args = process.argv.slice(2);

const num = Number(args[0]);

isNaN(num) ? console.log("Not a number") : console.log("My number: " + num);
