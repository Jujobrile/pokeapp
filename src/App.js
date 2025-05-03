import './App.css';
import {Col} from 'antd';
import { Searcher } from './components/Searcher';
import {PokeList} from './components/PokeList';
import logo from './components/resources/logo.svg';
import { useEffect} from 'react';
import {connect} from 'react-redux';
import { setPokemons as setPokemonsActions} from './actions/index.js';
import { getPokemons } from '../src/api/index.js';

function App({pokemons, setPokemons}) {

  useEffect(() => {
    const fetchPokemons = async() => {
      const pokeRes= await getPokemons();
      setPokemons(pokeRes);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
