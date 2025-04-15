import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {PriceTag} from "./PriceTag.tsx";

describe('PriceTag', () => {
    it('should display price only when not OnSale', () => {
        render(<PriceTag currentPrice="13.99" />);
        expect(screen.queryByText('13.99€')).toBeInTheDocument();
        expect(() => screen.getByText('%')).toThrowError()
    });
    it('should display price and sold when OnSale', () => {
        render(<PriceTag currentPrice="13.99" oldPrice="14" onSale={true} discountPercent={'3'} />);
        expect(screen.getByText('13.99€')).toBeInTheDocument();
        expect(screen.queryByText('-3%')).toBeInTheDocument()
        expect(screen.getByText('14€')).toBeInTheDocument()
    });
})