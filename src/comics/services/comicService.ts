
import comicApi from '../../api/comic-api';
import type { Comic } from '../interfaces/comic'; 

  export async function getComic(id: number): Promise<Comic> {
  try {

    const response = await comicApi.get<Comic>(`/${id}/info.0.json`);
    return response.data;
  } catch (error) {
    console.log('error', error)
    throw new Error(`Error al obtener el comic: ${error}`);
  }
}