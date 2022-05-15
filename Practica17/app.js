const modules = require("./modules");


//Llamado a los modulos

/*console.log(modules.property);
modules.getMessage();*/

var tableData = [
    {a:25, b:32},
    {a:30, b:60}
];

console.log(tableData);
console.table(tableData);

console.group("BLOQUE");
console.log("Primer elemento");
console.log("Segundo elemento");
console.groupEnd("BLOQUE");