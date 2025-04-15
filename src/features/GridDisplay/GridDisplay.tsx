import {PaginatedGrid} from "../../components/PaginatedGrid/PaginatedGrid.tsx";
import {ItemComponent as ItemComponent} from "../../components/Item/ItemComponent.tsx";
import {useEffect, useState} from "react";
import {Item} from "../../entity/Item.ts";
import {ItemService} from "../../services/item-service.ts";

export const GridDisplay = () => {
	const [items, setItems] = useState<Item[]>([]);
	const {getItems} = ItemService();

	useEffect(() => {
		const loadData = async () => {
			const items = await getItems();
			setItems(items);
		};
		loadData();
	}, [])

	return 	(
		<PaginatedGrid data={items.sort((a,b) => Number(b.price.onSale) - Number(a.price.onSale))} renderElement={(item,index) => <ItemComponent key={index} {...item}/>} />
	)
}