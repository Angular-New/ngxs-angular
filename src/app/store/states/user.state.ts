import { IUser } from '../actions';
import { State } from '@ngxs/store';

export interface IUserState {
  loggedUser: IUser;
}

@State<IUserState>({
  //
})
