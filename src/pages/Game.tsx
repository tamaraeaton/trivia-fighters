import './Game.scss';
import HealthBar from 'components/HealthBar/HealthBar';
import Round from '../components/Round/Round';
import Action from '../components/Action/Action';
import Avatar from '../components/Avatar/Avatar';
import FoxKnight from '../assets/images/fox-knight.svg';
import WizardPig from '../assets/images/wizard-pig.svg';
import Dialog from 'components/Dialog/Dialog';
import AttackDialog from 'components/AttackDialog/AttackDialog';
<<<<<<< HEAD
import ActionDialog from 'components/ActionDialog/ActionDialog';
import QuestionDialog from 'components/QuestionDialog/QuestionDialog';
import { useAppSelector } from '../store/hooks';
import { dialogStageSelector } from '../store/game/game.selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { difficultySelector, actionSelector } from 'store/game/game.selectors';
import Button from '../components/Button/Button';
=======
import QuestionDialog from 'components/QuestionDialog/QuestionDialog';
import ActionDialog from 'components/ActionDialog/ActionDialog';
>>>>>>> a17bfd8d2bf4649f5518df0a6c82943c6d8831f9

const Game: React.FunctionComponent = () => {
  const dialogStage = useAppSelector(dialogStageSelector);
  const navigate = useNavigate();
  const difficulty = useAppSelector(difficultySelector);
  const action = useAppSelector(actionSelector);

  useEffect(() => {
    if (!difficulty) {
      navigate('/');
    }
  });

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

          <Avatar name="You" character={FoxKnight} />
        </div>
        <div className="avatarActionGroup group2">
          <Action isReversed={true} actionState="attack" attackValue={10} />
          {/* add difficulty prop, bring in OPPONENTS */}
          {/* OPONENET[difficulty] */}
          {/* character.image */}
          <Avatar name="Opponent" character={WizardPig} />
        </div>
      </div>
      {dialogStage === 'answered' && <Button />}
      {/* need to make the message conditional */}
      <Dialog message="Choose An Attack">{dialogStages()}</Dialog>
    </>
  );
};

export default Game;
