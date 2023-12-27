import axios from 'axios';

export const apiUrl = axios.create({
    baseURL: 'https://api.mobile.biodata.group',
    headers: {
        'Authorization': 'Bearer wPC55oZEmOoe4vqLVMxdcXzOHKnsYTHm',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});