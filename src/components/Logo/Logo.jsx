import { useNavigate } from 'react-router-dom';
import { AiFillCar } from 'react-icons/ai';
import { StyledLogo } from './Logo.styled';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <StyledLogo
      onClick={() => {
        navigate('/');
      }}
    >
      <AiFillCar size={'1.5em'} /> Rental Car Hub
    </StyledLogo>
  );
};

export default Logo;
