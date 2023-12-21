import axios from "axios";
const tmdbApiKey = '951350132b0805cbca3440afbb76b10c';

// Función para autenticarse con la API de TMDb
async function authenticateWithTMDb(apiKey) {
    try {
    // Configuración de la solicitud de autenticación
    const tmdbBaseUrl = 'https://api.themoviedb.org/3/movie/550?api_key=951350132b0805cbca3440afbb76b10c';
    const authenticationEndpoint = '/authentication';
    const url = `${tmdbBaseUrl}${authenticationEndpoint}`;

    const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'User-Agent': 'ReadMe-API-Explorer',
    };

    // Hacer la solicitud GET para la autenticación
    const response = await axios.get(url, { headers });
    
    // Devolver la respuesta de autenticación
    return response.data;
    } catch (error) {
    // Manejo de errores
    console.error('Error en la autenticación con TMDb:', error.message || error);
    throw error;
    }
}

// Función para obtener productos de la API de TMDb
export async function getProducts(apiKey) {
    try {
    // Autenticarse con TMDb
    const authResponse = await authenticateWithTMDb(apiKey);

    // Configuración de la solicitud de productos
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const productsEndpoint = '/products'; // Reemplaza con el endpoint correcto
    const url = `${tmdbBaseUrl}${productsEndpoint}`;

    const headers = {
        'Accept': 'application/json',
      'Authorization': `Bearer ${authResponse.token}`, // Usar el token de autenticación
        'User-Agent': 'ReadMe-API-Explorer',
    };

    // Hacer la solicitud GET para obtener productos
    const response = await axios.get(url, { headers });

    // Devolver la respuesta de productos
    return response.data;
    } catch (error) {
    // Manejo de errores
    console.error('Error al obtener productos:', error.message || error);
    throw error;
    }
}
