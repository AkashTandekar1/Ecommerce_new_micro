import { render } from '@testing-library/react';

import CardDetails from './card-details';

describe('CardDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardDetails/>);
    expect(baseElement).toBeTruthy();
  });
});
