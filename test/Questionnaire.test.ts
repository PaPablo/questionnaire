import { Questionnaire } from "../src/Questionnaire";
describe("Testing questionnaire", () => {
  const document = {
    version: "1.0",
    firstQuestion: {
      indications: ["I1", "I2"],
      text: "Q1",
      options: [
        { title: "Op1", nextQuestion: { text: "Q2" } },
        { title: "Op2", nextQuestion: { text: "Q3" } }
      ]
    }
  };
  let questionnaire: Questionnaire;

  beforeEach(() => {
    questionnaire = Questionnaire.fromDocument(document);
  });

  test("Test answering question should add answer to answers", () => {
    // Answer
    questionnaire.answerQuestion(0);

    expect(questionnaire.answers.length).toBe(1);
  });

  test("Test answering question should change current question to next question ", () => {
    questionnaire.answerQuestion(0);

    expect(questionnaire.currentQuestion.text).toBe("Q2");
  });
});
