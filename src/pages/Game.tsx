import { useEffect, useState } from 'react';
import './Game.scss';
import { useNavigate } from 'react-router-dom';
import { useGameRound, useGameUI } from 'store/game/game.hooks';
import { useOpponent } from '../store/players/opponent/opponent.hooks';
import { useHero } from '../store/players/hero/hero.hooks';
import HealthBar from 'components/HealthBar/HealthBar';
import Round from '../components/Round/Round';
import Action from '../components/Action/Action';
import Avatar from '../components/Avatar/Avatar';
import Dialog from 'components/Dialog/Dialog';
import AttackDialog from 'components/AttackDialog/AttackDialog';
import ActionDialog from 'components/ActionDialog/ActionDialog';
import QuestionDialog from 'components/QuestionDialog/QuestionDialog';
import Button from '../components/Button/Button';
import AriaRoundMessage from 'components/AriaScreenReader/AriaRoundMessage';

const Game: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const {
    setAnswered,
    setNextRoundAnswer,
    setGameStatus,
    dialogStage,
    action,
    difficulty,
    question,
    isCorrect,
    dialogMessage,
    helpMessage,
  } = useGameUI();

  const [currentRound, { incrementRound }] = useGameRound();

  const {
    heroCurrentHealth,
    heroMaxHealth,
    heroAttackValue,
    applyHeroAttackValue,
    setHeroCurrentHealth,
  } = useHero();

  const {
    opponentName,
    opponentCurrentHealth,
    opponentMaxHealth,
    opponentAttackValue,
    applyOpponentAttackValue,
    setOpponentAttackValue,
  } = useOpponent();

  // local useState in addition to dispatch
  const [answerForNext, setAnswerForNext] = useState('');
  const [showHelpBubble, setShowHelpBubble] = useState(false);

  useEffect(() => {
    if (isCorrect === true || isCorrect === false) {
      // when I am attacking and answer is correct, it will increase my attack value OR
      // I will attack and opponents health will decrease
      applyHeroAttackValue();
      // when I block or attack, if answer is incorrect, opponent will attack and my health will decrease
      applyOpponentAttackValue();
      if (action === 'block' && isCorrect === true) {
        setHeroCurrentHealth();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCorrect]);

  useEffect(() => {
    if (!difficulty) {
      navigate('/');
    }
  }, [difficulty, navigate]);

  const dialogStages = () => {
    if (dialogStage === 'action') {
      return <ActionDialog />;
    } else if (dialogStage === 'attacking') {
      return <AttackDialog />;
    } else if (dialogStage === 'answering' || dialogStage === 'answered') {
      return (
        <QuestionDialog
          question={question.text}
          options={question.choices}
          answer={question.answer}
          onAnswer={(theOptionOnTheButton) => {
            // sending payload to the answered slice to use isCorrect
            setAnswered(theOptionOnTheButton);
            // NOTE: applyHeroAttackValue is being used in useEffect, this will increase attack value
            // NOTE: applyOpponentAttackValue is being used in useEffect, this will apply the opponent attack value
            // local useState to set answer to use on handleClick for Next button
            setAnswerForNext(theOptionOnTheButton);
          }}
        />
      );
    }
  };

  // clicking this will end the round, perform all calculations, and set the next round
  const nextButtonHandleClick = () => {
    incrementRound();
    // this goes to GameUI
    setNextRoundAnswer(answerForNext);
    setGameStatus();
    if (difficulty !== undefined) {
      setOpponentAttackValue(difficulty);
    }
  };

  return (
    <>
      <div className="healthBarContainer">
        <HealthBar
          testID="player"
          isReversed={false}
          maxHealth={heroMaxHealth}
          currentHealth={heroCurrentHealth}
        />
        <Round currentRound={currentRound} />
        <HealthBar
          testID="opponent"
          isReversed={true}
          maxHealth={opponentMaxHealth}
          currentHealth={opponentCurrentHealth}
        />
      </div>
      <div className="avatarContainerWrapper">
        <div className="avatarActionGroup">
          <Avatar name="You" testID="foxKnight" />
        </div>
        <div className="actionIconAndValue">
          <Action
            actionState={action}
            attackValue={heroAttackValue}
            testID="player"
          />
        </div>
        <div className="nextButtonDialogMessageWrapper">
          {showHelpBubble && (
            <div className="helpBubbleGame">
              <p>{helpMessage}</p>
            </div>
          )}
          <div className="dialogMessage" data-testid="dialogMessage">
            {dialogMessage}
          </div>
          {dialogStage === 'answered' && (
            <div className="nextButtonDiv">
              <Button size="xs" onClick={nextButtonHandleClick}>
                Next
              </Button>
            </div>
          )}
        </div>

        <div className="actionIconAndValue">
          <Action
            isReversed={true}
            actionState={action}
            attackValue={opponentAttackValue}
            testID="opponent"
          />
        </div>

        <div className="avatarActionGroup group2">
          {!!opponentName && (
            <Avatar name={opponentName} testID="opponentAvatar" />
          )}
        </div>
      </div>
      <Dialog>{dialogStages()}</Dialog>
      <div className="helpButtonGame">
        <Button
          size="xs"
          onClick={() => setShowHelpBubble((prev) => !prev)}
          selected={showHelpBubble ? true : false}
        >
          ?
        </Button>
      </div>
      <AriaRoundMessage
        heroCurrentHealth={heroCurrentHealth}
        heroMaxHealth={heroMaxHealth}
        opponentCurrentHealth={opponentCurrentHealth}
        opponentMaxHealth={opponentMaxHealth}
        currentRound={currentRound}
      />
    </>
  );
};

export default Game;
