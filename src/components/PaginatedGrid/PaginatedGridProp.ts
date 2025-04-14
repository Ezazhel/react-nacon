import {ReactNode} from "react";

export type PaginatedGridProp<T> = {
	data: T[];
	renderElement: (element: T) => ReactNode;
}