function NumeroAleatorio() {
    return Math.floor(10000 + Math.random() * 90000);
}

function person(nombre, email, clave){
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
}

//Usuario

function Usuario(nombre, email, clave, puntosAcumulados){
    person.call(this, nombre, email, clave);
    this.puntosAcumulados = puntosAcumulados;

}

Usuario.prototype = Object.create(person.prototype);

Usuario.prototype.acumular = function(){
    return console.log("Se han acumulado puntos");
}

Usuario.prototype.canjearPuntos = function(){
    return console.log("Se han canjeado los puntos");
}

let usuario;
while (true){
    let nombre= prompt("Digite nombre:");
    let email= prompt("Digite email:");
    let clave1= prompt("Digite contraseña:");
    let clave2=prompt("Repita la contraseña:");
    let puntos = NumeroAleatorio()/2; //puntos aleatorios

    if(clave1 === clave2){
        usuario = new Usuario(nombre, email, clave1, puntos);
        usuario.acumular();
        break;
    }else{
        alert("Las contraseñas no coinciden, intente denuevo");
    };
}

let confirmar = confirm("Desea canjear sus puntos?");
if (confirmar) {
    usuario.canjearPuntos();
}

//Administrador

function Administrador(nombre, email, clave, token){
    person.call(this, nombre, email, clave);
    this.token = token;

    this.agregarProducto = () => { //Agregar
        return console.log("Se ha agregado un producto");
    };
    this.eliminarProducto = () => { //eliminar
        return console.log("Se ha eliminado un producto");
    }
    this.modificarProducto = () => { //modificar
        return console.log("Se ha modificado un producto");
    };
    
};

Administrador.prototype = new person();

let admin;
while (true){
    let adminnombre= prompt("Digite nombre del administrador:");
    let adminemail= prompt("Digite email del administrador:");
    let adminpass1= prompt("Digite contraseña:");
    let adminpass2=prompt("Repita la contraseña:");
    let token= NumeroAleatorio(); //token aleatorio
    
    if(adminpass1 === adminpass2){
        admin = new Administrador(adminnombre, adminemail, clave1, token);
        
        let add= confirm("Desea agregar un producto?")
        if(add){
            admin.agregarProducto();
        }
        let mod= confirm("Desea modificar un producto?")
        if(mod && add){
            admin.modificarProducto();
        }
        let del= confirm("Desea eliminar un producto?")
        if(del && add){
            admin.eliminarProducto();
        }
        break;
    }else{
        alert("Las contraseñas no coinciden, intente denuevo");
    };
};

function Producto(nombreProducto, puntosNecesarios, cantidadDisponible, stock){
    this.nombreProducto = nombreProducto;
    this.puntosNecesarios = puntosNecesarios;
    this.cantidadDisponible = cantidadDisponible;
    this.stock = stock;
}

Producto.prototype.optenerInfo = function(){
    return `Informacion de producto:\n- Nombre de producto: ${this.nombreProducto}\n- Puntos necesarios: ${this.puntosNecesarios}\n- Cantidad disponible: ${this.cantidadDisponible}\n- Stock actual: ${this.stock}`;
}

function ProductoFisico(nombre, puntosNecesarios, cantidadDisponible, stock, precio){
    Producto.call(this, nombre, puntosNecesarios, cantidadDisponible, stock);
    this.precio = precio;

    //metodos
    this.obtenerInfo = function(){
        return console.log(`Aqui se muestra la informacion del producto:\n\n${Producto.prototype.obtenerInfo.call(this)}\n- Precio: ${this.precio}`);
    }

    this.actualizarStock = () =>{
        //espacio para actualizar el stock
        return console.log("Quiere actualizar el Stock");
        
    }
    this.enviarProducto = function(){
        return console.log(`Su producto sera enviado con el numero de tracking: ${NumeroAleatorio()*10}`);
    }
}

ProductoFisico.prototype = new Producto();


let nombreProducto= prompt("Digite nombre del producto:");
let puntosNecesarios= parseInt(NumeroAleatorio()*0.01); //puntos hasta 999
let cantidadDisponible= parseInt(NumeroAleatorio()*0.001); //puntos hasta 99
let stockProductoFisico=parseInt(NumeroAleatorio()*0.01); //puntos hasta 999
let precioProductoFisico= parseInt(NumeroAleatorio());//puntos hasta 99999


const productF = new ProductoFisico(nombreProducto, puntosNecesarios, cantidadDisponible, stockProductoFisico, precioProductoFisico);

productF.obtenerInfo();
        


//-----

function ProductoVirtual(nombre, puntosNecesarios, cantidadDisponible, stock, url){
    Producto.call(this, nombre, puntosNecesarios, cantidadDisponible, stock);
    this.url = url;
}

ProductoVirtual.prototype.obtenerInfo = function() {
    return console.log(`Aqui se muestra la informacion del producto Virtual comprado:\n\n ${Producto.prototype.obtenerInfo.call(this)}\n- URL: ${this.url}`);
}

ProductoVirtual.prototype.descargar = () => {
    return console.log("Descargando...");
}

ProductoVirtual.prototype.obtenerProductoEmail = function (){
    return console.log("Se ha enviado su producto por Email.");
}

ProductoVirtual.prototype = new Producto();

//producto virtual
let nombreProductoV= prompt("Digite nombre del producto virtual:");
let puntosNecesariosPV= parseInt(NumeroAleatorio()*0.01); //puntos hasta 999
let cantidadDisponiblePV= parseInt(NumeroAleatorio()*0.001); //puntos hasta 99
let stockProductoVirtual=parseInt(NumeroAleatorio()*0.01); //puntos hasta 999
let url= prompt("Digite URL:");


const productV = new ProductoVirtual(nombreProductoV, puntosNecesariosPV, cantidadDisponiblePV, stockProductoVirtual, url);

productV.obtenerInfo();


function CategoriaProducto(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;

    this.listarProductos = () => {
        return console.log(`Listado de productos de la categoria ${this.nombre}\nDescripcion: ${this.descripcion}:\n\n...\n...\n...\n...\n...\n...`);
    }
}

let categoryName = prompt("Digite el nombre de la categoria:");
let categoryDescription = prompt("Digite una descripcion:");

const catProducts = new CategoriaProducto(categoryName, categoryDescription);

catProducts.listarProductos();



