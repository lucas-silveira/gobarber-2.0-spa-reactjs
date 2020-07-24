export interface ICreateUserValidator {
  validate(data: ICreateUserValidator.Input): Promise<void>;
}

export namespace ICreateUserValidator {
  export type Input = {
    name: string;
    email: string;
    password: string;
  };
}
