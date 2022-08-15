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
import QuestionDialog from 'components/QuestionDialog/QuestionDialog';
import ActionDialog from 'components/ActionDialog/ActionDialog';

const Game: React.FunctionComponent = () => {
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
            name="Medium"
            character={WizardPig}
            shadowBase={ShadowBase}
            shadow={Shadow}
          />
        </div>
      </div>
      <Dialog message="Choose An Attack">
        {/* <ActionDialog /> */}
        {/* <AttackDialog /> */}
        <QuestionDialog
          question="How many moons are there?"
          answer="Depends on the planet"
          options={['One', 'Four', 'None', 'Depends on the planet']}
        />
      </Dialog>
    </>
  );
};

export default Game;
