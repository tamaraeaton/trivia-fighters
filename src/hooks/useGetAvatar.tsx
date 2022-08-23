import { useMemo } from 'react';
import FoxKnight from '../assets/images/fox-knight.svg';
import WizardPig from '../assets/images/wizard-pig.svg';
import BarbarianBunny from '../assets/images/barbarian-bunny.svg';
import DragonSeth from '../assets/images/dragon-seth.svg';

export const useGetAvatar = (name: string) => {
  const avatarSVG = useMemo(() => {
    if (name === 'You') return FoxKnight;
    if (name === 'Wizard Pig') return WizardPig;
    if (name === 'Barbarian Bunny') return BarbarianBunny;
    if (name === 'Dragon Seth') return DragonSeth;

    return FoxKnight;
  }, [name]);
  return {
    avatarSVG,
  };
};
