export type PriceTagProps = {
	currentPrice: string;
	oldPrice?:string;
	onSale?: boolean;
	discountPercent?:string;
	className?:string;
}