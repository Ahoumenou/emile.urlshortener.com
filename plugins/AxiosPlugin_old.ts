// plugins/axios.js
import axios from 'axios';
    
export default ({ app }, inject) => {
  // Créez une instance axios avec des paramètres personnalisés
  const api = axios.create({
    baseURL: 'https://api.example.com'
  })

  // Injectez l'instance axios dans l'application Nuxt
  inject('api', api)
}
 