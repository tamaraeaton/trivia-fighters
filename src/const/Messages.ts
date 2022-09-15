export const MESSAGES = {
  dialogStage: {
    action: {
      dialogMessage: 'Choose an action',
      helpMessage:
        "The opponent's health is based on the selection you chose.*** Now what action do you wish to take?",
    },
    attacking: {
      dialogMessage: 'Choose an attack',
      helpMessage:
        "A higher level of attack will give you more attack value *** The opponent's attack value is randomly generated per the difficulty you chose",
    },
    answered: {
      correct: {
        dialogMessage: 'Correct',
        attack: {
          helpMessage:
            'Yay, you got the answer correct. *** Notice that your attack value is increased. *** Keep up the good work! *** Click Next to continue your attack.',
        },
        block: {
          helpMessage:
            'Yay, you got the answer correct. *** Notice that your current health is increased. *** Keep up the good work! *** Click Next to take your next move.',
        },
      },
      incorrect: {
        dialogMessage: 'Incorrect',
        helpMessage:
          'Your answer is incorrect.  *** Notice that you have attacked each-other.  *** Click Next to take your next move.',
      },
    },
    answering: {
      block: {
        dialogMessage: 'Blocking',
        helpMessage:
          "Pick the correct answer and you will gain 10 health points.  *** An incorrect answer will trigger the opponent's attack.",
      },
      attack: {
        light: {
          dialogMessage: 'Light Attack',
        },
        medium: {
          dialogMessage: 'Medium Attack',
        },
        heavy: {
          dialogMessage: 'Heavy Attack',
        },
        helpMessage:
          'Pick the correct answer and gain more attack strength.  *** An incorrect answer will trigger the attack.',
      },
    },
  },
};
