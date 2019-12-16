import React from 'react';
import { Progress } from 'reactstrap';

const ScoreBar = props => {
  const { score, remainigQ, totalQ, qNum } = props;
  const remainingAllWrong = remainigQ / 2 * 5;
  const remainingAllCorrect = remainigQ / 2 * 2.5;
  return (
    qNum !== 0 && (<div className="score-bar-wrapper">
      <Progress multi>
        <Progress bar color="success" value={score * 12.5} />
        <Progress bar color="warning" value={remainingAllWrong} />
        <Progress bar color="info" value={remainingAllCorrect} />
        <Progress bar color="default" value={totalQ / qNum * 100} />
      </Progress>
    </div>)
  );
}

export default ScoreBar;
