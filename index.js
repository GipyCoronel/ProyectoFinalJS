let preguntarAlUser = prompt ("-Vendedor: Qué producto de Yoga desea comprar? -Almohadilla, pelota, colchoneta").toLowerCase()

class Productos { constructor (nombre, precio, stock, precioDos ){

    this.nombre= nombre;
    this.precio= precio;
    this.stock= stock;
    this.precioDos= precioDos;
}
mostrarNombre(){ alert ("Cliente: Deseo comprar un/a " + this.nombre+ " de " + this.precio + " pesos ," + " tiene stock? " + this.stock )}
mostrarTotal() {alert ("El precio total de los productos es:" + (this.precio + this.precioDos))}

}

let h2=document.createElement("h2")
h2.textContent="Bienvenido"
document.body.appendChild(h2)

function operacion (){
    if (preguntarAlUser==="no"){
        return alert ("Gracias por su visita")
    }

    let arr= ["rojo", "verde", "amarillo"]

    for (let index = 0; index<arr.length; index++){

        let productoUno

        if (preguntarAlUser==="colchoneta"){
        if (arr[index]=== "rojo"){
         
            productoUno= new Productos("colchoneta", 700, true)
            productoUno.mostrarNombre()

            alert ("Tenemos colchoneta color "+ arr[index])
            
        }
    }

    let productoDos 

    if (preguntarAlUser==="pelota") {
        if (arr[index]==="verde") {
            productoDos= new Productos ("pelota", 100,true)
            productoDos.mostrarNombre()

            alert("Tenemos pelota "+ arr[index])
        }
    }

    
}

     let productoTres
     if (preguntarAlUser==="almohadilla") {
         
             productoTres= new Productos ("almohadilla", 300, false)
             productoTres.mostrarNombre()
             return alert ("Gracias por su visita")
         }
     

     let preguntaDos 

     if (preguntarAlUser=="colchoneta"|| preguntarAlUser=="pelota") {
         preguntaDos=prompt("Desea comprar otro producto").toLowerCase()

         if(preguntaDos=="pelota"){
             productoCinco= new Productos ("",100,"",700)

             productoCinco.mostrarTotal()
         }

         if(preguntaDos=="colchoneta"){
            productoCinco= new Productos ("",700,"",100)

            productoCinco.mostrarTotal()
        }

        if(preguntaDos=="almohadilla"){
            productoTres= new Productos ("almohadilla", 300, false)
            productoTres.mostrarNombre()
        }
     }

     let h3=document.createElement("h3")
     h2.textContent="Gracias por tu compra"
     document.body.appendChild(h3)
     document.body.style.backgroundColor="lightblue"

}

operacion()