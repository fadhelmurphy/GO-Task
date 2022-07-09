import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import Button from '../components/button';

describe('Photos Component', () => {
 
    it('button render crashing', () => {  
        const handleClick = jest.fn()
        render(<Button onClick={handleClick}>Click Me</Button>)
        fireEvent.click(screen.getByText(/click me/i))
        expect(handleClick).toHaveBeenCalledTimes(1)
    });
  })

