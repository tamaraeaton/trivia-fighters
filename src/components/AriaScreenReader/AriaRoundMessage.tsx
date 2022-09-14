import { FunctionComponent } from 'react';
interface AriaRoundMessageProps {
  heroCurrentHealth: number;
  heroMaxHealth: number;
  opponentCurrentHealth: number;
  opponentMaxHealth: number;
  currentRound: number;
}

const AriaRoundMessage: FunctionComponent<AriaRoundMessageProps> = ({
  heroCurrentHealth,
  heroMaxHealth,
  opponentCurrentHealth,
  opponentMaxHealth,
  currentRound,
}) => {
  return (
    <p aria-live="polite" className="sr-only" data-testid="aria message">
      You are at {heroCurrentHealth} of {heroMaxHealth} health. Your opponent is
      at {opponentCurrentHealth} of {opponentMaxHealth}, starting Round
      {currentRound}
    </p>
  );
};

export default AriaRoundMessage;
