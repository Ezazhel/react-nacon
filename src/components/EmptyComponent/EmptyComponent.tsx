import {FC} from "react";

export const EmptyComponent: FC = () => {
	return <div data-testid={'empty-component'} className={'text-white text-xl text-bold'}>There is no data to display</div>
}