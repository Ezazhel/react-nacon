import {Item} from "../entity/Item.ts";

export const ItemService = () => {
	const getItems = async () => {
		try {
			const response = await fetch('/data.json');
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