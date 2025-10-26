import React, { useState } from 'react';

const renderFormulaText = (text) => {
  const parts = text.split(/(\$[^\$]+\$)/g);

  return parts.map((part, index) => {
    if (!part.startsWith('$') || !part.endsWith('$')) {
      return part;
    }
    let content = part.substring(1, part.length - 1);

    content = content.replace(/\\rightarrow/g, '→');
    content = content.replace(/\\leftrightarrow/g, '↔');
    content = content.replace(/\\leftarrow/g, '←');
    content = content.replace(/\\uparrow/g, '↑');
    content = content.replace(/\\downarrow/g, '↓'); 

    const elements = content.split(/(\^\{[^\}]+\}|\_\{[^\}]+\}|\^[^\s\{]|\_[^\s\{]|\S)/g).filter(Boolean);

    return (
      <span key={index} style={{ display: 'inline-block' }}>
        {elements.map((el, i) => {
          
          if (el.startsWith('^')) {
            const inner = el.length > 2 && el[1] === '{' 
              ? el.substring(2, el.length - 1) 
              : el.substring(1); 
            return <sup key={i}>{inner}</sup>;
          }
          
          if (el.startsWith('_')) {
            const inner = el.length > 2 && el[1] === '{'
              ? el.substring(2, el.length - 1) 
              : el.substring(1);
            return <sub key={i}>{inner}</sub>;
          }

          return el;
        })}
      </span>
    );
  });
};

export default function QuizComponent({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>
        Помилка: Питання для тесту не завантажено.
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = selectedAnswers[currentQuestionIndex];

  const handleOptionSelect = (optionIndex) => {
    if (submitted) return; 
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex,
    });
  };

  const handleSubmit = () => {
    if (selectedOption === undefined) return; 

    if (submitted) {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSubmitted(false); 
      } else {
        setShowResults(true); 
      }
    } else {
      setSubmitted(true); 
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswerIndex) {
        score++;
      }
    });
    return score;
  };

  const allStyles = `
    .quiz-container {
      font-family: "Inter", Arial, sans-serif;
      background-color: #f4f4f7;
      padding: 24px;
      border-radius: 12px;
      max-width: 600px;
      margin: 20px auto;
    }
    .quiz-header {
      font-size: 1.5rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 20px;
    }
    .quiz-question-box {
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      padding: 24px;
      margin-bottom: 24px;
    }
    .quiz-question-text {
      font-size: 1.1rem;
      font-weight: 500;
      color: #333;
      margin-bottom: 24px;
      min-height: 40px;
      text-align: center;
    }
    .quiz-options-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .quiz-option {
      background-color: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      text-align: center;
      font-size: 1rem;
      color: #333;
    }
    .quiz-option:hover {
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0,123,255,0.2);
    }
    .quiz-option.quiz-selected {
      background-color: #e6f0ff;
      border-color: #007bff;
      color: #0056b3;
      box-shadow: 0 0 0 2px rgba(0,123,255,0.2);
    }
    .quiz-option.quiz-correct {
      background-color: #d4edda;
      border-color: #28a745;
      color: #155724;
    }
    .quiz-option.quiz-incorrect {
      background-color: #f8d7da;
      border-color: #dc3545;
      color: #721c24;
    }
    .quiz-button {
      display: block;
      width: 100%;
      padding: 16px;
      font-size: 1.1rem;
      font-weight: 600;
      color: #ffffff;
      background-color: #007bff; 
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .quiz-button:hover:not(:disabled) {
      background-color: #0056b3; 
    }
    .quiz-button:disabled {
      background-color: #cdd2d9;
      cursor: not-allowed;
    }
    .quiz-result-message {
      margin-top: 15px;
      padding: 12px;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 500;
      text-align: center;
    }
    .quiz-result-message.correct {
      background-color: #d4edda;
      color: #155724;
    }
    .quiz-result-message.incorrect {
      background-color: #f8d7da;
      color: #721c24;
    }
    .quiz-results-container {
      text-align: center;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }
    .quiz-results-title {
      font-size: 1.8rem;
      color: #333;
    }
    .quiz-results-score {
      font-size: 1.2rem;
      margin: 20px 0;
    }
  `;

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="quiz-container">
        <style>{allStyles}</style> 
        <div className="quiz-results-container">
          <h2 className="quiz-results-title">Результати тесту</h2>
          <p className="quiz-results-score">
            Ви відповіли правильно на <strong>{score}</strong> з <strong>{questions.length}</strong> питань!
          </p>
          <button
            className="quiz-button"
            onClick={() => {
              setCurrentQuestionIndex(0);
              setSelectedAnswers({});
              setShowResults(false);
              setSubmitted(false);
            }}
          >
            Пройти тест знову
          </button>
        </div>
      </div>
    );
  }

  const getOptionClass = (index) => {
    let classes = ['quiz-option'];
    if (index === selectedOption) {
      classes.push('quiz-selected');
    }
    if (submitted) {
      if (index === currentQuestion.correctAnswerIndex) {
        classes.push('quiz-correct');
      } else if (index === selectedOption) {
        classes.push('quiz-incorrect');
      }
    }
    return classes.join(' ');
  };

  const getResultClass = () => {
    return selectedOption === currentQuestion.correctAnswerIndex
      ? "quiz-result-message correct"
      : "quiz-result-message incorrect";
  };

  return (
    <div className="quiz-container">
      <style>{allStyles}</style> 
      <h3 className="quiz-header">
        Перевір себе: Тест ({currentQuestionIndex + 1} / {questions.length})
      </h3>

      <div className="quiz-question-box">
        <p className="quiz-question-text">
          {renderFormulaText(currentQuestion.question)}
        </p>
        
        <div className="quiz-options-grid">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={getOptionClass(index)}
              onClick={() => handleOptionSelect(index)}
            >
              {renderFormulaText(option)}
            </div>
          ))}
        </div>
        
        {submitted && (
          <div className={getResultClass()}>
            {selectedOption === currentQuestion.correctAnswerIndex ? (
              <p>Правильно!</p>
            ) : (
              <p>
                Неправильно. Правильна відповідь: 
                {renderFormulaText(currentQuestion.options[currentQuestion.correctAnswerIndex])}
              </p>
            )}
          </div>
        )}
      </div>

      <button
        className="quiz-button"
        onClick={handleSubmit}
        disabled={selectedOption === undefined}
      >
        {submitted ? (currentQuestionIndex === questions.length - 1 ? "Завершити" : "Наступне питання") : "Відповісти"}
      </button>
    </div>
  );
}

