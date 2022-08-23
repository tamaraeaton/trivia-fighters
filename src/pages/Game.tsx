import { useEffect, useMemo } from 'react';
import './Game.scss';
import { useGameRound } from 'store/game/game.hooks';
import HealthBar from 'components/HealthBar/HealthBar';
import Round from '../components/Round/Round';
import Action from '../components/Action/Action';
import Avatar from '../components/Avatar/Avatar';
import FoxKnight from '../assets/images/fox-knight.svg';
import WizardPig from '../assets/images/wizard-pig.svg';
import BarbarianBunny from '../assets/images/barbarian-bunny.svg';
import DragonSeth from '../assets/images/dragon-seth.svg';
import Dialog from 'components/Dialog/Dialog';
import AttackDialog from 'components/AttackDialog/AttackDialog';
import ActionDialog from 'components/ActionDialog/ActionDialog';
import QuestionDialog from 'components/QuestionDialog/QuestionDialog';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  attackStrengthSelector,
  dialogStageSelector,
  questionSelector,
  difficultySelector,
  actionSelector,
  isCorrectSelector,
} from '../store/game/game.selectors';
import { useNavigate } from 'react-router-dom';

import { answered } from 'store/game/game.slice';
import Button from '../components/Button/Button';

const Game: React.FunctionComponent = () => {
  const dialogStage = useAppSelector(dialogStageSelector);
  const navigate = useNavigate();
  const difficulty = useAppSelector(difficultySelector);
  const action = useAppSelector(actionSelector);
  const dispatch = useAppDispatch();
  const attackStrength = useAppSelector(attackStrengthSelector);
  const question = useAppSelector(questionSelector);
  const isCorrect = useAppSelector(isCorrectSelector);

  const [, { incrementRound }] = useGameRound();

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

  console.log('actionMessage', actionMessage);
  console.log('dialogStage', dialogStage);

  useEffect(() => {
    if (!difficulty) {
      navigate('/');
    }
  }, [difficulty, navigate]);

  const avatarDifficulty = () => {
    if (difficulty === 'easy') {
      return (
        <Avatar
          name="Wizard Pig"
          character={WizardPig}
          alt="wizardpig"
          testID="wizardPigAvatar"
        />
      );
    } else if (difficulty === 'medium') {
      return (
        <Avatar
          name="Barbarian Bunny"
          character={BarbarianBunny}
          alt="barbarianbunny"
          testID="barbarianBunnyAvatar"
        />
      );
    } else if (difficulty === 'seth') {
      return (
        <Avatar
          name="Dragon Seth"
          character={DragonSeth}
          alt="dragonseth"
          testID="dragonSeth"
        />
      );
    }
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
            dispatch(answered(theOptionOnTheButton));
          }}
        />
      );
    }
  };

  return (
    <>
      <div className="healthBarContainer">
        <HealthBar
          testID="playerHealthBar"
          isReversed={false}
          maxHealth={100}
          currentHealth={100}
        />
        <Round />
        <HealthBar
          testID="opponentHealthBar"
          isReversed={true}
          maxHealth={150}
          currentHealth={60}
        />
      </div>
      <div className="avatarContainerWrapper">
        <div className="avatarActionGroup">
          <Action isReversed={false} actionState={action} attackValue={10} />

          <Avatar
            name="You"
            character={FoxKnight}
            alt="foxknight"
            testID="foxKnight"
          />
        </div>
        <div className="nextButtonWrapper">
          <div className="dialogMessage" data-testid="dialogMessage">
            {actionMessage}
          </div>
          {dialogStage === 'answered' && (
            <div className="nextButtonDiv">
              <Button size="xs" onClick={incrementRound}>
                Next
              </Button>
            </div>
          )}
        </div>
        <div className="avatarActionGroup group2">
          <Action isReversed={true} actionState="attack" attackValue={10} />
          {avatarDifficulty()}
        </div>
      </div>
      <Dialog>{dialogStages()}</Dialog>
    </>
  );
};

export default Game;
