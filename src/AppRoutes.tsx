import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Game from 'pages/Game';

const AppRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default AppRoutes;
