import Logo from '../Logo/Logo';
import { Header, StyledHeaderContainer } from './AppBar.styled';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';

export default function AppBar() {
  return (
    <Header>
      <Container>
        <StyledHeaderContainer>
          <Logo />
          <Navigation />
        </StyledHeaderContainer>
      </Container>
    </Header>
  );
}