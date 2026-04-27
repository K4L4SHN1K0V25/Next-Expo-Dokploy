import axios from 'axios'
import { Platform } from 'react-native'

// IP local para desarrollo en celular (Cámbiala por la IP de tu PC)
// En producción, Dokploy te dará una URL real (ej: https://api.tu-pos.com)
const DEV_API_URL = Platform.OS === 'web' 
  ? 'http://127.0.0.1:8000' 
  : 'http://192.168.100.7:8000' // <-- Pon tu IP de red local aquí

const client = axios.create({
  baseURL: DEV_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para manejo de errores (útil para debuggear con FastAPI)
client.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error de API:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default client