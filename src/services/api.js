// api.js
import axios from 'axios';

const artemisAPI = axios.create({
  baseURL: 'https://127.0.0.1:8000/api', // Remplacez par l'URL de votre API locale
  headers: {
    'Content-Type': 'application/ld+json',
  },
});

const fetchAllData = async (endpoint) => {
      try {
          const response = await artemisAPI.get(endpoint); // Remplacez par votre endpoint
          return response.data;
          // console.log(response.data.nom)
        } catch (error) {
          console.error('Erreur lors de la récupération des données de l\'API', error);
        }
    };

export { fetchAllData };
export default artemisAPI;
