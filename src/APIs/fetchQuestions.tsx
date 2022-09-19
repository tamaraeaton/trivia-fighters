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

export interface GetQuestionAPIResponseType {
  response_code: number;
  results: [
    {
      category: string;
      type: string;
      difficulty: string;
      question: string;
      correct_answer: string;
      incorrect_answers: string[];
    }
  ];
}

export const fetchQuestionsPerDifficulty = async (
  difficulty: AttackPowerType
): Promise<GetQuestionAPIResponseType> => {
  const difficultyName = getQuestionDifficulty(difficulty);
  const res = await fetch(
    `https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${difficultyName}`
  );

  const json = await res.json();
  const jsonString = await JSON.stringify(json)
    .replace(/&quot;/g, '\\"')
    .replace(/&#039;/g, '\\"');

  return JSON.parse(jsonString);
};

export const fetchRandomQuestions = async () => {
  const difficultyName: AttackPowerType[] = ['light', 'medium', 'heavy'];
  const randomDifficulty =
    difficultyName[Math.floor(Math.random() * difficultyName.length)];
  return fetchQuestionsPerDifficulty(randomDifficulty);
};
