import {Children, FC, useEffect, useState} from "react";
import {CarouselProps} from "./CarouselProps.ts";
import './Carousel.css'

export const Carousel: FC<CarouselProps> = ({className, children,autoplay = true, autoPlayInterval = 3000}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const _children = Array.isArray(children) ? children: [children]
	const total = _children.length;

	// L'utilisation du modulo, permet de ne pas avoir à créer de if pour revenir au premier ou au dernier item

	const next = () => setCurrentIndex((prev) => (prev + 1) % total);
	const previous = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

	useEffect(() => {
		if(!autoplay || total === 1) return;
		const timer = setInterval(() => {
			next();
		}, autoPlayInterval);

		return () => clearInterval(timer);
	}, [currentIndex, total]);

	return (
		<div className={`relative flex flex-col gap-4 ${className} mx-auto overflow-hidden md:max-w-[1124px]`}>
			<div className={'relative'}>

			<button
				type={'button'}
				data-testid={'previous-btn'}
				onClick={previous}
				title='Chevron Left'
				className="chevron linear-blue top-1/2 left-0"
			>
				&#10094;
			</button>
				{Children.map(children, (child, index) => (
					<div key={index}
						 data-testid={`slide-${index}`}
					className={`fade ${currentIndex === index ? 'block max-w-[calc(100%-90px)] mx-auto': 'hidden'}`}>
						{child}
					</div>
				))}

			<button
				type={'button'}
				data-testid={'next-btn'}
				title='Chevron Right'
				onClick={next}
				className="chevron linear-blue top-1/2 right-0"
			>
				&#10095;
			</button>
			</div>
			<div className="flex gap-2 self-center">
				{_children.map((_, index) => (
					<button
						key={index}
						data-testid={`selector-round-${index}`}
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