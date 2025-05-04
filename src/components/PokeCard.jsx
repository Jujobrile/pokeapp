import { StarOutlined } from '@ant-design/icons'
import { Card } from "antd";
import Meta from 'antd/lib/card/Meta'
import './PokeCard.css'

export const PokeCard = ({name, img, types}) => {
  return (
  <Card className='pokeCard' 
    title={name} 
    cover={<img src={img} alt={name}/>}
    extra={<StarOutlined/>}
    >
    <Meta description= {types}/>
  </Card>
  )
};
