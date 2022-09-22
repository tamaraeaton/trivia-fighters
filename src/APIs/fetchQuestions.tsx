import { AttackPowerType } from '../store/game/game.slice';

function getQuestionDifficulty(attackStrength: AttackPowerType) {
  if (attackStrength === 'light') {
    return 'easy';
  }
  if (attackStrength === 'heavy') {
    return 'hard';
  }
  return 'medium';
}

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

export type ApiFetchFunction<ResponseType, RequestArgument = void> = (
  difficulty: RequestArgument
) => Promise<ResponseType>;

export const fetchQuestionsPerDifficulty: ApiFetchFunction<
  GetQuestionAPIResponseType,
  AttackPowerType
> = async (attackStrength) => {
  const difficulty = getQuestionDifficulty(attackStrength);
  try {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${difficulty}`
    );

    const json = await res.json();
    const jsonString = await JSON.stringify(json)
      .replace(/&quot;/g, '\\"')
      .replace(/&#039;/g, '’')
      .replace(/&rsquo;/g, '’')
      .replace(/&AMP;/g, '&')
      .replace(/&amp;/gi, '&')
      .replace(/&lrm;/g, '')
      .replace(/&eacute;/g, 'é')
      .replace(/&oacute;/g, 'ó')
      .replace(/&aacute;/, 'á')
      .replace(/&sup2;/g, '²')
      .replace(/&Nu;/g, 'Ν')
      .replace(/&Sigma;/g, 'Σ')
      .replace(/&Pi;/g, 'Π')
      .replace(/&Omicron;/g, 'Ο')
      .replace(/&ocirc;/g, 'ô')
      .replace(/&ndash;/g, '–')
      .replace(/&Uuml;/g, 'Ü')
      .replace(/&euml;/g, 'ë');
    const formattedJSON = decodeURI(jsonString);
    // this console log is here for development test purposes
    console.log(JSON.parse(jsonString).results[0].correct_answer);
    return JSON.parse(formattedJSON);
  } catch (err) {
    console.log(err, 'There is a problem getting your questtions.');
  }
};

export const fetchRandomQuestions: ApiFetchFunction<
  GetQuestionAPIResponseType
> = async () => {
  const difficulty: AttackPowerType[] = ['light', 'medium', 'heavy'];
  const randomDifficulty =
    difficulty[Math.floor(Math.random() * difficulty.length)];
  return fetchQuestionsPerDifficulty(randomDifficulty);
};
