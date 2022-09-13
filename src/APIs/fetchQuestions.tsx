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

  try {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${difficultyName}`
    );
    // Removing special characters from the JSON
    const json = await res.json();
    const jsonString = await JSON.stringify(json)
      .replace(/&quot;/g, '\\"')
      .replace(/&rsquo;/g, '’')
      .replace(/&#039;/g, '’')
      .replace(/&amp;/gi, '&')
      .replace(/&lrm;/g, '')
      .replace(/&eacute;/g, 'é')
      .replace(/&oacute;/g, 'ó')
      .replace(/&ocirc;/g, 'ô')
      .replace(/&sup2;/g, '²')
      .replace(/&Nu;/g, 'Ν')
      .replace(/&Sigma;/g, 'Σ')
      .replace(/&Pi;/g, 'Π')
      .replace(/&Omicron;/g, 'Ο')
      .replace(/&aacute;/, 'á')
      .replace(/&Uuml;/g, 'Ü')
      .replace(/&ndash;/g, '–')
      .replace(/&euml;/g, 'ë');
    const formattedJSON = decodeURI(jsonString);
    // this console log is here for development test purposes
    console.log(JSON.parse(jsonString).results[0].correct_answer);
    return JSON.parse(formattedJSON);
  } catch (error) {
    console.log(error, 'There is a problem getting your questions');
  }
};

export const fetchRandomQuestions = async () => {
  const difficultyName: AttackPowerType[] = ['light', 'medium', 'heavy'];
  const randomDifficulty =
    difficultyName[Math.floor(Math.random() * difficultyName.length)];
  return fetchQuestionsPerDifficulty(randomDifficulty);
};
