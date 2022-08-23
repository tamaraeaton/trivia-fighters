import { screen, render } from '@testing-library/react';
import Home from 'pages/Home';
import { renderWithProviders } from 'testHelpers';
// import * as GameHooks from 'store/game/game.hooks';

describe('Home Page', () => {
  // EXAMPLE TEST
  // this is written for use with the redux store
  // by rendering RederWithProviders, it does not use redux store
  // the tests are written with mock data on the mock-game-state

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

  it('should say Trivia Fighters', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('headline')).toHaveTextContent('TRIVIA FIGHTERS');
  });

  it('button has context Easy', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('easy')).toHaveTextContent('Easy');
  });

  it('button has context Medium', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('medium')).toHaveTextContent('Medium');
  });

  it('button has context Seth', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('seth')).toHaveTextContent('Seth');
  });
});
