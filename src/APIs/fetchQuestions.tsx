import { ActionType, AttackPowerType } from '../store/game/game.slice';

const getQuestionDifficulty = (difficulty: AttackPowerType) => {
  if (difficulty === 'light') {
    return 'easy';
  }
  if (difficulty === 'heavy') {
    return 'hard';
  }
  return 'medium';
};

export const fetchQuestionsPerDifficulty = async (
  difficulty: AttackPowerType
) => {
  const difficultyName = getQuestionDifficulty(difficulty);
  const res = await fetch(
    `https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${difficultyName}`
  );
  const json = await res.json();
  return json;
};

export const fetchRandomQuestions = async () => {
  const difficultyName = ['easy', 'medium', 'hard'];
  const randomDifficulty =
    difficultyName[Math.floor(Math.random() * difficultyName.length)];
  const res = await fetch(
    `https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${randomDifficulty}`
  );
  const json = await res.json();
  return json;
};
