import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserGuess from '../UserGuess';

describe('Rendering', () => {
  it('Renders dropdown', () => {
    const mockOnUserGuess = jest.fn();

    render(<UserGuess onUserGuess={mockOnUserGuess} />);

    const dropdown = screen.getAllByText(/./i);

    dropdown.forEach((option) => expect(option).toBeInTheDocument());
  });
});

describe('Event handling', () => {
  it('Calls event handler when user makes a guess', () => {
    const mockOnUserGuess = jest.fn();
    render(<UserGuess onUserGuess={mockOnUserGuess} />);

    const firstOption = screen.getAllByText(/./i)[0];

    userEvent.click(firstOption);

    expect(mockOnUserGuess).toHaveBeenCalled();
  });
});
