import { useEffect } from "react";
import products from "./producto";

function Mock() {
    useEffect(() => {
      function obtenerProductos() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({products});
          }, 3000); 
        });
      }
      obtenerProductos()
        .then((productos) => {
          console.log('Productos obtenidos:', productos);
        })
        .catch((error) => {
          console.error('Error al obtener productos:', error);
        });
    }, []);
  
  }
  export default Mock;