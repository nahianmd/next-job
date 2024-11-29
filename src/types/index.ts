import { ReactElement } from 'react';

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

export type GuardProps = {
  children: ReactElement | null;
};
