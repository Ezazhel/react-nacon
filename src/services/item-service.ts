import {Item} from "../entity/Item.ts";
const BASE_URL = import.meta.env.BASE_URL;
export const ItemService = () => {
	const getItems = async () => {
		try {
			const response = await fetch(`${BASE_URL}data.json`);
			if (!response.ok) {
				throw new Error('Erreur de chargement du fichier JSON');
			}
			const data: Item[] = await response.json();
			return data;
		} catch (error) {
			console.error('Erreur lors du fetch local:', error);
			return [];
		}
	}

	return { getItems };
}