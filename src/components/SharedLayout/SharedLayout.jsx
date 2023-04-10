import { Navigation } from 'components/Navigation/Navigation';

import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
};
