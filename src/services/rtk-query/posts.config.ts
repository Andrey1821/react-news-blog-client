import { IRtkQueryConfig } from './types/rtk-query-config.interface.ts';
import { ApiRoutes } from '../../core/api-routes.ts';
import { ReducersPathEnum } from './enums/reducers-path.enum.ts';

export const postsConfig: IRtkQueryConfig = {
  reducerPath: ReducersPathEnum.PostApi,
  baseUrl: ApiRoutes.postsPath,
  tagTypes: ['Posts']
}