import { IAuth } from '../../../../../domain/entities/Auth.interface';

export interface ICreateAuthController {
  handle(data: ICreateAuthController.Input): Promise<IAuth>;
}

export namespace ICreateAuthController {
  export type Input = {
    email: string;
    password: string;
  };
}
