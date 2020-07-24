export interface ICreateAuthValidator {
  validate(data: ICreateAuthValidator.Input): Promise<void>;
}

export namespace ICreateAuthValidator {
  export type Input = {
    email: string;
    password: string;
  };
}
