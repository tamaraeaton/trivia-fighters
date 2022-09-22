import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Game from 'pages/Game';
import Defeat from 'pages/Defeat/Defeat';
import Victory from 'pages/Victory/Victory';

const AppRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/defeat" element={<Defeat />} />
      <Route path="/victory" element={<Victory />} />
    </Routes>
  );
};

export default AppRoutes;
