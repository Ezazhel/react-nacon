import {FC} from "react";
import {PriceTagProps} from "./type.ts";

export const PriceTag:FC<PriceTagProps> = ({currentPrice,sold, oldPrice,percentage}) => {


	return (<div className="bg-linear-[var(--dark-300),var(--dark-500)] w-fit rounded">
		{ sold ?
			<div className={'flex gap-2 items-center'}>
				<div className={"bg-green-900 py-3 px-1"}>
					<span className="text-green-300! text-md">-{percentage}%</span>
				</div>
				<div className="flex flex-col px-2 text-end">
					<span className="line-through text-xs text-gray-900!">{oldPrice}</span>
					<span className='text-small text-green-300!'>{currentPrice}</span>
				</div>
			</div>
			: <span className='px-2'>{currentPrice}</span>
		}
	</div>);
}