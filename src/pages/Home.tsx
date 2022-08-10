import Button from 'components/Button/Button';
import React from 'react';
import './Home.scss';

const Home: React.FunctionComponent = () => {
  return (
    <div className="homePageContainer">
      <h1 className="headline1" data-testid="headline">
        TRIVIA FIGHTERS
      </h1>
      <Button classType="btn--easy" size="xxl" testID="easy">
        Easy
      </Button>
      <Button classType="btn--medium" size="xxl" testID="medium">
        Medium
      </Button>
      <Button classType="btn--seth" size="xxl" testID="seth">
        Seth
      </Button>
    </div>
  );
};

export default Home;
