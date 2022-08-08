import { FunctionComponent } from 'react';
import './Avatar.scss';

export interface AvatarProps {
  name: string;
  character: string;
  alt: string;
  shadow: string;
  shadowBase: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({
  name,
  character,
  alt,
  shadow,
  shadowBase,
}) => {
  return (
    <div className="wrapper">
      <div data-testid="avatar" className="avatarContainer">
        <img className="avatarShadow" src={shadow} alt={alt}></img>
        <img className="avatarShadowBase" src={shadowBase} alt={alt}></img>
        <img className="avatarImage" src={character} alt={alt}></img>
      </div>
      <p className="avatarName">{name}</p>
    </div>
  );
};

export default Avatar;
