import React from 'react';
import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import Header from "../components/layouts/Header"


describe('Test Header', ()=>{
    it('Title Header', ()=>{
        const { getByText } = render(<Header theme="dark"/>);
        const title = getByText('Países do Mundo');
        expect(title).toBeInTheDocument();

    });

})