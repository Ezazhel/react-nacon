import { describe, expect, it } from "vitest";
import {render, screen} from "@testing-library/react";
import { ItemComponent } from './ItemComponent.tsx';

describe('ItemComponent', () => {
    it('renders correctly', () => {
        render(<ItemComponent price={{currentPrice: '14'}} name={'Test'} />);
        expect(screen.getByText('14€')).toBeInTheDocument();
        expect(screen.getByText('Test')).toBeInTheDocument()
    });
});