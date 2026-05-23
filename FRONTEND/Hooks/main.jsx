//--------------------------------------------------------Hook para cargar cards en el carrito--------------------------------------------------------------------------
import { useState, useEffect } from 'react';

export function useCarrito() {
  const [carrito, setCarrito] = useState(() => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (productoInfo) => {
    const existe = carrito.find(p => p.tipo === productoInfo.tipo);
    if (existe) {
      setCarrito(carrito.map(p =>
        p.tipo === productoInfo.tipo
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      ));
    } else {
      setCarrito([...carrito, productoInfo]);
    }
  };

  const sumar = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].cantidad += 1;
    setCarrito(nuevoCarrito);
  };

  const restar = (index) => {
    const nuevoCarrito = [...carrito];
    if (nuevoCarrito[index].cantidad > 1) {
      nuevoCarrito[index].cantidad -= 1;
      setCarrito(nuevoCarrito);
    }
  };

  return {
    carrito,
    agregarAlCarrito,
    sumar,
    restar
  };
}

//-----------------------------------------------------------------Hook para boton de agregar al carrito---------------------------------------------------------------------

const agregarAlCarrito = (productoInfo) => {
    const existe = carrito.find(p => p.tipo === productoInfo.tipo);
    if (existe) {

      setCarrito(carrito.map(p =>
        p.tipo === productoInfo.tipo
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      ));
    } else {

      setCarrito([...carrito, productoInfo]);
    }
  };

//------------------------------------------------------------------------------Hook para editar datos cuenta---------------------------------------------------------------------

 export function useEditarFormulario(){

    const [inputsDeshabilitados, setInputsDeshabilitados] = useState(true);

    const toggleEdita = () => {
    setInputsDeshabilitados(!inputsDeshabilitados);
  };
  return{
    inputsDeshabilitados,
    toggleEdita
  }
 }