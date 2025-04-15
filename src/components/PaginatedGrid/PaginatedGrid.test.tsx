import { describe, expect, it } from "vitest";
import {render, screen} from "@testing-library/react";
import {PaginatedGrid} from "./PaginatedGrid.tsx";
import {ItemComponent} from "../Item/ItemComponent.tsx";
import {Item} from "../../entity/Item.ts";

describe('PaginatedGrid', () => {
	it('should render a Grid', () => {
		const items: Item[] = [
			{
				price: {currentPrice: '12'},
				name: 'Item1'
			},
			{
				price: {currentPrice: '1'},
				name: 'Item2'
			}
		]
			render(<PaginatedGrid data={items} renderElement={(item:Item, index) => <ItemComponent key={index} {...item} />}/>)
		expect(screen.getAllByText(/Item/)).toHaveLength(2);
		expect(screen.getByTestId('grid-container')).toBeInTheDocument();
	})

	it('should render empty state when no data fetch', () => {
		render(<PaginatedGrid data={[]} renderElement={(item:Item, index) => <ItemComponent key={index} {...item} />}/>)
		expect(screen.getByTestId('empty-component')).toBeInTheDocument();
	})
});