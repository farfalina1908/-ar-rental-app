import {
    Wrapper,
    ImageWrap,
    Image,
    TitleWrap,
    Title,
    Span,
    Text,
    List,
    Item,
    HeartButton,
  } from './CarItem.styled';
  import { useState } from 'react';
  import Button from '../Button/Button';
  import Modal from '../Modal/Modal';
  import { useDispatch, useSelector } from 'react-redux';
  import { selectFavoriteCars } from '../../redux/cars/carsSelectors';
  import {
    addFavoriteCar,
    removeFavoriteCar,
  } from '../../redux/cars/favoriteSlice';
  import icon from '../../images/sprite.svg';
  import { toastError, toastSuccess } from '../../helpers/toastOptions';
  
  const CarItem = ({ car }) => {
    const [showModal, setShowModal] = useState(false);
    const favoriteCars = useSelector(selectFavoriteCars);
  
    const {
      make,
      photoLink,
      img,
      model,
      year,
      rentalPrice,
      address,
      rentalCompany,
      type,
      mileage,
      accessories,
    } = car;
  
    const toggleModal = () => {
      setShowModal(state => !state);
    };
  
    const dispatch = useDispatch();
  
    const carIsFavorite = favoriteCars.some(
      favoriteCar => favoriteCar.id === car.id
    );
  
    const favoriteIcon = carIsFavorite ? 'heart-active' : 'heart-normal';
  
    const handleToggleFavorite = () => {
      if (carIsFavorite) {
        toastError('You remove from favorites ', `${car.make} ${car.model}`);
        dispatch(removeFavoriteCar(car));
      } else {
        toastSuccess('You add to favorites ', `${car.make} ${car.model}`);
        dispatch(addFavoriteCar(car));
      }
    };
  
    return (
      <Wrapper>
        <ImageWrap>
          <HeartButton type="button" onClick={handleToggleFavorite}>
            <svg width="18" height="18">
              <use href={`${icon}#${favoriteIcon}`}></use>
            </svg>
          </HeartButton>
  
          <Image src={img || photoLink} alt={make} />
        </ImageWrap>
        <TitleWrap>
          <Title>
            {make} {''}
            <Span>{model}</Span>, {year}
          </Title>
          <Text> {rentalPrice}</Text>
        </TitleWrap>
        <List>
          <Item>{address.split(',')[1]}</Item>
          <Item>{address.split(',')[2]}</Item>
          <Item>{rentalCompany}</Item>
          <Item>{type}</Item>
          <Item>{model}</Item>
          <Item>{mileage}</Item>
          <Item>{accessories[0]}</Item>
        </List>
  
        <Button paddingX={99.5} onClick={toggleModal}>
          Learn More
        </Button>
  
        {showModal && <Modal onClose={toggleModal} car={car} />}
      </Wrapper>
    );
  };
  
  export default CarItem;