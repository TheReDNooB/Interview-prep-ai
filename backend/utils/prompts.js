const questionAnswerPrompt = (role, experience, topicsToFocus, numberOfQuestions) => (`
  You are Ai trained to generate technical interview questions and answers.
  
  Task:
  - Role: ${role}
  - Candidate experience: ${experience} years
  - Focus Topics: ${topicsToFocus}
  - Write ${numberOfQuestions} interview questions
  - For each question, generate a detailed but begginer-friendly answer.
  - If the answer need a code example, add a small code block inside.
  - Keep formatting very clean and clear.
  - Return a pure JSON array like:
  [
    {
      "question": "Question here?",
      "answer": "Answer here",
    },
    ...
  ]
  Important: Do NOT add any extra text. Only return valid JSON.
  `)

  const conceptExplainPrompt = (question) => (`
  You are an AI trained to generate explanations for a given interview question.

  Task:
  - Explain the following interview question and its concept depth  as if your're teaching a beginner developer.
  - Question: "${question}".
  - After the explanation, provide a short and clear title that sumarizes the concept for the article or page header.
  - If the explanation includes a code example, provide a small code block.
  - Keep formatting very clean and clear.
  - Return the result as a valid JSON object in the following format:
  {
    "Tittle": "Short tittle here?",
    "Explanation": "Explanation here",
  }
  Important: Do NOT add any extra text outside the JSON format. Only return valid JSON.
  `)

module.exports = { questionAnswerPrompt, conceptExplainPrompt };