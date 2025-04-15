import {afterEach, describe, expect, it, vi} from "vitest";
import {Carousel} from "./Carousel.tsx";
import {act, render, screen} from "@testing-library/react";
import {ItemComponent} from "../Item/ItemComponent.tsx";
import userEvent from '@testing-library/user-event';
describe('Carousel', () => {
    afterEach(() => {
        vi.useRealTimers()
    })
    it('should autoplay on launch', () => {
        vi.useFakeTimers();
        render(<Carousel autoPlayInterval={2000}>
            <ItemComponent price={{currentPrice:'14'}} name={'Item'}/>
            <ItemComponent price={{currentPrice:'2'}} name={'Item2'}/>
            <ItemComponent price={{currentPrice:'3'}} name={'Item3'}/>
        </Carousel>);
        const slides = screen.getAllByTestId(/slide-*/);
        expect(slides.length).toEqual(3);
        slides.forEach((slide,index) =>{
            if(index === 0){
                expect(slide.classList.contains('fade')).toBeTruthy();
            }else{
                expect(slide.classList.contains('hidden')).toBeTruthy();
            }
        })
        const selectors = screen.getAllByTestId(/selector-round/);
        expect(selectors[0].classList.contains('bg-black')).toBeTruthy();
        expect(selectors[1].classList.contains('bg-black')).toBeFalsy();
        act(() => {
            vi.advanceTimersByTime(2000);
        })
        expect(selectors[0].classList.contains('bg-black')).toBeFalsy();
        expect(selectors[1].classList.contains('bg-black')).toBeTruthy();
    })

    it('should change index on next', async () => {
        render(<Carousel autoplay={false}>
            <ItemComponent price={{currentPrice:'14'}} name={'Item'}/>
            <ItemComponent price={{currentPrice:'12'}} name={'Item2'}/>
        </Carousel>);
        expect(screen.getByText('Item')).toBeDefined();
        const btnNext = screen.getByTitle('Chevron Right');
        await userEvent.click(btnNext);
        expect(screen.getByTestId('slide-1').classList.contains('block')).toBeTruthy();
    })

    it('should change index on previous', async () => {
        render(<Carousel autoplay={false}>
            <ItemComponent price={{currentPrice:'14'}} name={'Item'}/>
            <ItemComponent price={{currentPrice:'12'}} name={'Item2'}/>
            <ItemComponent price={{currentPrice:'12'}} name={'Item3'}/>
        </Carousel>);
        expect(screen.getByText('Item')).toBeDefined();
        const btnPrevious = screen.getByTitle('Chevron Left');
        await userEvent.click(btnPrevious);
        expect(screen.getByTestId('slide-2').classList.contains('block')).toBeTruthy();
    })

    it('should display slide when selector is clicked', async () => {
        render(<Carousel autoplay={false}>
            <ItemComponent price={{currentPrice:'14'}} name={'Item'}/>
            <ItemComponent price={{currentPrice:'12'}} name={'Item2'}/>
            <ItemComponent price={{currentPrice:'12'}} name={'Item3'}/>
        </Carousel>);
        const selector = screen.getAllByTestId(/selector-round/);
        await userEvent.click(selector[1]);
        expect(screen.getByTestId('slide-1').classList.contains('block')).toBeTruthy();
    })
})