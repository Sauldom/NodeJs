var express = require('express');
var router = express.Router();

const Agente = require('../../models/Agente');

//GET /api/agentes
//devuelve una lista de agentes
router.get('/', async function (req, res,err){
  try{
    const agentes = await Agente.find();
    res.json({results:agentes});
  }catch (error){
    next(error);
  }
});

//GET /api/agentes/<_id>
//api rest 
//devuelve un agente
router.get('/:id', async(req,res,next)=>{
    try {
        const id = req.params.id;

        const agente = await Agente.findById();

        res.json({result:agente});
    } catch (error) {
        next(error);
    }
})

// PUT /api/agentes
//actualiza un agente

router.put('/:id', async (req,res,next)=>{
    try {
        const id = req.params.id;
        const data = req.body;

        const agenteActualizado = await Agente.findByIdAndUpdate(id, data,{new:true});

        res.json({result:agenteActualizado});

    } catch (error) {
        next(error);
    }
})

//POST /api/agentes (body)
//crea un agente
router.post('/', async (req, res, next)=>{
    try {
        const data = req.body;
        //creamos una instancia de agente en memoria
        const agente = new Agente(data);
        
        //lo persistimos(guardamos) en la BD
        const agenteGuardado = await agente.save();

        res.json({result: agenteGuardado});

    } catch (error) {
        next(error);
        
    }
});

//DELETE /api/agentes/<id>
//elimina un agente

router.delete('/:id', async (req,res,next)=>{
    try {
        const id = req.params.id;

        await Agente.deleteOne({_id:id});

        res.json();

    } catch (error) {
        next(error);
    }
})


module.exports = router;
