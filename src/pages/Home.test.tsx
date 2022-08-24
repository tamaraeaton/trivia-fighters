import { screen, render } from '@testing-library/react';
import Home from 'pages/Home';
import { renderWithProviders } from 'testHelpers';
// import * as GameHooks from 'store/game/game.hooks';

describe('Home Page', () => {
  // EXAMPLE TESTS
  // let useGameRoundSpy: jest.SpyInstance;
  // let incrementRoundSpy: jest.Mock;

  // beforeEach(() => {
  //   incrementRoundSpy = jest.fn();
  //   useGameRoundSpy = jest.spyOn(GameHooks, 'useGameRound');
  //   useGameRoundSpy.mockReturnValue([2, { incrementRound: incrementRoundSpy }]);
  // });

  // afterEach(() => {
  //   useGameRoundSpy.mockRestore();
  // });

  // it('should render the current round', () => {
  //   render(<Home />);
  //   expect(screen.getByRole('heading')).toHaveTextContent('Round: 2');
  // });

  // it('should call incrementRound when the button is clicked', () => {
  //   render(<Home />);
  //   fireEvent.click(screen.getByRole('button'));

  //   expect(incrementRoundSpy).toHaveBeenCalled();
  // });

  it('should say Trivia Fighters and render content per each button', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('headline')).toHaveTextContent('TRIVIA FIGHTERS');
    expect(screen.getByTestId('easy')).toHaveTextContent('Easy');
    expect(screen.getByTestId('medium')).toHaveTextContent('Medium');
    expect(screen.getByTestId('seth')).toHaveTextContent('Seth');
  });
});
