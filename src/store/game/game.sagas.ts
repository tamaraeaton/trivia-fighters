import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from '@redux-saga/core/effects';
import { call, put } from 'redux-saga/effects';
import { fetchQuestions } from '../../APIs/fetchQuestions';
import { attackStrength, AttackPowerType, question } from './game.slice';

// generator function
export function* getQuestions(action: PayloadAction<AttackPowerType>): any {
  const res = yield call(fetchQuestions, action.payload);
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

// watcher
export function* watchAttackStrength() {
  yield takeEvery(attackStrength, getQuestions);
}
