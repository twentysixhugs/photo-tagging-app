import { render, screen } from '@testing-library/react';
import Header from '../Header';

function renderHeader(
  hours: number,
  minutes: number,
  seconds: number,
  isGameStarted: boolean,
) {
  const mockTimerData: ITimerData = {
    hours,
    minutes,
    seconds,
  };

  render(
    <Header isGameStarted={isGameStarted} timerData={mockTimerData} />,
  );
}

describe("Header's response to game state", () => {
  describe('Characters', () => {
    it('should not display characters before game starts', () => {
      render(<Header isGameStarted={false} />);

      const characters = screen.queryAllByRole('img');

      expect(characters).toEqual([]);
    });

    it('should not display the timer before game starts', () => {
      render(<Header isGameStarted={false} />);

      const timer = screen.queryByText(/..:..:../i);

      expect(timer).toBeNull();
    });

    it('should display characters after game starts', () => {
      renderHeader(0, 1, 2, true);

      const characters = screen.getAllByRole('img');

      characters.forEach((character) =>
        expect(character).toBeInTheDocument(),
      );
    });
  });

  describe('Timer', () => {
    it('should display the timer after game starts', () => {
      renderHeader(0, 1, 2, true);

      const timer = screen.getByText(/..:..:../i);

      expect(timer).toBeInTheDocument();
    });

    it('should format timer when time units are less than 10', () => {
      renderHeader(0, 1, 2, true);

      const timer = screen.getByText(/..:..:../i);

      expect(timer).toHaveTextContent('00:01:02');
    });

    it('should format timer when time units are more than 10', () => {
      renderHeader(11, 11, 11, true);

      const timer = screen.getByText(/..:..:../i);

      expect(timer).toHaveTextContent('11:11:11');
    });

    it('should update the timer', () => {
      const mockTimerData: ITimerData = {
        hours: 0,
        minutes: 1,
        seconds: 2,
      };

      const { rerender } = render(
        <Header isGameStarted={true} timerData={mockTimerData} />,
      );

      mockTimerData.minutes = 2;

      rerender(<Header isGameStarted={true} timerData={mockTimerData} />);

      const timer = screen.getByText(/..:..:../i);

      expect(timer).toHaveTextContent('00:02:02');
    });
  });
});
