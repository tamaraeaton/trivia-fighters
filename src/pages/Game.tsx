import { useEffect, useMemo, useState } from 'react';
import './Game.scss';
import { useNavigate } from 'react-router-dom';
import { useGameUI } from 'store/game/game.hooks';
import { useOpponent } from '../store/players/opponent/opponent.hooks';
import { useHero } from '../store/players/hero/hero.hooks';
import { useActions } from '../Hooks/action.hooks';
import { increaseHeroCurrentHealth } from '../store/players/hero/hero.slice';
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
import { attack } from 'store/game/game.slice';

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
    setOpponentAttackValue,
  } = useOpponent();
  const [, { incrementRound }] = useGameRound();
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
        // increaseHeroCurrentHealth();
        setHeroCurrentHealth();
      }
    }
    // if (dialogStage === 'answered' && isCorrect) {
    //   setShowHelpBubble(false);
    // }
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

  // TODO:
  const helpMessage = useMemo(() => {
    if (dialogStage === 'action') {
      return `The opponent's health is based on the selection you chose.*** Now what action do you wish to take?
      `;
    }
    if (dialogStage === 'attacking') {
      return "A higher level of attack will give you more attack value *** The opponent's attack value is randomly generated per the difficulty you chose";
    }
    if (dialogStage === 'answering') {
      if (action === 'attack') {
        return 'Pick the correct answer and gain more attack strength.  *** An incorrect answer will trigger the attack.';
      }
      if (action === 'block') {
        return "Pick the correct answer and you will gain 10 health points.  *** An incorrect answer will trigger the opponent's attack.";
      }
    }
    if (dialogStage === 'answered' && isCorrect) {
      return 'Yay, you got the answer correct. *** Notice that your attack value is increased. *** Keep up the good work! *** Click Next to continue your attack.';
    }
    if (dialogStage === 'answered' && !isCorrect) {
      return 'Your answer is incorrect.  *** Notice that you have attacked each-other.  *** Click Next to choose your next action. ';
    }
    if (heroCurrentHealth <= 0 || opponentAttackValue >= heroCurrentHealth) {
      return 'Someone has lost all of their health.  *** Click to conclude the game.';
    }
  }, [dialogStage, action, isCorrect, heroCurrentHealth, opponentAttackValue]);

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
