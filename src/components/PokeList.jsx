import { PokeCard } from "./PokeCard";
import './PokeList.css';

export const PokeList = ({pokemons}) => {
    
    return(
        <div className='poke-list'>
            {pokemons.map((pokemon) => {
                return <PokeCard 
                    name={pokemon.name}
                    key={pokemon.name} 
                    url = {pokemon.url}
                    number={pokemons.indexOf(pokemon)}
                    />
            })}
        </div>
    );
}

/* console.log(response.data.results[0].name) */