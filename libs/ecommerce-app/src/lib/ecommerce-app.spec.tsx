import { render } from '@testing-library/react';

import EcommerceApp from './ecommerce-app';

describe('EcommerceApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EcommerceApp />);
    expect(baseElement).toBeTruthy();
  });
});
