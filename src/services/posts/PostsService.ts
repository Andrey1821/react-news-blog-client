import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { postsConfig } from '../rtk-query';
import { IPost } from '../../types/post/post.interface.ts';
import { IPagination } from '../../types/pagination/pagination.interface.ts';
import { getPostsFetchArgs } from './fetch-args/get-posts.ts';
import { IResponseListApi } from '../../types/response-list-api.interface.ts';

const { reducerPath, baseUrl, tagTypes } = postsConfig;

export const postApi = createApi({
  reducerPath,
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes,
  endpoints(build) {
    return {
      getPosts: build.query<IResponseListApi<IPost[]>, IPagination>({
          query: (pagination) => getPostsFetchArgs(pagination),
          providesTags: () => tagTypes
        }
      )
    }
  }
})