import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { IUserState } from "./authentication/reducer";
import {IDogState} from "./Home/reducer"

export interface IStandardAction<Payload = undefined, Error = string> {
  type: string;
  payload?: Payload;
  error?: Error;
}

export interface IState {
  user: IUserState;
  dogs:IDogState;
}

export interface ICallback {
  status: boolean;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IState,
  unknown,
  AnyAction
>;
