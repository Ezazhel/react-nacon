import {FC} from "react";
import {PriceTag} from "../PriceTag/PriceTag.tsx";
import {ItemProp} from "./type.ts";
import './Item.css';

export const Item: FC<ItemProp> = ({price,name}) => {
	return <div className='relative bg-white item border w-[256px] h-[256px] grid grid-rows-[67%_33%] justify-start rounded overflow-hidden
	hover:-translate-y-1'>
		<div className='p-2'>
			<img alt='display of the mtx'
				 src='https://placehold.co/600x400'/>
		</div>
		<div className='linear-blue py-2 px-4 text-start flex flex-col justify-between'>
			<span>{name}</span>
			<PriceTag className={'self-end justify-self-end'} {...price} />
		</div>
	</div>
}