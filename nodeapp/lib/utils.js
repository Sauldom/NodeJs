/*module.exports.sleep = tiempo =>{
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(42);            
        },tiempo)
    });
}
*/
function sleep(tiempo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(42);
                
        },tiempo)
    })

}

module.exports.sleep =sleep;

