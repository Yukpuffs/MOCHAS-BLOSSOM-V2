const contenedorProductos = document.getElementById('listaproductos');
const contenedorCarrito = document.getElementById('carrito');
const contenedorDeseos = document.getElementById('listadeseos');

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let listaDeseos = JSON.parse(localStorage.getItem("listadeseos")) || [];

//almacenamiento interno
const guardarCarrito = () => localStorage.setItem("carrito", JSON.stringify(carrito));
const guardarDeseos = () => localStorage.setItem("listadeseos", JSON.stringify(listaDeseos));

//mostrar carrito
const mostrarCarrito = () => {
    
    if (!contenedorCarrito) return;
    contenedorCarrito.innerHTML = '';

    carrito.forEach((producto, index) => {
        const div = document.createElement('div');
    
        console.log("Producto en carrito:", producto);

        div.innerHTML = `
            <div class="row"> 
                <div class="col-lg-4 col-md-4 col-sm-6 cardd pb-3">
                    <div class="card h-20 par">
                        <img src="${producto.img}" class="card-img-top img-fluid">
                        <div class="card-body">
                            <h5>${producto.tipo}</h5>
                            <p>${producto.descripcion}</p>
                            <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
                            <div class="controles">
                                <button class="restar border-0 rounded btn bts" data-index="${index}">-</button>
                                <span class="cantidad">${producto.cantidad}</span>
                                <button class="sumar border-0 rounded btn bts" data-index="${index}">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        

        contenedorCarrito.appendChild(div);
    });
};

// mostrar lista de deseos
const mostrarListaDeseos = () => {
    if (!contenedorDeseos) return;
    contenedorDeseos.innerHTML = '';

    listaDeseos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("par");
        div.innerHTML = `
            <div class="row"> 
                <div class="col-lg-4 col-md-4 col-sm-6 cardd pb-3">
                    <div class="card h-20 par">
                        <img src="${producto.img}" class="card-img-top img-fluid">
                        <div class="card-body">
                            <h5>${producto.tipo}</h5>
                            <p>${producto.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        contenedorDeseos.appendChild(div);
    });
};

// --------------------- Función para agregar producto al carrito ---------------------
const agregarAlCarrito = (productoInfo) => {
    const existe = carrito.find(p => p.tipo === productoInfo.tipo);
    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push(productoInfo);
    }
    guardarCarrito();
    mostrarCarrito();
};

// --------------------- Función para agregar producto a lista de deseos ---------------------
const agregarAListaDeseos = (productoInfo) => {
    listaDeseos.push(productoInfo);
    guardarDeseos();
    mostrarListaDeseos();
};

// --------------------- activacion de botones "agregar" y "lista de deseos"
if (contenedorProductos) {
    contenedorProductos.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        if (!card) return;

        // Agregar al carrito
        if (event.target.classList.contains('btn-carrito')) {
            const productoInfo = {
                img: card.querySelector('img').src,
                cantidad: 1,
                tipo: card.querySelector('h5').textContent,
                descripcion: card.querySelector('p').textContent
            };
            agregarAlCarrito(productoInfo);
        }

        // Agregar a lista de deseos
        if (event.target.classList.contains('boton-like')) {
            const productoInfo = {
                img: card.querySelector('img').src,
                tipo: card.querySelector('h5').textContent,
                descripcion: card.querySelector('p').textContent
            };
            agregarAListaDeseos(productoInfo);
        }
    });
}

// sumar/restar productos
if (contenedorCarrito) {
    contenedorCarrito.addEventListener('click', (event) => {
        const index = event.target.dataset.index;
        if (index === undefined) return;

        if (event.target.classList.contains('restar') && carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
        }
        if (event.target.classList.contains('sumar')) {
            carrito[index].cantidad++;
        }
        guardarCarrito();
        mostrarCarrito();
    });
}

mostrarCarrito();
mostrarListaDeseos();


const limpiarLista = (tipo) => {
    switch (tipo) {
        case "carrito":
            carrito = [];
            localStorage.removeItem("carrito");
            mostrarCarrito();
            break;
        case "deseos":
            listaDeseos = [];
            localStorage.removeItem("listadeseos");
            mostrarListaDeseos();
            break;
        default:
            console.warn("Tipo de lista no reconocido:", tipo);
    }
};


document.addEventListener("click", (event) => {
    const tipo = event.target.dataset.limpiar;
    if (tipo) {
        limpiarLista(tipo);
    }
});

/*-------------------------------------cuenta--------------------------------------- */

const botonAper = document.getElementById('boton-aper');
const usuario = document.querySelectorAll('#usuario input');


if (botonAper){
    botonAper.addEventListener("click", () => {

    const estaDeshabilitado = usuario[0].hasAttribute('disabled');

    if (estaDeshabilitado) {
        usuario.forEach(input => input.removeAttribute('disabled'));
    } else {
        usuario.forEach(input => input.setAttribute('disabled', 'true'));
    }
    });
}

/*------------------------------personalizacion--------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    
    const imgPrincipal = document.querySelector(".img_per");
    const radios = document.querySelectorAll("input[name='sabor']");

    const imagenes = {
        chocolate: "../img/Personalizacion/chocolate.png",
        matcha: "../img/Personalizacion/image.png",
        redvelvet: "../img/Personalizacion/red velvet.jpg",
        fresa: "../img/Personalizacion/fresa.jpg",
        vainilla: "../img/Personalizacion/vainilla.png"
    };

    Object.values(imagenes).forEach(src => {
        const img = new Image();
        img.src = src;
    });


    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            const saborSel = radio.value;
            const nuevaImg = imagenes[saborSel];

            if (!nuevaImg) return;
            if (imgPrincipal.src.includes(nuevaImg)) return; 

         
            imgPrincipal.classList.add("fade-out");

            imgPrincipal.addEventListener("transitionend", function cambiar() {
                imgPrincipal.src = nuevaImg;

                imgPrincipal.removeEventListener("transitionend", cambiar);

                requestAnimationFrame(() => {
                    imgPrincipal.classList.remove("fade-out");
                    imgPrincipal.classList.add("fade-in");

                    setTimeout(() => {
                        imgPrincipal.classList.remove("fade-in");
                    }, 400);
                });
            });
        });
    });
});


