import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it("should find Konada Title", async () => { // Use async here
        render(<App />);
        const appElements = await screen.findAllByTitle('Konada'); // Use await with findAllByTitle
        expect(appElements.length).toBeGreaterThan(0); // Check that the array is not empty
    });
});
