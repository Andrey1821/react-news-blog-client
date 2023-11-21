import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postApi } from '../services/posts/PostsService.ts';

type TRootReducer = {
  [postApi.reducerPath]: typeof postApi.reducer
}

const rootReducer = combineReducers<TRootReducer>({
  [postApi.reducerPath]: postApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
  })
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
