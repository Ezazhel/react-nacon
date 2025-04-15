import {ReactNode} from "react";

export type CarouselProps = {
	children: ReactNode | ReactNode[];
	className?:string;
	autoplay?:boolean;
	autoPlayInterval?: number;
}