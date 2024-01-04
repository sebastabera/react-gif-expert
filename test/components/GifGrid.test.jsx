import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from  '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en <GifGrid />', () => {

    const category = 'One Punch'

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnBalue({
            images: [],
            isloading: true
        });
        
        render(<GifGrid category={category} />);
        screen.debug();

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isloading: false
        });

        render( <GifGrid category={category} /> );
        expect( screen.getAllByRol('img') ).toBe(2);
    });
})