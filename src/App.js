import './App.css';
import {Col} from 'antd';
import { Searcher } from './components/Searcher';
import {PokeList} from './components/PokeList';
import logo from './components/resources/logo.svg';
import { useEffect} from 'react';
import { setPokemons } from './actions/index.js';
import { getPokemons, getPokemonDetails } from '../src/api/index.js';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async() => {
      const pokeRes= await getPokemons();
      const pokemonDetails = await Promise.all(pokeRes.map(pokemon => getPokemonDetails(pokemon)));
      dispatch(setPokemons(pokemonDetails));
    }
    fetchPokemons(); 
  }, []);

  return (
    <div className="App">
      <Col className='logo' span={4} offset={10}>
        <img src={logo} alt='logo'/>      
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokeList
        pokemons={pokemons}
      />
    </div>
  );
}



export default App;
