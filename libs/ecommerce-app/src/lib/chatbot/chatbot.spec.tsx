import { render } from '@testing-library/react';

import Chatbot from './chatbot';

describe('Chatbot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Chatbot />);
    expect(baseElement).toBeTruthy();
  });
});
