export interface ICategory {
  id: string;
  type: string;
  name: string;
}

export type CategoryApi = Omit<ICategory, 'id'>;

export interface ICatigoriesApi{
  [id: string]: CategoryApi;
}

export interface ITransaction{
  id: string;
  name: string;
  transactionSum: number;
  type: string;
  category: string;
  date: string;
}

export interface ITransicrionApi{
  trasictionSum: number;
  type: string;
  category: string;
  data: ITransaction[];
}

export interface ITransicrionsApi {
  [id: string]: ITransicrionApi
}
