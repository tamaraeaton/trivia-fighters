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
} from '../store/game/game.selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { difficultySelector, actionSelector } from 'store/game/game.selectors';
import { answered } from 'store/game/game.slice';
import Button from '../components/Button/Button';

const Game: React.FunctionComponent = () => {
  const dialogStage = useAppSelector(dialogStageSelector);
  const navigate = useNavigate();
  const difficulty = useAppSelector(difficultySelector);
  const action = useAppSelector(actionSelector);
  const dispatch = useAppDispatch();
  const attackStrength = useAppSelector(attackStrengthSelector);

  const [actionMessage, setActionMessage] = useState('Choose an action');
  const [correctIncorrect, setCorrectIncorrect] = useState(false);
  const [currentRound, { incrementRound }] = useGameRound();
  const attackString = useAppSelector(attackStrengthSelector);

  useEffect(() => {
    if (dialogStage === 'attacking') {
      setActionMessage('Choose an attack');
    } else if (dialogStage === 'action') {
      setActionMessage('Choose an action');
    } else if (dialogStage === 'answered') {
      setActionMessage(correctIncorrect ? 'Correct!' : 'Incorrect!');
    } else if (dialogStage === 'answering') {
      if (attackStrength === 'light') {
        setActionMessage('Light Attack');
      } else if (attackStrength === 'medium') {
        setActionMessage('Medium Attack');
      } else {
        setActionMessage('Heavy Attack');
      }
    } else {
      setActionMessage('');
    }
  }, [dialogStage]);

  useEffect(() => {
    if (!difficulty) {
      navigate('/');
    }
  }, []);

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
          question="How many moons are there?"
          answer="Depends on the planet"
          options={['One', 'Four', 'None', 'Depends on the planet']}
          onAnswer={(isItCorrect: boolean) => {
            dispatch(answered());
            setCorrectIncorrect(isItCorrect);
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
