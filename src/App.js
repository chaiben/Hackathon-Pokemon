import "./App.css";
import { HashRouter, Route, Routes} from 'react-router-dom';
import PokemonPage from "./components/pages/PokemonPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<PokemonPage />}
        ></Route>
        <Route
          path="/:id"
          element={<div>PokeInfo</div>}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
