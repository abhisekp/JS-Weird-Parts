var objLiteral = {
    name: 'Abhisek',
    isProgrammer: true
};

var jsonObj = JSON.stringify(objLiteral);
console.log(jsonObj);

var jsObj = JSON.parse(jsonObj);
console.log(jsObj);
