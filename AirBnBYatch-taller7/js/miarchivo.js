
// Taller Coderhouse Curso Javascript

class Product { // clase producto
    constructor(id, name, country, price, stock, description, enabled, img){ //funcion contructora producto
        this.id = id // key del producto
        this.name = name //atributo
        this.country = country //atributos
        this.price = price //atributos en dolares
        this.stock = stock // cantidad disponible de producto
        this.description = description //atributos
        this.enabled = enabled // rango fecha disponible servicio
        this.img = img // imagen de producto

    }
    calculatePriceIVA(){ //funciones o metodos
        let IVA = 19
        return (this.price) + ((this.price * IVA) / 100)
    }
    getName(){ //funciones o metodos
        return this.name
    }

    getCountry(){ //funciones o metodos
        return this.country
    }

    getPrice(){ //funciones o metodos
        return this.price
   }

   getDescription(){ //funciones o metodos
    return this.description
}
}


class Carrito{ // Clase Pedido
    constructor(id_producto, producto, cantPersona, date){
        this.id_producto = id_producto
        this.producto = producto
        this.cantPersona = cantPersona
        this.date = date
    }
}


// Se crean lista de Objeto de Productos y Pedidos Iniciales
const listaProductos = []
// Incializar carrito de compras con ultimas selecciones.
let carrito = []

function ProductosGenerar(array){
    array.push(new Product(1, "Naara", "Portugal", 500, 5, "Yate para vacaciones en Mediterraneo, zarpa de Isla en Portugal", "01-Jul-2022 - 10-Jul-2022", "./assets/imagen/mid-1.jpeg"))
    array.push(new Product(2, "My Princess", "Miami", 150, 3, "Yate para vacaciones en caribe, zarpa de Miami", "01-Jul-2022 - 10-Jul-2022", "./assets/imagen/mid-2.jpeg"))
    array.push(new Product(3, "La Lolita", "Spain", 100, 2, "Yate para vacaciones en caribe, zarpa de Islas Canaias", "10-Jul-2022 - 20-Jul-2022", "./assets/imagen/mid-3.jpeg"))
    array.push(new Product(4, "Gone with the Wind", "Italy", 175, 6, "Yate para vacaciones en caribe, zarpa de Porto Italiano", "01-Jul-2022 - 10-Jul-2022", "./assets/imagen/mid-4.jpeg"))
    array.push(new Product(5, "Sea Wolf", "Chile", 100, 1, "Yate para vacaciones en caribe, zarpa de Valparaisio", "10-Jul-2022 - 25-Jul-2022", "./assets/imagen/mid-5.jpeg"))
    array.push(new Product(6, "Girl Gome", "Miami", 100, 2, "Yate para vacaciones en caribe, zarpa de Miani", "15-Jul-2022 - 25-Jul-2022", "./assets/imagen/mid-6.jpeg"))
    array.push(new Product(7, "Niza", "Portugal", 50, 3, "Yate para vacaciones en Mediterraneo, zarpa de Isla en Portugal", "20-Jul-2022 - 30-Jul-2022", "./assets/imagen/mid-7.jpeg"))
    array.push(new Product(8, "My Princess", "Miami", 75, 4, "Yate para vacaciones en caribe, zarpa de Miami", "15-Jul-2022 - 30-Jul-2022", "./assets/imagen/mid-8.jpeg"))
}


// console.log('Listado de Embarcaciones para Rentar')

// for (let i = 0; i < listaProductos.length; i++){
//     console.log(" ")
//     console.log(" Nombre Embarcación: " + listaProductos[i].getName())
//     console.log(" Pais Origen: " + listaProductos[i].getCountry())
//     console.log(" Precio Alojamiento Mes: US$ " + listaProductos[i].getPrice())
//     console.log(" Descripción: " + listaProductos[i].getDescription())
//     console.log(" Precio con IVA: US$ " + listaProductos[i].calculatePriceIVA());
// }

// for (const listaProducto of listaProductos){
//     console.log(" ")
//     console.log(" Nombre Embarcación: " + listaProducto.getName())
//     console.log(" Pais Origen: " + listaProducto.getCountry())
//     console.log(" Precio Alojamiento Mes: US$ " + listaProducto.getPrice())
//     console.log(" Descripción: " + listaProducto.getDescription())
//     console.log(" Precio con IVA: US$ " + listaProducto.calculatePriceIVA());
// }

// Lista los productos disponibles 
// listaProductos.forEach((item, index, array) => {
//     console.log(" ")
//     console.log (item)
// })

// console.log(' ')
// console.log('*** Fin del Proceso ***')

// // Ejemplo de busqueda de item de venta
// const localiza = listaProductos.find((item) => item.name === 'Naara')
// console.log("Buscar Producto por Nombre")
// console.log (" ")
// console.log(localiza)
// console.log("*** fin de listado enconrados ***")

// // Ejemplo de encontrar Productos mas economicos
// const economicos = listaProductos.filter((item) => item.price <= 100 )
// console.log("Buscar Productos economicos")
// console.log(" ")
// console.log(economicos)
// console.log("*** fin de listado economicos ***")


// // Ejemplo lista nombres Yates
// const newlist = listaProductos.map((item) => item.name)
// console.log("Productos listados por nombre")
// console.log(" ")
// console.log(newlist)
// console.log("*** fin de listado nombes de yates ***")

// // Genera Nueva lista ordenada de Productos nombres ascendetes
// const listOrdenada = listaProductos.sort((a,b) => {
//     if (a.name > b.name){
//         return 1
//     }
//     if (a.name < b.name){
//         return -1
//     }

//     // a es igual a b
//     return 0
// })

// console.log(" Nueva lista de productos ordenadas por nombre")
// console.log(" ")
// console.log(listOrdenada)
// console.log("*** fin de la lista ordenada ***")


