import {render, screen} from "@testing-library/react";
import {ItemComponent} from "../Item/ItemComponent.tsx";
import {Grid} from "./Grid.tsx";
import {describe, expect, it } from "vitest";

describe('Grid', () => {
    it('should render two item with correct value', () => {
        render(<Grid>
            <ItemComponent price={{currentPrice:"14"}} name={"Item1"}/>
            <ItemComponent price={{discountPercent: '10', currentPrice:"13", oldPrice:'15',onSale:true}} name={"Item2"}/>
        </Grid>)
        //item1
        expect(screen.getByText('Item1')).toBeInTheDocument();
        expect(screen.getByText('14€')).toBeInTheDocument();

        //item2
        expect(screen.getByText('Item2')).toBeInTheDocument();
        expect(screen.getByText('13€')).toBeInTheDocument();
        expect(screen.getByText('15€')).toBeInTheDocument();
        expect(screen.getByText('-10%')).toBeInTheDocument();
    })

    it('should render when there is not item', () => {
        render(<Grid></Grid>)
        expect(screen.queryByTestId('grid-container')).toBeInTheDocument();
    })
})