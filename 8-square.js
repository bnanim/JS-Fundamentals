const args = process.argv.slice(2);

size = Number(args[0]);

if (isNaN(size)) {
    console.log("Missing size");
}
else
    for (let i = 0; i < size; i++){
        let square = "";
        for (let j = 0; j < size; j++) {
            square += "X";
        }
        console.log(square);
}