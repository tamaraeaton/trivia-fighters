import Button from 'components/Button/Button';
import React from 'react';

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <h1 className="headline1">TRIVIA FIGHTERS</h1>
      <Button classType="btn--easy">Easy</Button>
      <Button classType="btn--medium">Medium</Button>
      <Button classType="btn--seth">Seth</Button>
    </div>
  );
};

export default Home;
