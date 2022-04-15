import { useMemo, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import throttle from 'lodash.throttle';

import { FullScreenLoader, Card, Loader } from 'common/components';
import { useGetCardsQuery } from 'redux/api/cards';
import { Card as CardType } from 'common/types';

export const LandingPage = () => {
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [cards, setCards] = useState<CardType[]>([]);
  const { data, isLoading, isFetching } = useGetCardsQuery({ page });

  useEffect(() => {
    if (!isFetching && data && data.page === page) {
      setCards([...cards, ...(data?.data as CardType[])]);
      setIsFetchingMore(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, data]);

  const onScroll = useMemo(
    () =>
      throttle(() => {
        if (
          window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight - 40
        ) {
          setIsFetchingMore(true);
          setPage(page + 1);
        }
      }, 1000),
    [page]
  );

  useEffect(() => {
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  if (isLoading || !data) {
    return <FullScreenLoader open />;
  }

  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ padding: '2rem 2rem 4rem', bgcolor: 'background.default' }}
      >
        {cards.map((pokemon) => (
          <Grid key={pokemon.id} item xs={3}>
            <Card pokemon={pokemon} />
          </Grid>
        ))}
        {isFetchingMore && page > 1 && <Loader />}
      </Grid>
    </>
  );
};
