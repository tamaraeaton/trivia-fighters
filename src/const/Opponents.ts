export interface OpponentInterface {
  difficulty: string;
  displayName: string;
  image: 'barbarian-bunny' | 'dragon-seth' | 'fox-knight' | 'wizard-pig';
  maxHealth: number;
  attackMultiplier: number;
  attackBase: number;
}

export const OPPONENTS: { [name: string]: OpponentInterface } = {
  easy: {
    difficulty: 'Easy',
    displayName: 'Wizard Pig',
    image: 'wizard-pig',
    maxHealth: 100,
    attackMultiplier: 1,
    attackBase: 1,
  },
  medium: {
    difficulty: 'Medium',
    displayName: 'Barbarian Bunny',
    image: 'barbarian-bunny',
    maxHealth: 150,
    attackMultiplier: 2,
    attackBase: 5,
  },
  seth: {
    difficulty: 'Seth',
    displayName: 'Dragon Seth',
    image: 'dragon-seth',
    maxHealth: 200,
    attackMultiplier: 3,
    attackBase: 10,
  },
};

// useGetAvatar can read this
