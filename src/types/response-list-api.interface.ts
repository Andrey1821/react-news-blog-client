import { IPagination } from './pagination/pagination.interface.ts';

export interface IResponseListApi<T> {
  data: T,
  pagination: IPagination
}