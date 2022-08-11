import './Game.scss';
import HealthBar from 'components/HealthBar/HealthBar';
import Round from '../components/Round/Round';
import Action from '../components/Action/Action';
import Avatar from '../components/Avatar/Avatar';
import FoxKnight from '../assets/images/fox-knight.svg';
import WizardPig from '../assets/images/wizard-pig.svg';
import Shadow from '../assets/images/shadow-gradient.svg';
import ShadowBase from '../assets/images/shadow.svg';
import Dialog from 'components/Dialog/Dialog';
import AttackDialog from 'components/AttackDialog/AttackDialog';
import ActionDialog from 'components/ActionDialog/ActionDialog';
import QuestionDialog from 'components/QuestionDialog/QuestionDialog';
import { useAppSelector } from '../store/hooks';
import { dialogStageSelector } from '../store/game/game.selectors';
import { useNavigate } from 'react-router-dom';

const Game: React.FunctionComponent = () => {
  const dialogStage = useAppSelector(dialogStageSelector);
  const navigate = useNavigate();

  // useEffect looking at dialogStage
  // if it detects a difficulty function then useNavigate back to home page
  const getDialog = () => {
    switch (dialogStage) {
      case 'action':
        return <ActionDialog />;
      case 'attacking':
        return <AttackDialog />;
      case 'difficulty':
        navigate('');
        break;
      default:
        return (
          <QuestionDialog
            question="How many moons are there?"
            answer="Depends on the Planet"
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
          <Action isReversed={false} actionState={'attack'} attackValue={10} />
          <Avatar
            alt="dragon"
            name="You"
            character={FoxKnight}
            shadowBase={ShadowBase}
            shadow={Shadow}
          />
        </div>
        <div className="avatarActionGroup group2">
          <Action isReversed={true} actionState={'attack'} attackValue={10} />
          <Avatar
            alt="wizardpig"
            name="Opponent"
            character={WizardPig}
            shadowBase={ShadowBase}
            shadow={Shadow}
          />
        </div>
      </div>
      <Dialog message="Choose An Attack">{getDialog()}</Dialog>
    </>
  );
};

export default Game;
