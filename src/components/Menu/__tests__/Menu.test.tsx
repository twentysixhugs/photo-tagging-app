import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Menu from '../Menu';

describe('Menu', () => {
  const onGameStart = jest.fn();

  it('should show rules', () => {
    render(<Menu onGameStart={onGameStart} />);

    expect(
      screen.getByRole('heading', { name: /rules/i }),
    ).toBeInTheDocument();
  });

  it('should show three images', () => {
    render(<Menu onGameStart={onGameStart} />);
    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(3);
  });

  it('should show start button', () => {
    render(<Menu onGameStart={onGameStart} />);
    const startButton = screen.getByRole('button', {
      name: /start|play/i,
    });

    expect(startButton).toBeInTheDocument();
  });

  it('calls start button event when the button is clicked', () => {
    render(<Menu onGameStart={onGameStart} />);
    const startButton = screen.getByRole('button', {
      name: /start|play/i,
    });

    userEvent.click(startButton);

    expect(onGameStart).toHaveBeenCalled();
  });
});
