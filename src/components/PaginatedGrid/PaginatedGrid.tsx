import {useState} from "react";
import {PaginatedGridProp} from "./PaginatedGridProp.ts";
import {Grid} from "../Grid/Grid.tsx";

export const PaginatedGrid = <T,>({renderElement, data}:PaginatedGridProp<T>) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const itemsPerPage = 12;

	// Calcul des objets à afficher sur la page actuelle
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	// Nombre total de pages
	const totalPages = Math.ceil(data.length / itemsPerPage);
	const displayPages = Array.from({length: totalPages}, (_,index) => index+1);

	return (
		<>
		<div className="mx-auto flex flex-col gap-4 items-center">
		<Grid >
			{currentItems.map(item => renderElement(item))}
		</Grid>

			<div className="text-white flex flex-row gap-2">
				{displayPages.map((pageNumber: number) =>
					<button className={`p-4 hover:underline ${currentPage === pageNumber ? 'underline text-xl' : ''}`} onClick={() => setCurrentPage(pageNumber)} disabled={currentPage === pageNumber}>
						{pageNumber}
					</button>
			)}
			</div>
		</div>
		</>
	)
}