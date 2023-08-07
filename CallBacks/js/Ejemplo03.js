const aplicarDescuento = new Promise((resolve, reject) => {
   const descuento = false;
   if(descuento){
       resolve("Descuento aplicado")
   }
   else{
       resolve("Descuento NO aplicado")
   }
});

aplicarDescuento.then((descuento) => {
    console.log("Descuento: " + descuento)
}).  catch(err => {console.log(err)})
