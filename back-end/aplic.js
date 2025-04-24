

console.time("começo");

process.stdin.setEncoding('utf8');

process.stdin.on("readable", () => {
    let nome = process.stdin.read(); //ler teclado

    if(nome !== null) {
        process.stdout.write("Ola " + nome);  //dizer oque digitou
    }
});

console.timeEnd("começo");

