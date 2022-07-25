export interface OpponentInterface {
  difficulty: string;
  displayName: string;
  image: 'barbarian-bunny' | 'dragon-seth' | 'fox-knight' | 'wizard-pig';
  maxHealth: number;
}

export const OPPONENTS: { [name: string]: OpponentInterface } = {
  easy: {
    difficulty: 'Easy',
    displayName: 'Wizard Pig',
    image: 'wizard-pig',
    maxHealth: 100,
  },
  medium: {
    difficulty: 'Medium',
    displayName: 'Barbarian Bunny',
    image: 'barbarian-bunny',
    maxHealth: 150,
  },
  seth: {
    difficulty: 'Seth',
    displayName: 'Dragon Seth',
    image: 'dragon-seth',
    maxHealth: 200,
  },
};
