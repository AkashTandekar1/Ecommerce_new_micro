import { render, screen } from '@testing-library/react';

import App from './app';

import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

jest.mock('libs/ecommerce-app/src/lib/cards/cards', () => {
  return {
    Cards: () => <div data-testid="cards-component">Cards Component</div>,
  };
});

jest.mock('libs/ecommerce-app/src/lib/card-details/card-details', () => {
  return {
    CardDetails: () => (
      <div data-testid="cards-details-component">Cards Detail Component</div>
    ),
  };
});

jest.mock('libs/ecommerce-app/src/lib/invoice/invoices', () => {
  return {
    Invoice: () => <div data-testid="invoice-component">Invoice Component</div>,
  };
});

describe('App', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  test('Ecommercecomponent component should be rendered', () => {
    const component = render(<App />);
    console.log(component);
    const childElement = component.findByTestId('Ecommercecomponent');
    expect(childElement).toBeInTheDocument();
  });

  test('Chatbotcomponent component should be rendered', () => {
    const component = render(<App />);
    const childElement = component.findByTestId('Chatbotcomponent');
    expect(childElement).toBeInTheDocument();
  });

  test('When user is in index route(/) then render cards component ', () => {
    window.history.pushState({}, '', '/');

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByTestId('cards-component')).toBeInTheDocument();
  });

  test('When user is in card details route(/cartdetails/1) then render cards component ', () => {
    window.history.pushState({}, '', '/cartdetails/1');

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByTestId('cards-details-component')).toBeInTheDocument();
  });

  test('When user is in card details route(/invoice) then render cards component ', () => {
    window.history.pushState({}, '', '/invoice');

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByTestId('invoice-component')).toBeInTheDocument();
  });
});
