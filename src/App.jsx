import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItenListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProducts } from '../src/services/productsService'; // Reemplaza 'nombreDeEsteArchivo' con el nombre real de tu archivo

function App() {
  const [products, setProducts] = useState([]);

  // Clave de API de TMDb aquí
  const tmdbApiKey = '951350132b0805cbca3440afbb76b10c';

  useEffect(() => {
    // Utilizar la función de obtener productos
    getProducts(tmdbApiKey)
      .then(productsData => {
        setProducts(productsData);
      })
      .catch(error => {
        console.error('Error al obtener productos:', error.message || error);
      });
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola un gusto en saludarte 🤗" products={products} />
    </>
  );
}

export default App;
