import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import Searcher from './components/Search';
import './App.css';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { getPokemon } from './api';
import { getPokemonWithDetails, setLoading } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const pokemons = useSelector((state) => state.data.pokemons);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading && (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      )}
      {!loading && <PokemonList pokemons={pokemons} />}
    </div>
  );
}

export default App;
