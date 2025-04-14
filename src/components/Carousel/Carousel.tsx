import {Children, FC, useRef} from "react";
import {CarouselProps} from "./CarouselProps.ts";
import './Carousel.css'

export const Carousel: FC<CarouselProps> = ({className, children}) => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (scrollRef.current) {
			const scrollAmount =
				direction === "left"
					? -scrollRef.current.offsetWidth
					: scrollRef.current.offsetWidth;
			scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	return (
		<div className={`relative flex flex-row gap-4 max-w-[1168px] ${className} mx-auto`}>
			<button
				type={'button'}
				onClick={() => scroll("left")}
				title='Chevron Left'
				className="chevron linear-blue self-center"
			>
				&#8249;
			</button>

			<div
				ref={scrollRef}
				className="flex overflow-x-auto no-scrollbar scroll-smooth"
			>
				{Children.map(children, (child, index) => (
					<div
						style={{ minWidth: '1054px' }}
						key={index}
					>
						{child}
					</div>
				))}
			</div>

			<button
				type={'button'}
				title='Chevron Right'
				onClick={() => scroll("right")}
				className="chevron linear-blue self-center"
			>
				&#8250;
			</button>
		</div>
	);
}