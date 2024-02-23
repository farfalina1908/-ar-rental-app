import { useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/cars/carsSelectors';
import CarsList from '../../components/CarsList/CarsList';
import { Container, Info } from './Favorites.styled';

const Favorites = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  const isShowFavoriteList = favoriteCars.length > 0;

  return (
    <section>
      <Container>
        {!isShowFavoriteList && (
          <Info>
            There are no favorite cars yet. Choose your cars in catalog
            please...
          </Info>
        )}

        {isShowFavoriteList && <CarsList cars={favoriteCars} />}
      </Container>
    </section>
  );
};

export default Favorites;