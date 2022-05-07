import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserGuess from '../UserGuess';

const mockStyle = {};

const mockRemainingCharacters: RemainingCharacters = {
  yuna: true,
  kratos: true,
  ratchet: true,
};

describe('Rendering', () => {
  it('Renders dropdown', () => {
    const mockOnUserGuess = jest.fn();

    render(
      <UserGuess
        onUserGuess={mockOnUserGuess}
        x={1}
        y={1}
        style={mockStyle}
        remainingCharacters={mockRemainingCharacters}
      />,
    );

    const dropdown = screen.getAllByText(/./i);

    dropdown.forEach((option) => expect(option).toBeInTheDocument());
  });
});

describe('Event handling', () => {
  it('Calls event handler when user makes a guess', () => {
    const mockOnUserGuess = jest.fn();
    render(
      <UserGuess
        onUserGuess={mockOnUserGuess}
        x={1}
        y={1}
        style={mockStyle}
        remainingCharacters={mockRemainingCharacters}
      />,
    );

    const firstOption = screen.getAllByText(/./i)[0];

    userEvent.click(firstOption);

    expect(mockOnUserGuess).toHaveBeenCalled();
  });

  it('Calls event handler when user makes a guess with the correct data', () => {
    const mockOnUserGuess = jest.fn();
    render(
      <UserGuess
        onUserGuess={mockOnUserGuess}
        x={1}
        y={1}
        style={mockStyle}
        remainingCharacters={mockRemainingCharacters}
      />,
    );

    const firstOption = screen.getAllByText(/./i)[0];

    userEvent.click(firstOption);

    expect(mockOnUserGuess).toHaveBeenCalledWith(
      firstOption.textContent,
      1,
      1,
    );
  });
});
