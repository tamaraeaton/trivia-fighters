import { getQuestionsPerDifficulty, getRandomQuestions } from './game.sagas';
import { call, put } from 'redux-saga/effects';
import { attackStrength, question } from './game.slice';
import {
  fetchQuestionsPerDifficulty,
  fetchRandomQuestions,
} from 'APIs/fetchQuestions';
import { mockQuestionAPIResponse } from '../mocks/game.mocks';

describe('Game sagas', () => {
  let randomSpy: jest.SpyInstance;

  beforeEach(() => {
    randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.5);
  });
  afterEach(() => {
    randomSpy.mockRestore();
  });

  describe('getQuestionsPerDifficulty', () => {
    it('should fetch questions per difficulty and store in redux', () => {
      const action = attackStrength('light');
      const iterator = getQuestionsPerDifficulty(action);

      expect(iterator.next().value).toEqual(
        call(fetchQuestionsPerDifficulty, action.payload)
      );
      const questionRes = mockQuestionAPIResponse.results[0];
      const choices = [
        questionRes.correct_answer,
        ...questionRes.incorrect_answers,
      ];

      expect(iterator.next(mockQuestionAPIResponse).value).toEqual(
        put(
          question({
            status: 'idle',
            text: questionRes.question,
            answer: questionRes.correct_answer,
            choices: choices,
          })
        )
      );
    });
  });

  describe('fetchRandomQuestions', () => {
    it('should fetch questions at random difficulty and store in redux', () => {
      const iterator = getRandomQuestions();

      expect(iterator.next().value).toEqual(call(fetchRandomQuestions));
      const questionRes = mockQuestionAPIResponse.results[0];
      const choices = [
        questionRes.correct_answer,
        ...questionRes.incorrect_answers,
      ];

      expect(iterator.next(mockQuestionAPIResponse).value).toEqual(
        put(
          question({
            status: 'idle',
            text: questionRes.question,
            answer: questionRes.correct_answer,
            choices: choices,
          })
        )
      );
    });
  });
});
