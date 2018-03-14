import * as R from 'ramda';

export const createPhones = () => {
  return [
    {
      id:1,
      first_name:'Max',
      last_name:'max',
      number:'11111111',
      date_of_birth:'25.12.2011'
    },
    {
      id:2,
      first_name:'Alex',
      last_name:'Alex',
      number:'22222222',
      date_of_birth:'12.12.2011'
    }
  ]
};

export const createId= (obj) => {
  const num = R.pipe(
    R.pluck('id'),
    R.reduce(R.max(), 0),
    R.add(1)
  )(obj);
  return num
};