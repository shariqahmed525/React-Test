import React, {
  // useEffect,
  useState,
} from 'react';
import ProgressBar from './components/progressBar/ProgressBar';
import './App.css';
import Question from './components/question/Question';
import ScoreBar from './components/scoreBar/ScoreBar';
import questions from './constant/questions.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [q] = useState(questions);
  const [qNum, setQNum] = useState(0);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQ] = useState(questions.length);
  const [checked, setChecked] = useState(false);

  const handleNextQuestion = qscore => {
    setIndex(0);
    setChecked(false);
    setScore(score + qscore);
    setQNum((qNum !== totalQ - 1) ? qNum + 1 : qNum);
  }

  const handleCheck = (index, check) => {
    setIndex(index);
    setChecked(check);
  }

  return (
    <div className="container">
      <ProgressBar
        total={totalQ}
        progress={qNum}
      />
      <Question
        q={q[qNum]}
        qNum={qNum}
        index={index}
        totalQ={totalQ}
        checked={checked}
        handleCheck={handleCheck}
        handleNextQuestion={handleNextQuestion}
      />
      <ScoreBar
        qNum={qNum}
        score={score}
        totalQ={totalQ}
        remainigQ={totalQ - qNum}
      />
    </div>
  );
}

export default App;
