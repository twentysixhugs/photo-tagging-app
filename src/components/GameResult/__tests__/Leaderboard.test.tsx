import { render, screen } from '@testing-library/react';
import Leaderboard from '../Leaderboard';

/* It already comes from the backend in ascending order,
 so there's no need to test the order */
const mockScoresData: string[] = [
  '00:00:01',
  '00:00:02',
  '00:00:03',
  '00:00:04',
  '00:00:05',
  '00:00:06',
  '00:00:07',
  '00:00:08',
  '00:00:09',
  '00:00:10',
];

describe('Leaderboard', () => {
  it('renders scores data', () => {
    render(<Leaderboard scoresData={[...mockScoresData]} />);

    const leaderboardEntries = screen.getAllByText(/..:..:../i);

    leaderboardEntries.forEach((entry, i) =>
      expect(entry.textContent).toContain(mockScoresData[i]),
    );
  });

  it("shows the number of player's place in each entry", () => {
    // 1. 00:00:01
    // 2. 00:00:02
    // etc.
    render(<Leaderboard scoresData={[...mockScoresData]} />);
    const leaderboardEntries = screen.getAllByText(/..:..:../i);

    leaderboardEntries.forEach((entry, i) =>
      expect(entry.textContent).toContain(String(i + 1)),
    );
  });
});
