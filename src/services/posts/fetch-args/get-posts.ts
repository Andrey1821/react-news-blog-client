import { FetchArgs } from '@reduxjs/toolkit/query';
import { IPagination } from '../../../types/pagination/pagination.interface.ts';


export const getPostsFetchArgs = (pagination: IPagination): FetchArgs => {
  return {
    url: '',
    params: {
      ...pagination
    }
  }
}