//  Crear una pagina web de yoga que tenga un ecommerce que venda productos de dicha actividad!

// CLASES-objeto

class Producto{
    constructor (id, nombre, precio, imagen, impuesto) {
    this.id = id;    
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;

    }
}

class Carrito {
    constructor (id) {
    this.id = id,
    this.productos = [];
    }

    calcularTotal () {
        let total = 0; 
        for (let i = 0; i<this.productos.length; i++ ) {
            total= total+ this.productos[i].precio;
        }
      return total;
    }
    

}
function tarjetaDos (producto) {
    let tarjeta =
    ` <div class="container" id="cards">
                <div class="row">
                <div class="col mb-3">
                    <img class="imagen" src="./images/${producto.imagen}" alt="">
                    <p>${producto.id}.${producto.nombre}</p>
                    <p>$ ${producto.precio}</p>
                    <button class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carrito</button>
                    </div>
                    </div>  `;
                    return tarjeta;
}

function limpiarCarrito () {
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = "";

}

function actualizarCarrito (carrito){
    let divCarrito = document.querySelector("#carrito");
    carrito.productos.forEach(producto =>{
        divCarrito.innerHTML = `<h1>Precio Total: ${carrito.calcularTotal()} </h1>`
    })  
}
function renovarStorage (){
    localStorage.removeItem("carrito");
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

/* Cargar carrito existente */
window.addEventListener('DOMContentLoaded', (e) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new Carrito(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto);
    })
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
});

// Genero mi catalogo de productos

let catalogoProductos = [];

let productoUno = new Producto (1, "Almohadilla Relajante", 700, "almohadillarelajante.jpg");
let productoDos = new Producto (2, "Mat de Caucho", 2200, "matcaucho6mm.jpg");
let productoTres = new Producto (3, "Pelota Reflex", 600, "pelotareflex6cm.jpg");

catalogoProductos.push (productoUno);
catalogoProductos.push (productoDos);
catalogoProductos.push (productoTres);

// Mostrar productos por DOM
let cardsDiv = document.querySelector("#cards");

    let tarjeta = ` <div class="container" id="cards">
                <div class="row">
                <div class="col mb-3">
                    <img class="imagen" src="" alt="">
                    <p></p>
                    <p></p>
                    <p></p>
                    <button class="btn btn-primary botonDeCompra">Agregar al carrito</button>
                    </div>
                    </div>  `
            
  catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += tarjetaDos (producto);
})



// Ingresar al carrito productos

let carrito= new Carrito(1)

let botones=document.querySelectorAll(".botonDeCompra");
let arrayDeBotones= Array.from(botones);

arrayDeBotones.forEach(boton => {   
    
    boton.addEventListener ("click", (e) => {
        let productoSeleccionado = catalogoProductos.find(producto => producto.id == e.target.id);
    carrito.productos.push(productoSeleccionado);
    limpiarCarrito();
    actualizarCarrito(carrito);
    renovarStorage();

    })
})






