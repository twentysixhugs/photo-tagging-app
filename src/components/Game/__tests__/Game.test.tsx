import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Game from '../Game';

describe('Integration in game', () => {
  it('shows targeting box when the screen is clicked', async () => {
    const { container } = render(<Game onUserGuess={jest.fn()} />);

    userEvent.click(document.querySelector('.c-game') as HTMLElement);

    expect(container.querySelector('.c-user-guess')).toBeInTheDocument();
  });
});
