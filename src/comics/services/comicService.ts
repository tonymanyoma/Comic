
import comicApi from '../../api/comic-api';
import type { Comic } from '../interfaces/comic'; // Importa la interfaz User desde el archivo types/user.ts

export async function getUser(id: number): Promise<Comic> {
  try {
    const response = await comicApi.get<Comic>('/614/info.0.json');
    return response.data;
  } catch (error) {
    throw new Error(`Error al obtener el comic: ${error}`);
  }
}