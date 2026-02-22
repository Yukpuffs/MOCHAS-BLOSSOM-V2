from fastapi import FastAPI
from pydantic import BaseModel
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware 
from datetime import date, time

app = FastAPI()

# CORS → Permite conectarte desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def conectar():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="mochas_blossom"
    )

"-----------------------------------------------------------------Iniciar sesion---------------------------------------------------------------------------"
class Usuario(BaseModel):
    email: str
    passwordd: str

@app.post("/iniciar")
def iniciar_usuario(data: Usuario): #objeto recibido atraves del JSON de app
    db = conectar()
    cursor = db.cursor() #ayuda a conectar la base de datos y recorre las listas

    sql = "SELECT * FROM regis WHERE email = %s AND passwordd = %s"
    cursor.execute(sql, (data.email, data.passwordd)) #corre la query pasandole informacion en string

    usuario = cursor.fetchone()

    cursor.close()
    db.close()

    if usuario:
        return {"ok": True, "mensaje": "Inicio de sesión exitoso", "usuario": usuario}
    else:
        return {"ok": False, "mensaje": "Correo o contraseña incorrectos"}


"-----------------------------------------------------------------Registrarse---------------------------------------------------------------------"
class registro(BaseModel):
    usuario: str
    email: str
    passwordd: str

@app.post("/regis")
def registrarse(data: registro):
    db = conectar()
    cursor = db.cursor()

    sql = "INSERT INTO regis (usuario, email, passwordd) VALUES (%s, %s, %s)"
    cursor.execute(sql, (data.usuario, data.email, data.passwordd))

    db.commit() #Guarda los datos ingresados
    cursor.close()
    db.close()
    return {"mensaje": "Usuario registrado correctamente"}
    
"------------------------------Cuenta---------------------------------------------"
class infocuenta(BaseModel):
    nombre: str
    corre_E: str
    telefono: str
    direccion: str
    num_tarj: str


@app.post("/cuenta")
def cuenta(data: infocuenta):
    db = conectar()
    cursor = db.cursor()

    sql = "INSERT INTO cuenta (nombre, corre_E, telefono, direccion, num_tarj) VALUES (%s, %s, %s, %s, %s)"
    cursor.execute(sql, (data.nombre, data.corre_E, data.telefono, data.direccion, data.num_tarj))

    db.commit()
    cursor.close()
    db.close()
    return {"mensaje": "Datos almacenados correctamente"}

@app.put("/editar/{correo_E}")

def editar_infor(correo: str, data: infocuenta):
    db = conectar()
    cursor = db.cursor()
    sql = "UPDATE cuenta SET nombre = %s, corre_E = %s, telefono = %s, direccion = %s, num_tarj = %s WHERE correo_E = %s"
    cursor.execute(sql, (data.nombre, data.corre_E, data.telefono, data.direccion, data.num_tarj, correo))
    db.commit()
    cursor.close()
    db.close()

    return {"mensaje": "Usuario actualizado correctamente"}

"--------------------------------Pedidos-------------------------------------------"

class infocuenta(BaseModel):
    nombre: str
    direccion: str
    telefono: str
    email: str
    fecha: date
    hora: time 
    metodo_pago: str
    num_tarj: str
    cvv: int
    fech_cad: date


@app.post("/pedidos")
def pedidos(data: infocuenta):
    db = conectar()
    cursor = db.cursor()

    sql = "INSERT INTO pedidos (nombre, direccion, telefono, email, fecha, hora, metodo_pago, Num_tarj, cvv, fech_cad) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    cursor.execute(sql, (data.nombre, data.direccion, data.telefono, data.email, data.fecha, data.hora, data.metodo_pago, data.num_tarj, data.cvv, data.fech_cad))

    db.commit()
    cursor.close()
    db.close()
    return {"mensaje": "Datos almacenados correctamente"}

"------------------------------Personalizacion----------------------------"

class personalizacion(BaseModel):
    sabor: str
    rel: str
    tamano: str
    cober: str
    decor: str


@app.post("/personalizacion")
def gua_personalizacion(data: personalizacion):
    db = conectar()
    cursor = db.cursor()

    sql = "INSERT INTO personalizacio (sabor, rel, tamano, cober, decor) VALUES (%s, %s, %s, %s, %s)"
    cursor.execute(sql, (data.sabor, data.rel, data.tamano, data.cober, data.decor))

    db.commit()
    cursor.close()
    db.close()
    return {"mensaje": "Datos almacenados correctamente"}


