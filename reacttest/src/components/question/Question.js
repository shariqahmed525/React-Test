import React, {
  useState,
  useEffect,
} from 'react';
import '../../App.css';
import StarRatingComponent from 'react-star-rating-component';

const Question = props => {
  const [selectedAns, setSelectedAns] = useState("");
  const { qNum, totalQ, q, handleNextQuestion, index, handleCheck, checked } = props;

  const checkHandler = (index, ans) => {
    setSelectedAns(ans);
    handleCheck(index, true);
  }

  useEffect(() => {
    console.log(q);
  }, [])

  const rating = q.difficulty === "hard" ? 3 : q.difficulty === "easy" ? 1 : 2;
  const options = [...q.incorrect_answers, q.correct_answer];
  const correctAns = selectedAns === q.correct_answer;
  return (
    <div className="question-container">

      {/* Question No. */}
      <p className="q-title">Question {qNum + 1} of {totalQ}</p>
      <p>{unescape(q.category)}</p>

      {/* Star Rating */}
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={3}
          value={rating}
          editing={false}
        />
      </div>

      <h3>{unescape(q.question)}</h3>

      <div className="options-container">
        {options.map((v, i) => {
          return (
            <button
              key={i}
              disabled={checked && index !== i}
              onClick={() => !checked && checkHandler(i, v)}
              className={checked && index == i ? "selected-option" : "option"}
            >
              {unescape(v)}
            </button>
          )
        })}
      </div>
      {checked && (
        <div className="result-msg-container">
          <h1 className="result-msg">{correctAns ? "Correct!" : "Sorry!"}</h1>
          <button
            onClick={() => handleNextQuestion(correctAns ? 1 : 0)}
            className={"option"}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default Question;
