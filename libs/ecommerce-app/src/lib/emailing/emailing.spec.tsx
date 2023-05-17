import { render } from '@testing-library/react';

import Emailing from './emailing';

describe('Emailing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Emailing />);
    expect(baseElement).toBeTruthy();
  });
});
