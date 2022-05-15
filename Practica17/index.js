var fs = require("fs");
var parse = require("csv-parse/sync");

/*var parser = parse({columns:true}, function(records){
    console.log(records);
});

fs.createReadStream(__dirname+'listado.csv'.pipe(parser));*/

(async function(){

    const filecontent = await fs.readFile(__dirname+'/listado.csv');
    const records =parse(filecontent, {columns:true});
    console.log(records);
})();
