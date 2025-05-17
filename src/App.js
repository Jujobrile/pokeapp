import './App.css';
import {Col, Spin} from 'antd';
import { Searcher } from './components/Searcher';
import {PokeList} from './components/PokeList';
import logo from './components/resources/logo.svg';
import { useEffect} from 'react';
import { getPokemons} from '../src/api';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsWithDetails, setLoading } from './Actions';

function App() {

  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async() => {
      dispatch(setLoading(true))
      const pokeRes= await getPokemons();
      dispatch(getPokemonsWithDetails(pokeRes));
      dispatch(setLoading(false))
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
     {loading ? <Spin
        spinning={loading}
        size='large'
      /> : <PokeList
      pokemons={pokemons}
    />}
    </div>
  );
}



export default App;
