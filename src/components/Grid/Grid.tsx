import {FC} from "react";
import {GridProps} from "./type.ts";

export const Grid: FC<GridProps> = ({className, children, gap = 1, columns = 4 }) => {
	//tailwind removing unknown declaration of className on build we need to manage style the old way.
	const style = {
		gap: `${gap}rem`,
		display:'grid',
		maxWidth: `${1024+16*gap*columns}px`, //1 rem = 16px
		gridTemplateColumns: `repeat(auto-fit, minmax(calc(${100/ columns}% - ${gap}rem), 1fr))` // using the RAM pattern of grid we have a responsive grid.
	}
	return <div className={className} style={style}>
		{children}
	</div>
}