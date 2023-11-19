import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './views/Home';
import Pokemons from './views/Pokemons';
import Pokemon from './views/Pokemon';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemons />} />
        <Route path="/pokemons/:namePokemon" element={<Pokemon />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;