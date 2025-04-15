import {Price} from "../../entity/Price.ts";

export type ItemProp = {
	price: Price,
	imgSrc?:string,
	name: string
	tags?: string
	customStyle?: 'small'|'large';
}