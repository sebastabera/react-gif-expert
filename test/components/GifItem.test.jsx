import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Pruebas en <GifItem />', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama'
    
    test('Debe hacer match con el snapshop', () => { 
        
        const {container} = render(<GifItem title={title} url={url} />);
        expect (container).toMatchSnapshot();
     })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render(<GifItem title={title} url={url} />);
        //screen.debug();

        const {alt, src} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
     });

     test('Debe de mostrar el titulo en el componente', () => { 
        
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

      })

 })