import React from 'react';

const ProgressBar = props => {
  const { total, progress } = props;
  return (
    <div
      style={{
        width: `${progress / total * 100}%`,
        backgroundColor: "grey",
        height: 30,
      }}
    >
    </div>
  );
}

export default ProgressBar;
