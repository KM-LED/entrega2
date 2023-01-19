
/*

function menuPrincipal() {
   let total = 0
   let menu
   do {
       menu = prompt("1 -Comprar Producto \n 2-Terminar Compra  \n 3-Salir")
       menu = parseInt(menu)
       switch (menu) {
           case 1: total = total + compraProducto()
               break
           case 2: alert("Total gastado  $" + total)
                   total = 0
               break
           case 3: alert("Saliendo")
               break
           default: alert("opcion Invalida")
       }
   } while (menu !=3)

}

function compraProducto() {
   let sumaProductos = 0
   alert("Elige tu producto")
   alert("1-USB OPEN \n 2-USB OPTO \n 3-PIXEL LED CONTROLLER \n 4-SPLITTER 2CH \n 5-SPLITTER 4CH")
   let tipo = prompt("Ingrese pr tipo de producto")
   tipo = parseInt(tipo)

   switch (tipo) {
       case 1: sumaProductos = 17200
           break
       case 2: sumaProductos = 22600
           break
       case 3: sumaProductos = 10100
           break
       case 4: sumaProductos = 19300
           break
       case 5: sumaProductos = 36599
           break
       default: alert("opcion invalida")
   } 
   return sumaProductos

}

menuPrincipal()
*/



const productos = [
    { nombre: "usb open", precio: 19000 },
    { nombre: "usb opto", precio: 23000 },
    { nombre: "pixel control", precio: 11000 },
    { nombre: "splitter 2ch", precio: 19000 },
    { nombre: "splitter 4ch", precio: 36000 },
    { nombre: "splitter oem", precio: 10500 },
];

let carrito = []

let elijo = prompt("Quieres comprar algun producto, si o no")

while (elijo != "si" && elijo != "no") {
    alert("Por favor ingresa si o no ")
    elijo = prompt("Hola queres comprar algun producto")
}

if (elijo == "si") {
    alert("Lista de productos")
    let MisProductos = productos.map((productos) => productos.nombre + " " +   "$" + productos.precio);
    alert(MisProductos.join(" - "))
}
else if (elijo == "no") {
    alert("Gracias por visitar nuestra")
}

while (elijo != "no") {
    let productos = prompt("agrega un producto")
    let precio = 0
    if (productos == "usb open" || productos == "usb opto" || productos == "pixel control" || productos == "splitter 2ch"
        || productos == "splitter 4ch" || productos == "splitter oem") {
        switch (productos) {
            case "usb open":
                precio = 19000
                break

            case "usb opto":
                precio = 23000
                break

            case "pixel control":
                precio = 11000
                break

            case "splitter 2ch":
                precio = 19000
                break

            case "splitter 4ch":
                precio = 36000
                break

            case "splitter oem":
                precio = 10500
                break
            default:
                break  
        }
        let unidades = parseInt(prompt("Cuantas unidades quiere"))
        carrito.push({ productos, unidades, precio })
        console.log(carrito)
    } else { alert("No tenemos ese producto") }
    elijo = prompt("Quiere seguir comprano ? si o no")
    while (elijo === "no") {
        alert("Gracias por tu compra")
        carrito.forEach((carritoFinal) => {
            console.log(`productos: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades}, 
            Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)

        })
        break;
    }
}

function pagar() {
    const total = carrito.reduce((acumulador, pr) => acumulador + pr.precio * pr.unidades, 0)
    console.log(`El total a pagar es Pesos: ${total}`)
}
pagar();



