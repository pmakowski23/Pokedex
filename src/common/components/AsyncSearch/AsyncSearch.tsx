import uniqby from 'lodash.uniqby';
import debounce from 'lodash.debounce';
import { useEffect, useMemo, useState } from 'react';
import { TextField, Autocomplete, CircularProgress } from '@mui/material/';

import { Card } from 'common/types';
import { useLazySearchCardsQuery } from 'redux/api';
import { useDispatch } from 'react-redux';
import { changePokemon } from 'redux/fightSlice';

interface AsyncSearchProps {
  pokemonNumber: 1 | 2;
}

export const AsyncSearch = ({ pokemonNumber }: AsyncSearchProps) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Card[]>([]);

  const [value, setValue] = useState<Card | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [searchCards, { isLoading }] = useLazySearchCardsQuery();

  const fetch = useMemo(
    () =>
      debounce(
        async (
          request: { input: string },
          callback: (results?: readonly Card[]) => void
        ) => {
          const response = await searchCards({ name: request.input });
          const unique = uniqby(response?.data?.data, (el) =>
            [el.name, el.hp, el.level].join()
          );
          callback(unique || []);
        },
        1000
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    let active = true;

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results?: readonly Card[]) => {
      if (active) {
        let newOptions: readonly Card[] = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, val) => option.name === val.name}
      getOptionLabel={(option) => {
        if (option.hp && option.level) {
          return `${option.name} ${option.hp}HP ${option.level}LVL`;
        } else if (option.hp) {
          return `${option.name} ${option.hp}HP`;
        } else if (option.level) {
          return `${option.name} ${option.level}LVL`;
        } else {
          return option.name;
        }
      }}
      options={options}
      loading={isLoading}
      onChange={(_, newValue: Card | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
        if (newValue) {
          dispatch(changePokemon({ pokemonNumber, pokemon: newValue }));
        }
      }}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose your pokemon"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      )}
    />
  );
};
