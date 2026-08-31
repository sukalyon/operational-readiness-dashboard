import axios from 'axios';
import type { Asset } from '../types/Asset';

const API_BASE_URL = 'http://localhost:8080/api/assets';

export async function fetchAssets(): Promise<Asset[]> {
    const response = await axios.get<Asset[]>(API_BASE_URL);
    return response.data;
}
