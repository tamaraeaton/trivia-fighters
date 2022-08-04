import Button from 'components/Button/Button';
import React from 'react';

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <h1 className="headline1" data-testid="headline">
        TRIVIA FIGHTERS
      </h1>
      <Button classType="btn--easy" testID="easy">
        Easy
      </Button>
      <Button classType="btn--medium" testID="medium">
        Medium
      </Button>
      <Button classType="btn--seth" testID="seth">
        Seth
      </Button>
    </div>
  );
};

export default Home;
