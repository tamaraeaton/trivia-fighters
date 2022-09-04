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
    .replace(/&quot;/g, '\\"')
    .replace(/&#039;/g, '\\"');
  console.log(JSON.parse(jsonString).results[0].correct_answer);
  return JSON.parse(jsonString);
};

export const fetchRandomQuestions = async () => {
  const difficultyName: AttackPowerType[] = ['light', 'medium', 'heavy'];
  const randomDifficulty =
    difficultyName[Math.floor(Math.random() * difficultyName.length)];
  return fetchQuestionsPerDifficulty(randomDifficulty);
};
