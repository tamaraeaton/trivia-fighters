import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from '@redux-saga/core/effects';
import { call, put } from 'redux-saga/effects';
import {
  fetchQuestionsPerDifficulty,
  fetchRandomQuestions,
  GetQuestionAPIResponseType,
} from '../../APIs/fetchQuestions';
import { attackStrength, AttackPowerType, question, block } from './game.slice';

// all sagas are generator functions
export function* getQuestionsPerDifficulty(
  action: PayloadAction<AttackPowerType>
): any {
  // yields are steps/pause (like async/await)
  const res: GetQuestionAPIResponseType = yield call(
    fetchQuestionsPerDifficulty,
    action.payload
  );
  const questionRes = res.results[0];
  const choices = [
    questionRes.correct_answer,
    ...questionRes.incorrect_answers,
  ];

  choices.sort(() => Math.random() - 0.5);

  yield put(
    question({
      status: 'idle',
      text: questionRes.question,
      answer: questionRes.correct_answer,
      choices: choices,
    })
  );
}

// attack strength watcher
export function* watchAttackStrength() {
  yield takeEvery(attackStrength, getQuestionsPerDifficulty);
}

// This is for blocking
export function* getRandomQuestions(): any {
  const res: GetQuestionAPIResponseType = yield call(fetchRandomQuestions);
  const questionRes = res.results[0];
  const choices = [
    questionRes.correct_answer,
    ...questionRes.incorrect_answers,
  ];

  choices.sort(() => Math.random() - 0.5);

  yield put(
    question({
      status: 'idle',
      text: questionRes.question,
      answer: questionRes.correct_answer,
      choices: choices,
    })
  );
}

// block watcher
export function* watchBlockAction() {
  yield takeEvery(block.type, getRandomQuestions);
}
