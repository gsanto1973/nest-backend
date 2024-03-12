/* eslint-disable prettier/prettier */
import { User } from '../entities/user.entity';

export interface LoginResponde {
  user: User;
  token: string;
}
