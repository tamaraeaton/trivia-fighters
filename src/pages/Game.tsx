import { useEffect, useMemo, useState } from 'react';
import './Game.scss';
import {
  useGameActions,
  useGameRound,
  useGameSelectors,
} from 'store/game/game.hooks';
import HealthBar from 'components/HealthBar/HealthBar';
import Round from '../components/Round/Round';
import Action from '../components/Action/Action';
import Avatar from '../components/Avatar/Avatar';
import Dialog from 'components/Dialog/Dialog';
import AttackDialog from 'components/AttackDialog/AttackDialog';
import ActionDialog from 'components/ActionDialog/ActionDialog';
import QuestionDialog from 'components/QuestionDialog/QuestionDialog';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import {
  useOpponentSelectors,
  useOpponentActions,
} from '../store/opponent/opponent.hooks';
import { useHeroSelectors, useHeroActions } from '../store/hero/hero.hooks';

const Game: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { setAnswered, setNextRoundAnswer } = useGameActions();
  const {
    dialogStage,
    action,
    difficulty,
    attackStrength,
    question,
    isCorrect,
  } = useGameSelectors();

  const { applyHeroAttackValue, increaseHeroHealth } = useHeroActions();
  const { opponentCurrentHealth, opponentAttackValue } = useOpponentSelectors();
  const { applyOpponentAttackValue } = useOpponentActions();
  const { heroCurrentHealth, heroAttackValue } = useHeroSelectors();
  const [, { incrementRound }] = useGameRound();
  // 2-way binding in addition to dispatch
  const [answerForNext, setAnswerForNext] = useState('');

  useEffect(() => {
    if (isCorrect === true || isCorrect === false) {
      applyHeroAttackValue();
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

  const avatarDifficulty = () => {
    let name = 'Wizard Pig';
    let testID = 'wizardPig';

    switch (difficulty) {
      case 'medium':
        name = 'Barbarbian Bunny';
        testID = 'barbarianBunny';
        break;
      case 'seth':
        name = 'Dragon Seth';
        testID = 'dragonSeth';
        break;
    }

    return <Avatar name={name} testID={testID} />;
  };

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
            // capturing for the answered
            setAnswered(theOptionOnTheButton);
            //capturing for the Next button to send to answeredVerify
            setAnswerForNext(theOptionOnTheButton);
          }}
        />
      );
    }
  };

  const nextButtonHandleClick = () => {
    incrementRound();
    setNextRoundAnswer(answerForNext);
    applyOpponentAttackValue();
    increaseHeroHealth();
  };

  return (
    <>
      <div className="healthBarContainer">
        <HealthBar
          testID="playerHealthBar"
          isReversed={false}
          maxHealth={100}
          currentHealth={heroCurrentHealth}
        />
        <Round />
        <HealthBar
          testID="opponentHealthBar"
          isReversed={true}
          maxHealth={150}
          currentHealth={opponentCurrentHealth}
        />
      </div>
      <div className="avatarContainerWrapper">
        <div className="avatarActionGroup">
          <Action actionState={action} attackValue={heroAttackValue} />
          <Avatar name="You" testID="foxKnight" />
        </div>
        <div className="nextButtonWrapper">
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
        <div className="avatarActionGroup group2">
          <Action
            isReversed={true}
            actionState="attack"
            attackValue={opponentAttackValue}
          />
          {avatarDifficulty()}
        </div>
      </div>
      <Dialog>{dialogStages()}</Dialog>
    </>
  );
};

export default Game;
