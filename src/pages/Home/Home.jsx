
import Container from '../../components/Container/Container';
import { Heading, Text, Wrapper } from './Home.styled';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate('/catalog');
  };

  return (
    <Wrapper>
      <Container>
        <Heading>Need a car? You're in good hands!</Heading>
        <Text>
          We are a company that specializes in providing car rental services in
          Ukraine. Our goal is to make your trip as convenient and comfortable
          as possible, giving you access to the best cars with favorable rental
          conditions.
        </Text>
        <Button paddingX={99} onClick={onHandleClick}>
          LET'S GO
        </Button>
      </Container>
    </Wrapper>
  );
}
