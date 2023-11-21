import { ReducersPathEnum } from '../enums/reducers-path.enum.ts';

export interface IRtkQueryConfig {
  readonly reducerPath: ReducersPathEnum;
  tagTypes: string[];
  baseUrl: string;
}