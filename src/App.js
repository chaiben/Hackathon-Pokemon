import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import PokemonListPage from "./components/pages/PokemonListPage";
import PokemonDetailsPage from "./components/pages/PokemonDetailsPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PokemonListPage />}></Route>
        <Route path="/:id" element={<PokemonDetailsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
