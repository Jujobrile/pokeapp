import { PokeCard } from "./PokeCard";
import './PokeList.css';

export const PokeList = ({pokemons}) => {
    
    return(
        <div className='poke-list'>
            {pokemons.map((pokemon) => {
                return <PokeCard 
                    name={pokemon.name}
                    key={pokemon.name} 
                    img={pokemon.sprites.front_default}
                    types={pokemon.types.map((type) => type.type.name).join(', ')}
                    />
            })}
        </div>
    );
}

/* console.log(response.data.results[0].name) */