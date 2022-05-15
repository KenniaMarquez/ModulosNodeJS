var fs =require("fs");
var stringify = require("csv-stringify");

var data =[
    {"country": "El salvador", "oficial languajes (s)": "Spanish"},
    {"country": "India", "oficial languajes (s)": "Hindi, English"}
];

stringify.stringify(data,{
    header:true
}, function (err, output){
    fs.writeFileSync(__dirname+"/data.csv", output);

});