import { City } from './City';
import { Gender } from './Gender';
import { UserType } from './UserType';

export interface Patient {
  patientId: number;
  user: UserType ;
  firstName: string;
  lastName: string;
  gender: Gender;
  phone: string;
  address: string;
  city: City;
  dateOfBirth: Date;
}
