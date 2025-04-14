import {FC} from "react";
import {PriceTag} from "../PriceTag/PriceTag.tsx";
import {ItemProp} from "./type.ts";
import './Item.css';

export const Item: FC<ItemProp> = ({price}) => {
	return <div className='relative bg-white item border w-[256px] h-[256px] grid grid-rows-[67%_33%] justify-start rounded overflow-hidden
	hover:-translate-y-1'>
		<div className='p-2'>
			<img alt='display of the mtx'
				 src='https://media.nacongaming.com/media/catalog/product/x/b/xbxrevolutionxu_main.webp?width=300&height=235&store=nacon_fr&image-type=small_image'/>
		</div>
		<div className='bg-linear-[#868F96,#596164] py-2 px-4 text-start'>
			<PriceTag {...price} />
		</div>
	</div>
}