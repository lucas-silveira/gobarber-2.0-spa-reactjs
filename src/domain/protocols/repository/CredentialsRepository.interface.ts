export interface ICredentialsRepository {
  get<T>(): T;
  save<T>(data: T): void;
  remove(): void;
}
