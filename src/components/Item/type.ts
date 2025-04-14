export type ItemProp = {
	price: { currentPrice: string, sold?: boolean, oldPrice?: string, percentage?:string},
	imgSrc?:string,
	tags?: string
}