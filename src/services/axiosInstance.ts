import axios from 'axios';
import { TOKEN } from '../data/constants';

export const apiUrl = axios.create({
    baseURL: 'https://api.mobile.biodata.group',
    headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});