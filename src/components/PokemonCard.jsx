import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';
import StarButton from './StarButton';

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const { name, sprites, types, id, isFavorite } = pokemon;
  const typeString = types.map(({ type }) => type.name).join(', ');
  const handleOnClick = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      title={name}
      cover={<img src={sprites.front_default} alt={name} />}
      extra={
        <StarButton isFavorite={isFavorite} onClick={() => handleOnClick()} />
      }>
      <Meta description={typeString} />
    </Card>
  );
};

export default PokemonCard;
