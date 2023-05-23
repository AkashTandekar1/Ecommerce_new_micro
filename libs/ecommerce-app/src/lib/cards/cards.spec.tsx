import { fireEvent, render, screen } from '@testing-library/react';

import Cards from './cards';


describe('Cards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cards />);
    expect(baseElement).toBeTruthy();
  });

  it('Clicking add to cart to add the items in the cart ', async () => {
    render(<Cards />);
    const Addtocartbutton = await screen.getByRole("button")
    fireEvent.click(Addtocartbutton);
    expect(await screen.findByText("Item has been added in the cart!")).toBeInTheDocument();

  });
});
