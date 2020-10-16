import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    // Não é https porque nossa aplicação não está online ainda.
    // 3333 porque é o endereço do backend; é esse endereço que queremos.
});

export default api;