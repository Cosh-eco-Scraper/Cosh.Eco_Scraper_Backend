import { Location } from './Location';
import { Brand } from './Brand';

export type Store = {
  id: number;
  name: string;
  description?: string;
  retour: string;
  createdAt: Date;
  updatedAt: Date;
  location?: Location;
  brands?: Brand[];
};

export type StoreDto = {
  id: number;
  name: string;
  description?: string;
  retour: string;
  street: string;
  number: string;
  postalCode: string;
  city: string;
  country: string;
  locationId?: number;
};
