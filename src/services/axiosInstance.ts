import axios from 'axios';
import { TOKEN } from '../data/constants';

// creating a axios insteance to handle the rest services, with the concatenated token for each request 
export const apiUrl = axios.create({
    baseURL: 'https://api.mobile.biodata.group',
    headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});