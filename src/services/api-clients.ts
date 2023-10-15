import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[]
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'028a9b53c4314c248d2b5cfee4d384b8'
    }
})