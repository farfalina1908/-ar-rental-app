import { Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">Favorite</Link>
    </nav>
  );
};

export default Navigation;