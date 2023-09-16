
function Mock() {
    useEffect(() => {
      function obtenerProductos() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const productos = [
              { id: 1, nombre: 'Producto 1', precio: 10.99 },
              { id: 2, nombre: 'Producto 2', precio: 19.99 },
              { id: 3, nombre: 'Producto 3', precio: 5.99 },
            ];
            resolve(productos);
          }, 3000); // Simulamos una demora de 3 segundos
        });
      }
  
      // Llamamos a la función para obtener los productos
      obtenerProductos()
        .then((productos) => {
          console.log('Productos obtenidos:', productos);
        })
        .catch((error) => {
          console.error('Error al obtener productos:', error);
        });
    }, []);
  
    return (
      <div className="App">
        <h1>Obteniendo Productos en React</h1>
      </div>
    );
  }