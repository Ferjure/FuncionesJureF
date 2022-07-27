    function sumar(ventasLocal1=0 , ventasLocal2=0) { 
    return ventasLocal1+ventasLocal2
    }

    function ingresosBrutos(ventasLocal1, ventasLocal2){
        const alicuotaImpuesto = 0.04
        return sumar(ventasLocal1, ventasLocal2)* alicuotaImpuesto
    }   

    let ventasLocal1, ventasLocal2

    do {
    ventasLocal1 = parseFloat(prompt("Ingrese el monto de ventas del local Uno"))
    ventasLocal2 = parseFloat(prompt("Ingrese el monto de ventas del Local Dos"))


    } while (isNaN(ventasLocal1)||isNaN(ventasLocal2))


    let resultado = sumar(ventasLocal1, ventasLocal2)
    console.log(resultado)

    let condition = prompt("Usted es responsable inscripto").toLocaleLowerCase() 

    if (condition==="si"){
        console.log("Calcule impuesto sobre los Ingresos Brutos")
        impuesto = sumar(ventasLocal1, ventasLocal2) * alicuotaImpuesto;
    } else{ 
        console.log("No corresponde calcular el impuesto")
    }
  
    console.log(impuesto)

