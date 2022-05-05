import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PlayAgain from '../PlayAgain';

describe('Event handling', () => {
  it('calls event handler when the button is clicked', () => {
    const mockOnClick = jest.fn();

    render(<PlayAgain onClick={mockOnClick} />);

    userEvent.click(screen.getByRole('button', { name: /play again/i }));

    expect(mockOnClick).toHaveBeenCalled();
  });
});
