import { FunctionComponent } from 'react';
import './Avatar.scss';

export interface AvatarProps {
  name: string;
  character: string;
  alt: string;
  shadow: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({
  name,
  character,
  alt,
  shadow,
}) => {
  return (
    <div className="avatarContainer">
      <img className="avatarImage" src={character} alt={alt}></img>
      <img className="avatarShadow" src={shadow} alt={alt}></img>
      <p className="avatarName">{name}</p>
    </div>
  );
};

export default Avatar;
