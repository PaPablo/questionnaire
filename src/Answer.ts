interface IAnswer {
  // Copy question text here to prevent null references
  text: string;
  // What was answered
  // Option title or answer
  answer: string;

  // Next answer on Questioannaire
  nextAnswer: IAnswer | null;
}

class Answer {
  text: string;
  answer: string;

  nextAnswer: IAnswer | null;

  constructor(text: string, answer: string, nextAnswer: IAnswer | null) {
    this.text = text;
    this.answer = answer;
    this.nextAnswer = nextAnswer;
  }
}

export { IAnswer, Answer };
