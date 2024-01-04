import { render, screen, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => { 
    
    test('should first', () => { 
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: 'Saitama'}});
        fireEvent.submit(form);

        screen.debug();
        const h3Saitama = screen.getByRole('heading', {name: 'Saitama'});

        expect(screen.getByText('Saitama'));
        expect(h3Saitama).toBeTruthy();

     })

 })