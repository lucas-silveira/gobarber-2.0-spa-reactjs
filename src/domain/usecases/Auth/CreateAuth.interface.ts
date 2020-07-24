import { IAuth } from '../../entities/Auth.interface';

export interface ICreateAuth {
  execute(user: ICreateAuth.Input): Promise<IAuth>;
}

export namespace ICreateAuth {
  export type Input = {
    email: string;
    password: string;
  };
}
