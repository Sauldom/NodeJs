function suma (a, b){
    return a+b;
}

//en common js se expota una funcion tal que asi, la forma clasica
module.exports =suma;


/*
podriamos tambien

module.exports = {
    suma: function suma (a, b){
    return a+b;
}
}
*/