
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
        <Heading>
          Looking for a vehicle? You’re at the right place. Our company is the
          only rental company I’ve never had an issue with. Seriously… they’ve
          turned me into a lifelong client.
        </Heading>
        <Text>
        HELLO
        </Text>
        <Button paddingX={99} onClick={onHandleClick}>
          LET'S GO
        </Button>
      </Container>
    </Wrapper>
  );
}
