export interface ICreateUser {
  execute(user: ICreateUser.Input): Promise<void>;
}

export namespace ICreateUser {
  export type Input = {
    name: string;
    email: string;
    password: string;
  };
}
