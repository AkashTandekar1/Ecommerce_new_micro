import { render, within, screen, fireEvent } from '@testing-library/react';

import CardDetails from './card-details';
import '@testing-library/jest-dom';
import App from 'apps/ecommerce/src/app/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { unmountComponentAtNode } from 'react-dom';
import { Routes, Route, MemoryRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import * as router from 'react-router';

export interface card {
  id: number;
  rname: string;
  imgdata: string;
  address: string;
  delimg: string;
  somedata: string;
  price: number;
  rating: string;
  arrimg: string;
  qnty: number;
}

let navigate = jest.fn();

describe('CardDetails', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<CardDetails />);
    expect(baseElement).toBeTruthy();
  });

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  });

  test('should render Items Details Page as text', () => {
    render(<CardDetails />);
    const { getByText } = within(screen.getByTestId('item-details-page'));
    expect(getByText('Items Details Page')).toBeInTheDocument();
  });

  test('Increasing the total and quantities of the item', () => {
    render(
      <MemoryRouter initialEntries={['/cartdetails/1']}>
        <App />
      </MemoryRouter>
    );
    const Addbtn = screen.getByTestId('adding-item');
    const totaldata = screen.getByTestId('quantity-data');
    fireEvent.click(Addbtn);
    expect(totaldata.nodeValue).toHaveLength(1 || 2);
  });

  test('decreasing the total and quantities of the items', () => {
    render(
      <MemoryRouter initialEntries={['/cartdetails/1']}>
        <App />
      </MemoryRouter>
    );
    const Dltbtn = screen.getByTestId('deleting-item');
    const totaldata = screen.getByTestId('quantity-data');
    fireEvent.click(Dltbtn);
    expect(totaldata.nodeValue).toHaveLength(1 || 2);
  });

  it('Clicking on delete icon page should redirect to home page', () => {
    render(<CardDetails />);
    const deletebtn = screen.getByTestId('trash-icon');
    fireEvent.click(deletebtn);
    expect(navigate).toHaveBeenCalledWith('/');
  });
});
