let inputNombre = document.getElementById('nomEst') 
let inputCantidad = document.getElementById('canMat')
let inputValor = document.getElementById('valMat')
const papeleria = 20000, carnee = 8000
const boton = document.getElementById('boton')
let parrafo = document.getElementById('resultado')

boton.addEventListener('click', function(){
    let nomEstudiante = inputNombre.value
    let ctdMaterias = parseInt(inputCantidad.value)
    let valMaterias = parseInt(inputValor.value)
    
    if (nomEstudiante.length > 2 && nomEstudiante.length <= 50) {
        if (ctdMaterias > 0 && ctdMaterias < 11) {
            if (valMaterias > 0 && valMaterias <= 100000) {
                let precioBase = ctdMaterias * valMaterias
                let calDescuento = precioBase * 0.20
                let descuento = precioBase - calDescuento
                let valorTotal = descuento + papeleria + carnee
                parrafo.textContent = 'El estudiante '+nomEstudiante+' debe pagar un total de: $ '+valorTotal+' pesos colombianos.'
            } else {
                alert('el valor ingresado no es valido, vuelva a intentarlo')
            }
        }else{
            alert('la cantidad ingresada no es valida, vuelva a intentarlo ')
        }
    }else{
        alert('el nombre ingresado no es valido, vuelva a intentarlo')
    }
      
})