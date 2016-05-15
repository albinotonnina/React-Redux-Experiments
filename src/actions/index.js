import axios from 'axios';

const API_KEY = 'd81442fef7bdfd4a8841d3e9475ab8fc';
//const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country = 'uk') {
    const url = `${ROOT_URL}&q=${city},${country}`;
    const request = axios.get(url);

    console.log('Request', request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

