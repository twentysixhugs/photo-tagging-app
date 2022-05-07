import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Game from '../Game';

describe('Integration in game', () => {
  const mockRemainingCharacters: RemainingCharacters = {
    yuna: true,
    kratos: true,
    ratchet: true,
  };
  it('shows targeting box when the screen is clicked', async () => {
    const { container } = render(
      <Game
        targetingBoxSize={30}
        onUserGuess={jest.fn()}
        remainingCharacters={mockRemainingCharacters}
        shouldHideTargetingBox={false}
      />,
    );

    userEvent.click(document.querySelector('.c-game') as HTMLElement);

    expect(container.querySelector('.c-user-guess')).toBeInTheDocument();
  });
});
