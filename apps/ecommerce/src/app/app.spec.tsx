import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './app';

import EcommerceApp from 'libs/ecommerce-app/src/lib/ecommerce-app';

import CardDetails from 'libs/ecommerce-app/src/lib/card-details/card-details';
import Cards from 'libs/ecommerce-app/src/lib/cards/cards';
import Chatbot from 'libs/ecommerce-app/src/lib/chatbot/chatbot';
import Invoice from 'libs/ecommerce-app/src/lib/invoice/invoice';


import React from 'react'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('Ecommercecomponent component should be rendered', () => {
    const component = render(<App />);
    console.log(component);
    const childElement = component.findByTestId('Ecommercecomponent');
    expect(childElement).toBeTruthy();
  });

  it('Chatbotcomponent component should be rendered', () => {
    const component = render(<App />);
    const childElement = component.findByTestId('Chatbotcomponent');
    expect(childElement).toBeTruthy();
  });

  test('full app rendering/navigating', async () => {
    render(<App />, {wrapper: BrowserRouter})
    const user = userEvent.setup()


    // verify page content for default route
    expect(screen.findAllByRole("Button")).toBeInTheDocument()


    
  // verify page content for expected route after navigating
  await user.click(screen.getByText(/cartdetails/id//i)
  
  })
});
