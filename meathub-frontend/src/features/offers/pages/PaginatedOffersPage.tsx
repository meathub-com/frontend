import { Container } from '@mui/material';
import { PaginatedOffers } from '@/features/offers';

export const PaginatedOffersPage = () => {
  return (
    <Container sx={{ mt: '1rem' }}>
      <PaginatedOffers></PaginatedOffers>
    </Container>
  );
};

export default PaginatedOffersPage;
