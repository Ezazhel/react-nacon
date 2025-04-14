import {Children, FC, useEffect, useState} from "react";
import {CarouselProps} from "./CarouselProps.ts";
import './Carousel.css'

export const Carousel: FC<CarouselProps> = ({className, children}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const total = children.length;

	// L'utilisation du modulo, permet de ne pas avoir à créer de if pour revenir au premier ou au dernier item

	const next = () => setCurrentIndex((prev) => (prev + 1) % total);
	const previous = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

	useEffect(() => {
		const timer = setInterval(() => {
			next();
		}, 3000);

		return () => clearInterval(timer);
	}, [currentIndex, total]);

	return (
		<div className={`relative flex flex-col gap-4 ${className} mx-auto overflow-hidden max-w-[1124px]`}>
			<div className={'relative'}>

			<button
				type={'button'}
				onClick={previous}
				title='Chevron Left'
				className="chevron linear-blue top-1/2 left-0"
			>
				&#10094;
			</button>
				{Children.map(children, (child, index) => (
					<div key={index}
					className={`fade ${currentIndex === index ? 'block': 'hidden'}`}>
						{child}
					</div>
				))}

			<button
				type={'button'}
				title='Chevron Right'
				onClick={next}
				className="chevron linear-blue top-1/2 right-0"
			>
				&#10095;
			</button>
			</div>
			<div className="flex gap-2 self-center">
				{children.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-3 h-3 rounded-full ${
							index === currentIndex ? "bg-black" : "bg-gray-300"
						}`}
					/>
				))}
			</div>
		</div>
	);
}