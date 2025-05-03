import { StarOutlined } from '@ant-design/icons'
import { Card } from "antd";
import Meta from 'antd/lib/card/Meta'
import './PokeCard.css'

export const PokeCard = ({name, number}) => {
  return (
  <Card className='pokeCard' 
    title={name} 
    cover={<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number+1}.png`} alt="Blastoise" />}
    extra={<StarOutlined/>}
    >

    <Meta
        description= 'Agua'
    />
  </Card>
  )
};
