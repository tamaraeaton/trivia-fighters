import { useEffect, useMemo, useState } from 'react';
import './Game.scss';
import { useNavigate } from 'react-router-dom';
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
import Button from '../components/Button/Button';
import AriaRoundMessage from 'components/AriaScreenReader/AriaRoundMessage';
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

  const [currentRound] = useGameRound();
  const { applyHeroAttackValue, increaseHeroHealth } = useHeroActions();
  const { opponentCurrentHealth, opponentMaxHealth, opponentAttackValue } =
    useOpponentSelectors();
  const { applyOpponentAttackValue } = useOpponentActions();
  const { heroCurrentHealth, heroMaxHealth, heroAttackValue } =
    useHeroSelectors();
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

  const opponentAvatarPerDifficulty = () => {
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
            // sending payload to the answered slice when option is clicked
            setAnswered(theOptionOnTheButton);
            // sending payload to the answeredVerify slice when Next button is clicked
            setAnswerForNext(theOptionOnTheButton);
          }}
        />
      );
    }
  };

  // clicking this will end the round, perform all calculations, and set the next round
  const nextButtonHandleClick = () => {
    incrementRound();
    // two way binding
    setNextRoundAnswer(answerForNext);
    // TODO:
    applyOpponentAttackValue();
    // when I block and I get the anwer correct, it will increase my health
    increaseHeroHealth();

    // TODO: clicking Next should bring up the action dialog
    // how do I change the dialogStage
    //   dispatch(dialogStage('action'))
  };

  return (
    <>
      <div className="healthBarContainer">
        {/* constant value hard-coded until additonal functionality is complete*/}
        <HealthBar
          testID="playerHealthBar"
          isReversed={false}
          maxHealth={100}
          currentHealth={heroCurrentHealth}
        />
        <Round currentRound={currentRound} />
        {/* constant value hard-coded until additonal functionality is complete*/}
        <HealthBar
          testID="opponentHealthBar"
          isReversed={true}
          maxHealth={150}
          currentHealth={opponentCurrentHealth}
        />
      </div>
      <div className="avatarContainerWrapper">
        <div className="avatarActionGroup">
          <Avatar name="You" testID="foxKnight" />
        </div>
        <div className="actionIconAndValue">
          <Action actionState={action} attackValue={heroAttackValue} />
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
          {/* check action value */}
          <Action
            isReversed={true}
            actionState="attack"
            attackValue={opponentAttackValue}
          />
        </div>
        <div className="avatarActionGroup group2">
          {opponentAvatarPerDifficulty()}
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
