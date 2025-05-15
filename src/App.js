import './App.css';
import {Col} from 'antd';
import { Searcher } from './components/Searcher';
import {PokeList} from './components/PokeList';
import logo from './components/resources/logo.svg';
import { useEffect} from 'react';
import { getPokemons} from '../src/api';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsWithDetails } from './Actions';

function App() {

  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async() => {
      const pokeRes= await getPokemons();
      dispatch(getPokemonsWithDetails(pokeRes));
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
