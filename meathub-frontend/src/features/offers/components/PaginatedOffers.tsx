import { CircularProgress, Grid, TablePagination } from '@mui/material';
import { useGetOffersPaginated } from '../api/useGetOffers';
import { PaginatedOfferItem } from './PaginatedOfferItem';
import { useState } from 'react';

export const PaginatedOffers: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const offersQuery = useGetOffersPaginated({
    pageNumber: page + 1,
    pageSize: rowsPerPage,
  });
  const { data, error, isError, isLoading } = offersQuery;
  if (isLoading) {
    return <CircularProgress></CircularProgress>;
  }
  if (isError) {
    return <pre>{error as string}</pre>;
  }

  return (
    <>
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ mx: 'auto' }}
      />
      <Grid container columns={12} rowSpacing={6}>
        {data.map((offer) => (
          <Grid item sm={4}>
            <PaginatedOfferItem offerData={offer} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
