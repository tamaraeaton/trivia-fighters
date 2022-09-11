import { useEffect, useMemo, useState } from 'react';
import './Game.scss';
import { useNavigate } from 'react-router-dom';
import { useGameUI } from 'store/game/game.hooks';
import { useOpponent } from '../store/players/opponent/opponent.hooks';
import { useHero } from '../store/players/hero/hero.hooks';
import { useActions } from '../Hooks/action.hooks';
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
    useGameRound,
    dialogStage,
    action,
    difficulty,
    attackStrength,
    question,
    isCorrect,
  } = useGameUI();

  const [currentRound] = useGameRound();

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
  } = useOpponent();
  const [, { incrementRound }] = useGameRound();
  // local useState in addition to dispatch

  const [answerForNext, setAnswerForNext] = useState('');

  useEffect(() => {
    if (isCorrect === true || isCorrect === false) {
      // when I am attacking and answer is correct, it will increase my attack value OR
      // I will attack and opponents health will decrease

      applyHeroAttackValue();

      // when I block or attack, if answer is incorrect, opponent will attack and my health will decrease
      applyOpponentAttackValue();
      // setHeroCurrentHealth();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCorrect]);

  const actionMessage = useMemo(() => {
    if (dialogStage === 'attacking') {
      return 'Choose an attack';
    }
    if (dialogStage === 'action') {
      return 'Choose an action';
    }
    if (dialogStage === 'answered') {
      return isCorrect === undefined ? '' : isCorrect ? 'Correct' : 'Incorrect';
    }
    if (dialogStage === 'answering') {
      if (action === 'block') {
        return 'Blocking';
      }
      if (attackStrength === 'light') {
        return 'Light Attack';
      }
      if (attackStrength === 'medium') {
        return 'Medium Attack';
      }
      return 'Heavy Attack';
    }
    return '';
  }, [attackStrength, isCorrect, dialogStage, action]);

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
    // local useState captures this
    setNextRoundAnswer(answerForNext);
    // setHeroCurrentHealth();
    // NOTE: setGameStatus is on useEffect
    setGameStatus();
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
          <div className="dialogMessage" data-testid="dialogMessage">
            {actionMessage}
          </div>
          {dialogStage === 'answered' && (
            <div className="nextButtonDiv">
              <Button size="xs" onClick={() => nextButtonHandleClick()}>
                Next
              </Button>
            </div>
          )}
        </div>

        <div className="actionIconAndValue">
          {action === 'block' && (
            <Action
              isReversed={true}
              actionState={action}
              attackValue={opponentAttackValue}
              testID="opponent"
            />
          )}
        </div>

        <div className="avatarActionGroup group2">
          {!!opponentName && (
            <Avatar name={opponentName} testID="opponentAvatar" />
          )}
        </div>
      </div>
      <Dialog>{dialogStages()}</Dialog>
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