// // Calcula total $$ de invetanrio de productos
// const total = listaProductos.reduce((accum, item) => accum + item.price, 0)
// console.log("Imprime total inventario del sitio")
// console.log(" ")
// console.log("el total del inventario es US$: " + total)
// console.log("*** fin total inventario ***")


// // Simula una compra
// let idCompra = 5 // dato se podria pedir por pantalla
// let cantPersonas = 3 // dato se puede pedir por pantalla

// if ((idCompra >= 0) && (idCompra < listaProductos.length)) {
//     const myDetallePedido = new DetallePedido(listaProductos[idCompra], cantPersonas)
//     const myPedido = new Pedido (Date(), myDetallePedido)

//     // Imprime Compra
//     console.log(" ")
//     console.log("Compra Simulada Impresion")

//     console.log(myPedido)
//     console.log(myDetallePedido)
//     console.log(" Total a pagar: US$ " + cantPersonas * listaProductos[idCompra].calculatePriceIVA())
// }
// else {
//     console.log("")
//     console.log("Problemas al Imprimir la venta")
//     console.log("Error esta tratando de comprar un producto que no existe")
// }


// Recorre la lista de productos e imprime en cada tarjeta informacion de elementos.
function ProductosImprimir(array){
    let elem = document.getElementById("cards-list")

    array.forEach((item, index) => {
        let myHTML = `
        <div class="card .col-md-5 boder border-5" style="width:300px"> 
            <img class="card-img-top" src="${item.img}" alt="Card image"> 
            <div id="card-${item.id}" class="card-body"> 
                <h4 class="card-title">Yatch: ${item.name} </h4> 
                <p class="card-text"> ${item.description} </p> 
                <p class="card-text"> <h6> Pais: ${item.country} </h6> </p>  
                <p class="card-text"> <strong> Precio US$ ${item.price} por Noche </strong> </p> 
                <p class="card-text"> Fecha: ${item.enabled}  </p> 
                <p class="card-text"> Stock ${item.stock} </p> 
                <a href="#" id="${item.id}" class="btn btn-primary">Agregar Carrito</a> 
            </div>
        </div> `

        elem.innerHTML += myHTML
        //console.log(myHTML)
    })
}


function CarritoIniciar(carrito) {
    if(JSON.parse(localStorage.getItem('carrito'))){
        carrito = JSON.parse(localStorage.getItem('carrito'))
    } else {
        localStorage.setItem('carrito', JSON.stringify([]))
        carrito = JSON.parser(local.localStorage.getItem('carrito'))
    }
}

const totalCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}

function AgregarCarrito(e, id, productos, carrito){
    //const btn = e.target
    //console.log(id)
    //const idBoton = btn.getAtributte(id)
    
    //console.log("encontrado.....")
    const prodEncontrado = productos.find((prod)=> prod.id == id)
    //console.log(prodEncontrado)
    const enCarrito = carrito.find((prod) => prod.id_producto == id)
    //console.log(enCarrito)

    if (!enCarrito) {
        carrito.push(new Carrito(id, prodEncontrado, 1, Date()))
    } else {
        //let carritoFiltrado = carrito.filter((prod) => prod.id != enCarrito.id)
        //console.log(enCarrito)
        enCarrito.cantPersona = enCarrito.cantPersona + 1
        //console.log(enCarrito)
    }

    //console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

function CarritoRender(){
    const elem = document.getElementById("myCarr")
    elem.innerHTML = '<h3> Carrito de Compras </h3>'

    carrito.forEach((item, index) => {
        //console.log(carrItem`

        let totalPagar  = item.cantPersona * item.producto.getPrice()      
        let myHTML = `<p>Nombre: ${item.producto.getName()} - cantidad: ${item.cantPersona} 
                    - Precio Uni US$: ${item.producto.getPrice()} - Total Pagar US$: ${totalPagar}</p>`
        // const carrItemContainer = document.crateElement("div")
        // carrItemContainer.classList.add ('col-12')
        // carrItemContainer.innerHTML =``<p>${carrItem.name}</p>`
        // verCarr.appendChild(carrItemContainer)
        //console.log(myHTML)
        elem.innerHTML += myHTML
    })
}

function CarritoActivarBtn(){
    const carrBtn = document.getElementById("carrBtn")
    const verCarr = document.getElementById("myCarr")

    carrBtn.addEventListener('click', () =>{
        console.log(verCarr.style.bottom)

        if (verCarr.style.bottom === '-300px' || verCarr.style.bottom === ""){
            verCarr.style.bottom = '0px'
        } else {
            verCarr.style.bottom = '-300px'
        }

        CarritoRender()
    })
}

function BotonActivar(productos, carrito){
    productos.forEach((item, index) => {
        let miBoton = document.getElementById(item.id)

        miBoton.addEventListener('click', (e) => {
            AgregarCarrito(e, item.id, productos, carrito)
            //alert("Has hecho clic!! en boton: " + item.id + " - nombre: " + item.name + " - stock : " + item.stock)
        })
    })    
}

function BotonActivarName(name, text) {
    let miBoton = document.getElementById(name)

    miBoton.addEventListener('click', function() {
        alert(text)
    })
}

ProductosGenerar(listaProductos)
ProductosImprimir(listaProductos)
BotonActivar(listaProductos, carrito)
CarritoIniciar(carrito)
CarritoActivarBtn()

BotonActivarName("buscar", "Inicia busqueda de productos")
BotonActivarName("registrar", "vamos a pantalla de registro de cliente")
BotonActivarName("conocer", "presentamos pantalla de conocer mas sobre servicio")
BotonActivarName("ofertas", "mostramos listas de ofertas y mas")
