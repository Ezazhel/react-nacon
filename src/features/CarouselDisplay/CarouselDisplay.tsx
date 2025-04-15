import {Carousel} from "../../components/Carousel/Carousel.tsx";
import {useEffect, useState} from "react";
import {Item} from "../../entity/Item.ts";
import {ItemService} from "../../services/item-service.ts";
import { ItemComponent as ItemComponent} from '../../components/Item/ItemComponent.tsx';
export const CarouselDisplay = () => {
	const [items, setItems] = useState<Item[]>([]);
	const {getItems} = ItemService();

	useEffect(() => {
		const loadData = async () => {
			const items = await getItems();
			setItems(items);
		};
		loadData();
	}, [])

	return <Carousel>
		{items.map(item => <ItemComponent customStyle={'large'} {...item} />)}
	</Carousel>
}