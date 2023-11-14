import { ReactNode } from 'react';

type AstronomicalObjectBaseResponse = {
  page: Page;
  sort: { clauses: string[] };
  astronomicalObjects: AstronomicalObject[];
};

type Page = {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
};

type AstronomicalObject = {
  uid: string;
  name: string;
  astronomicalObjectType: AstronomicalObjectType;
  location: {
    uid: string;
    name: string;
  };
};

type AstronomicalObjectType =
  | 'COMET'
  | 'GALAXY'
  | 'NEBULA'
  | 'PLANET'
  | 'REGION'
  | 'SECTOR'
  | 'STAR_SYSTEM';

export type {
  Page,
  AstronomicalObject,
  AstronomicalObjectBaseResponse,
  AstronomicalObjectType,
};

export type ProviderProps = {
  children: ReactNode;
};
