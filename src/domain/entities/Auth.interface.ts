export interface IAuth {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
}
