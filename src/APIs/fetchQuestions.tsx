import { AttackPowerType } from '../store/game/game.slice';

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
  const jsonString = await JSON.stringify(json)
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, '')
    .replace(/\\n/g, '\\n')
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, '\\&')
    .replace(/\\r/g, '\\r')
    .replace(/\\t/g, '\\t')
    .replace(/\\b/g, '\\b')
    .replace(/\\f/g, '\\f')
    .replace(/\\[A-Z]/g, '\\[A-Z]');

  return JSON.parse(jsonString);
};

export const fetchRandomQuestions = async () => {
  const difficultyName: AttackPowerType[] = ['light', 'medium', 'heavy'];
  const randomDifficulty =
    difficultyName[Math.floor(Math.random() * difficultyName.length)];
  return fetchQuestionsPerDifficulty(randomDifficulty);
};
