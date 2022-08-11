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
        <img
          className="avatarShadow"
          data-testid="shadowAlt"
          src={shadow}
          alt=""
        />
        <img className="avatarShadowBase" src={shadowBase} alt="" />
        <img
          data-testid="avatarImage"
          className="avatarImage"
          src={character}
          alt={alt}
        />
      </div>
      <p className="avatarName" data-testid="avatarName">
        {name}
      </p>
    </div>
  );
};

export default Avatar;
