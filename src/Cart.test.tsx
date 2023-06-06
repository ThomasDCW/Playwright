// Cart.test.tsx

import { fireEvent, render, screen } from '@testing-library/react';
import Cart from './Cart';

describe('Cart', () => {
  it('renders a button', () => {
    render(<Cart cancel={() => {}} />);
    expect(screen.getByText(/Purchase/i)).toBeInTheDocument();
  });

  describe('When user clicks purchase button', () => {
    it('renders Thank you!', () => {
      render(<Cart cancel={() => {}} />);
      fireEvent.click(screen.getByText(/Purchase/i));
      expect(screen.getByText(/Thank you !/i)).toBeInTheDocument();
    });
  });
  describe('When user clicks cancel button', () => {
    it('calls cancel function', () => {
      const cancel = jest.fn();
      render(<Cart cancel={cancel} />);
      fireEvent.click(screen.getByText(/Cancel/i));
      expect(cancel).toHaveBeenCalledTimes(1);
    });
  });
});
