import {Price} from "./Price.ts";

export interface Item {
	price: Price,
	imgSrc?:string,
	name: string
	tags?: string
}