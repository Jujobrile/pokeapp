import { Card } from "antd";
import Meta from 'antd/lib/card/Meta'
import './PokeCard.css'
import { FavoriteButton } from "./FavoriteButton";

const onclick = () => {
  console.log('hola');
}

export const PokeCard = ({name, img, types}) => {
  return (
  <Card className='pokeCard' 
    title={name} 
    cover={<img src={img} alt={name}/>}
    extra={<FavoriteButton
      isFavorite={true}
      onClick={onclick}
    />}
    >
    <Meta description= {types}/>
  </Card>
  )
};
