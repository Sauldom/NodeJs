var express = require('express');
var router = express.Router();
const  utils = require('../lib/utils.js')
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
//si quiesieramos manejar errores con async await

router.get('/', async function (req, res,err){
  try{
    await utils.sleep(5000);
    //JSON.parse('a');
    res.send ('respond with a resource');
  }catch (error){
    next(error);
  }
});



module.exports = router;
