import {FC} from "react";
import {GridProps} from "./type.ts";

export const Grid: FC<GridProps> = ({className, children }) => {
	return <div data-testid={'grid-container'} className={'max-w-[calc(1024px+(16px*3))] w-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 '+className}>
		{children}
	</div>
}