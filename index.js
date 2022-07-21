//  Crear una pagina web de yoga que tenga un ecommerce que venda productos de dicha actividad!

// CLASES-objeto

/*
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

// Cargar carrito existente 
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


*/
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);

});
const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.item');

    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImage)
}
function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
<div class="row shoppingCartItem">
      <div class="col-6">
          <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <img src=${itemImage} class="shopping-cart-image">
              <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
          </div>
      </div>
      <div class="col-2">
          <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
          </div>
      </div>
      <div class="col-4">
          <div
              class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
              <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                  value="1">
              <button class="btn btn-danger buttonDelete" type="button">X</button>
          </div>
      </div>
  </div>`;
            shoppingCartRow.innerHTML = shoppingCartContent;
            shoppingCartItemsContainer.append (shoppingCartRow)

            updateShoppingCartTotal ();
}

function updateShoppingCartTotal (){
    let total = 0;
    const shoppingCartTotal = document.querySelector ('.shoppingCartTotal');
    const shoppingCartItems = document.querySelectorAll ('shoppingCartItem');

    shoppingCartItems.forEach ((shoppingCartItem) =>{
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector ('.shoppingCartItemPrice');

      
      console.log ('updateShoppingCartTotal -> shoppingCartItemPriceElement',
      shoppingCartItemPriceElement
      );
    });
    


}
