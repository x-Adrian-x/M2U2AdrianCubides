let num1 = document.getElementById('numero1') 
let num2 = document.getElementById('numero2')
let num3 = document.getElementById('numero3')
let num4 = document.getElementById('numero4')
const boton = document.getElementById('boton')
let numMayor = document.getElementById('mayor')
let numMenor = document.getElementById('menor')

boton.addEventListener('click', function(){
    let n1 = num1.value
    let n2 = num2.value
    let n3 = num3.value
    let n4 = num4.value
    
    if ((n1===isNaN||n2===isNaN||isNaN(n3)||isNaN(n4)) || (n1===''||n2===''||n3===''||n4==='') || (n1===null||n2===null||n3===null||n4===null)) {

        alert('datos incorrectos, vuelva a intentarlo')
        
    } else if (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4) {
        if (n1>n2 && n1>n3 && n1>n4) {
            numMayor.textContent = 'El numero mayor es: '+n1
        } else if (n2>n1 && n2>n3 && n2>n4) {
            numMayor.textContent = 'El numero mayor es: '+n2
        } else if (n3>n1 && n3>n2 && n3>n4) {
            numMayor.textContent = 'El numero mayor es: '+n3
        } else if (n4>n1 && n4>n2 && n4>n3) {
            numMayor.textContent = 'El numero mayor es: '+n4
        }
    
        if (n1<n2 && n1<n3 && n1<n4) {
            numMenor.textContent = 'El numero menor es: '+n1
        } else if (n2<n1 && n2<n3 && n2<n4) {
            numMenor.textContent = 'El numero menor es: '+n2
        } else if (n3<n1 && n3<n2 && n3<n4) {
            numMenor.textContent = 'El numero menor es: '+n3
        } else if (n4<n1 && n4<n2 && n4<n3) {
            numMenor.textContent = 'El numero menor es: '+n4
        }
    } else {
        alert('no pueden haber numeros repetidos, vuelva a intentarlo')
    }

})