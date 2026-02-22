
/*--------------------------------Inicio sesion------------------------------------- */
console.log("JS cargado");

const formularioinicio = document.getElementById("formularioinicio")

if(formularioinicio){
    formularioinicio.addEventListener("submit", function(e) {
        e.preventDefault();  // evita el GET automático

        const email = document.getElementById("email").value;
        const passwordd = document.getElementById("password").value;

        fetch("http://127.0.0.1:8000/iniciar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                passwordd: passwordd
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Respuesta:", data);
        })
        .catch(err => console.log("Error:", err));
        
    });

}


/*--------------------------------Registrarse-------------------------------- */


const registro = document.getElementById("regis")

if (registro){
        registro.addEventListener("submit", function(event) {
        event.preventDefault();  // evita el GET automático

        const usuario = document.getElementById("usuario").value;
        const email = document.getElementById("emaill").value;
        const passwordd = document.getElementById("passwordd").value;

        fetch("http://127.0.0.1:8000/regis", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usuario: usuario,
                email: email,
                passwordd: passwordd
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Respuesta:", data);
        })
        .catch(err => console.log("Error:", err));
})
}
/*------------------------------Cuenta---------------------------------------------*/

const Cuenta = document.getElementById("usuario")

if (Cuenta){
        Cuenta.addEventListener("submit", function(event) {
        event.preventDefault();  // evita el GET automático

        const nombre = document.getElementById("nombre").value;
        const corre_E = document.getElementById("corre_E").value;
        const telefono = document.getElementById("telefono").value;
        const direccion = document.getElementById("direccion").value;
        const num_tarj = document.getElementById("tarj").value;

        fetch("http://127.0.0.1:8000/cuenta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                corre_E: corre_E,
                telefono: telefono,
                direccion:direccion,
                num_tarj: num_tarj
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Respuesta:", data);
        })
        .catch(err => console.log("Error:", err));
    });
}
/*--------------------------------Pedidos-------------------------------------------*/

const pedidos = document.getElementById("pedidos")

if (pedidos){
        pedidos.addEventListener("submit", function(event) {
        event.preventDefault();  // evita el GET automático

        const nombre = document.getElementById("completo").value;
        const direccion = document.getElementById("direcio").value;
        const telefono = document.getElementById("teleo").value;
        const email = document.getElementById("q").value;
        const fecha = document.getElementById("fecha_en").value;
        const hora = document.getElementById("hora").value;
        const metodo_pago = document.getElementById("medio").value;
        const num_tarj = document.getElementById("tarjt").value;
        const cvv = document.getElementById("cvv").value;
        const fech_cad = document.getElementById("fc").value;

        fetch("http://127.0.0.1:8000/pedidos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                direccion: direccion,
                telefono: telefono,
                email:email,
                fecha: fecha,                
                hora: hora,
                metodo_pago: metodo_pago,
                num_tarj: num_tarj,
                cvv:cvv,
                fech_cad: fech_cad
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Respuesta:", data);
        })
        .catch(err => console.log("Error:", err));
    });
}

/*--------------------------------Personalizacion-------------------------------------------*/

const personalizacion = document.getElementById("pref")

if (personalizacion){
        personalizacion.addEventListener("submit", function(event) {
        event.preventDefault();  // evita el GET automático

        const sabor = document.querySelector('input[name="sabor"]:checked')?.value;
        const rel = document.getElementById("relleno").value;
        const tamano = document.querySelector('input[name="tamano"]:checked')?.value;
        const cober = document.getElementById("cobertura").value;
        const decor = document.getElementById("decoracion").value;


        fetch("http://127.0.0.1:8000/personalizacion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sabor: sabor,
                rel: rel,
                tamano: tamano,
                cober:cober,
                decor: decor              
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Respuesta:", data);
        })
        .catch(err => console.log("Error:", err));
    });

}

