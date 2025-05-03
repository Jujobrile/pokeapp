export const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  next(action);
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featuredPokemons = [{name: "Lugia", url:'`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png`'}, ...actionInfo.action.payload];
    const updatedAction = {
        ...actionInfo, 
       action:{...actionInfo.action, payload: featuredPokemons }
    };
    next(updatedAction)
}