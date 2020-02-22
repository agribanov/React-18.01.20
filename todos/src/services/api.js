import axios from 'axios';

export default axios.create({
    baseURL: 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos',
    headers: { 'Content-Type': 'application/json' }
});
