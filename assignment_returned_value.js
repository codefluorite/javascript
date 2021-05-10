var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processedArg(num) {
    return (num + 3) / 5;
}

processed = processedArg(7);

console.log(processed);