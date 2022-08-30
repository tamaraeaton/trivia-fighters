import { useEffect, useMemo } from 'react';
import './Game.scss';
import { useGameActions, useGameSelectors } from 'store/game/game.hooks';
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
import { useHeroActions, useHeroSelectors } from 'store/hero/hero.hooks';
import { useOpponentSelectors } from '../store/opponent/opponent.hooks';

const Game: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { submitAnswer } = useGameActions();
  const {
    dialogStage,
    action,
    difficulty,
    attackStrength,
    question,
    isCorrect,
  } = useGameSelectors();

  const { applyAttackValue } = useHeroActions();
  const { heroAttackValue } = useHeroSelectors();
  const { opponentCurrentHealth } = useOpponentSelectors();
  // const [, { incrementRound }] = useGameRound();

  useEffect(() => {
    if (isCorrect === true || isCorrect === false) {
      applyAttackValue();
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
            submitAnswer(theOptionOnTheButton);
          }}
        />
      );
    }
  };

  return (
    <>
      <div className="healthBarContainer">
        {/* constant value hard-coded until additonal functionality is complete*/}
        <HealthBar
          testID="playerHealthBar"
          isReversed={false}
          maxHealth={100}
          currentHealth={100}
        />
        <Round />
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
              <Button size="xs">Next</Button>
            </div>
          )}
        </div>
        <div className="action">
          <Action isReversed={true} actionState="attack" attackValue={10} />
        </div>
        <div className="avatarActionGroup group2">
          {opponentAvatarPerDifficulty()}
        </div>
      </div>
      <Dialog>{dialogStages()}</Dialog>
    </>
  );
};

export default Game;
