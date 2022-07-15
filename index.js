//  Crear una pagina web de yoga que tenga un ecommerce que venda productos de dicha actividad!

// CLASES-objeto

class Producto{
    constructor (id, nombre, precio, imagen, impuesto) {
    this.id = id;    
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.impuesto = impuesto;
    }
}

class Carrito {
    constructor (id, productos) {
    this.id = id,
    this.productos = productos;
    }
}

// FUNCIONES

// Genero mi catalogo de productos

let catalogoProductos = [];

let productoUno = new Producto (1, "Almohadilla Relajante", 700, "almohadillarelajante.jpg", 0.21);
let productoDos = new Producto (2, "Mat de Caucho", 2200, "matcaucho6mm.jpg",0.21);
let productoTres = new Producto (3, "Pelota Reflex", 600, "pelotareflex6cm.jpg", 0.21);

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

function tarjetaDos (producto) {
    let tarjeta =
    ` <div class="container" id="cards">
                <div class="row">
                <div class="col mb-3">
                    <img class="imagen" src="./images/${producto.imagen}" alt="">
                    <p>${producto.id}.${producto.nombre}</p>
                    <p>$ ${producto.precio}</p>
                    <button class="btn btn-primary botonDeCompra">Agregar al carrito</button>
                    </div>
                    </div>  `;
                    return tarjeta;
}
