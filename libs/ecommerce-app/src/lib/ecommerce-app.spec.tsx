import { render,screen } from '@testing-library/react';

import EcommerceApp from './ecommerce-app';
import Header from './header/header';

describe('EcommerceApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EcommerceApp />);
    expect(baseElement).toBeTruthy();
  });

  
it("Header component should be rendered", () => {
  const component = render(<Header/>);
  const childElement = component.findByTestId("headercomponent");
  expect(childElement).toBeTruthy();
});
});
