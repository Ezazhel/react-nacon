import {ReactNode} from "react";

export type GridProps = {
	children: ReactNode;
	columns?: number;
	gap?: number; //in rem 1 rem = 16px btw
	className?: string;
}