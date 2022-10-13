import { API_HOST } from '../utils/constants';
import axios from 'axios';

export async function getPokemonsApi(nexturl) {
    console.log(nexturl);
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0` //20 por pag, empiece por el poke 0
        const response = await axios.get(nexturl || url);
        const result = {
            data: response.data.results,
            next: response.data.next
        };
        // console.log(response.data);
        return result;
    } catch (error) {
        throw error; 
    }
};

export async function getPokemonsDeatilsByUrlApi(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error; 
    }
};

export async function getPokemonDetailtsApi(id) {
    try {
        const url = `${API_HOST}/pokemon/${id}`
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(error);
    }
}