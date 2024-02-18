//process es u objeto que te dan cosas sobre los procesos en ejecucion



console.log(process.argv);

//controlar el proceso de salida
//0 es que ha ido todo bien
process.exit(0);


//controlar eventos del proceso
process.on('exit', ()=>{
    //limpiar los recursos
})

//current worrking directory
console.log(process.cwd());

//platform
//console.log(process.env.)