import React, { useState } from 'react';
import './Forum.css';

function Forum() {
  const [questions, setQuestions] = useState([
    { id: 1, text: 'How does React work?' },
    { id: 2, text: 'What are React hooks?' },
  ]);
  const [answerText, setAnswerText] = useState('');
  const [answers, setAnswers] = useState({});
  const [newQuestionText, setNewQuestionText] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  
  const handleQuestionClick = (questionId) => {
    setSelectedQuestion(questionId);
  };

//   const handleAnswerSubmit = (answerText) => {
//     if (selectedQuestion) {
//       const newAnswers = { ...answers };
//       newAnswers[selectedQuestion] = newAnswers[selectedQuestion] || [];
//       newAnswers[selectedQuestion].push(answerText);
//       setAnswers(newAnswers);
//     }
//   };
const handleAnswerSubmit = (answerText) => {
    if (selectedQuestion) {
      const newAnswers = { ...answers };
      newAnswers[selectedQuestion] = newAnswers[selectedQuestion] || [];
  
      // Corrected answer object structure
      const newAnswer = {
        text: answerText,
        upvotes: 0,
        downvotes: 0,
      };
  
      newAnswers[selectedQuestion].push(newAnswer);
  
      setAnswers(newAnswers);
      setAnswerText(''); 
    }
  };
  
  
  const handleVote = (questionId, answerIndex, type) => {
    const newAnswers = { ...answers };
    if (newAnswers[questionId]) {
      if (type === 'upvote') {
        newAnswers[questionId][answerIndex].upvotes =
          (newAnswers[questionId][answerIndex].upvotes || 0) + 1;
      } else if (type === 'downvote') {
        newAnswers[questionId][answerIndex].downvotes =
          (newAnswers[questionId][answerIndex].downvotes || 0) + 1;
      }
      setAnswers(newAnswers);
    }
  };
  const handleNewQuestionSubmit = () => {
    if (newQuestionText) {
      const newQuestions = [...questions];
      const newQuestion = {
        id: newQuestions.length + 1,
        text: newQuestionText,
      };
      newQuestions.push(newQuestion);
      setQuestions(newQuestions);
      setNewQuestionText('');
    }
  };
  return (
    <div className="App1">
      <div className="QuestionsPanel">
        <h2>Questions</h2>
        <ul>
          {questions.map((question) => (
            <li key={question.id} onClick={() => handleQuestionClick(question.id)}>
              {question.text}
            </li>
          ))}
        </ul>
      </div>
      <div className='bb'>
          <input
            type="text"
            placeholder="Type your new question..."
            value={newQuestionText}
            onChange={(e) => setNewQuestionText(e.target.value)}
          />
          <button onClick={handleNewQuestionSubmit}>Add Question</button>
        </div>
      <div className="AnswersPanel">
        <h2>Answers</h2>
        {selectedQuestion && (
          <>
            <div>
              {answers[selectedQuestion] &&
                answers[selectedQuestion].map((answer, index) => (
                  <div key={index} className="Answer">
                    <p>{answer.text}</p>
                    <div>
                      <button onClick={() => handleVote(selectedQuestion, index, 'upvote')}>
                        Upvote {answer.upvotes || 0}
                      </button>
                      <button onClick={() => handleVote(selectedQuestion, index, 'downvote')}>
                        Downvote {answer.downvotes || 0}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div>
              <textarea
                placeholder="Type your answer..."
                onChange={(e) => setAnswerText(e.target.value)}
              />
              <button onClick={() => handleAnswerSubmit(answerText)}>Submit Answer</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Forum;
