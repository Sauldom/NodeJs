const basicAuth = require('basic-auth');


module.exports = (req,res,next)=>{
    const user = basicAuth(req);
    if(!user || user.name!=='admin' ||user.pass !=='1234'){
        //no esta autorizado al pasar al codigo siguiente
        res.set('WWW-Authenticate', 'Basic realm =Authorization required');
        res.sendStatus(401);
        return;
    }next();
}