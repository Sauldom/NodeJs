console.log('inicializando calculadora')

module.exports = 
{
    suma:
    function (a,b){
        return a+b;
    },
    resta:
    function(a,b){
        return a-b;
    }
}

exports.suma = function (a,b){
    return a+b;
}