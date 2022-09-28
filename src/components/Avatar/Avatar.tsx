import { useMemo } from 'react';
import { FunctionComponent } from 'react';
import ShadowGradient from '../../assets/images/shadow-gradient.svg';
import ShadowBase from '../../assets/images/shadow.svg';
import FoxKnight from '../../assets/images/fox-knight.svg';
import WizardPig from '../../assets/images/wizard-pig.svg';
import BarbarianBunny from '../../assets/images/barbarian-bunny.svg';
import DragonSeth from '../../assets/images/dragon-seth.svg';
import './Avatar.scss';
export interface AvatarProps {
  name: string;
  testID: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({ name, testID }) => {
  const avatarSVG = useMemo(() => {
    if (name === 'You') return FoxKnight;
    if (name === 'Wizard Pig') return WizardPig;
    if (name === 'Barbarian Bunny') return BarbarianBunny;
    if (name === 'Dragon Seth') return DragonSeth;
    return FoxKnight;
  }, [name]);

  return (
    <div className="avatarWrapper">
      <div className="avatarContainer">
        <img
          className="avatarShadow  avatarShadowScale"
          src={ShadowGradient}
          alt=""
        />
        <img className="avatarShadowBase" src={ShadowBase} alt="" />
        <img
          data-testid={testID}
          className="avatarImage"
          src={avatarSVG}
          alt={name}
        />
      </div>
      <p className="avatarName">{name}</p>
    </div>
  );
};

export default Avatar;
