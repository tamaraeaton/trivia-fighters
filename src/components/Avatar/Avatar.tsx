import { FunctionComponent } from 'react';
import './Avatar.scss';
import Shadow from '../../assets/images/shadow-gradient.svg';
import ShadowBase from '../../assets/images/shadow.svg';
import { useGetAvatar } from 'hooks/useGetAvatar';
export interface AvatarProps {
  name: string;
  alt: string;
  testID: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({ name, alt, testID }) => {
  const { avatarSVG } = useGetAvatar(name);

  return (
    <div className="wrapper">
      <div data-testid={testID} className="avatarContainer">
        <img
          className="avatarShadow"
          data-testid="shadowAlt"
          src={Shadow}
          alt=""
        />
        <img className="avatarShadow" src={Shadow} alt="" />
        <img className="avatarShadowBase" src={ShadowBase} alt="" />
        <img
          data-testid="avatarImage"
          className="avatarImage"
          src={avatarSVG}
          alt={name}
        />
      </div>
      <p className="avatarName" data-testid="avatarName">
        {name}
      </p>
    </div>
  );
};

export default Avatar;
