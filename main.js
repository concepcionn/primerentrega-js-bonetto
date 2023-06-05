 let nombre = prompt("Ingrese su nombre") .toLowerCase()
 while (!isNaN(nombre) || (nombre == " ")){
    nombre = (prompt("Por favor ingrese un nombre")) 
}
alert("Bienvenido/a, " + nombre)

let edad = Number(prompt("Ingrese su edad"))

let respuesta

let mensaje = "Escoja el producto que desea adquirir \n1- Hongos \n2- Fideos secos \n3- Frutos secos \n4- Pasta de maní \n5- Aceitunas \n6-Ver carrito \n7- Finalizar compra \n0- Salir"

let total = 0

let hongos = 1800
let fideos = 950
let frutos = 3500
let mani = 800
let aceitunas = 2000



while ((isNaN(edad)) || (edad == " ")) {
    edad = (prompt("Por favor ingrese su edad en números"))   
} 

if (edad < 18) {
        alert("Ud. no posee edad suficiente para realizar esta compra")
        alert("Muchas gracias por su visita")
} else {
        alert("A continuación se habilitará su carrito de compras")
        do {
            respuesta = Number(prompt(mensaje))
            if (respuesta === 1) {
                alert("Ud. ha agregado al carrito un kilo de hongos de $" + hongos)
                total = total + hongos
            } else if (respuesta === 2) {
                alert("Ud. ha escogido paquete de fideos secos que cuesta $" + fideos)
                total = total + fideos
            } else if (respuesta === 3) {
                alert("Ud. ha agregado al carrito un kilo de mix de frutos secos de $" + frutos) 
                total = total + frutos
            } else if (respuesta === 4) {
                alert("Ud. ha agregado al carrito un pote de pasta de maní de $" + mani)
                total = total + mani
            } else if (respuesta === 5) {
                alert("Ud. ha agregado al carrito medio kilo de aceitunas de $" + aceitunas)
                total = total + aceitunas
            } else if (respuesta === 6) {
                alert("El valor total de su carrito es de: " + total)
            } else if (respuesta === 7) {
                alert(validarTotal(total))
            } else {
                alert("Debe ingresar un número del 0 al 6")
            }
        } while (respuesta !== 0)
alert("Muchas gracias por su visita") 
}



function validarTotal(total) {
    if (total === 0){
        return "Debe agregar al menos un producto"
    } else {
        return "Muchas gracias por su compra. Lo esperamos pronto"
    }
}


 





    



 

