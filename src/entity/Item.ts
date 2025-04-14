import {Price} from "./Price.ts";

export interface Item {
	price: Price,
	imgSrc?:string,
	title: string
	tags?: string
}