import { Question } from "../src/Question";

describe("Test Question funcionality", () => {
  const document = {
    indications: ["I1", "I2"],
    text: "Q1",
    options: [
      { title: "Op1", nextQuestion: { text: "Q2" } },
      { title: "Op2", nextQuestion: { text: "Q3" } }
    ]
  };
  test("Getting and option returns correct option", () => {
    const question = Question.fromDocument(document);

    expect(question.pickOption(0).text).toBe(question.text)
  });
});
