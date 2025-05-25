const args = process.argv.slice(2);

args[0] === undefined? console.log("No argument") : console.log(args[0]);