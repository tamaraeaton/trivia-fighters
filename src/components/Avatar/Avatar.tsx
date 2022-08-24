import { FunctionComponent } from 'react';
import './Avatar.scss';
import Shadow from '../../assets/images/shadow-gradient.svg';
import ShadowBase from '../../assets/images/shadow.svg';
export interface AvatarProps {
  name: string;
  character: string;
  testID: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({
  name,
  character,
  testID,
}) => {
  return (
    <div className="wrapper">
      <div className="avatarContainer">
        <img className="avatarShadow" src={Shadow} alt="" />
        <img className="avatarShadow" src={Shadow} alt="" />
        <img className="avatarShadowBase" src={ShadowBase} alt="" />
        <img
          data-testid={testID}
          className="avatarImage"
          src={character}
          alt={name}
        />
      </div>
      <p className="avatarName">{name}</p>
    </div>
  );
};

export default Avatar;
