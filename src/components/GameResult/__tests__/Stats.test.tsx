import { render, screen } from '@testing-library/react';
import Stats from '../Stats';

const mockTimeData = {
  hours: 0,
  minutes: 1,
  seconds: 7,
};

const expectedTime = '00:01:07';

describe('Rendering stats data', () => {
  it('renders time data', () => {
    render(<Stats time={mockTimeData} />);

    expect(screen.getByText(/..:..:../i).textContent).toContain(
      expectedTime,
    );
  });
});
